import { forwardRef, useState } from 'react';
import { lectures, type Entry, type Figure, type Lecture, type Note, type Section } from '../data';
import { Highlight, HighlightAr } from './Highlight';
import { Enumerated } from './Enumerated';

export const PAPER_WIDTH = 794;
export const PAPER_HEIGHT = 1123;

export type FlatBlock =
  | { id: string; kind: 'chapter'; lecture: Lecture }
  | { id: string; kind: 'section'; lecture: Lecture; section: Section }
  | { id: string; kind: 'entry'; lecture: Lecture; section: Section; entry: Entry; label?: string; sub?: 'step-main' | 'step-tail' };

/** fit: block id → reduced image height (px) for a figure shrunk to fill the end of a page. */
export type BookPage = { lecture: Lecture; blocks: FlatBlock[]; fit: Record<string, number> };

/**
 * flow = distance from this block's top to the next block's top (includes the gap between them)
 * box  = the block's own border-box height (what must fit when it is the last block on a page)
 * img  = rendered image height, for figures only
 */
export type BlockMetric = { flow: number; box: number; img?: number };

export function makeBlocks(): FlatBlock[] {
  const result: FlatBlock[] = [];
  lectures.forEach((lecture) => {
    result.push({ id: `chapter-${lecture.number}`, kind: 'chapter', lecture });
    lecture.sections.forEach((section) => {
      result.push({ id: `section-${lecture.number}-${section.number}`, kind: 'section', lecture, section });
      // Number the main points (1, 2, 3) and their sub-points (a, b, c). Plain leads take no number.
      let main = 0;
      let sub = 0;
      section.entries.forEach((entry, index) => {
        let label: string | undefined;
        if (entry.kind === 'note' && !entry.note.plain) {
          if (entry.note.nested) { label = String.fromCharCode(97 + sub); sub += 1; }
          else { main += 1; sub = 0; label = String(main); }
        }
        // A procedure step is split into two independently placeable parts so a
        // long step never leaves half a page blank: head+action | items+rationale+consequence.
        if (entry.kind === 'step') {
          const base = `entry-${lecture.number}-${section.number}-${index}`;
          result.push({ id: `${base}-main`, kind: 'entry', lecture, section, entry, label, sub: 'step-main' });
          result.push({ id: `${base}-tail`, kind: 'entry', lecture, section, entry, label, sub: 'step-tail' });
          return;
        }
        result.push({ id: `entry-${lecture.number}-${section.number}-${index}`, kind: 'entry', lecture, section, entry, label });
      });
    });
  });
  return result;
}

const isHeading = (block?: FlatBlock) =>
  !!block && (block.kind === 'section' || (block.kind === 'entry' && block.entry.kind === 'subheading'));
const isFigure = (block?: FlatBlock) => !!block && block.kind === 'entry' && block.entry.kind === 'figures';

/** A figure may be shrunk down to this share of its size to fill the end of a page. */
const SHRINK_MIN = 0.6;
/** Leftover space smaller than this is not worth filling with text from behind a floated figure. */
const MIN_GAP_TO_FILL = 70;

type FigurePlan = 'fit' | 'shrink' | 'defer' | 'break';

/**
 * Distributes whole blocks over A4 pages, filling every page as far as it can go:
 *  - headings (and runs of headings) stay with the first block beneath them
 *  - a figure that does not fit is, in order of preference:
 *      shrunk slightly to fill the gap → floated to the next page while the text after it fills this one → moved
 *  - `breaks` holds block ids that must start a new page (fed back by the rendered-overflow check)
 */
export function paginate(blocks: FlatBlock[], metrics: Map<string, BlockMetric>, limit: number, breaks: Set<string> = new Set()): BookPage[] {
  const pages: BookPage[] = [];
  let page: BookPage | null = null;
  let used = 0;
  let deferred: FlatBlock[] = [];
  const m = (block?: FlatBlock): BlockMetric => (block ? metrics.get(block.id) ?? { flow: 0, box: 0 } : { flow: 0, box: 0 });

  /** First non-figure block after `index` that belongs to the same section, if any. */
  const textAfter = (index: number): FlatBlock | undefined => {
    const current = blocks[index];
    for (let j = index + 1; j < blocks.length; j += 1) {
      const candidate = blocks[j];
      if (candidate.kind !== 'entry' || current.kind !== 'entry' || candidate.section !== current.section) return undefined;
      if (!isFigure(candidate)) return candidate;
    }
    return undefined;
  };

  const planFigure = (index: number, gap: number): FigurePlan => {
    const { box, img } = m(blocks[index]);
    if (box <= gap) return 'fit';
    if (img && gap >= box * SHRINK_MIN) return 'shrink';
    const text = textAfter(index);
    if (text && gap >= MIN_GAP_TO_FILL && m(text).box <= gap) return 'defer';
    return 'break';
  };

  /** Can the run of headings starting at `index` be placed with something readable beneath it? */
  const headingFits = (index: number, gap: number): boolean => {
    let j = index;
    let left = gap;
    while (isHeading(blocks[j])) {
      left -= m(blocks[j]).flow;
      j += 1;
    }
    const next = blocks[j];
    if (!next || next.kind === 'chapter') return left >= 0;
    if (isFigure(next)) return left > 0 && planFigure(j, left) !== 'break';
    return m(next).box <= left;
  };

  const openPage = (lecture: Lecture) => {
    const fresh: BookPage = { lecture, blocks: [], fit: {} };
    pages.push(fresh);
    page = fresh;
    used = 0;
    for (const figureBlock of deferred) {
      fresh.blocks.push(figureBlock);
      used += m(figureBlock).flow;
    }
    deferred = [];
  };

  blocks.forEach((block, index) => {
    const { flow, box, img } = m(block);
    const startsSection = block.kind === 'section' || block.kind === 'chapter';

    if (!page || block.kind === 'chapter' || breaks.has(block.id)) {
      openPage(block.lecture);
    } else if (deferred.length && startsSection) {
      // A floated figure must not drift into the next section.
      openPage(block.lecture);
    } else {
      const current = page as BookPage;
      const gap = limit - used;
      if (current.blocks.length > 0) {
        if (isHeading(block)) {
          if (!headingFits(index, gap)) openPage(block.lecture);
        } else if (isFigure(block)) {
          const plan = planFigure(index, gap);
          if (plan === 'shrink' && img) {
            current.fit[block.id] = Math.floor(img - (box - gap));
            current.blocks.push(block);
            used = limit;
            return;
          }
          if (plan === 'defer') { deferred.push(block); return; }
          if (plan === 'break') openPage(block.lecture);
        } else if (box > gap) {
          openPage(block.lecture);
        }
      }
    }

    (page as unknown as BookPage).blocks.push(block);
    used += flow;
  });

  if (deferred.length) openPage(deferred[0].lecture);
  return pages;
}

// Short, self-explanatory points only need the translation; longer ideas keep the explanation.
/**
 * Shows the explanation only when it actually adds something.
 * The translation is usually a faithful paraphrase of the English, so two Arabic lines
 * of nearly the same words just repeat each other — the explanation earns its row
 * only when it says noticeably more than the translation does.
 */
function needsExplanation(note: Note) {
  if (!note.eg) return false;
  if (note.forceEg) return true;
  if (note.ar && similarity(note.ar, note.eg) > 0.55) return false;
  return note.en.length >= 85;
}

/** Word-overlap ratio between two Arabic strings, ignoring the most common function words. */
function similarity(a: string, b: string) {
  const STOP = new Set(['من', 'في', 'على', 'عن', 'إلى', 'الى', 'ال', 'و', 'أو', 'او', 'هذا', 'هذه', 'ذلك', 'التي', 'الذي', 'عشان', 'زي', 'إن', 'ان', 'ما', 'لا', 'هو', 'هي', 'بيقول', 'يعني', 'أي', 'اي']);
  const words = (text: string) =>
    text.split(/[\s،,:.()\-\u060C]+/).map((w) => w.trim()).filter((w) => w.length > 2 && !STOP.has(w));
  const left = words(a);
  const right = new Set(words(b));
  if (!left.length || !right.size) return 0;
  const shared = left.filter((word) => right.has(word)).length;
  return shared / left.length;
}

function NoteView({ note, compact = false, label, variant = 'full' }: { note: Note; compact?: boolean; label?: string; variant?: 'full' | 'explain' | 'all' }) {
  const showEg = variant === 'full' ? needsExplanation(note) : !!note.eg;
  const showAr = variant !== 'explain' && !!note.ar;
  return (
    <div className={`trilingual-note${note.nested ? ' nested-note' : ''}${compact ? ' compact-note' : ''}${note.plain ? ' plain-note' : ''}`}>
      <div className="english-line" dir="ltr" lang="en">
        {label && <span className="note-num" aria-hidden="true">{label}</span>}
        <p><Enumerated text={note.en} /></p>
      </div>
      {(showAr || showEg) && (
        <div className="note-ar-group">
          {showAr && (
            <div className="arabic-line" dir="rtl" lang="ar">
              <span className="language-label">الترجمة</span>
              <p><Enumerated text={note.ar} arabic /></p>
            </div>
          )}
          {showEg && (
            <div className="egyptian-line" dir="rtl" lang="ar-EG">
              <span className="language-label">الشرح</span>
              <p><Enumerated text={note.eg} arabic /></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function fileNameOf(src: string) {
  return src.split('/').pop() ?? src;
}

const SLOT_STORE = 'tamridiano:figures';

function readStoredFigure(file: string): string | null {
  try {
    return JSON.parse(localStorage.getItem(SLOT_STORE) ?? '{}')[file] ?? null;
  } catch {
    return null;
  }
}

function storeFigure(file: string, url: string) {
  try {
    const all = JSON.parse(localStorage.getItem(SLOT_STORE) ?? '{}');
    if (url) all[file] = url; else delete all[file];
    localStorage.setItem(SLOT_STORE, JSON.stringify(all));
  } catch {
    /* storage blocked: the pasted link still shows for this session */
  }
}

function BookFigure({ item, fit }: { item: Figure; fit?: number }) {
  const file = fileNameOf(item.src);
  const [failed, setFailed] = useState(false);
  const [linked, setLinked] = useState<string | null>(() => readStoredFigure(file));
  const [draft, setDraft] = useState('');
  const [open, setOpen] = useState(false);
  /** Real proportions of the loaded file; the frame follows the picture, not a fixed box. */
  const [ratio, setRatio] = useState<number | undefined>(item.ratio);

  const apply = () => {
    const url = draft.trim();
    if (!url) return;
    setRatio(undefined);
    setFailed(false);
    setOpen(false);
    setLinked(url);
    storeFigure(file, url);
  };

  const clear = () => {
    setLinked(null);
    setRatio(item.ratio);
    setFailed(false);
    setOpen(false);
    setDraft('');
    storeFigure(file, '');
  };

  const src = linked ?? item.src;

  const urlField = (
    <div className="slot-url" dir="rtl">
      <input
        type="url"
        dir="ltr"
        value={draft}
        placeholder="https://..."
        aria-label={`رابط صورة ${item.ar}`}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); apply(); } }}
      />
      <button type="button" onClick={apply}>تطبيق</button>
      {linked && <button type="button" className="slot-reset" onClick={clear}>الأصلية</button>}
    </div>
  );

  /**
   * A figure with no working image is a *tool*, not part of the booklet.
   * It stays available on screen for editing, but is removed entirely from the printed / saved PDF
   * so no empty placeholder box ever appears in the file.
   */
  if (failed) {
    return (
      <figure className="book-figure figure-slot" aria-label={`صورة غير متوفرة: ${item.ar}`}>
        <div className="slot-frame">
          <span className="slot-badge" dir="rtl">{linked ? 'الرابط لا يعمل — جرّب رابطاً آخر' : 'ضع رابط الصورة'}</span>
          {item.need && <span className="slot-need" dir="rtl">{item.need}</span>}
          {urlField}
        </div>
      </figure>
    );
  }

  return (
    <figure className={`book-figure figure-auto${item.tall ? ' figure-wide' : ''}`}>
      <img
        src={src}
        alt={`${item.en} - ${item.ar}`}
        loading="eager"
        decoding="sync"
        referrerPolicy="no-referrer"
        /* A shrunk figure gets an explicit height; otherwise the box takes the picture's own proportions. */
        style={fit ? { height: fit } : ratio ? { aspectRatio: String(ratio) } : undefined}
        onLoad={(event) => {
          const image = event.currentTarget;
          if (!image.naturalWidth || !image.naturalHeight) return;
          const real = image.naturalWidth / image.naturalHeight;
          if (!ratio || Math.abs(ratio - real) > 0.01) setRatio(real);
        }}
        onError={() => setFailed(true)}
      />
      {/* Screen-only: swap this figure for any image URL. Hidden when printing. */}
      <div className="figure-tools">
        {open ? urlField : (
          <button type="button" className="figure-link-btn" onClick={() => { setDraft(linked ?? ''); setOpen(true); }}>
            {linked ? 'تغيير رابط الصورة' : 'وضع رابط صورة'}
          </button>
        )}
      </div>
      <figcaption><strong>{item.en}</strong><span dir="rtl">{item.ar}</span></figcaption>
    </figure>
  );
}

function EntryView({ entry, label, fit, sub }: { entry: Entry; label?: string; fit?: number; sub?: 'step-main' | 'step-tail' }) {
  switch (entry.kind) {
    case 'note':
      return <NoteView note={entry.note} label={label} />;
    case 'subheading':
      return (
        <div className="subheading-block">
          <h4 dir="ltr">{entry.en}</h4>
          <span dir="rtl">{entry.ar}</span>
        </div>
      );
    case 'seq':
      return (
        <div className="seq-item">
          <span className="seq-num" aria-hidden="true">{entry.number}</span>
          <div className="seq-body">
            <p className="seq-en" dir="ltr" lang="en"><Enumerated text={entry.note.en} /></p>
            {!!entry.note.ar && <p className="seq-ar" dir="rtl" lang="ar"><Enumerated text={entry.note.ar} arabic /></p>}
            {!!entry.note.eg && <p className="seq-eg" dir="rtl" lang="ar-EG"><span className="seq-eg-tag">الشرح</span><Enumerated text={entry.note.eg} arabic /></p>}
          </div>
        </div>
      );
    case 'step': {
      const isCaution = entry.tone === 'danger';
      // Split rendering: 'step-main' = header + action, 'step-tail' = items + rationale + consequence.
      // Pagination places the two halves independently so a long step never leaves half a page empty.
      if (sub === 'step-main') {
        return (
          <div className={`procedure-step step-split step-split-main tone-${entry.tone ?? 'default'}`}>
            <div className="step-head">
              <span className="step-badge">{entry.number}</span>
              <span className="step-head-en">{isCaution ? 'CRITICAL STEP' : `STEP ${String(entry.number).padStart(2, '0')}`}</span>
              <span className="step-head-ar ar" dir="rtl">{isCaution ? 'خطوة حاسمة' : 'خطوة إجرائية'}</span>
            </div>
            <div className="step-content">
              <div className="step-action-row">
                <span className="section-dot action-dot" />
                <div className="action-text">
                  <p className="en-text" dir="ltr" lang="en"><Highlight text={entry.action.en} /></p>
                  <p className="ar-text" dir="rtl" lang="ar"><HighlightAr text={entry.action.ar} /></p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      if (sub === 'step-tail') {
        return (
          <div className={`procedure-step step-split step-split-tail tone-${entry.tone ?? 'default'}`}>
            <div className="step-continued" dir="rtl"><span>تابع خطوة {entry.number}</span></div>
            <div className="step-content">
              {entry.items && (
                <ul className="step-items">
                  {entry.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="step-check" />
                      <div className="item-text">
                        <span className="item-en" dir="ltr" lang="en"><Highlight text={item.en} /></span>
                        <span className="item-ar" dir="rtl" lang="ar">{item.ar}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="step-rationale-row">
                <div className="rationale-card">
                  <div className="rationale-label">
                    <span className="section-dot rationale-dot" />
                    <span>RATIONALE / <span className="ar" dir="rtl">السبب العلمي</span></span>
                  </div>
                  <div className="rationale-text">
                    <p className="en-text" dir="ltr" lang="en"><Highlight text={entry.rationale.en} /></p>
                    <p className="ar-text" dir="rtl" lang="ar-EG"><HighlightAr text={entry.rationale.eg} /></p>
                  </div>
                </div>
              </div>
              {isCaution && entry.action.eg && (
                <div className="step-consequence-row">
                  <div className="consequence-card">
                    <span className="consequence-badge">لو غلطت هنا</span>
                    <p className="ar-text" dir="rtl" lang="ar-EG"><HighlightAr text={entry.action.eg} /></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
      return (
        <div className={`procedure-step tone-${entry.tone ?? 'default'}`}>
          {/* Thin, elegant step bar */}
          <div className="step-head">
            <span className="step-badge">{entry.number}</span>
            <span className="step-head-en">{isCaution ? 'CRITICAL STEP' : `STEP ${String(entry.number).padStart(2, '0')}`}</span>
            <span className="step-head-ar ar" dir="rtl">{isCaution ? 'خطوة حاسمة' : 'خطوة إجرائية'}</span>
          </div>

          <div className="step-content">
            {/* The Action (What to do + Translation) */}
            <div className="step-action-row">
              <span className="section-dot action-dot" />
              <div className="action-text">
                <p className="en-text" dir="ltr" lang="en"><Highlight text={entry.action.en} /></p>
                <p className="ar-text" dir="rtl" lang="ar"><HighlightAr text={entry.action.ar} /></p>
              </div>
            </div>

            {/* Checklist items if any */}
            {entry.items && (
              <ul className="step-items">
                {entry.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="step-check" />
                    <div className="item-text">
                      <span className="item-en" dir="ltr" lang="en"><Highlight text={item.en} /></span>
                      <span className="item-ar" dir="rtl" lang="ar">{item.ar}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* The Rationale (Why to do it — English & Explanation only, as requested) */}
            <div className="step-rationale-row">
              <div className="rationale-card">
                <div className="rationale-label">
                  <span className="section-dot rationale-dot" />
                  <span>RATIONALE / <span className="ar" dir="rtl">السبب العلمي</span></span>
                </div>
                <div className="rationale-text">
                  <p className="en-text" dir="ltr" lang="en"><Highlight text={entry.rationale.en} /></p>
                  <p className="ar-text" dir="rtl" lang="ar-EG"><HighlightAr text={entry.rationale.eg} /></p>
                </div>
              </div>
            </div>

            {/* Consequence if wrong */}
            {isCaution && entry.action.eg && (
              <div className="step-consequence-row">
                <div className="consequence-card">
                  <span className="consequence-badge">لو غلطت هنا</span>
                  <p className="ar-text" dir="rtl" lang="ar-EG"><HighlightAr text={entry.action.eg} /></p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    case 'kvTable':
      return (
        <div className="kv-wrap">
          <div className="kv-caption"><span>{entry.captionEn}</span><span className="ar" dir="rtl">{entry.captionAr}</span></div>
          <table className="kv-table">
            <tbody>
              {entry.rows.map((row) => (
                <tr key={row.labelEn}>
                  <td className="kv-label"><strong>{row.labelEn}</strong><span dir="rtl">{row.labelAr}</span></td>
                  <td className="kv-value" dir="ltr"><b>{row.value}</b>{row.note && <small dir="rtl">{row.note}</small>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'dataTable':
      return (
        <div className="table-wrap data-wrap">
          <div className="kv-caption"><span>{entry.captionEn}</span><span className="ar" dir="rtl">{entry.captionAr}</span></div>
          <table className="data-table">
            <thead>
              <tr>{entry.columns.map((column) => <th key={column.en}>{column.en}<span dir="rtl">{column.ar}</span></th>)}</tr>
            </thead>
            <tbody>
              {entry.rows.map((row, index) => (
                <tr key={index} className={row.tone ? `tone-${row.tone}` : ''}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className={cellIndex === 0 ? 'first-cell' : ''}>{cellIndex === 0 ? cell : <Highlight text={cell} />}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'chips':
      return (
        <div className="chip-grid">
          {entry.items.map((item) => (
            <div className="chip" key={item.en}><strong><Highlight text={item.en} /></strong><span dir="rtl">{item.ar}</span></div>
          ))}
        </div>
      );
    case 'termCard':
      return (
        <div className={`term-card tone-${entry.tone ?? 'default'}`}>
          <div className="term-head">
            <strong dir="ltr">{entry.termEn}</strong>
            {entry.termAr && <span className="ar" dir="rtl">{entry.termAr}</span>}
          </div>
          <div className="term-body">
            <NoteView note={{ ...entry.def, refs: undefined }} compact variant={entry.def.ar ? 'all' : 'explain'} />
          </div>
        </div>
      );
    case 'figures':
      return (
        <div className={`figure-row ${entry.figures.length === 1 ? 'single-figure' : ''}${entry.figures.some((item) => item.tall) ? ' figure-tall' : ''}`}>
          {entry.figures.map((item) => <BookFigure item={item} fit={item.tall ? fit : undefined} key={`${item.src}-${item.en}`} />)}
        </div>
      );
  }
}

export function BlockView({ block, fit }: { block: FlatBlock; fit?: number }) {
  if (block.kind === 'chapter') {
    return (
      <div className="content-block chapter-block" data-block-id={block.id}>
        <span className="chapter-watermark" aria-hidden="true">{String(block.lecture.number).padStart(2, '0')}</span>
        <span className="chapter-kicker">LECTURE {String(block.lecture.number).padStart(2, '0')} / <span className="ar" dir="rtl">المحاضرة {block.lecture.number}</span></span>
        <h2 dir="ltr">{block.lecture.en}</h2>
        <p dir="rtl">{block.lecture.ar}</p>
        <div className="chapter-meta" dir="rtl">
          <span>{block.lecture.sections.length} أقسام</span>
          <i />
          <span>{block.lecture.sections.reduce((sum, sec) => sum + sec.entries.length, 0)} نقطة مذاكرة</span>
        </div>
      </div>
    );
  }

  if (block.kind === 'section') {
    return (
      <div className="content-block section-block" data-block-id={block.id}>
        <span className="section-number">{String(block.section.number).padStart(2, '0')}</span>
        <div className="section-titles">
          <h3 dir="ltr">{block.section.en}</h3>
          <p dir="rtl">{block.section.ar}</p>
        </div>
      </div>
    );
  }

  return <div className={`content-block entry-block entry-${block.entry.kind}${block.sub ? ` ${block.sub}` : ''}`} data-block-id={block.id}><EntryView entry={block.entry} label={block.label} fit={fit} sub={block.sub} /></div>;
}

export function CoverPage() {
  return (
    <article className="paper cover-paper" id="page-1" data-page-number="1" aria-label="غلاف الملزمة" dir="ltr">
      <div className="cover-top"><span>NURSING EDUCATION SERIES</span><span className="cover-edition">STUDY EDITION / 05</span></div>
      <div className="cover-rule" />
      <div className="cover-main">
        <div className="cover-o2" aria-hidden="true">PATH</div>
        <p className="cover-small">A STUDY COMPANION BY</p>
        <div className="cover-brand" dir="rtl">تمريضيانو<span>.</span></div>
        <div className="cover-divider" />
        <h1>PATHOLOGY<br /><em>&amp; CELL RESPONSE</em></h1>
        <p className="cover-arabic" dir="rtl">محاضرة ١ باثولوجي — مقدمة علم الأمراض والاستجابة الخلوية للإصابة</p>
        <p className="cover-description" dir="rtl">الإنجليزي للامتحان، والترجمة للفهم، والشرح المبسط عشان المعلومة تثبت.</p>
        <div className="cover-key" dir="rtl">
          <div><b>English</b><span>للامتحان</span></div>
          <div><b>الترجمة</b><span>للفهم</span></div>
          <div><b>الشرح</b><span>للتثبيت</span></div>
        </div>
        <div className="colour-key" dir="rtl" aria-label="مفتاح الألوان">
          <div><i className="k-key" />مصطلح أساسي</div>
          <div><i className="k-number" />رقم أو وقت للحفظ</div>
          <div><i className="k-level" />تكيف أو آفة مرضية</div>
          <div><i className="k-danger" />تحذير / خطورة</div>
          <div><i className="k-good" />نتيجة صحيحة</div>
          <div><i className="k-acronym" />اختصار</div>
        </div>
      </div>
      <div className="cover-bottom">
        <div className="cover-bottom-heading"><span>CONTENTS</span><span dir="rtl">محتويات الملزمة</span></div>
        {lectures.map((lecture) => (
          <div className="cover-list-row" key={lecture.number}>
            <span className="cover-list-number">0{lecture.number}</span><span>{lecture.en}</span><span dir="rtl">{lecture.ar}</span>
          </div>
        ))}
      </div>
      <div className="cover-footer"><span>ENGLISH / الترجمة / الشرح</span><span>تمريضيانو</span></div>
    </article>
  );
}

/**
 * Invisible copy of a reading page used only for measuring. It uses the very same markup and classes
 * (and lives in the same part of the document) as the real pages, so every CSS rule that touches a block
 * on a real page touches it here too — measured heights match rendered heights.
 */
export const MeasurePage = forwardRef<HTMLDivElement, { blocks: FlatBlock[] }>(function MeasurePage({ blocks }, ref) {
  return (
    <div className="measure-layer" aria-hidden="true">
      <article className="paper reading-paper measure-paper" dir="ltr">
        <div className="page-body measure-body" ref={ref}>
          {blocks.map((block) => <BlockView key={block.id} block={block} />)}
        </div>
      </article>
    </div>
  );
});

export function ReadingPage({ page, number }: { page: BookPage; number: number }) {
  return (
    <article className="paper reading-paper" id={`page-${number}`} data-page-number={number} aria-label={`صفحة ${number}`} dir="ltr">
      <header className="page-header"><span className="header-series">NURSING EDUCATION SERIES</span><span className="header-chapter">CHAPTER {String(page.lecture.number).padStart(2, '0')} <i /> {page.lecture.en.toUpperCase()}</span></header>
      <div className="page-body">{page.blocks.map((block) => <BlockView key={block.id} block={block} fit={page.fit[block.id]} />)}</div>
      <footer className="page-footer"><span className="footer-brand" dir="rtl">تمريضيانو</span><span className="footer-caption">DEGENERATION &amp; CALCIFICATION / STUDY NOTES</span><span className="footer-number">{String(number).padStart(2, '0')}</span></footer>
    </article>
  );
}
