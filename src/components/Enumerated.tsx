import type { ReactNode } from 'react';
import { Highlight, HighlightAr } from './Highlight';

/**
 * Detects inline enumerations like "(1) … (2) … (3) …" or "Step 1, … Step 2, …" or "First, … Secondly, …"
 * and unfolds them into a visible numbered list:
 *
 *   lead sentence
 *   ① first item
 *   ② second item
 *   ③ third item
 *
 * Any sentence that has no such markers is rendered unchanged.
 */

type Parsed = { lead: string; items: string[]; tail: string } | null;

const PATTERNS: RegExp[] = [
  /\((\d{1,2})\)\s*(?=\S)/g,           // (1) (2) (3) followed by content
  /(?:^|\s)(\d{1,2})[.)]\s+(?=[A-Za-z\u0600-\u06FF])/g, // 1. or 1) at a word start
  /\bStep\s+(\d{1,2})\s*[,:]\s*/gi,    // Step 1, …
  /(?:^|\s)(?:الخطوة|خطوة)\s+(\d{1,2})\s*[:،]\s*/g, // الخطوة 1:
];

const ORDINALS_EN = ['first', 'second', 'secondly', 'third', 'thirdly', 'fourth', 'fifth', 'sixth'];
const ORDINAL_RE = new RegExp(String.raw`(?:^|[.;:]\s*)(${ORDINALS_EN.join('|')})\s*,\s*`, 'gi');
const ORDINAL_INDEX: Record<string, number> = { first: 1, second: 2, secondly: 2, third: 3, thirdly: 3, fourth: 4, fifth: 5, sixth: 6 };
const AR_ORDINAL_RE = /(?:^|[.؛:]\s*)(أولاً|ثانياً|ثالثاً|رابعاً|خامساً|سادساً)\s*[،,:]?\s*/g;
const AR_ORDINAL_INDEX: Record<string, number> = { 'أولاً': 1, 'ثانياً': 2, 'ثالثاً': 3, 'رابعاً': 4, 'خامساً': 5, 'سادساً': 6 };

function splitBy(text: string, re: RegExp, indexOf: (m: RegExpMatchArray) => number): Parsed {
  const matches = Array.from(text.matchAll(re));
  if (matches.length < 2) return null;
  // Items must be numbered 1, 2, 3 … in order to count as one list.
  const numbers = matches.map(indexOf);
  for (let i = 0; i < numbers.length; i += 1) if (numbers[i] !== i + 1) return null;

  const first = matches[0].index ?? 0;
  const lead = text.slice(0, first).trim();
  const items: string[] = [];
  for (let i = 0; i < matches.length; i += 1) {
    const start = (matches[i].index ?? 0) + matches[i][0].length;
    const end = i + 1 < matches.length ? (matches[i + 1].index ?? text.length) : text.length;
    items.push(text.slice(start, end).trim().replace(/^(?:and|و|أو)\s+/i, '').replace(/[،,;]\s*$/, ''));
  }
  return { lead, items, tail: '' };
}

export function parseEnumeration(text: string): Parsed {
  for (const re of PATTERNS) {
    const parsed = splitBy(text, new RegExp(re.source, re.flags), (m) => Number(m[1]));
    if (parsed) return parsed;
  }
  const byOrdinal = splitBy(text, new RegExp(ORDINAL_RE.source, ORDINAL_RE.flags), (m) => ORDINAL_INDEX[m[1].toLowerCase()] ?? 0);
  if (byOrdinal) return byOrdinal;
  const byArOrdinal = splitBy(text, new RegExp(AR_ORDINAL_RE.source, AR_ORDINAL_RE.flags), (m) => AR_ORDINAL_INDEX[m[1]] ?? 0);
  if (byArOrdinal) return byArOrdinal;
  return null;
}

/** Final punctuation that should stay glued to the lead line, e.g. "categories:" */
function tidyLead(lead: string) {
  return lead.replace(/\s*[:：]\s*$/, ':');
}

/**
 * Decision branches written as "condition → OUTCOME. other condition → OUTCOME"
 * (the START algorithm steps) become one line per branch with the arrow kept visible.
 */
function parseBranches(text: string): { lead: string; branches: string[] } | null {
  const arrow = /[→←]/;
  if (!arrow.test(text)) return null;

  // "Question — branch. branch." : everything before the first long dash is the lead.
  const dash = text.search(/\s[—–-]\s/);
  const lead = dash > -1 ? text.slice(0, dash).trim() : '';
  const body = dash > -1 ? text.slice(dash).replace(/^\s[—–-]\s/, '').trim() : text;

  // One branch per sentence; a sentence with no arrow is glued to the branch before it.
  const sentences = body.split(/(?<=[.!؟])\s+/).map((p) => p.trim()).filter(Boolean);
  const branches: string[] = [];
  for (const sentence of sentences) {
    if (arrow.test(sentence) || branches.length === 0) branches.push(sentence);
    else branches[branches.length - 1] += ` ${sentence}`;
  }
  if (branches.length < 2) return null;
  return { lead, branches };
}

export function Enumerated({ text, arabic = false }: { text: string; arabic?: boolean }): ReactNode {
  const parsed = parseEnumeration(text);
  const Paint = arabic ? HighlightAr : Highlight;

  if (!parsed) {
    const branched = parseBranches(text);
    if (!branched) return <Paint text={text} />;
    return (
      <span className="enum enum-branches">
        {branched.lead && <span className="enum-lead"><Paint text={branched.lead} /></span>}
        <ul className="enum-list">
          {branched.branches.map((branch, index) => (
            <li key={index}>
              <span className="enum-arrow" aria-hidden="true">↳</span>
              <span className="enum-text"><Paint text={branch} /></span>
            </li>
          ))}
        </ul>
      </span>
    );
  }

  return (
    <span className="enum">
      {parsed.lead && <span className="enum-lead"><Paint text={tidyLead(parsed.lead)} /></span>}
      <ol className="enum-list">
        {parsed.items.map((item, index) => (
          <li key={index}>
            <span className="enum-num" aria-hidden="true">{index + 1}</span>
            <span className="enum-text"><Paint text={item} /></span>
          </li>
        ))}
      </ol>
    </span>
  );
}
