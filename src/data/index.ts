import { lectureOne } from './lecture1';
import { cardiologyLectures } from './cardiology';
import { pulmonologyLectures } from './pulmonology';
import { hematologyLectures } from './hematology';
import type { Lecture } from './types';

export const lectures: Lecture[] = [
  lectureOne,
  ...cardiologyLectures,
  ...pulmonologyLectures,
  ...hematologyLectures,
];

export { chapters } from './chapters';
export type { Lecture, Section, Entry, Note, Figure, Tone, Chapter } from './types';
