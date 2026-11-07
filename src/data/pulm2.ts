import { pulmonologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const pulm2: Lecture = {
  id: 7,
  chapter: pulmonologyChapter,
  number: 2,
  en: `Chronic Obstructive Pulmonary Disease (COPD)`,
  ar: `مرض السدة الرئوية المزمنة`,
  shortEn: `COPD`,
  shortAr: `السدة الرئوية المزمنة COPD`,
  sections: [
    {
      number: 1,
      en: `Definition & Clinical Phenotypes`,
      ar: `التعريف والأنماط السريرية`,
      entries: [
        pt(
          `Definition of COPD: Chronic obstructive pulmonary disease (COPD) is a common, preventable, and treatable disease characterized by persistent respiratory symptoms and airflow limitation due to airway and/or alveolar abnormalities, usually caused by significant exposure to noxious particles or gases. Airflow limitation is not fully reversible and is typically progressive.`,
          `السدة الرئوية المزمنة مرض شائع، قابل للوقاية والعلاج، يتميز بأعراض تنفسية مستمرة وإعاقة تدفق الهواء الناتجة عن تشوهات الممرات الهوائية والحويصلات بسبب التعرض للجسيمات والغازات الضارة. وإعاقة الهواء غير قابلة للانعكاس الكامل وتتزايد تدريجياً.`,
        ),
        pt(`Two Overlapping Clinical Phenotypes:`, `النمطان السريريان المتداخلان:`),
        fl(
          `Comparison between Chronic Bronchitis and Emphysema:`,
          `المقارنة بين التهاب الشعب المزمن وانتفاخ الرئة:`,
        ),
        dataTable(
          `CHRONIC BRONCHITIS vs. EMPHYSEMA`, `التهاب الشعب المزمن مقابل انتفاخ وتدمير الحويصلات`,
          [
            { en: `Feature`, ar: `الخاصية` },
            { en: `Chronic Bronchitis`, ar: `التهاب الشعب المزمن` },
            { en: `Emphysema`, ar: `انتفاخ وتدمير الحويصلات` },
          ],
          [
            { cells: [`Predominant Pathology`, `Inflammation of large airways with mucus hypersecretion.`, `Destruction of alveolar walls and loss of elastic recoil.`], tone: 'level4' },
            { cells: [`Key Clinical Feature`, `Productive cough for ≥ 3 months in 2 consecutive years.`, `Hyperinflation, dyspnea, reduced DLCO.`], tone: 'level3' },
            { cells: [`Historic Phenotype Name`, `"Blue Bloater" (أزرق ومنتفخ مع زرقان وتورم مبكر).`, `"Pink Puffer" (نهجان شديد مع لون وردي).`], tone: 'level1' },
            { cells: [`Body Habitus`, `Overweight / edematous (زيادة وزن وتورم).`, `Thin / cachectic (نحيف ومجهد).`], tone: 'level5' },
          ],
          true,
        ),
      ],
    },
    {
      number: 2,
      en: `Pathophysiology`,
      ar: `الآلية المرضية لـ COPD`,
      entries: [
        pt(
          `Airflow Limitation: Mucus hypersecretion, airway inflammation (neutrophils, CD8+ T cells), structural remodeling, and loss of elastic recoil.`,
          `إفراز مخاطي، التهاب نيتروفيلي، وتدمر المرونة.`,
        ),
        pt(
          `Air Trapping & Dynamic Hyperinflation: Loss of elastic recoil causes dynamic airway collapse during expiration, trapping air and creating Auto-PEEP (intrinsic PEEP), which increases inspiratory work.`,
          `احتباس الهواء والانتفاخ الديناميكي: فقدان المرونة يسبب انهيار الممرات الهوائية أثناء الزفير فيحتبس الهواء ويتكون Auto-PEEP مما يزيد جهد الشهيق.`,
          `لما الرئة تفقد مرونتها، الممرات الهوائية بتقفل أثناء الزفير، فالهواء يتحبس جوه الرئة ويقلل المساحة المتاحة للشهيق الجديد وده بيسموه Auto-PEEP.`,
        ),
        pt(
          `Gas Exchange Abnormalities: V/Q mismatch causing hypoxemia and hypercapnia (CO₂ retention, respiratory acidosis, and CO₂ narcosis).`,
          `اضطراب تبادل الغازات: عدم توافق التهوية والتروية (V/Q) يسبب نقص الأكسجين وارتفاع ثاني أكسيد الكربون (احتباس CO₂، حموضة تنفسية، وغيبوبة CO₂).`,
        ),
        pt(
          `Pulmonary Hypertension & Cor Pulmonale: Chronic hypoxemia → hypoxic pulmonary vasoconstriction → vascular remodeling → pulmonary hypertension → right ventricular hypertrophy and failure (Cor Pulmonale).`,
          `ارتفاع ضغط الشريان الرئوي والقلب الرئوي: نقص الأكسجين المزمن يسبب انقباض الأوعية الرئوية ثم تغير بنائها ثم ارتفاع ضغط الشريان الرئوي ثم تضخم وفشل البطين الأيمن (القلب الرئوي).`,
        ),
      ],
    },
    {
      number: 3,
      en: `Etiology & Risk Factors`,
      ar: `عوامل الخطر والأسباب`,
      entries: [
        s(`Host Factors`, `العوامل الخاصة بالمريض`),
        pt(
          `α1-antitrypsin deficiency: Genetic cause suspected in young patients presenting with basal emphysema.`,
          `نقص إنزيم ألفا-1 أنتيتريبسين: سبب جيني يُشتبه به عند المرضى صغار السن المصابين بانتفاخ الرئة في قواعد الرئتين.`,
        ),
        fs(
          `α1-antitrypsin deficiency is a genetic cause suspected in young patients with basal emphysema.`,
          `نقص إنزيم ألفا-1 أنتيتريبسين هو سبب جيني يُشتبه به عند المرضى صغار السن المصابين بانتفاخ الرئة في قواعد الرئتين.`,
        ),
        s(`Environmental Factors`, `العوامل البيئية`),
        pt(
          `Tobacco Smoking: The single most important risk factor worldwide (cigarettes, pipes, water pipes, passive smoking).`,
          `التدخين هو السبب الأول والأهم عالمياً.`,
        ),
        pt(
          `Occupational dusts, biomass fuel combustion (indoor air pollution), outdoor air pollution.`,
          `الغبار المهني، احتراق وقود الكتلة الحيوية (تلوث الهواء الداخلي)، وتلوث الهواء الخارجي.`,
        ),
      ],
    },
    {
      number: 4,
      en: `Diagnostics & GOLD Guidelines`,
      ar: `التشخيص والتصنيف الدوائي`,
      entries: [
        s(`Spirometry Criterion`, `المعيار الجوهري التشخيصي`),
        pt(
          `Post-bronchodilator FEV1/FVC < 0.70 (< 70%) confirms persistent, non-fully reversible airflow limitation.`,
          `قياس التنفس بعد الموسع أقل من 0.70 يؤكد وجود السدة الرئوية.`,
        ),
        fs(
          `Post-bronchodilator FEV1/FVC < 0.70 is the diagnostic criterion.`,
          `قياس التنفس بعد الموسع أقل من 0.70 يؤكد وجود السدة الرئوية.`,
        ),
        s(`GOLD Initial Pharmacotherapy (2023+ Updates)`, `العلاج الدوائي الأولي حسب GOLD`),
        dataTable(
          `GOLD INITIAL PHARMACOTHERAPY`, `العلاج الدوائي الأولي حسب GOLD`,
          [
            { en: `GOLD Group`, ar: `المجموعة` },
            { en: `First-Line Pharmacotherapy`, ar: `العلاج الخط الأول` },
            { en: `Translation & Explanation`, ar: `الشرح والترجمة بالمصري` },
          ],
          [
            { cells: [`Group A`, `Single Bronchodilator (SABA, SAMA, LABA, or LAMA)`, `موسع شعب واحد قصير أو طويل المدى.`], tone: 'level5' },
            { cells: [`Group B`, `Dual bronchodilation (LABA + LAMA)`, `موسع شعب مزدوج طويل المدى.`], tone: 'level4' },
            { cells: [`Group E`, `LABA + LAMA (+ ICS if blood eosinophils ≥ 300 cells/µL)`, `موسع مزدوج + كورتيزون مستنشق لو الإيوزينوفيل 300 فأكثر أو كثرت النوبات.`], tone: 'level1' },
          ],
        ),
      ],
    },
    {
      number: 5,
      en: `Long-Term Oxygen Therapy (LTOT)`,
      ar: `شروط الأكسجين المنزلي`,
      entries: [
        fl(
          `Indications and criteria for prescribing continuous home oxygen (LTOT):`,
          `دواعي وشروط وصف الأكسجين المنزلي المستمر (LTOT):`,
        ),
        dataTable(
          `LTOT CRITERIA`, `معايير الأكسجين المنزلي طويل الأمد`,
          [
            { en: `Indication Criteria`, ar: `معايير الاستحقاق` },
            { en: `Target & Duration`, ar: `الهدف والمدة` },
            { en: `Clinical Benefit`, ar: `الفائدة السريرية` },
          ],
          [
            { cells: [`PaO2 ≤ 55 mmHg OR SpO2 ≤ 88% (confirmed twice).`, `Target SpO2 ≥ 90% for at least 15–18 hours/day.`, `Improves survival, reduces polycythemia, improves hemodynamics.`], tone: 'level1' },
            { cells: [`PaO2 56–59 mmHg WITH cor pulmonale or polycythemia.`, `Controlled Venturi mask administration.`, `يقلل الوفيات ويحسن البقاء على قيد الحياة.`], tone: 'level3' },
          ],
          true,
        ),
        pt(
          `Warning during Acute Exacerbations: Oxygen target during acute exacerbations must be titrated strictly to SpO2 88–92% using a Venturi mask to prevent CO₂ retention and narcosis.`,
          `تحذير أثناء النوبات الحادة: يجب ضبط هدف الأكسجين بدقة عند SpO2 من 88% إلى 92% باستخدام قناع فنتوري لمنع احتباس CO₂ والغيبوبة.`,
        ),
        fs(
          `During acute exacerbations, oxygen is titrated to 88–92% only, to prevent CO₂ retention and CO₂ narcosis.`,
          `أثناء النوبات الحادة يُعطى الأكسجين بإنعاش مضبوط بين 88% إلى 92% فقط لمنع احتباس ثاني أكسيد الكربون ودخول المريض في غيبوبة (CO2 narcosis).`,
        ),
      ],
    },
    {
      number: 6,
      en: `Summary Comparison: COPD vs. Asthma`,
      ar: `جدول المقارنة الحاسمة`,
      entries: [
        fl(
          `Clinical differences between COPD and Asthma:`,
          `جدول الفرق السريري بين السدة الرئوية والربو:`,
        ),
        dataTable(
          `COPD vs. ASTHMA`, `السدة الرئوية المزمنة مقابل الربو الشعبي`,
          [
            { en: `Feature`, ar: `الخاصية` },
            { en: `COPD`, ar: `السدة الرئوية المزمنة` },
            { en: `Asthma`, ar: `الربو الشعبي` },
          ],
          [
            { cells: [`Age of Onset`, `Usually > 40 years (عادة بعد 40 سنة)`, `Often childhood (غالباً في الطفولة)`], tone: 'level1' },
            { cells: [`Smoking History`, `Almost always present (موجود دائماً)`, `Variable / non-essential (غير أساسي)`], tone: 'level2' },
            { cells: [`Symptom Pattern`, `Persistent, progressive (مستمر وتصاعدي)`, `Episodic, variable, nocturnal (نوبي ومتغير)`], tone: 'level3' },
            { cells: [`Reversibility`, `Incomplete (غير كامل الانعكاس)`, `Significant (≥ 12% and ≥ 200 mL in FEV1) (انعكاسي ملحوظ)`], tone: 'level4' },
            { cells: [`Airway Inflammation`, `Neutrophils, CD8+ T cells`, `Eosinophils, CD4+ T cells`], tone: 'level5' },
            { cells: [`DLCO`, `Reduced in emphysema (منخفض في انتفاخ الرئة)`, `Normal (طبيعي)`], tone: 'level1' },
          ],
          true,
        ),
      ],
    },
  ],
};

void [ld, sb];
