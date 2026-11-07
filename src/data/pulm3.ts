import { pulmonologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const pulm3: Lecture = {
  id: 8,
  chapter: pulmonologyChapter,
  number: 3,
  en: `Pneumonia`,
  ar: `الالتهاب الرئوي`,
  shortEn: `Pneumonia`,
  shortAr: `الالتهاب الرئوي`,
  sections: [
    {
      number: 1,
      en: `Definition & Classifications`,
      ar: `التعريف والتصنيفات`,
      entries: [
        pt(
          `Definition: Acute infection of the lung parenchyma (alveoli and distal airways) causing inflammation, exudation, and consolidation.`,
          `الالتهاب الرئوي: عدوى حادة في نسيج ومحيط الرئة (الحويصلات والممرات الهوائية البعيدة) تسبب التهاباً، ترشيح سوائل، وتصلباً رئوياً (Consolidation).`,
        ),
        s(`Classification by Setting`, `التصنيف حسب مكان الاصابة`),
        pt(
          `Community-Acquired Pneumonia (CAP): Acquired outside health care settings.`,
          `عدوى مكتسبة من المجتمع خارج المستشفى.`,
        ),
        pt(
          `Hospital-Acquired Pneumonia (HAP): Occurring ≥ 48 hours after hospital admission.`,
          `عدوى مكتسبة بالمستشفى بعد 48 ساعة من الدخول.`,
        ),
        pt(
          `Ventilator-Associated Pneumonia (VAP): Occurring ≥ 48 hours after endotracheal intubation.`,
          `عدوى مرتبطة بجهاز التنفس الصناعي بعد 48 ساعة من التركيب.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Etiology & Pathogens`,
      ar: `الأسباب والميكروبات`,
      entries: [
        pt(
          `Most Common Cause of CAP: Streptococcus pneumoniae (Pneumococcus).`,
          `بكتيريا المكورات الرئوية هي المسبب الأول.`,
        ),
        pt(
          `Atypical Pathogens: Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila.`,
          `الميكروبات غير النمطية: الميكوبلازما الرئوية، الكلاميديا الرئوية، والليجيونيلا.`,
        ),
        pt(
          `HAP / VAP Pathogens: Pseudomonas aeruginosa, Acinetobacter, Klebsiella, MRSA.`,
          `ميكروبات الالتهاب الرئوي المكتسب بالمستشفى والتنفس الصناعي: الزائفة الزنجارية، الراكدة، الكلبسيلا، والمكورات العنقودية المقاومة للميثيسيلين.`,
        ),
        pt(
          `Aspiration Pneumonia: Anaerobes and gram-negative enteric bacilli.`,
          `بكتيريا لا هوائية نتيجة شفط إفرازات المعدة/الفم.`,
        ),
      ],
    },
    {
      number: 3,
      en: `Clinical Presentation & Physical Examination`,
      ar: `الصورة السريرية والفحص`,
      entries: [
        pt(
          `Classic Symptoms: High fever, rigors, cough (starting dry then producing purulent or rusty sputum in pneumococcal cases), pleuritic chest pain, dyspnea.`,
          `الأعراض الكلاسيكية: سخونية عالية، قشعريرة، كحة (تبدأ جافة ثم ببلغم صديدي أو صدئ في حالات المكورات الرئوية)، ألم صدر بلوري، وضيق تنفس.`,
          `سخونية عالية، قشعريرة، كحة ببلغم صديدي أو بلغم صدئ اللون (Rusty sputum)، وألم حاد بالصدر.`,
        ),
        pt(
          `Atypical Elderly Presentation: Older adults often present without fever or cough, displaying confusion, falls, and anorexia.`,
          `كبار السن غالباً يأتون بدون سخونية أو كحة، وتظهر عليهم أعراض غير نموذجية.`,
        ),
        fs(
          `Older adults often present without fever or cough, but with confusion, repeated falls, and loss of appetite.`,
          `كبار السن غالباً بيجوا من غير سخونية ولا كحة، وتظهر عليهم أعراض غير نموذجية زي التشتت الذهني، الوقوع المتكرر، وفقدان الشهية!`,
        ),
        s(`Physical Exam Signs over Consolidation`, `علامات التصلب الرئوي بالفحص`),
        pt(`Increased tactile vocal fremitus.`, `تزايد اهتزازات الكلام المحسوسة باليد.`),
        pt(`Dullness on percussion.`, `صوت مكتوم بالنقر على الصدر.`),
        pt(
          `Bronchial breath sounds & Fine crackles on auscultation.`,
          `أصوات تنفس شعبية ونشيج ناعم بالسماعة.`,
        ),
        pt(`Increased vocal resonance / Egophony.`, `تزايد رنين الصوت بالسماعة.`),
      ],
    },
    {
      number: 4,
      en: `Severity Assessment: CURB-65 Score`,
      ar: `تقييم شدة الالتهاب الرئوي`,
      entries: [
        fl(
          `CURB-65 calculator to decide where the patient should be treated:`,
          `حاسبة CURB-65 لتحديد مكان علاج المريض:`,
        ),
        dataTable(
          `CURB-65 SCORE (1 POINT FOR EACH FEATURE)`, `حاسبة CURB-65 (نقطة لكل عنصر)`,
          [
            { en: `Letter`, ar: `الحرف` },
            { en: `Feature`, ar: `العنصر` },
            { en: `Translation`, ar: `الترجمة` },
          ],
          [
            { cells: [`C`, `Confusion`, `تشتت ذهني`], tone: 'level1' },
            { cells: [`U`, `Urea > 7 mmol/L`, `اليوريا أكبر من 7 مللي مول/لتر`], tone: 'level2' },
            { cells: [`R`, `RR ≥ 30/min`, `معدل التنفس 30 في الدقيقة أو أكثر`], tone: 'level3' },
            { cells: [`B`, `SBP < 90 or DBP ≤ 60`, `ضغط الدم الانقباضي أقل من 90 أو الانبساطي 60 أو أقل`], tone: 'level4' },
            { cells: [`65`, `Age ≥ 65 years`, `العمر 65 سنة أو أكثر`], tone: 'level5' },
          ],
          true,
        ),
        s(`Score Interpretation & Disposition`, `قرار مكان العلاج حسب الدرجة`),
        dataTable(
          `CURB-65 INTERPRETATION`, `تفسير درجة CURB-65`,
          [
            { en: `CURB-65 Score`, ar: `الدرجة` },
            { en: `Risk & Severity`, ar: `الخطورة` },
            { en: `Recommended Care Setting`, ar: `مكان العلاج الموصى به` },
          ],
          [
            { cells: [`0 – 1 Point`, `Low Risk`, `Outpatient care (علاج بالمنزل بالعيادة الخارجية).`], tone: 'level5' },
            { cells: [`2 Points`, `Moderate Risk`, `Inpatient admission (حجز بالقسم الداخلي للمستشفى).`], tone: 'level3' },
            { cells: [`≥ 3 Points`, `High Risk / Severe`, `Urgent ICU admission consideration (حجز فوري بالعناية المركزة ICU).`], tone: 'level1' },
          ],
          true,
        ),
      ],
    },
    {
      number: 5,
      en: `Complications & Medical Timing`,
      ar: `المضاعفات وتوقيت المضادات`,
      entries: [
        s(`Complications`, `المضاعفات`),
        pt(
          `Parapneumonic Pleural Effusion & Empyema (defined by pleural fluid pH < 7.20).`,
          `تجمع صديد بالبلورا (يُعرَّف بأن الأس الهيدروجيني لسائل البلورا أقل من 7.20).`,
        ),
        pt(`Lung Abscess.`, `خراج بالرئة.`),
        pt(`Bacteremia, Sepsis & Septic Shock.`, `تسمم بالدم وصدمة إنتانية.`),
        pt(`Acute Respiratory Distress Syndrome (ARDS).`, `متلازمة الضائقة التنفسية الحادة.`),
        s(`Antibiotic Administration Timing`, `توقيت إعطاء المضاد الحيوي`),
        pt(
          `Obtain blood and sputum cultures FIRST, then administer empirical antibiotics within 1 hour in septic shock or within 4 hours of diagnosis.`,
          `سحب مزرعة الدم والبلغم أولاً، ثم إعطاء المضاد الحيوي التجريبي خلال ساعة في الصدمة الإنتانية أو خلال 4 ساعات من التشخيص.`,
          `سحب عينات المزرعة والدم أولاً فوراً، ثم إعطاء المضاد الحيوي في خلال ساعة واحدة لو في صدمة إنتانية، أو 4 ساعات كحد أقصى من التشخيص!`,
        ),
        fs(
          `Cultures first, then antibiotics: within 1 hour in septic shock, or within 4 hours of diagnosis.`,
          `سحب عينات المزرعة والدم أولاً، ثم المضاد الحيوي خلال ساعة في الصدمة الإنتانية أو 4 ساعات من التشخيص.`,
        ),
      ],
    },
    {
      number: 6,
      en: `Priority Nursing Actions for Pneumonia`,
      ar: `الأولويات التمريضية للالتهاب الرئوي`,
      entries: [
        pt(
          `Airway & Oxygenation: Secure airway; administer oxygen targeting SpO2 94–98% (or 88–92% if COPD coexists).`,
          `ضبط الأكسجين وتأمين المجرى الهوائي.`,
        ),
        pt(
          `Prompt Antibiotic Administration: Obtain cultures first, then give prescribed antibiotics promptly on time.`,
          `إعطاء المضادات الحيوية في موعدها.`,
        ),
        pt(
          `Positioning: High-Fowler's position; for unilateral pneumonia, place good lung DOWN / affected side UP to optimize ventilation-perfusion (V/Q) matching.`,
          `الوضعية: قعود عالية؛ وفي الالتهاب الرئوي أحادي الجانب توضع الرئة السليمة لأسفل والمصابة لأعلى لتحسين توافق التهوية والتروية.`,
        ),
        fs(
          `Place the patient with the GOOD lung DOWN to improve gas exchange and blood supply.`,
          `يوضع المريض بحيث تكون الرئة السليمة لأسفل لتحسين تبادل الغازات والتغذية الدموية!`,
        ),
        pt(
          `Airway Clearance: Encourage coughing, deep breathing, incentive spirometry, chest physiotherapy, and adequate hydration to thin secretions.`,
          `تشجيع التنفس العميق وشرب المية لتخفيف البلغم.`,
        ),
        pt(
          `Monitor for Deterioration: Watch for qSOFA ≥ 2, hypotension (SBP < 90 mmHg), or oliguria indicating sepsis.`,
          `متابعة علامات التسمم الإنتاني وهبوط الضغط.`,
        ),
      ],
    },
  ],
};

void [ld, sb];
