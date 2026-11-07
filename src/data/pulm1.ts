import { pulmonologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const pulm1: Lecture = {
  id: 6,
  chapter: pulmonologyChapter,
  number: 1,
  en: `Respiratory Symptoms, Signs & Diagnostic Assessment`,
  ar: `الأعراض والعلامات السريرية والتقييم التشخيصي للجهاز التنفسي`,
  shortEn: `Respiratory Assessment`,
  shortAr: `الأعراض والعلامات التنفسية`,
  sections: [
    {
      number: 1,
      en: `Overview & Clinical Significance`,
      ar: `نظرة عامة والأهمية السريرية`,
      entries: [
        pt(
          `Overview of Respiratory Assessment: Respiratory symptoms and signs are among the most common reasons for clinical presentation and encompass a broad spectrum of disorders affecting the airways, lung parenchyma, pulmonary vasculature, and respiratory pump.`,
          `الأعراض والعلامات التنفسية هي من أكثر أسباب المراجعة والزيارة السريرية شيوعاً، وتغطي طيفاً واسعاً من الاضطرابات التي تؤثر على الممرات الهوائية، نسيج الرئة، الأوعية الدموية الرئوية، ومضخة التنفس.`,
          `مشاكل الجهاز التنفسي بتيجي بكثرة في العيادات والطوارئ، وعشان تشخص صح لازم تفهم التشريح ووظيفة الممرات الهوائية والنسيج الرئوي والأوعية الدموية وعضلات التنفس.`,
        ),
        pt(
          `Clinical Significance: Respiratory complaints may reflect primary pulmonary disease, cardiac dysfunction, systemic disorders, or extrathoracic conditions. Because respiratory symptoms are often nonspecific, correlation with objective findings is essential.`,
          `الأهمية السريرية: قد تعكس الشكاوى التنفسية مرضاً رئوياً أولياً، أو خللاً وظيفياً قلبياً، أو اضطرابات جهازية عامة، أو حالات خارج الصدر. ولأن الأعراض غير نوعية، فإن ربطها بالفحص والنتائج الموضوعية أمر أساسي.`,
          `مش كل مريض بيكح أو عنده ضيق تنفس يبقى المشكلة في الرئة؛ ممكن تكون المشكلة من القلب (زي احتقان الرئة)، أو من الكلى، أو أنيميا شديدة.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Part 1: Respiratory Symptoms`,
      ar: `الأعراض التنفسية التفصيلية`,
      entries: [
        s(`1. Dyspnea & Orthopnea`, `ضيق التنفس والأورثوبنيا`),
        pt(`Dyspnea: Difficulty or awareness of breathing.`, `ضيق التنفس: صعوبة في التنفس أو الشعور الواعي بالأنفاس.`),
        pt(
          `Orthopnea Definition & Mechanisms: Dyspnea that develops in the supine position and is relieved by sitting or standing upright.`,
          `ضيق التنفس الاستلقائي (الأورثوبنيا): ضيق تنفس يظهر عند الاستلقاء فلات ويتحسن بالجلوس أو الوقوف مستقيماً.`,
        ),
        ld(`Mechanisms:`, `الآليات المرضية:`),
        sb(
          `Increased venous return in supine position → pulmonary congestion (cardiac cause).`,
          `زيادة عودة الدم للقلب عند الاستلقاء تسبب احتقان الرئة.`,
        ),
        sb(
          `Diaphragmatic elevation → reduced functional residual capacity.`,
          `ارتفاع الحجاب الحاجز يقلل السعة المتبقية للرئة.`,
        ),
        sb(`Bilateral diaphragmatic paralysis.`, `شلل الحجاب الحاجز بالجانبين.`),
        pt(
          `Quantification: Measured by the number of pillows required to sleep (e.g., "three-pillow orthopnea").`,
          `القياس: بعدد الوسائد اللازمة للنوم (مثل "أورثوبنيا بثلاث وسائد").`,
          `بنقيس شدة الأورثوبنيا بعدد المخاديد اللي المريض بيحطها ورا ظهره عشان يعرف ينام من غير ما يتخنق.`,
        ),

        s(`2. Cough`, `السعال / الكحة`),
        pt(
          `Definition: A protective reflex that clears the airways of secretions and foreign material; may be voluntary or involuntary.`,
          `السعال: منعكس وقائي ينظف الممرات الهوائية من الإفرازات والأجسام الغريبة؛ قد يكون إرادياً أو غير إرادي.`,
        ),
        dataTable(
          `CLASSIFICATION OF COUGH BY DURATION`, `تصنيف الكحة حسب المدة الزمنية`,
          [
            { en: `Category`, ar: `الفئة` },
            { en: `Duration`, ar: `المدة` },
            { en: `Common Causes`, ar: `الأسباب الشائعة` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Acute Cough`, `< 3 weeks`, `Viral URI, pneumonia, pulmonary embolism, aspiration`, `كحة حادة (أقل من 3 أسابيع): التهاب فيروسي، التهاب رئوي، جلطة رئوية، أو دخول جسم غريب.`], tone: 'level1' },
            { cells: [`Subacute Cough`, `3–8 weeks`, `Post-infectious, pertussis, GERD`, `كحة شبه حادة (من 3 لـ 8 أسابيع): ما بعد العدوى، السعال الديكي، أو ارتجاع المريء.`], tone: 'level3' },
            { cells: [`Chronic Cough`, `> 8 weeks`, `Asthma, COPD, GERD, post-nasal drip, ACE inhibitors, lung cancer, TB`, `كحة مزمنة (أكثر من 8 أسابيع): ربو، سدة رئوية، ارتجاع مريء، تنقيط أنفي، أدوية الضغط ACEi، سرطان الرئة، أو الدرن.`], tone: 'level4' },
          ],
        ),

        s(`3. Hemoptysis vs. Hematemesis`, `كحة الدم مقابل قيء الدم`),
        pt(
          `Definition of Hemoptysis: Coughing up blood originating from the respiratory tract.`,
          `خروج دم مع السعال مصدره الجهاز التنفسي.`,
        ),
        fl(
          `Key clinical differentiation between Hemoptysis and Hematemesis:`,
          `التفريق السريري الحاسِم بين كحة الدم (Hemoptysis) وقيء الدم (Hematemesis):`,
        ),
        dataTable(
          `HEMOPTYSIS vs. HEMATEMESIS`, `كحة الدم مقابل قيء الدم`,
          [
            { en: `Feature`, ar: `الخاصية` },
            { en: `Hemoptysis`, ar: `كحة الدم من الرئة` },
            { en: `Hematemesis`, ar: `قيء الدم من المعدة` },
          ],
          [
            { cells: [`Origin (المصدر)`, `Respiratory tract (الجهاز التنفسي)`, `Gastrointestinal tract (الجهاز الهضمي)`], tone: 'level4' },
            { cells: [`Color & Look (اللون والشكل)`, `Bright red, frothy (أحمر فاتح ورغوي)`, `Dark red/brown, coffee-ground (أحمر داكن/بني زي تفل القهوة)`], tone: 'level1' },
            { cells: [`pH (الأس الهيدروجيني)`, `Alkaline (قلوي)`, `Acidic (حمضي بسبب حمض المعدة)`], tone: 'level3' },
            { cells: [`Associated Symptoms`, `Cough, dyspnea (كحة ونهجان)`, `Nausea, vomiting, melena (غثيان وقيء وتبرز أسود)`], tone: 'level5' },
          ],
          true,
        ),
        s(`Causes of Hemoptysis`, `أسباب كحة الدم`),
        pt(
          `Infective: TB, pneumonia, lung abscess, bronchiectasis, aspergilloma.`,
          `عدوى: درن، التهاب رئوي، خراج رئة، وتوسع الشعب.`,
        ),
        pt(
          `Neoplastic: Bronchogenic carcinoma, metastatic disease.`,
          `أورام: سرطان الشعب الهوائية أو أورام ثانوية.`,
        ),
        pt(
          `Vascular: Pulmonary embolism, arteriovenous malformation, mitral stenosis, pulmonary hypertension.`,
          `وعائية: جلطة رئوية، ضيق ميترالي، وضغط شريان الرئة.`,
        ),
        pt(
          `Cardiac: Acute pulmonary edema producing pink, frothy sputum.`,
          `قلبية: إديمة رئوية حادة تنتج بلغماً وردياً رغوي مدمم.`,
        ),

        s(`4. Wheezing & Stridor`, `التزييق والخناق`),
        pt(
          `Wheezing Definition & Mechanisms: A continuous, high-pitched musical sound produced by turbulent airflow through narrowed airways, predominantly during expiration.`,
          `التزييق: صوت موسيقي حاد ومستمر ينتج عن تدفق الهواء في ممرات هوائية ضيقة، ويحدث غالباً أثناء الزفير.`,
        ),
        sb(
          `Mechanisms: Bronchospasm (asthma, COPD), mucosal edema (bronchitis), airway compression (tumor, foreign body), secretions.`,
          `الآليات: تشنج قصبي (ربو، سدة رئوية)، وذمة مخاطية (التهاب الشعب)، ضغط على الممر الهوائي (ورم، جسم غريب)، وإفرازات.`,
        ),
        sb(
          `Clinical Significance: Diffuse wheezing suggests generalized airway obstruction (asthma, COPD); localized wheezing suggests focal obstruction (tumor, foreign body).`,
          `الأهمية السريرية: التزييق المنتشر يدل على انسداد عام بالممرات الهوائية (ربو، سدة رئوية)، والتزييق الموضعي يدل على انسداد بؤري (ورم، جسم غريب).`,
        ),
        fs(
          `Absence of wheeze does NOT exclude severe airway obstruction ("Silent Chest" in life-threatening asthma).`,
          `غياب صوت التزييق لا ينفي الانسداد الشديد؛ حالة "Silent Chest" (الصدر الصامت) في نوبة الربو الشديدة تعتبر حالة طوارئ قاتلة لفقدان حركة الهواء بالكامل!`,
        ),
        pt(
          `Stridor Definition & Significance: A harsh, high-pitched inspiratory sound caused by turbulent airflow through a narrowed upper airway (larynx or trachea).`,
          `الخناق (Stridor): صوت خشن وحاد يظهر مع الشهيق نتيجة تدفق الهواء في مجرى هوائي علوي ضيق (الحنجرة أو القصبة الهوائية).`,
        ),
        sb(
          `Causes: Laryngeal edema (croup, anaphylaxis, angioedema), foreign body aspiration, laryngeal tumor, vocal cord paralysis, tracheal stenosis.`,
          `الأسباب: وذمة الحنجرة (الخناق، الحساسية المفرطة، الوذمة الوعائية)، استنشاق جسم غريب، ورم الحنجرة، شلل الحبال الصوتية، وضيق القصبة الهوائية.`,
        ),
        fs(
          `Stridor is a red-flag sign indicating significant upper airway obstruction and potential respiratory failure.`,
          `الـ Stridor علامة خطر حمراء تدل على انسداد المجرى الهوائي العلوي، وتستدعي تحضير أنبوبة حنجرية فوراً!`,
        ),

        s(`5. Pleuritic Chest Pain & Sputum Production`, `ألم الصدر البلوري وإفراز البلغم`),
        pt(
          `Pleuritic Chest Pain: Sharp, stabbing pain worsened by inspiration, coughing, or movement; relieved by splinting or lying on the affected side.`,
          `ألم الصدر البلوري: ألم حاد كطعنة السكين يزداد سوءاً مع الشهيق، الكحة، أو الحركة؛ ويهدى بالضغط أو النوم على الناحية المصابة.`,
        ),
        sb(
          `Causes: Pleurisy, pulmonary embolism, pneumothorax, pneumonia, rib fracture.`,
          `الأسباب: التهاب البلورا، جلطة رئوية، استرواح الصدر، التهاب رئوي، وكسر الضلع.`,
        ),
        pt(`Sputum Production Characteristics:`, `خصائص إفراز البلغم:`),
        sb(
          `Copious purulent sputum: Suggests bronchiectasis or lung abscess.`,
          `بلغم صديدي غزير يدل على توسع الشعب أو خراج الرئة.`,
        ),
        sb(
          `Large-volume frothy sputum: Suggests pulmonary edema.`,
          `بلغم رغوي غزير يدل على إديمة رئوية.`,
        ),
      ],
    },
    {
      number: 3,
      en: `Part 2: Respiratory Signs`,
      ar: `العلامات السريرية والفحص الصدري`,
      entries: [
        ld(
          `The clinical examination of the chest consists of 4 stages in order:`,
          `يتكون الفحص السريري للصدر من 4 مراحل بالترتيب:`,
        ),
        s(`1. General Examination`, `الفحص العام`),
        pt(
          `Cyanosis: Hypoxemia (Central: lips, tongue; Peripheral: extremities).`,
          `زرقة مركزية بالشفتين أو محيطية بالأطراف.`,
        ),
        pt(
          `Clubbing: Chronic hypoxemia (lung cancer, bronchiectasis, CF, ILD, infective endocarditis).`,
          `تعجر الأظافر في النقص المزمن للأكسجين.`,
        ),
        pt(`Breathing Patterns:`, `أنماط التنفس:`),
        sb(`Tachypnea (> 20/min) vs. Bradypnea (< 12/min).`, `تسرع التنفس (أكثر من 20 في الدقيقة) مقابل بطء التنفس (أقل من 12 في الدقيقة).`),
        sb(`Cheyne-Stokes: Heart failure, brain injury.`, `تنفس متدرج متبوع بوقف تنفس.`),
        sb(`Kussmaul's: Deep rapid breathing in metabolic acidosis (DKA).`, `تنفس كاسمول العميق في حموضة الدم السكرية.`),

        s(`2. Inspection & Palpation of the Chest`, `المعاينة والجس`),
        pt(`Inspection Findings:`, `نتائج المعاينة:`),
        sb(
          `Chest Deformities: Barrel chest (increased AP diameter in COPD).`,
          `الصدر البرميلي في السدة الرئوية.`,
        ),
        sb(
          `Asymmetry: Pneumothorax, pleural effusion, atelectasis, fibrosis.`,
          `عدم تماثل الصدر.`,
        ),
        pt(`Palpation Techniques & Tracheal Position:`, `تقنيات الجس وموضع القصبة الهوائية:`),
        sb(
          `Tracheal Position Deviation: Deviated TOWARD affected side: Fibrosis, Atelectasis.`,
          `انحراف القصبة نحو الناحية المصابة في التليف والانكماش.`,
        ),
        sb(
          `Tracheal Position Deviation: Deviated AWAY from affected side: Pneumothorax, Pleural effusion, Mass.`,
          `انحراف القصبة بعيداً عن الناحية المصابة في الاسترواح والانصباب البلوري والورم.`,
        ),
        pt(
          `Tactile Fremitus: Increased in consolidation; Decreased in effusion, pneumothorax, and COPD.`,
          `تزايد اهتزازات الكلام في التصلب الرئوي ونقصها في السوائل والهواء.`,
        ),

        s(`3. Percussion Notes`, `أصوات النقر على جدار الصدر`),
        fl(
          `Table of chest percussion notes and their clinical significance:`,
          `جدول أصوات النقر الصدري والدلالات السريرية:`,
        ),
        dataTable(
          `PERCUSSION NOTES`, `أصوات النقر الصدري`,
          [
            { en: `Percussion Note`, ar: `صوت النقر` },
            { en: `Characteristics & Conditions`, ar: `الأهمية والحالات السريرية` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Resonant`, `Normal lung tissue`, `صوت رنان طبيعي فوق رئة سليمة.`], tone: 'level5' },
            { cells: [`Hyperresonant`, `Pneumothorax, emphysema, large bullae`, `طبلي مرتفع: استرواح هوائي، انتفاخ رئة، أو فقاعات هوائية.`], tone: 'level3' },
            { cells: [`Dull`, `Consolidation, atelectasis, pleural thickening`, `مكتوم: التصلب الرئوي، الانكماش، أو سمك البلورا.`], tone: 'level4' },
            { cells: [`Stony Dull`, `Pleural effusion`, `صوت مكتوم حجري يدل على وجود انصباب وسوائل بلورية.`], tone: 'level1' },
            { cells: [`Tympanic`, `Large pneumothorax, gastric distension`, `طبلي: استرواح هوائي ضخم أو انتفاخ بالمعدة.`], tone: 'level2' },
          ],
          true,
        ),

        s(`4. Auscultation & Breath Sounds`, `التسمع بالسماعة`),
        pt(`Breath Sounds:`, `أصوات التنفس:`),
        sb(
          `Vesicular: Soft, low-pitched, inspiratory > expiratory (Normal).`,
          `صوت حويصلي طبيعي ناعم.`,
        ),
        sb(
          `Bronchial: Loud, high-pitched, expiratory > inspiratory (Consolidation, fibrosis).`,
          `صوت شعبي حاد ومرتفع في التصلب والتليف.`,
        ),
        pt(`Adventitious Sounds:`, `الأصوات الإضافية:`),
        sb(
          `Fine Crackles: Opening of small airways (Pulmonary edema, ILD, early pneumonia).`,
          `نشيج ناعم لفتح الحويصلات في الإديمة والالتهاب المبكر.`,
        ),
        sb(
          `Coarse Crackles: Secretions in large airways (Bronchitis, bronchiectasis, resolving pneumonia).`,
          `نشيج خشن لإفرازات الشعب الكبيرة.`,
        ),
        sb(
          `Pleural Rub: Friction of inflamed pleural surfaces (Pleurisy, PE, pneumonia).`,
          `احتكاك البلورا الملتهبة.`,
        ),
      ],
    },
    {
      number: 4,
      en: `Part 3: Diagnostic Evaluation & PFTs`,
      ar: `الأبحاث ووظائف الرئة`,
      entries: [
        s(`1. Spirometry Parameters`, `معايير قياس كفاءة التنفس`),
        fl(
          `Key differentiation between Obstructive and Restrictive diseases:`,
          `التفريق الحاسِم بين الأمراض الانسدادية (Obstructive) والتقييدية (Restrictive):`,
        ),
        dataTable(
          `SPIROMETRY: OBSTRUCTIVE vs. RESTRICTIVE`, `قياس التنفس: الانسدادي مقابل التقييدي`,
          [
            { en: `Parameter`, ar: `المعيار` },
            { en: `Obstructive (COPD, Asthma)`, ar: `انسدادي` },
            { en: `Restrictive (ILD, Chest Wall Disease)`, ar: `تقييدي` },
            { en: `Translation & Explanation`, ar: `الترجمة والشرح بالمصري` },
          ],
          [
            { cells: [`FEV1/FVC Ratio`, `< 0.70 (< 70%)`, `Normal or Increased (≥ 0.70)`, `نسبة حجم الزفير في الثانية الأولى إلى السعة الحيوية تكون أقل من 70% في الانسدادي، وطبيعية أو مرتفعة في التقييدي.`], tone: 'level1' },
            { cells: [`FVC`, `Normal or reduced`, `Markedly Reduced`, `السعة الحيوية القسرية تنخفض بوضوح شديد في التقييدي.`], tone: 'level3' },
            { cells: [`DLCO (Gas Exchange)`, `Reduced in emphysema; normal in asthma`, `Reduced`, `سعة انتشار الغازات تنخفض في انتفاخ الرئة والتليف الرئوي.`], tone: 'level4' },
          ],
          true,
        ),
      ],
    },
    {
      number: 5,
      en: `Part 4 & 5: Red Flags & Nursing Actions`,
      ar: `علامات الخطر والأولويات التمريضية`,
      entries: [
        s(`Red Flags Requiring Immediate Action`, `علامات الخطر الفورية`),
        pt(
          `Stridor: Upper airway obstruction → Immediate airway assessment; prepare for emergency intubation/tracheostomy.`,
          `انسداد مجرى الهواء العلوي.`,
        ),
        pt(
          `Silent Chest in Asthma: Severe bronchospasm → Emergency bronchodilators, steroids, ICU referral.`,
          `انقباض شعبي قاتل.`,
        ),
        pt(
          `Massive Hemoptysis (> 200 mL): Asphyxiation risk → Position affected side DOWN; secure airway; urgent bronchoscopy.`,
          `خطر الاختناق: وضعية الناحية المصابة لأسفل.`,
        ),
        pt(
          `SpO2 < 90% on room air: Severe hypoxemia → Immediate oxygen therapy; ABG; identify cause.`,
          `نقص أكسجين حاد.`,
        ),
        pt(
          `Respiratory rate > 30/min or < 8/min: Respiratory failure → Urgent assessment; prepare for ventilatory support.`,
          `فشل تنفسي.`,
        ),
        s(`Priority Nursing Positioning`, `وضعيات التمريض الموصى بها`),
        pt(
          `Dyspnea: High-Fowler's position.`,
          `وضعية قعود عالية لتقليل النهجان.`,
        ),
        pt(
          `Unilateral Pleural Effusion / Hemoptysis: Affected side DOWN (for splinting and preventing aspiration into healthy lung).`,
          `الناحية المصابة لأسفل.`,
        ),
        pt(
          `Unilateral Pneumonia: Good lung DOWN / affected side UP (to optimize ventilation-perfusion V/Q matching).`,
          `الرئة السليمة لأسفل والناحية المصابة لأعلى لتحسين توافق التهوية والتروية.`,
        ),
        fs(
          `In unilateral pneumonia, the GOOD side is placed DOWN to improve perfusion and ventilation.`,
          `في الالتهاب الرئوي أحادي الجانب، يوضع الجانب السليم لأسفل لتحسين التروية والتهوية!`,
        ),
      ],
    },
  ],
};
