import type { Chapter } from './types';

export const pathologyChapter: Chapter = { id: 'pathology', en: 'Pathology', ar: 'علم الأمراض (الباثولوجي)' };
export const cardiologyChapter: Chapter = { id: 'cardiology', number: 1, en: 'Cardiology', ar: 'أمراض القلب' };
export const pulmonologyChapter: Chapter = { id: 'pulmonology', number: 2, en: 'Pulmonology', ar: 'أمراض الجهاز التنفسي' };
export const hematologyChapter: Chapter = { id: 'hematology', number: 3, en: 'Hematology', ar: 'أمراض الدم' };

export const chapters: Chapter[] = [pathologyChapter, cardiologyChapter, pulmonologyChapter, hematologyChapter];
