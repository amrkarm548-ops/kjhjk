import { Fragment, type ReactNode } from 'react';

/**
 * Semantic highlighting for study text in Pathology:
 *   level   → Cellular adaptations & lesions (Hypertrophy, Hyperplasia, Atrophy, Metaplasia, Dysplasia, Biopsy, Autopsy, Necrosis, Apoptosis …)
 *   number  → Quantities, times and percentages (10% Formalin, 15–20 minutes, 3–5 min, 100%, 4–5 µm, Day 1 …)
 *   key     → Core pathology concepts & mechanisms (Pathology, Etiology, Pathogenesis, Lesion, Prognosis, Cytosol, Calcium, Phospholipases …)
 *   acronym → Abbreviations (H&E, FNAC, D&C, TUR, CEA, CK, AFP, PSA, PCR, CML, DNA, ROS, ATP, ATPase, RBCs …)
 *   danger  → Premalignant & lethal warnings (Carcinogen, Premalignant, Cancer, Carcinoma, Ischemia, Hypoxia, Irreversible, Malignant …)
 *   good    → Favorable outcomes & physiology (Reversible, Homeostasis, Viability, Physiological, Benign, Regression …)
 */

type Rule = { cls: string; re: RegExp };

const LEVEL_WORDS = [
  'pathology', 'pathogenesis', 'lesion', 'etiology', 'prognosis', 'fate',
  'biopsy', 'diagnostic cytology', 'cytopathology', 'histopathology', 'autopsy',
  'excisional biopsy', 'incisional biopsy', 'punch biopsy', 'tru-cut', 'frozen section', 'paraffin section',
  'atrophy', 'hypertrophy', 'hyperplasia', 'metaplasia', 'dysplasia',
  'agenesis', 'aplasia', 'hypoplasia', 'involution',
  'necrosis', 'apoptosis', 'degeneration',
  'cloudy swelling', 'hydropic swelling', 'fatty change', 'steatosis',
  'squamous metaplasia', 'glandular metaplasia', 'barrett esophagus', 'myositis ossificans',
  // Lecture: Degeneration, Calcification & Cell Death
  'pathological calcification', 'metastatic calcification', 'hypercalcemia', 'nephrocalcinosis',
  'basophilic deposits', 'apoptotic bodies', 'somatic death', 'programmed cell death',
];

const KEY_WORDS = [
  'disease process', 'predisposing factors?', 'direct causes?', 'exogenous', 'endogenous',
  'congenital', 'acquired', 'gross(?:ly)?', 'microscopic(?:ally)?', 'autolysis', 'fixative',
  'formalin', 'hematoxylin', 'eosin', 'immunohistochemistry', 'immunoperoxidase',
  'phospholipases?', 'proteases?', 'endonucleases?', 'calcium influx', 'intracellular calcium',
  'atp depletion', 'sodium pump', 'free radicals', 'reactive oxygen species', 'lipid peroxidation',
  'pleomorphism', 'hyperchromatism', 'mitotic figures', 'nuclear-to-cytoplasmic',
  'exfoliated cells', 'washings', 'brushing', 'scraping', 'pap smear',
];

const DANGER_WORDS = [
  'carcinogen(?:ic)?', 'premalignant', 'pre-cancerous', 'cancer', 'carcinoma', 'sarcoma', 'adenocarcinoma',
  'squamous cell carcinoma', 'malignant', 'malignancy', 'irreversible', 'cell death',
  'hypoxia', 'ischemia', 'infarction', 'necrosis', 'rupture', 'perforation', 'laceration', 'maceration',
  'poisons?', 'toxins?', 'embolism', 'atherosclerosis', 'radiation', 'anaphylaxis',
];

const GOOD_WORDS = [
  'reversible', 'homeostasis', 'viability', 'physiological', 'benign', 'regression', 'recovery',
  'good prognosis', 'curable', 'intact nucleus', 'preservative',
];

const esc = (list: string[]) => list.join('|');

const RULES: Rule[] = [
  // Numbers with units or pathology intervals (10% formalin, 15-20 minutes, 3-5 min, 4-5 µm, days 1-5)
  { cls: 'hl-number', re: new RegExp(String.raw`(?:[<>≥≤~]\s*)?\b\d+(?:\.\d+)?(?:\s*[-–]\s*\d+(?:\.\d+)?)?(?:\s*(?:minutes?|min|seconds?|sec|hours?|hrs?|days?|µm|um|mm|cm|%|stages?|types?|factors?|pillars?|causes?|enzymes?)|s)\b`, 'gi') },
  { cls: 'hl-level', re: new RegExp(String.raw`\b(?:${esc(LEVEL_WORDS)})\b`, 'gi') },
  { cls: 'hl-danger', re: new RegExp(String.raw`\b(?:${esc(DANGER_WORDS)})\b`, 'gi') },
  { cls: 'hl-good', re: new RegExp(String.raw`\b(?:${esc(GOOD_WORDS)})\b`, 'gi') },
  { cls: 'hl-key', re: new RegExp(String.raw`\b(?:${esc(KEY_WORDS)})\b`, 'gi') },
  { cls: 'hl-acronym', re: /\b(?:H&E|FNAC|D&C|TUR|CEA|CK|AFP|PSA|PCR|CML|DNA|ROS|ATP|ATPase|RBCs?|WBCs?|CSF|HPV|TB|CIN|GERD|EM|IHC|LVH)\b/g },
];

type Piece = { text: string; cls?: string };

function tokenize(text: string): Piece[] {
  let pieces: Piece[] = [{ text }];
  for (const rule of RULES) {
    const next: Piece[] = [];
    for (const piece of pieces) {
      if (piece.cls) { next.push(piece); continue; }
      let last = 0;
      for (const match of piece.text.matchAll(rule.re)) {
        const start = match.index ?? 0;
        if (start > last) next.push({ text: piece.text.slice(last, start) });
        next.push({ text: match[0], cls: rule.cls });
        last = start + match[0].length;
      }
      if (last < piece.text.length) next.push({ text: piece.text.slice(last) });
    }
    pieces = next;
  }
  return pieces;
}

export function Highlight({ text }: { text: string }): ReactNode {
  const pieces = tokenize(text);
  return (
    <>
      {pieces.map((piece, index) => piece.cls
        ? <mark className={`hl ${piece.cls}`} key={index}>{piece.text}</mark>
        : <Fragment key={index}>{piece.text}</Fragment>)}
    </>
  );
}

/* Arabic terms */
const AR_LEVEL = [
  'علم الأمراض', 'الباثولوجي', 'الآفة المرضية', 'الآفة', 'الخزعة', 'التشخيص الخلوي', 'التشريح المرضي',
  'الضمور', 'التضخم', 'فرط التنسج', 'التحول الخلوي', 'سوء التنسج',
  'العدم الخلقي', 'التنسج الناقص', 'الضمور الرجعي', 'النخر', 'الموت المبرمج',
  'الانتفاخ الضبابي', 'الانتفاخ المائي', 'التغير الدهني',
  'المقاطع المجمدة', 'المقاطع البارافينية',
];
const AR_KEY = [
  'أسباب المرض', 'آلية المرض', 'المصير', 'التنبؤ', 'خارجية المنشأ', 'داخلية المنشأ', 'خلقية', 'مكتسبة',
  'الفحص العياني', 'الفحص المجهري', 'الفورمالين', 'المحلول المثبت', 'التحلل الذاتي',
  'استنزاف الطاقة', 'زيادة الكالسيوم', 'الشقوق الحرة', 'الجذور الحرة',
  'فوسفوليباز', 'بروتياز', 'إندونوكلياز', 'دلالات الأورام',
  'الخلايا الوظيفية النشطة', 'الدهون الثلاثية', 'خلايا الكبد', 'أملاح الكالسيوم',
  'فرط نشاط الغدة الجارات درقية', 'المايلوما المتعددة', 'الساركوئيد', 'الفشل الكلوي المزمن',
  'الترسبات القاعدية', 'مضخة الصوديوم والبوتاسيوم', 'الوسط القلوي',
];
const AR_DANGER = [
  'مسرطنة', 'مسرطن', 'ما قبل السرطان', 'سرطان', 'أورام خبيثة', 'خبيث', 'غير عكسية', 'موت الخلية',
  'نقص الأكسجين', 'نقص التروية', 'احتشاء', 'تمزق', 'تسلخ', 'سموم', 'تزنخ الدهون',
];

const AR_RULES: Rule[] = [
  { cls: 'hl-number', re: /(?:أكثر من|أقل من|خلال|من)?\s*[\d٠-٩]+(?:[.,][\d٠-٩]+)?(?:\s*(?:إلى|-|–)\s*[\d٠-٩]+(?:[.,][\d٠-٩]+)?)?\s*(?:دقيقة|دقائق|ثانية|ثوان|ساعة|ساعات|أيام|يوم|ميكرون|ميكروميتر|ملم|سم|%|أركان|عناصر|خطوات|أنواع|أسباب|إنزيمات|آليات)/g },
  { cls: 'hl-level', re: new RegExp(`(?:${AR_LEVEL.join('|')})`, 'g') },
  { cls: 'hl-danger', re: new RegExp(`(?:${AR_DANGER.join('|')})`, 'g') },
  { cls: 'hl-key', re: new RegExp(`(?:${AR_KEY.join('|')})`, 'g') },
  { cls: 'hl-acronym', re: /\b(?:H&E|FNAC|D&C|TUR|CEA|CK|AFP|PSA|PCR|CML|DNA|ROS|ATP|ATPase|RBCs?|WBCs?|CSF|HPV|TB|CIN|GERD|EM|IHC|LVH)\b/g },
];

function tokenizeAr(text: string): Piece[] {
  let pieces: Piece[] = [{ text }];
  for (const rule of AR_RULES) {
    const next: Piece[] = [];
    for (const piece of pieces) {
      if (piece.cls) { next.push(piece); continue; }
      let last = 0;
      for (const match of piece.text.matchAll(rule.re)) {
        const start = match.index ?? 0;
        if (start > last) next.push({ text: piece.text.slice(last, start) });
        next.push({ text: match[0], cls: rule.cls });
        last = start + match[0].length;
      }
      if (last < piece.text.length) next.push({ text: piece.text.slice(last) });
    }
    pieces = next;
  }
  return pieces;
}

export function HighlightAr({ text }: { text: string }): ReactNode {
  const pieces = tokenizeAr(text);
  return (
    <>
      {pieces.map((piece, index) => piece.cls
        ? <mark className={`hl ${piece.cls}`} key={index}>{piece.text}</mark>
        : <Fragment key={index}>{piece.text}</Fragment>)}
    </>
  );
}
