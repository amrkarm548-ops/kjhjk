export type Note = {
  en: string;
  ar: string;
  eg: string;
  refs?: string;
  nested?: boolean;
  /** Render without a number, as a lead paragraph. */
  plain?: boolean;
  /** Force showing the explanation even for short points. */
  forceEg?: boolean;
};

export type Figure = {
  src: string;
  en: string;
  ar: string;
  /** Description of the image to be supplied. When set, a labelled upload slot shows until the file exists. */
  need?: string;
  /** Wide figures span the full measure and never get cropped. */
  tall?: boolean;
  /** Width ÷ height. Reserves the exact space before the file loads, so pagination is right first time. */
  ratio?: number;
};

export type KvRow = {
  labelEn: string;
  labelAr: string;
  value: string;
  note?: string;
  refs?: string;
};

export type Tone =
  | 'default' | 'danger' | 'good' | 'gold' | 'black'
  | 'level1' | 'level2' | 'level3' | 'level4' | 'level5';

export type TableColumn = { en: string; ar: string };
export type TableRow = { cells: string[]; tone?: Tone };

export type Entry =
  | { kind: 'note'; note: Note }
  | { kind: 'subheading'; en: string; ar: string }
  | { kind: 'seq'; number: number; note: Note }
  /** A procedure step: what you do, why you do it, and optional sub-points to check. */
  | { kind: 'step'; number: number; action: Note; rationale: Note; items?: { en: string; ar: string }[]; tone?: Tone }
  | { kind: 'kvTable'; captionEn: string; captionAr: string; rows: KvRow[] }
  | { kind: 'dataTable'; captionEn: string; captionAr: string; columns: TableColumn[]; rows: TableRow[] }
  | { kind: 'chips'; items: { en: string; ar: string; refs?: string }[] }
  | { kind: 'termCard'; termEn: string; termAr?: string; def: Note; tone?: Tone }
  | { kind: 'figures'; figures: Figure[] };

export type Section = {
  number: number;
  en: string;
  ar: string;
  entries: Entry[];
};

export type Lecture = {
  number: number;
  en: string;
  ar: string;
  shortEn: string;
  sections: Section[];
};

export const n = (en: string, ar: string, eg: string, refs?: string, nested = false, plain = false, forceEg = false): Entry => ({
  kind: 'note',
  note: { en, ar, eg, refs, nested, plain, forceEg },
});

export const s = (en: string, ar: string): Entry => ({ kind: 'subheading', en, ar });

export const seq = (number: number, en: string, ar: string, eg: string, refs?: string): Entry => ({
  kind: 'seq',
  number,
  note: { en, ar, eg, refs },
});

export const text = (en: string, ar: string, eg: string, refs?: string): Note => ({ en, ar, eg, refs });

export const step = (
  number: number,
  action: Note,
  rationale: Note,
  opts?: { items?: { en: string; ar: string }[]; tone?: Tone },
): Entry => ({ kind: 'step', number, action, rationale, ...opts });

export const kvTable = (captionEn: string, captionAr: string, rows: KvRow[]): Entry => ({
  kind: 'kvTable', captionEn, captionAr, rows,
});

export const dataTable = (captionEn: string, captionAr: string, columns: TableColumn[], rows: TableRow[]): Entry => ({
  kind: 'dataTable', captionEn, captionAr, columns, rows,
});

export const chips = (items: { en: string; ar: string; refs?: string }[]): Entry => ({
  kind: 'chips', items,
});

export const term = (termEn: string, termAr: string | undefined, def: Note, tone: Tone = 'default'): Entry => ({
  kind: 'termCard', termEn, termAr, def, tone,
});

export const figures = (...items: Figure[]): Entry => ({ kind: 'figures', figures: items });

export const figure = (src: string, en: string, ar: string, opts?: { need?: string; tall?: boolean; ratio?: number }): Figure => ({
  src, en, ar, ...opts,
});
