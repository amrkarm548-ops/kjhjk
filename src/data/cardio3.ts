import { cardiologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const cardio3: Lecture = {
  id: 4,
  chapter: cardiologyChapter,
  number: 3,
  en: `Heart Failure`,
  ar: `فشل القلب: التعريف، الآلية المرضية، الأنواع، الصورة السريرية، العلاج والخطوط الإرشادية`,
  shortEn: `Heart Failure`,
  shortAr: `فشل القلب`,
  sections: [
    {
      number: 1,
      en: `Definition & Pathophysiology`,
      ar: `التعريف والآلية المرضية`,
      entries: [
        pt(
          `Definition of Heart Failure (HF): Heart failure is a complex clinical syndrome characterized by typical symptoms of systemic and pulmonary congestion and low cardiac output resulting from an imbalance between the body's metabolic demands and the heart's supply capacity.`,
          `فشل القلب هو متلازمة سريرية معقدة تتميز بأعراض نموذجية لاحتقان الرئة والجهاز الوريدي وانخفاض نتاج القلب الناتج عن عدم التوازن بين احتياجات الجسم الاستقلابية وقدرة القلب على الإمداد.`,
          `متلازمة بتحصل لما القلب يضعف وما يقدرش يضخ دم يكفي الأنسجة، فيحصل احتقان بالرئة والجسم ونقص دم للأعضاء.`,
        ),
        pt(
          `Pathophysiological Basis: HF arises from structural and/or functional cardiac abnormalities that impair ventricular filling, cardiac ejection, or both, leading to inadequate cardiac output and/or elevated intracardiac pressures at rest or during exertion.`,
          `ينشأ فشل القلب من تشوهات هيكلية أو وظيفية تعيق امتلاء البطين أو ضخ الدم أو كلاهما، مما يؤدي لنقص نتاج القلب أو ارتفاع الضغط داخل القلب أثناء الراحة أو المجهود.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Risk Factors & Etiology`,
      ar: `عوامل الخطر والأسباب`,
      entries: [
        s(`Major Risk Factors`, `عوامل الخطر الرئيسية`),
        pt(`Previous MI (ischemic).`, `احتشاء قلبي سابق (سبب إقفاري).`),
        pt(`Myocarditis (myocardial).`, `التهاب عضلة القلب (سبب عضلي).`),
        pt(`Valvular heart disease (valvular).`, `أمراض الصمامات (سبب صمامي).`),
        pt(`Tachyarrhythmias / Bradyarrhythmias (arrhythmic).`, `اضطرابات النبض السريعة أو البطيئة (سبب نظمي).`),
        pt(`Diabetes mellitus (metabolic).`, `السكري (سبب استقلابي).`),
        pt(`Congenital heart disease (structural).`, `العيوب الخلقية بالقلب (سبب هيكلي).`),
        pt(`Obstructive sleep apnea (respiratory).`, `انقطاع التنفس الانسدادي أثناء النوم (سبب تنفسي).`),
        pt(`Obesity & alcohol (lifestyle).`, `السمنة والكحول (نمط الحياة).`),
        pt(`NSAIDs & chemotherapeutics (toxic).`, `مضادات الالتهاب غير الستيرويدية والعلاج الكيماوي (أسباب سامة).`),
        pt(`Non-ischemic cardiomyopathy (genetic).`, `اعتلال عضلة القلب غير الإقفاري (سبب جيني).`),

        s(`Anatomical Etiological Classification — Left-Sided Heart Failure`, `التصنيف التشريحي للأسباب: فشل الجانب الأيسر`),
        pt(
          `Left Atrial Failure: Obstruction to filling e.g., Mitral stenosis, myxoma.`,
          `انسداد امتلاء الأذين الأيسر لضيق الميترالي.`,
        ),
        pt(
          `Left Ventricular Failure – Muscle Disease: Impaired contractility e.g., MI, myocarditis, cardiomyopathy.`,
          `ضعف انقباض البطين الأيسر.`,
        ),
        pt(
          `Left Ventricular Failure – Volume Overload (Preload): Hyperdynamic circulation (anemia, hyperthyroidism, beriberi), Mitral regurgitation, Aortic regurgitation, VSD, PDA.`,
          `زيادة حمل الحجم على البطين الأيسر.`,
        ),
        pt(
          `Left Ventricular Failure – Pressure Overload (Afterload): Systemic hypertension, Aortic stenosis, Coarctation of aorta.`,
          `زيادة المقاومة أمام البطين الأيسر.`,
        ),

        s(`Anatomical Etiological Classification — Right-Sided Heart Failure`, `التصنيف التشريحي للأسباب: فشل الجانب الأيمن`),
        pt(
          `Right Atrial Failure: Tricuspid stenosis, myxoma.`,
          `انسداد امتلاء الأذين الأيمن لضيق الصمام الثلاثي.`,
        ),
        pt(
          `Right Ventricular Failure – Muscle Disease: Impaired contractility.`,
          `ضعف انقباض البطين الأيمن.`,
        ),
        pt(
          `Right Ventricular Failure – Volume Overload: Hyperdynamic circulation, Tricuspid regurgitation, Pulmonary regurgitation, VSD, ASD.`,
          `زيادة حمل الحجم بالجانب الأيمن.`,
        ),
        pt(
          `Right Ventricular Failure – Pressure Overload: Pulmonary hypertension, Pulmonary stenosis, Pulmonary embolism.`,
          `زيادة ضغط شريان الرئة.`,
        ),

        s(`Diastolic Heart Failure`, `فشل القلب الانبساطي`),
        pt(
          `Diastolic Heart Failure: Characterized by inadequate ventricular filling rather than impaired systolic contraction; mostly caused by hypertension-induced left ventricular hypertrophy.`,
          `عدم امتلاء البطين لصلابته وتضخمه بالرغم من أن الانقباض طبيعي.`,
        ),
      ],
    },
    {
      number: 3,
      en: `Classification Systems (8)`,
      ar: `أنظمة تصنيف فشل القلب الـ 8`,
      entries: [
        pt(`By Side Affected: Left-sided HF, Right-sided HF, Biventricular HF.`, `حسب الجانب المصاب: فشل الجانب الأيسر، فشل الجانب الأيمن، وفشل البطينين.`),
        pt(
          `By Ventricular Function: Systolic HF (reduced ejection fraction) vs. Diastolic HF (impaired relaxation/stiffness with preserved ejection fraction).`,
          `حسب وظيفة البطين: فشل انقباضي (نسبة قذف منخفضة) مقابل فشل انبساطي (ضعف الارتخاء والصلابة مع نسبة قذف محفوظة).`,
        ),
        pt(`By Time Course: Acute HF, Chronic HF, Acute decompensated HF.`, `حسب المسار الزمني: حاد، مزمن، وحاد على مزمن (انتكاس حاد).`),
        pt(`By Cardiac Output: Low-output HF vs. High-output HF.`, `حسب نتاج القلب: فشل بنتاج منخفض مقابل فشل بنتاج مرتفع.`),
        pt(`By Clinical Presentation: Latent/asymptomatic HF vs. Overt/symptomatic HF.`, `حسب الصورة السريرية: فشل كامن بلا أعراض مقابل فشل ظاهر بأعراض.`),
        pt(`By Left Ventricular Ejection Fraction (LVEF):`, `حسب نسبة القذف من البطين الأيسر (LVEF):`),
        sb(
          `HFrEF (Reduced EF): LVEF < 50% (Impaired contractility).`,
          `فشل انقباضي مع نسبة قذف أقل من 50%.`,
        ),
        sb(
          `HFpEF (Preserved EF): LVEF ≥ 50% (Clinical evidence of HF with structural/functional abnormalities).`,
          `فشل انبساطي مع نسبة قذف طبيعية أكبر من أو تساوي 50%.`,
        ),
        fs(
          `Approximately half of HF patients have a preserved ejection fraction (HFpEF), because their problem is in relaxation and filling, not contraction.`,
          `ما يقرب من نصف مرضى فشل القلب عندهم نسبة القذف طبيعية (HFpEF)؛ لأن المشكلة عندهم في الانبساط والارتخاء وليس الانقباض.`,
        ),
        pt(`ACC/AHA Staging System:`, `نظام التدريج الأمريكي ACC/AHA:`),
        sb(`Stage A (At Risk): Risk factors present; no structural disease or symptoms.`, `مرحلة الخطر بدون مرض هيكلي.`),
        sb(`Stage B (Pre-HF): Structural disease present; no symptoms.`, `وجود مرض هيكلي بالقلب بدون أعراض.`),
        sb(`Stage C (Symptomatic HF): Structural disease with current/previous symptoms.`, `مرحلة وجود الأعراض.`),
        sb(`Stage D (Advanced HF): Severe refractory symptoms at rest despite maximum therapy.`, `مرحلة متقدمة شديدة.`),
        pt(`NYHA Functional Classification: Grades I to IV based on exercise tolerance.`, `تصنيف جمعية نيويورك الوظيفي: الدرجات من I إلى IV حسب تحمل المجهود.`),
      ],
    },
    {
      number: 4,
      en: `Compensatory Mechanisms / Cardiac Reserve`,
      ar: `الآليات التعويضية للقلب`,
      entries: [
        pt(`Reflex Tachycardia: Sympathetic stimulation increases heart rate.`, `تسارع النبض المنعكس عن طريق الجهاز السمبثاوي.`),
        pt(
          `Ventricular Dilatation: Increased volume load increases fiber length and contraction within limits (Starling's Law).`,
          `اتساع البطين يزيد الانقباض طبقاً لقانون ستارلينغ.`,
        ),
        pt(
          `Ventricular Hypertrophy: Increased pressure load increases wall thickness and contraction within limits ("Bigger is not better").`,
          `تضخم الجدار لزيادة قوة الانقباض.`,
        ),
        pt(`Blood Flow Redistribution: Shunting blood from skin and gut to brain and heart.`, `إعادة توزيع الدم للأعضاء الحيوية كالمخ والقلب.`),
        pt(
          `RAAS Activation: Renin → Angiotensin II → Aldosterone → Na+ and water retention → Hypervolemia.`,
          `تنشيط نظام الرينين يحبس الصوديوم والمية فيرفع حجم الدم.`,
        ),
        pt(
          `Natriuretic Peptide Release: Muscle stretch → ANP/BNP release → Vasodilation and urinary Na+ excretion.`,
          `إفراز ببتيدات ANP/BNP لمواجهة زيادة الضغط.`,
        ),
      ],
    },
    {
      number: 5,
      en: `Clinical Presentation`,
      ar: `الصورة السريرية التفصيلية`,
      entries: [
        s(`A. Left-Sided Heart Failure`, `فشل الجانب الأيسر`),
        pt(
          `Low Cardiac Output (LCOP): Dizziness, headache, syncope (CNS); Myocardial ischemia (Heart); Oliguria (Kidney); Cold extremities & cyanosis (Skin); Fatigue & claudication (Muscle); Low SBP, weak pulse.`,
          `أعراض نقص نتاج القلب بكافة الأجهزة.`,
        ),
        pt(
          `Pulmonary Congestion: Dyspnea (exertional, orthopnea, PND, rest), exertional cough, recurrent infections, hemoptysis, pleural effusion, pulmonary edema, bilateral basal lung crepitations.`,
          `أعراض احتقان الرئة والتسمع بالسماعة.`,
        ),
        pt(
          `Cardiac Signs: Left ventricular enlargement (apex shifted out and down, localized), tachycardia, pulsus alternans (alternating strong/weak pulse), gallop rhythm at apex (S3/S4), functional mitral regurgitation murmur.`,
          `علامات القلب: تضخم البطين الأيسر، نبض متبادل، وإيقاع الخبب.`,
        ),
        s(`B. Right-Sided Heart Failure`, `فشل الجانب الأيمن`),
        pt(
          `Systemic Venous Congestion: Insomnia, diaphoresis on slight effort, raised JVP/distended neck veins, peripheral edema progressing to ascites, hepatomegaly (soft and tender), dyspepsia/anorexia leading to cardiac cachexia.`,
          `أعراض احتقان الأوردة وتضخم الكبد وتورم الأطراف الهزال القلبي.`,
        ),
        pt(
          `Cardiac Signs: Right ventricular enlargement (parasternal heave), tachycardia, gallop over tricuspid area, functional tricuspid regurgitation murmur.`,
          `علامات تضخم البطين الأيمن ولغط ارتجاع الصمام الثلاثي.`,
        ),
      ],
    },
    {
      number: 6,
      en: `Complications of Heart Failure`,
      ar: `مضاعفات فشل القلب`,
      entries: [
        pt(`Renal failure.`, `فشل كلوي.`),
        pt(`Liver cell failure / cardiac cirrhosis.`, `تليف كبدي قلبي.`),
        pt(`DVT and pulmonary embolism.`, `جلطات الساق والرئة.`),
        pt(`Valvular heart disease / functional MR.`, `ارتجاع ميترالي وظيفي.`),
        pt(`Cardiac cachexia.`, `هزال قلبي شديد.`),
        pt(`Acute pulmonary edema.`, `إديمة رئوية حادة.`),
        pt(`Stroke and syncope.`, `سكتة دماغية وإغماء.`),
        pt(`Cardiac arrhythmias.`, `اضطراب نبض القلب.`),
      ],
    },
    {
      number: 7,
      en: `Diagnostic Evaluation`,
      ar: `الفحوصات والأبحاث`,
      entries: [
        pt(`Chest X-Ray: Chamber enlargement, pulmonary venous congestion, acute pulmonary edema.`, `أشعة الصدر لاكتشاف التضخم والاحتقان.`),
        pt(`ECG: Non-diagnostic; detects cause (MI, arrhythmias) and chamber enlargement.`, `رسم القلب لاكتشاف السبب.`),
        pt(`Echocardiography:`, `الإيكو:`),
        fs(
          `Key investigation to measure ejection fraction (EF), detect cause, and structural abnormalities.`,
          `الفحص الجوهري الأساسي لقياس نسبة القذف EF.`,
        ),
        pt(`Cardiac Catheterization: Evaluates intracardiac pressures and coronary anatomy.`, `القسطرة لقياس الضغوط والتصوير.`),
        pt(`BNP / NT-proBNP:`, `BNP / NT-proBNP:`),
        fs(
          `BNP Level > 500 ng/L; high negative predictive value.`,
          `لو طبيعي يبقى الفشل القلبي مستبعد.`,
        ),
        pt(`Routine Labs: CBC (anemia), LFTs (liver congestion), RFTs (renal impairment), Electrolytes.`, `التحاليل الروتينية لمتابعة المضاعفات.`),
      ],
    },
    {
      number: 8,
      en: `Medical & Nursing Management`,
      ar: `العلاج الطبي والتمريضي`,
      entries: [
        s(`A. General Measures`, `الإجراءات العامة`),
        pt(
          `Treat underlying cause & precipitants: Revascularization, valve replacement, correct anemia/infections.`,
          `علاج السبب والمحفزات.`,
        ),
        pt(
          `General: Rest in semisitting position (reduces venous return); strict salt restriction (essential), fluid restriction in severe cases.`,
          `الراحة في وضع شبه جالس وتقليل الملح كأمر أساسي.`,
        ),

        s(`B. Pharmacological Therapy`, `العلاج الدوائي`),
        pt(`Decrease Preload: Diuretics (Loop, Thiazides, K-sparing), Venodilators (Nitrates).`, `تقليل الحمل القبلي.`),
        pt(`Decrease Afterload: Arterial Vasodilators (Hydralazine, Sodium nitroprusside).`, `تقليل حمل المقاومة.`),
        pt(`Inotropes: Digitalis, Dobutamine, Milrinone.`, `مقويات عضلة القلب.`),
        pt(
          `Neurohormonal Blockade: ACE inhibitors, ARBs, Aldosterone antagonists (Spironolactone, Eplerenone), Beta-blockers, ARNIs (Sacubitril / Valsartan).`,
          `مُثبطات الهرمونات المرضية.`,
        ),
        s(`Detailed Diuretic Pharmacology`, `الصيدلة التفصيلية لمدرات البول`),
        pt(
          `Loop Diuretics (Furosemide / Lasix): 40–160 mg/day (acts on Loop of Henle; most potent).`,
          `عمل على التواء هنلي وهي الأقوى.`,
        ),
        pt(
          `Thiazides (Hydrochlorothiazide): 25–100 mg/day (acts on distal tubules).`,
          `تأثير على الأنابيب البعيدة.`,
        ),
        pt(
          `Potassium-Sparing (Spironolactone): Acts on collecting duct (prevents hypokalemia).`,
          `حافظة للبوتاسيوم.`,
        ),

        s(`C. Guideline-Directed Medical Therapy (GDMT) for HFrEF`, `العلاج الدوائي الإرشادي لفشل القلب الانقباضي`),
        ld(
          `The GDMT plan for HFrEF consists of 4 essential drug pillars:`,
          `تتكون خطة GDMT لـ HFrEF من 4 ركائز أدوية أساسية:`,
        ),
        pt(`ARNIs / ACE inhibitors.`, `مثبطات النيبريليسين والأنجيوتنسين / مثبطات الإنزيم المحول.`),
        pt(`Beta-blockers.`, `حاصرات بيتا.`),
        pt(`MRAs (Spironolactone).`, `مضادات مستقبلات الألدوستيرون (سبيرونولاكتون).`),
        pt(`SGLT2 inhibitors.`, `مثبطات SGLT2.`),

        s(`D. Management of HFpEF & Interventions`, `علاج فشل القلب الانبساطي والتدخلات`),
        pt(
          `HFpEF: Treat comorbidities, diuretics for congestion, SGLT2 inhibitors, Digoxin is NOT routinely indicated.`,
          `علاج فشل الانبساط، والديجوكسين غير موصى به روتينياً.`,
        ),
        pt(
          `Interventions: ICD (if EF ≤35% to prevent sudden cardiac death), CRT (if EF ≤35% with LBBB), Revascularization (PCI/CABG), Assist devices & Transplant.`,
          `جهاز الصدمات، منظم المزامنة، القسطرة أو زراعة القلب.`,
        ),
      ],
    },
    {
      number: 9,
      en: `HFrEF vs. HFpEF Summary Comparison`,
      ar: `مقارنة HFrEF و HFpEF`,
      entries: [
        dataTable(
          `HFrEF vs. HFpEF`, `مقارنة فشل القلب الانقباضي والانبساطي`,
          [
            { en: `Feature`, ar: `الخاصية` },
            { en: `HFrEF (Reduced EF)`, ar: `فشل انقباضي` },
            { en: `HFpEF (Preserved EF)`, ar: `فشل انبساطي` },
          ],
          [
            { cells: [`LVEF`, `< 50%`, `≥ 50%`], tone: 'level1' },
            { cells: [`Primary Mechanism`, `Impaired contractility (ضعف الانقباض)`, `Impaired relaxation / stiffness (ضعف الانبساط والصلابة)`], tone: 'level2' },
            { cells: [`Common Causes`, `Ischemic heart disease, cardiomyopathy`, `Hypertension, aortic stenosis, diabetes, aging`], tone: 'level3' },
            { cells: [`Key Medications`, `ARNI/ACEi, Beta-blockers, MRAs, SGLT2i`, `Diuretics, SGLT2i, treat comorbidities`], tone: 'level4' },
            { cells: [`Digoxin Utility`, `May be used (يمكن استخدامه)`, `Not routinely indicated (غير موصى به روتينياً)`], tone: 'level5' },
          ],
        ),
      ],
    },
    {
      number: 10,
      en: `Nursing Red Flags & Priority Actions`,
      ar: `التنبيهات التمريضية`,
      entries: [
        s(`Red Flags`, `علامات الخطر`),
        pt(`Acute pulmonary edema (pink frothy sputum, crackles).`, `إديمة رئوية حادة: بلغم وردي رغوي وخرخرة بالرئة.`),
        pt(`Hypotension with hypoperfusion (oliguria, cold skin).`, `هبوط ضغط مع نقص تروية (قلة بول وجلد بارد).`),
        pt(`New arrhythmias.`, `اضطرابات نبض جديدة.`),
        pt(`Syncope.`, `إغماء.`),
        pt(`Rapid weight gain > 2 kg in 3 days.`, `زيادة وزن أسرع من 2 كجم في 3 أيام.`),
        s(`Priority Actions`, `الإجراءات ذات الأولوية`),
        pt(`Assess respiratory status.`, `متابعة التنفس.`),
        pt(`Position in Semi-Fowler's or High-Fowler's (reduces venous return).`, `وضعية قعود Fowler لتقليل رجوع الدم.`),
        pt(`Fluid balance & daily weights.`, `متابعة توازن السوائل والوزن اليومي.`),
        pt(`Medication management.`, `إدارة الأدوية.`),
        pt(`Patient education (salt restriction, daily weight).`, `تثقيف المريض: تقليل الملح ومتابعة الوزن.`),
      ],
    },
  ],
};

void [fl];
