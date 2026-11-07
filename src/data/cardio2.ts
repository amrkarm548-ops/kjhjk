import { cardiologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fc, fs, ld, pt, sb } from './helpers';

export const cardio2: Lecture = {
  id: 3,
  chapter: cardiologyChapter,
  number: 2,
  en: `Cardiovascular Assessment (History, Examination & Investigations)`,
  ar: `تقييم الجهاز القلبي الوعائي: التاريخ المرضي، الفحص السريري، والفحوصات الطبية`,
  shortEn: `CV Assessment`,
  shortAr: `تقييم الجهاز القلبي الوعائي`,
  sections: [
    {
      number: 1,
      en: `Overview & Initial Approach`,
      ar: `نظرة عامة والخطوات الأولية`,
      entries: [
        pt(
          `Cardiovascular Assessment Definition: A systematic clinical process essential for accurate diagnosis. It is rapid, inexpensive, and highly effective, comprising history, physical examination, and investigations.`,
          `تقييم الجهاز القلبي الوعائي هو عملية سريرية منهجية أساسية للتشخيص الدقيق. تتميز بأنها سريعة، غير مكلفة، وفعالة للغاية، وتتكون من التاريخ الطبي، الفحص البدني، والفحوصات.`,
        ),
        s(`Initial Approach Steps (5 steps before the examination)`, `الخطوات الأولية الخمس قبل الفحص`),
        pt(`Introduce oneself: Stating name and professional role.`, `عرف نفسك باسمك ودورك المهني.`),
        pt(`Confirm patient identity: Name and date of birth.`, `تأكد من هوية المريض باكتشاف الاسم وتاريخ الميلاد.`),
        pt(`Explain the purpose: Explain purpose and importance of history-taking and physical examination.`, `اشرح سبب وأهمية التقييم للمريض.`),
        pt(`Obtain informed consent: Get agreement.`, `خذ موافقة المريض المستنيرة.`),
        pt(`Ensure patient comfort and positioning: Proper posture.`, `تأكد من راحته ووضعيته المناسبة.`),
      ],
    },
    {
      number: 2,
      en: `Part 1: Cardiovascular History`,
      ar: `أخذ التاريخ المرضي`,
      entries: [
        ld(`The history consists of 7 main components:`, `يتكون التاريخ المرضي من 7 مكونات رئيسية:`),
        pt(
          `Personal History: Name, age, sex, occupation, residence/address, marital status, and special habits (smoking, alcohol consumption).`,
          `الاسم، السن، الجنس، المهنة، الإقامة، الحالة الاجتماعية، والعادات الخاصة (التدخين والكحول).`,
        ),
        pt(
          `Presenting Complaint & Duration: Begin with open-ended questions allowing patients to describe their main problem in their own words (e.g., "What brought you to the hospital?").`,
          `الشكوى الرئيسية ومدتها: البداية بأسئلة مفتوحة لترك المريض يعبر عن مشكلته بكلماته.`,
        ),
        sb(`Common Complaints:`, `الشكاوى الشائعة:`),
        sb(`Dyspnea: Shortness of breath.`, `ضيق التنفس.`),
        sb(`Palpitations: Awareness of heartbeat.`, `خفقان وشعور بضربات القلب.`),
        sb(`Chest pain: Discomfort in chest.`, `ألم وعدم راحة بالصدر.`),
        sb(`Syncope: Temporary loss of consciousness.`, `إغماء وفقدان مؤقت للوعي.`),
        sb(`Lower-limb edema: Swelling of legs.`, `تورم الرجلين.`),
        pt(`History of Present Illness (HPI): Systematically analyze the complaint:`, `تاريخ المرض الحالي: تحليل الشكوى بشكل منظم:`),
        sb(`Onset, course, and duration of symptoms.`, `بدايتها، مسارها، ومدتها.`),
        sb(`Associated symptoms.`, `الأعراض المصاحبة.`),
        sb(`Aggravating and relieving factors.`, `العوامل المزرية والمهدئة.`),
        sb(`Effect of any treatment received.`, `تأثير أي علاج سابق.`),
        sb(`Date and characteristics of the most recent attack.`, `تاريخ وخصائص أحدث نوبة.`),
        sb(
          `Also inquire about symptoms of CVS and other systems (respiratory, GI, renal, neuro), and previous tests/treatments.`,
          `كذلك السؤال عن أعراض الجهاز القلبي الوعائي والأجهزة الأخرى (التنفسي، الهضمي، الكلوي، العصبي) والفحوصات والعلاجات السابقة.`,
        ),
        pt(
          `Past History: Ask about: Previous episodes, history of rheumatic fever, previous hospital admissions, surgical operations, and chronic medical illnesses.`,
          `التاريخ المرضي السابق: السؤال عن النوبات السابقة، الحمى الروماتيزمية، دخول المستشفى سابقاً، العمليات الجراحية، والأمراض المزمنة.`,
        ),
        fs(
          `Asking about rheumatic fever in childhood is crucial for detecting acquired valvular heart disease.`,
          `السؤال عن الحمى الروماتيزمية في الصغر حاسم لاكتشاف أمراض صمامات القلب المكتسبة.`,
        ),
        pt(`Family History: Similar conditions among family members, and consanguinity.`, `التاريخ العائلي: حالات مشابهة بين أفراد العائلة، وزواج الأقارب (Consanguinity).`),
        pt(`Drug History: All medications currently taken or previously used.`, `التاريخ الدوائي: كل الأدوية المستخدمة حالياً أو سابقاً.`),
        pt(`Menstrual History: Menstrual and reproductive history in female patients when relevant.`, `التاريخ الطمثي: التاريخ الطمثي والإنجابي للمريضات عند الحاجة.`),
      ],
    },
    {
      number: 3,
      en: `Part 2: Physical Examination`,
      ar: `الفحص الجسدي`,
      entries: [
        pt(
          `General Examination: Assess general appearance, vital signs, head and neck (JVP), upper limbs, and lower limbs (edema).`,
          `الفحص العام: تقييم المظهر العام، العلامات الحيوية، الرأس والرقبة (ضغط الوريد الوداجي JVP)، الطرفين العلويين، والطرفين السفليين (التورم).`,
        ),
        pt(`Local Cardiovascular Examination:`, `الفحص القلبي الوعائي الموضعي:`),
        fs(
          `The local examination applies the four techniques in this order: Inspection, Palpation, Percussion, Auscultation.`,
          `يطبق الفحص المباشر التقنيات الأربعة بالترتيب التالي: Inspection (المعاينة)، Palpation (الجس)، Percussion (النقر)، Auscultation (التسمع).`,
        ),
        pt(
          `Systemic Examination: Examine other relevant body systems to identify associated conditions or complications.`,
          `الفحص الجهازي: فحص الأجهزة الأخرى ذات الصلة للتعرف على الحالات المصاحبة أو المضاعفات.`,
        ),
      ],
    },
    {
      number: 4,
      en: `Part 3: Cardiovascular Investigations`,
      ar: `الفحوصات والأبحاث الطبية`,
      entries: [
        s(`Objectives of Investigations (7)`, `أهداف إجراء الفحوصات الـ 7`),
        pt(`Establish diagnosis.`, `إثبات التشخيص.`),
        pt(`Determine etiology.`, `تحديد السبب والعلة.`),
        pt(`Identify risk factors.`, `تحديد عوامل الخطر.`),
        pt(`Detect complications.`, `اكتشاف المضاعفات.`),
        pt(`Monitor disease progression.`, `متابعة تطور المرض.`),
        pt(`Evaluate associated co-morbidities.`, `تقييم الأمراض المزمنة المصاحبة.`),
        pt(`Make prognosis.`, `تحديد التكهن بسير المرض.`),

        s(`A. Structural & Imaging Investigations`, `الأبحاث والتصوير الطبي`),
        pt(
          `Chest X-Ray (CXR): Diagnoses cardiomegaly, features of heart diseases (hypertension, heart failure, cardiomyopathy, congenital CHD, pericardial effusion, coarctation of aorta, calcifications), acute pulmonary edema, and precipitants (chest infection).`,
          `أشعة الصدر: تشخص تضخم القلب (Cardiomegaly)، ومظاهر أمراض القلب (ضغط الدم، فشل القلب، اعتلال عضلة القلب، العيوب الخلقية، انصباب التامور، ضيق برزخ الأورطي، التكلسات)، والإديمة الرئوية الحادة، والعوامل المحفزة (عدوى الصدر).`,
        ),
        pt(`Electrocardiogram (ECG):`, `رسم القلب الكهربائي:`),
        sb(
          `Forms: Standard 12-lead ECG (at rest, 10–20 sec), Holter Monitoring (continuous 24h), Stress ECG (during exercise).`,
          `الأشكال: رسم القلب القياسي بـ 12 قطب (في الراحة 10–20 ثانية)، هولتر (متابعة مستمرة 24 ساعة)، ورسم القلب بالمجهود.`,
        ),
        sb(
          `Indications (14): Chamber abnormalities, arrhythmias, heart blocks, pre-excitation syndromes (WPW), ischemic heart disease, myocarditis, cardiomyopathies, pericardial diseases, congenital heart diseases, cardiac arrest, electrolyte derangement, drug effects (digoxin toxicity), pulmonary embolism, cor pulmonale.`,
          `الدلالات الـ 14: تضخم الحجرات، اضطراب النبض، كتمة القلب، متلازمات الإثارة المسبقة (WPW)، قصور الشرايين التاجية، التهاب عضلة القلب، اعتلالات عضلة القلب، أمراض التامور، العيوب الخلقية، توقف القلب، اضطراب الأملاح، تأثير الأدوية (سمية الديجوكسين)، الجلطة الرئوية، والقلب الرئوي.`,
        ),
        pt(
          `Electrophysiological Studies (EPS): Invasive procedures studying cardiac arrhythmias and pre-excitation syndromes.`,
          `الدراسات الفيزيولوجية الكهربائية: إجراءات تداخلية لدراسة اضطرابات النبض ومتلازمات الإثارة المسبقة.`,
        ),
        pt(`Echocardiography (Cardiac Ultrasonography):`, `الموجات فوق الصوتية على القلب (الإيكو):`),
        sb(`Forms: Transthoracic (TTE) and Transesophageal (TEE).`, `الأشكال: عبر جدار الصدر (TTE) وعبر المريء (TEE).`),
        sb(
          `Indications (10): Hypertensive heart disease, congenital heart disease, rheumatic heart disease, valvular heart disease, infective endocarditis, cardiomyopathies, pericardial diseases (pericardial effusion), ischemic heart disease, heart failure, cardiac masses (thrombus, myxoma).`,
          `الدواعي الـ 10: مرض القلب الناتج عن الضغط، العيوب الخلقية، مرض القلب الروماتيزمي، أمراض الصمامات، التهاب الشغاف العدوائي، اعتلالات عضلة القلب، أمراض التامور (انصباب التامور)، قصور الشرايين التاجية، فشل القلب، وكتل القلب (جلطة، ورم مخاطي).`,
        ),
        pt(
          `Cardiac MRI (CMRI): Utilizes powerful magnetic field; does NOT use ionizing radiation.`,
          `الرنين المغناطيسي على القلب: يستخدم مجالاً مغناطيسياً قوياً ولا يستخدم إشعاعاً مؤيناً.`,
        ),
        fs(
          `Current gold standard for evaluation of left ventricular hypertrophy.`,
          `هو المعيار الذهبي الحالي لتقييم ودقة تضخم البطين الأيسر.`,
        ),
        pt(`Cardiac CT: Similar applications to MRI.`, `الأشعة المقطعية على القلب: تطبيقات مشابهة للرنين.`),
        pt(
          `Cardiac Catheterization: Invasive procedure evaluating intracardiac pressures and managing valvular/congenital lesions.`,
          `قسطرة القلب: إجراء تداخلي لقياس الضغوط داخل القلب وعلاج التشوهات الصمامية والخلقية.`,
        ),
        pt(
          `Coronary Arteriography: Invasive procedure using contrast agents to evaluate coronary arteries in IHD.`,
          `تصوير الشرايين التاجية: إجراء تداخلي بالصبغة لتقييم الشرايين التاجية في قصور الشرايين التاجية.`,
        ),
        pt(
          `Isotope Scan (Thallium-201): Evaluates myocardial ischemia and viability.`,
          `المسح الذري (الثاليوم-201): لتقييم نقص التروية وحيوية عضلة القلب.`,
        ),

        s(`B. Laboratory Investigations`, `الفحوصات المعملية`),
        s(`Specific Markers of Myocardial Injury`, `الدلالات النوعية لتلف عضلة القلب`),
        pt(
          `Cardiac Enzymes: Creatine phosphokinase (CK), Aspartate aminotransferase (AST), Lactate dehydrogenase (LDH).`,
          `إنزيمات القلب: كرياتين فوسفوكيناز (CK)، أسبارتات أمينوترانسفيراز (AST)، ولاكتات ديهيدروجينيز (LDH).`,
        ),
        pt(`Troponins (Troponin I and Troponin T):`, `التروبونين (تروبونين I وتروبونين T):`),
        fs(
          `Troponins are the most sensitive and specific markers of myocardial injury / MI.`,
          `التروبونين هو الإنزيم الأكثر حساسية وتخصصاً كشاهد على تلف وجلطة عضلة القلب.`,
        ),
        s(`Heart Failure Biomarkers`, `الدلالات الحيوية لفشل القلب`),
        pt(`BNP: 32-amino acid polypeptide produced by ventricles upon stretch.`, `BNP: ببتيد من 32 حمض أميني يفرز عند تمدد البطينين.`),
        pt(`NT-proBNP: 76-amino acid N-terminal fragment co-secreted with BNP.`, `NT-proBNP: شق نتروجيني من 76 حمض أميني يفرز مع BNP.`),
        pt(`Clinical Utility: Screening, diagnosis, and establishing prognosis of heart failure.`, `الفائدة السريرية: الفحص، التشخيص، وتحديد التكهن بفشل القلب.`),
        s(`Non-Specific & Supportive Investigations`, `الفحوصات غير النوعية والداعمة`),
        pt(`Fasting Lipid Profile: Total cholesterol (TC), LDL, HDL, Triglycerides (TG).`, `تحليل دهون الدم الصائم: الكوليسترول الكلي، LDL، HDL، والدهون الثلاثية.`),
        pt(`Blood Sugar: FBS, 2HPPS, HbA1c (to exclude diabetes mellitus).`, `تحليل السكر الصائم والتراكمي لاستبعاد السكري.`),
        pt(
          `Electrolytes, Urea & Creatinine (E&U): Na+, K+, Ca2+, HCO3-, Urea, Creatinine (exclude electrolyte effects and detect renal disease).`,
          `وظائف الكلى والأملاح: الصوديوم، البوتاسيوم، الكالسيوم، البيكربونات، اليوريا، والكرياتينين (لاستبعاد تأثير الأملاح واكتشاف أمراض الكلى).`,
        ),
        pt(`Thyroid Function Tests: Exclude thyroid dysfunction causing arrhythmias/HF.`, `وظائف الدرقية: لاستبعاد خلل الدرقية المسبب لاضطراب النبض أو فشل القلب.`),
        pt(`Complete Blood Count (CBC) & Iron Profile: Exclude severe anemia or polycythemia.`, `صورة الدم ومخزون الحديد: لاستبعاد الأنيميا الشديدة أو زيادة الكريات الحمراء.`),
      ],
    },
    {
      number: 5,
      en: `Nursing Summary Table`,
      ar: `خلاصة الدور التمريضي`,
      entries: [
        dataTable(
          `NURSING SUMMARY — CARDIOVASCULAR ASSESSMENT`, `خلاصة الدور التمريضي في التقييم القلبي الوعائي`,
          [
            { en: `Component`, ar: `المرحلة` },
            { en: `Key Nursing Actions`, ar: `الإجراءات التمريضية بالإنجليزية` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`History`, `Build rapport; use open-ended questions; document systematically`, `بناء ألفة مع المريض، استخدام أسئلة مفتوحة، والتوثيق المنظم.`], tone: 'level4' },
            { cells: [`Physical Examination`, `Prepare patient; maintain privacy; assist with positioning`, `تحضير المريض، الحفاظ على الخصوصية، والمساعدة في الوضعية المناسبة.`], tone: 'level3' },
            { cells: [`Investigations`, `Explain procedures; obtain consent; prepare patient; monitor post-procedure`, `شرح الخطوات للمريض، أخذ الموافقة، التحضير، ومتابعة المريض بعد الإجراء.`], tone: 'level5' },
          ],
        ),
      ],
    },
  ],
};

void [fc];
