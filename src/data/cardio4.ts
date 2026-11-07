import { cardiologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fs, ld, pt, sb } from './helpers';

export const cardio4: Lecture = {
  id: 5,
  chapter: cardiologyChapter,
  number: 4,
  en: `Hypertension`,
  ar: `ارتفاع ضغط الدم: التعريف، المعايير التشخيصية، الآلية المرضية، التصنيف، تقييم المخاطر، خطوط العلاج والإجراءات التمريضية`,
  shortEn: `Hypertension`,
  shortAr: `ارتفاع ضغط الدم`,
  sections: [
    {
      number: 1,
      en: `Definition & Diagnostic Thresholds`,
      ar: `التعريف وعتبات التشخيص`,
      entries: [
        pt(
          `Definition of Hypertension: Elevated systolic and diastolic blood pressure on office measurement ≥ 140/90 mmHg. Cardiovascular risk increases linearly from SBP > 115 mmHg.`,
          `يُعرَّف ارتفاع ضغط الدم بأنه ارتفاع ضغط الدم الانقباضي والانبساطي عند القياس بالعيادة إلى 140/90 ملم زئبق أو أكثر. وتبدأ المخاطر القلبية الوعائية خطياً عند زيادة الانقباضي عن 115 ملم زئبق.`,
        ),
        dataTable(
          `DIAGNOSTIC THRESHOLDS`, `عتبات ومستويات القياس التشخيصية`,
          [
            { en: `Measurement Method`, ar: `طريقة القياس` },
            { en: `Diagnostic Threshold`, ar: `العتبة التشخيصية` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Office BP`, `≥ 140/90 mmHg`, `قياس العيادة: 140/90 ملم زئبق أو أكثر.`], tone: 'level1' },
            { cells: [`Home BP Monitoring (HBPM)`, `≥ 135/85 mmHg`, `قياس المنزل: 135/85 ملم زئبق أو أكثر.`], tone: 'level2' },
            { cells: [`24-hour Ambulatory BP (ABPM)`, `≥ 130/80 mmHg`, `الجهاز المحمول 24 ساعة: 130/80 ملم زئبق أو أكثر.`], tone: 'level3' },
          ],
          true,
        ),
        s(`Exclusion of Phenomena`, `استبعاد الظواهر الكاذبة`),
        pt(
          `White Coat Hypertension: Elevated BP only in clinical settings (normal at home).`,
          `ارتفاع الضغط بالعيادة فقط وتكون طبيعياً بالمنزل لتخوف المعاطف البيضاء.`,
        ),
        pt(
          `Masked Hypertension: Normal office BP but elevated outside clinical settings.`,
          `ضغط الدم يكون طبيعياً بالعيادة ومرتفعاً بالخارج.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Clinical Presentation & Accurate Measurement`,
      ar: `الصورة السريرية وشروط القياس`,
      entries: [
        pt(
          `"Silent" Killer Concept: Hypertension is classically asymptomatic. Symptoms appear only with very high BP (headache, blurred vision, dizziness, dyspnea, chest pain, nausea, confusion, epistaxis). BP measurement is the only reliable method.`,
          `ضغط الدم مرض صامت، وما فيش أعراض مؤكدة تعتمد عليها، والقياس بالجهاز هو الوسيلة الدقيقة الوحيدة.`,
          `الأعراض بتظهر بس لو الضغط عالي جداً (صداع، زغللة، دوخة، نهجان، ألم صدر، غثيان، تشوش، رعاف).`,
        ),
        s(`6 Requirements for Accurate BP Measurement`, `6 شروط لقياس دقيق لضغط الدم`),
        pt(`Validated and calibrated equipment.`, `معايرة الأجهزة دورياً.`),
        pt(`Trained operator.`, `تدريب الممرض/الطبيب المستمر.`),
        pt(`Patient seated quietly for at least 5 minutes in a chair with back supported.`, `جلوس المريض بهدوء 5 دقائق على الأقل مع إسناد الظهر.`),
        pt(`Auscultatory method with stethoscope.`, `استخدام الطريقة السماعية الدقيقة.`),
        fs(
          `Avoid caffeine, exercise, and smoking for at least 30 minutes before measurement.`,
          `تجنب الكافيين، الرياضة، والتدخين لمدة 30 دقيقة على الأقل قبل القياس.`,
        ),
        pt(`Proper cuff size (encircles 80% of arm).`, `استخدام كفة بمقاس مناسب لدوران الذراع (تغطي 80% من محيطه).`),
      ],
    },
    {
      number: 3,
      en: `Pathogenesis & Hemodynamic Equation`,
      ar: `الآلية المرضية`,
      entries: [
        pt(
          `Hemodynamic Equation: Blood Pressure (BP) = Cardiac Output (CO) × Peripheral Resistance (PR)`,
          `ضغط الدم = نتاج القلب × المقاومة المحيطية للأوعية الدموية.`,
        ),
        s(`Factors Increasing Cardiac Output`, `العوامل التي تزيد نتاج القلب`),
        pt(
          `Increased circulating fluid volume: Excess sodium intake → fluid retention → increased preload & CO.`,
          `زيادة الصوديوم احتباس السوائل وحجم الدم.`,
        ),
        pt(
          `RAAS activation: Angiotensin II → vasoconstriction; Aldosterone → sodium/water retention.`,
          `تنشيط نظام الرينين.`,
        ),
        pt(
          `Sympathetic nervous system overactivity: Increases renin, HR, and vascular tone.`,
          `نشاط الجهاز السمبثاوي المفرط.`,
        ),
      ],
    },
    {
      number: 4,
      en: `Classification of Hypertension`,
      ar: `تصنيف الأسباب`,
      entries: [
        pt(
          `Primary (Essential) Hypertension: Unknown cause; accounts for 90–95% of cases.`,
          `أولي بدون سبب عضوي، 90-95% من الحالات.`,
        ),
        pt(`Secondary Hypertension: Specific identifiable cause (5–10% of cases):`, `ثانوي له سبب محدد يمكن تحديده (5-10% من الحالات):`),
        sb(`Vascular: Coarctation of aorta.`, `وعائي: ضيق برزخ الأورطي.`),
        sb(
          `Renal: Diabetic nephropathy, interstitial tubular disease, glomerular disease, polycystic kidney disease, renal artery stenosis.`,
          `كلوي: أمراض الكلى واعتلال الشرايين الكلوية.`,
        ),
        sb(
          `Endocrine: Pheochromocytoma, primary aldosteronism, Cushing's disease, pituitary & thyroid disorders.`,
          `غددي: أمراض واضطرابات الغدد الصماء.`,
        ),
        sb(
          `Other: Obstructive sleep apnea, oral contraceptives, cerebral hemorrhage.`,
          `أخرى: انقطاع التنفس أثناء النوم، حبوب منع الحمل، ونزيف المخ.`,
        ),
      ],
    },
    {
      number: 5,
      en: `Cardiovascular Risk Assessment & SCORE2`,
      ar: `تقييم المخاطر`,
      entries: [
        pt(
          `Tools: SCORE2 (ages 40–69 years) and SCORE2-OP (ages ≥ 70 years) estimate 10-year CVD risk.`,
          `مقياس حساب مخاطر القلب خلال 10 سنوات.`,
        ),
        pt(
          `High-Risk Criteria: Established CVD, Diabetes mellitus, Moderate-to-severe CKD, Familial hypercholesterolemia, or SCORE2 risk ≥ 10%.`,
          `معايير المرضى عالي الخطر.`,
        ),
        pt(
          `Decision: High-risk patients (≥ 10%) with "Elevated BP" get immediate drug treatment. Low-risk get lifestyle modification.`,
          `البدء الفوري بالعلاج الدوائي للمرضى عالي الخطر.`,
        ),
      ],
    },
    {
      number: 6,
      en: `Essential Laboratory Workup`,
      ar: `الفحوصات المعملية`,
      entries: [
        pt(`Complete Blood Count (CBC).`, `صورة دم.`),
        pt(`Kidney Function Tests (KFT).`, `وظائف كلى.`),
        pt(`Urine Analysis (proteinuria).`, `تحليل بول للبروتين.`),
        pt(`Chest X-Ray (cardiomegaly).`, `أشعة صدر.`),
        pt(`Electrocardiogram (ECG – LVH).`, `رسم قلب لتضخم البطين.`),
        pt(`Fundoscopy (retinopathy).`, `فحص قاع العين للشبكية.`),
        pt(`CT/MRI (when indicated).`, `أشعة مقطعية/رنين عند الحاجة.`),
      ],
    },
    {
      number: 7,
      en: `ESC Treatment Strategy & Targets`,
      ar: `إستراتيجية العلاج حسب ESC`,
      entries: [
        pt(
          `Category 1: Elevated BP (120–139 / 80–89 mmHg): Step 1 Lifestyle × 3 months → Step 2 start drugs if ≥ 130/80 mmHg AND high CVD risk.`,
          `الفئة 1: ضغط مرتفع: الخطوة 1 تعديل نمط الحياة 3 شهور، الخطوة 2 بدء الأدوية لو ≥ 130/80 مع خطر قلبي وعائي مرتفع.`,
        ),
        pt(
          `Category 2: Hypertension (≥ 140/90 mmHg): Step 1 Immediate lifestyle → Step 2 Immediate drug treatment (Class I recommendation per ESC guidelines).`,
          `الفئة 2: ارتفاع ضغط الدم: الخطوة 1 نمط الحياة فوراً، الخطوة 2 العلاج الدوائي فوراً (توصية Class I حسب إرشادات ESC).`,
        ),
        fs(
          `Immediate drug treatment is a Class I recommendation for everyone with BP ≥ 140/90 mmHg.`,
          `البدء الفوري بالعلاج الدوائي هو توصية Class I لجميع المصابين بضغط 140/90 فأكثر.`,
        ),
        pt(
          `BP Treatment Targets: Systolic 120–129 mmHg, Diastolic < 80 mmHg.`,
          `الهدف الانقباضي 120-129، والانبساطي أقل من 80.`,
        ),
      ],
    },
    {
      number: 8,
      en: `Non-Pharmacological Interventions`,
      ar: `نمط الحياة`,
      entries: [
        s(`Nutritional Updates`, `التحديثات الغذائية`),
        pt(`Potassium-enriched salt substitutes.`, `بدائل الملح الغنية بالبوتاسيوم.`),
        fs(
          `Contraindicated in moderate-to-severe CKD.`,
          `ممنوع استخدام بدائل الملح الغنية بالبوتاسيوم لمصابي أمراض الكلى المزمنة لمنع التسمم بالبوتاسيوم.`,
        ),
        pt(
          `Eliminate sugar-sweetened beverages & complete abstinence from alcohol.`,
          `الامتناع عن المشروبات المحلاة بالسكر والامتناع التام عن الكحول.`,
        ),
      ],
    },
  ],
};

void [ld];
