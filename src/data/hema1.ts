import { hematologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const hema1: Lecture = {
  id: 9,
  chapter: hematologyChapter,
  number: 1,
  en: `Haematological Symptoms & Physical Signs`,
  ar: `الأعراض والعلامات السريرية لأمراض الدم`,
  shortEn: `Haematological Symptoms`,
  shortAr: `أعراض وعلامات أمراض الدم`,
  sections: [
    {
      number: 1,
      en: `Pathophysiological Mechanisms of Blood Symptoms`,
      ar: `الآليات المرضية لنشأة أعراض الدم`,
      entries: [
        ld(
          `Blood disease symptoms arise from three main pathophysiological mechanisms:`,
          `تنجم أعراض أمراض الدم عن ثلاثة آليات فسيولوجية مرضية رئيسية:`,
        ),
        pt(
          `Decreased blood cell production: Causes anemia (low RBCs), leukopenia (low WBCs), or thrombocytopenia (low platelets).`,
          `نقص إنتاج خلايا الدم: يسبب الأنيميا (نقص الكريات الحمراء)، نقص الكريات البيضاء، أو نقص الصفائح الدموية.`,
          `لما نخاع العظام (Bone marrow) يفشل أو يقل إنتاجه، بيحصل نقص في نوع أو أكثر من الخلايا الثلاثة، فيظهر هزال وإجهاد من الأنيميا، أو عدوى متكررة من نقص البيضاء، أو نزيف من نقص الصفائح.`,
        ),
        pt(
          `Increased blood cell destruction or loss: Causes hemolysis or acute/chronic bleeding.`,
          `زيادة تكسير أو فقدان خلايا الدم: تسبب تكسير الدم (التحلل) أو النزيف الحاد/المزمن.`,
          `الخلايا بتتصنع بشكل طبيعي في النخاع، لكن بتتكسر بسرعة جوه الأوعية الدموية أو في الطحال (Hemolysis)، أو بتفقد بره الجسم بسبب نزيف مستمر.`,
        ),
        pt(
          `Organ infiltration or dysfunction: Causes enlarged organs, lymph nodes, or bone pain.`,
          `ارتشاح وتسلل الخلايا للأعضاء: يسبب تضخم الأعضاء، تضخم الغدد اللمفاوية، أو ألم العظام.`,
          `خلايا الدم غير الطبيعية (زي في أورام الدم واللوكيميا) بتسرح وتتجمع في الكبد والطحال والغدد وتضغط على نخاع العظام فتعمل وجع شديد في العظام.`,
        ),
      ],
    },
    {
      number: 2,
      en: `General / Non-Specific Symptoms`,
      ar: `الأعراض العامة غير النوعية`,
      entries: [
        pt(
          `Pathophysiological Mechanism: These non-specific symptoms reflect anemia and reduced oxygen delivery to body tissues.`,
          `الآلية المرضية: تعكس هذه الأعراض غير النوعية الأنيميا ونقص وصول وإمداد الأكسجين للأنسجة.`,
        ),
        dataTable(
          `GENERAL / NON-SPECIFIC SYMPTOMS`, `الأعراض العامة غير النوعية`,
          [
            { en: `Symptom`, ar: `العرض` },
            { en: `Description`, ar: `الوصف` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Fatigue, weakness, malaise`, `General tiredness and lack of energy`, `إجهاد، ضعف عام، وشعور بالخمول والتعب مستمر.`], tone: 'level1' },
            { cells: [`Dizziness, headache, drowsiness`, `Reduced cerebral oxygenation`, `دوخة، صداع، ونعاس نتيجة نقص الأكسجين الواصل للمخ.`], tone: 'level2' },
            { cells: [`Shortness of breath on exertion, palpitations`, `Compensatory cardiopulmonary response`, `نهجان وضيق تنفس مع المجهود وخفقان بالقلب كاستجابة تعويضية لانخفاض الأكسجين.`], tone: 'level3' },
            { cells: [`Poor appetite and weight loss`, `Constitutional symptoms of underlying disease`, `فقدان شهية ونقص الوزن كأعراض عامة جهازية للمرض الأساسي.`], tone: 'level4' },
          ],
        ),
      ],
    },
    {
      number: 3,
      en: `Specific Symptoms Suggesting Blood Disorders`,
      ar: `الأعراض الخاصة الدالة على مرض بالدم`,
      entries: [
        s(`Bleeding Manifestations`, `أعراض النزيف`),
        pt(`Epistaxis: Nosebleeds.`, `نزيف الأنف.`),
        pt(`Gum bleeding: Bleeding from gums.`, `نزيف اللثة.`),
        pt(`GI or uterine bleeding: Hematemesis, melena, or menorrhagia.`, `نزيف هضمي أو رحمي شديد.`),
        pt(`Petechiae: Small pinpoint hemorrhagic spots (< 2 mm).`, `نقط نزفية دقيقة جداً بالجلد.`),
        pt(`Ecchymoses / Bruising: Larger superficial extravasations of blood.`, `كدمات وبقع نزفية واسعة.`),

        s(`Oral & GI Symptoms`, `أعراض الفم والجهاز الهضمي`),
        pt(
          `Pica: Craving for non-food substances e.g., ice, dirt, clay.`,
          `اشتهاء وأكل مواد غير غذائية مثل الثلج، الطين، أو التراب (عرض خاص بنقص الحديد).`,
        ),
        pt(
          `Burning tongue & Sore throat: Mucosal ulceration and glossitis.`,
          `حرقان باللسان، التهاب الحلق، وتقرحات بالفم.`,
        ),

        s(`Organ Involvement Symptoms`, `أعراض إشراك الأعضاء`),
        pt(`Pruritus / Itching: Generalized itching (seen in polycythemia vera or lymphoma).`, `حكة بالجلد.`),
        pt(`Bone pain: Severe deep bone pain (seen in leukemia or multiple myeloma).`, `ألم حاد بالعمق في العظام.`),
        pt(`Fever & Recurrent infections: Secondary to neutropenia.`, `سخونية وعدوى متكررة لنقص البيضاء.`),
        pt(`Lymphadenopathy & Hepatosplenomegaly: Swollen nodes and abdominal fullness.`, `تضخم الغدد اللمفاوية وانتفاخ البطن لتضخم الكبد والطحال.`),

        s(`Hemolysis Symptoms`, `أعراض تكسير الدم`),
        pt(`Jaundice: Yellowing of eyes and skin due to hyperbilirubinemia.`, `صفراء بالعين والجلد.`),
        pt(`Dark urine: Hemoglobinuria or urobilinogen in urine.`, `بول داكن اللون.`),
      ],
    },
    {
      number: 4,
      en: `History Clues to Etiology`,
      ar: `مفاتيح وتلميحات التاريخ المرضي`,
      entries: [
        fl(
          `Table linking history and habits to the likely cause of blood disorders:`,
          `جدول ربط التاريخ المرضي والعادات بالسبب المحتمل لأمراض الدم:`,
        ),
        dataTable(
          `HISTORY CLUES TO ETIOLOGY`, `ربط التاريخ المرضي بالسبب المحتمل`,
          [
            { en: `History Clue`, ar: `التلميح بالتاريخ المرضي` },
            { en: `Underlying Cause`, ar: `السبب المحتمل بالدم` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Strict Vegan Diet`, `Vitamin B12 deficiency`, `النظام الغذائي النباتي الصارم الخالي من اللحوم يسبب نقص فيتامين B12.`], tone: 'level1' },
            { cells: [`Alcohol Misuse`, `Folate deficiency & Macrocytosis`, `الإفراط في تناول الكحول يسبب نقص حمض الفوليك وكبر حجم الكريات.`], tone: 'level2' },
            { cells: [`Cytotoxic drugs / Immunosuppressants`, `Bone marrow suppression / Aplastic anemia`, `أدوية الكيماوي ومثبطات المناعة تسبب تثبيط وفشل نخاع العظام.`], tone: 'level3' },
            { cells: [`NSAIDs / Anticoagulants`, `GI bleeding & Platelet dysfunction`, `المسكنات ومضادات التجلط تزيد خطر النزيف المعدي وتؤثر على الصفائح.`], tone: 'level4' },
            { cells: [`Closely spaced pregnancies / Breastfeeding`, `Iron deficiency anemia`, `الحمل المتقارب والرضاعة الطبيعية الطويلة تستهلك مخزون الحديد بالجسم.`], tone: 'level5' },
            { cells: [`Chronic infection, cancer, autoimmune`, `Anemia of Chronic Disease (ACD)`, `الالتهابات المزمنة والأورام تسبب أنيميا الأمراض المزمنة.`], tone: 'level1' },
            { cells: [`Radiation, Benzene, Chemical Toxins`, `Bone marrow failure / Aplastic anemia`, `التعرض للإشعاع والبنزين والسموم يدمر الخلايا الجذعية بالنخاع.`], tone: 'level2' },
            { cells: [`Positive Family History`, `Hemophilia or hereditary hemolytic anemia`, `التاريخ العائلي الإيجابي يشير للهيموفيليا أو أنيميا التكسير الوراثية.`], tone: 'level3' },
          ],
          true,
        ),
      ],
    },
    {
      number: 5,
      en: `Physical Examination Findings`,
      ar: `علامات الفحص السريري لأمراض الدم`,
      entries: [
        pt(
          `Pallor: Best assessed in palpebral conjunctivae, palms, nail beds, and oral mucosa.`,
          `الشحوب: يُقيَّم بأفضل شكل في ملتحمة العين السفلية، راحة الكفين، سرير الأظافر، والأغشية المخاطية للفم.`,
        ),
        pt(
          `Koilonychia: Spoon-shaped nails.`,
          `الأظافر الملعقية: تقعر الأظافر لتصبح كالملعقة، وتعتبر علامة سريرية تخصصية لنقص الحديد الشديد (Iron Deficiency Anemia).`,
        ),
        pt(
          `Petechiae, Ecchymoses, Purpura: Non-blanching skin lesions indicating thrombocytopenia or vascular fragility.`,
          `نقط وكدمات نزفية جلدية لا تبهت بالضغط، تدل على نقص الصفائح الدموية أو هشاشة الأوعية.`,
        ),
        pt(
          `Jaundice: Yellow sclera and skin indicating increased unconjugated bilirubin from intravascular or extravascular hemolysis.`,
          `اليرقان/الصفراء: اصفرار العين والجلد الناتج عن زيادة البيليروبين بسبب تكسير كريات الدم الحمراء.`,
        ),
        pt(
          `Glossitis & Angular Cheilosis: Smooth, red, beefy tongue and painful sores at the corners of the mouth seen in B12, folate, or iron deficiency.`,
          `التهاب اللسان والتهاب زوايا الفم: لسان أملس وأحمر وتشقق مؤلم عند زوايا الفم يظهر في نقص B12 أو الفوليك أو الحديد.`,
        ),
        pt(
          `Neurological Signs in B12 Deficiency: Symmetrical paresthesia, loss of vibration and proprioception, spasticity, ataxia, and memory impairment (Subacute Combined Degeneration of spinal cord).`,
          `العلامات العصبية في نقص B12: تنميل متماثل، فقدان إحساس الاهتزاز والموضع، تشنج، ترنح، واضطراب الذاكرة (التنكس المدمج شبه الحاد للحبل الشوكي).`,
        ),
        fs(
          `Neurological signs of B12 deficiency require immediate treatment to prevent permanent damage.`,
          `العلامات العصبية لنقص فيتامين B12 تشمل التنميل، فقدان إحساس الاهتزاز والمكان، والتنكس المدمج شبه الحاد للحبل الشوكي، وتتطلب علاجاً فورياً لمنع التلف الدائم!`,
        ),
      ],
    },
  ],
};

void [sb];
