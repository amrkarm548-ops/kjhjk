import type { Entry } from './types';

/**
 * Short authoring helpers.
 *  pt  = numbered main point        sb  = lettered sub-point under it
 *  ld  = unnumbered lead paragraph  fc  = main point the lecturer stressed
 *  fs  = sub-point the lecturer stressed
 * `eg` (the Egyptian-Arabic explanation) is always shown whenever it is supplied.
 */
const make = (en: string, ar: string, eg: string, o: { nested?: boolean; plain?: boolean; focus?: boolean }): Entry => ({
  kind: 'note',
  note: { en, ar, eg, nested: !!o.nested, plain: !!o.plain, forceEg: !!eg, ...(o.focus ? { focus: true } : {}) },
});

export const pt = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, {});
export const sb = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, { nested: true });
export const ld = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, { plain: true });
export const fc = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, { focus: true });
export const fs = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, { nested: true, focus: true });
export const fl = (en: string, ar: string, eg = ''): Entry => make(en, ar, eg, { plain: true, focus: true });
