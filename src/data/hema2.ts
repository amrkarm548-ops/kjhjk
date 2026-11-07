import { hematologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const hema2: Lecture = {
  id: 10,
  chapter: hematologyChapter,
  number: 2,
  en: `Anemia`,
  ar: `الأنيميا / فقر الدم`,
  shortEn: `Anemia`,
  shortAr: `الأنيميا`,
  sections: [
    {
      number: 1,
      en: `Definition & Core Concepts`,
      ar: `التعريف والمفاهيم الأساسية`,
      entries: [
        pt(
          `Definition of Anemia: Hemoglobin (Hb) concentration or red blood cell mass below the normal reference range for age, sex, and physiological state:`,
          `تعريف الأنيميا: انخفاض تركيز الهيموجلوبين (Hb) أو كتلة الكريات الحمراء عن المعدل الطبيعي المرجعي حسب العمر والجنس والحالة الفسيولوجية:`,
        ),
        sb(`Adult Males: Hb < 13 g/dL (Hematocrit < 40%).`, `الرجال البالغون: هيموجلوبين أقل من 13 جم/ديسيلتر (الهيماتوكريت أقل من 40%).`),
        sb(`Adult Females: Hb < 12 g/dL (Hematocrit < 35%).`, `النساء البالغات: هيموجلوبين أقل من 12 جم/ديسيلتر (الهيماتوكريت أقل من 35%).`),
        sb(`Pregnant Females: Hb < 11 g/dL.`, `الحوامل: هيموجلوبين أقل من 11 جم/ديسيلتر.`),
        fs(
          `Anemia is NOT a final diagnosis; it is a clinical sign/syndrome caused by an underlying primary disorder.`,
          `الأنيميا ليست تشخيصاً نهائياً قائماً بذاته، بل هي متلازمة وعلامة سريرية ناتجة عن مرض أولي يجب البحث عنه وتشخيصه.`,
        ),
        s(`Determinants of Clinical Severity`, `عوامل تحديد الشدة السريرية للأنيميا`),
        pt(
          `Rate of onset (acute rapid loss vs. chronic slow development).`,
          `سرعة البداية: نزيف حاد مقابل نقص مزمن.`,
        ),
        pt(`Degree of Hb reduction.`, `مقدار انخفاض الهيموجلوبين.`),
        pt(`Patient's cardiopulmonary reserve and age.`, `كفاءة الاحتياطي القلبي الرئوي وعمر المريض.`),
      ],
    },
    {
      number: 2,
      en: `Classifications of Anemia`,
      ar: `تصنيفات الأنيميا الثلاثة`,
      entries: [
        s(`A. Kinetic Classification (Marrow response, RPI)`, `التصنيف الحركي حسب استجابة النخاع RPI`),
        fl(
          `The kinetic classification depends on the Reticulocyte Production Index (RPI):`,
          `يعتمد التصنيف الحركي على مؤشر إنتاج الكريات الشبكية (RPI):`,
        ),
        pt(
          `Hyperproliferative Anemia (RPI > 2): Bone marrow responds appropriately by accelerating RBC production.`,
          `أنيميا فرط التكاثر (RPI أكبر من 2): النخاع يستجيب بشكل مناسب بتسريع إنتاج الكريات الحمراء.`,
        ),
        sb(
          `Causes: Hemolysis or Acute Blood Loss.`,
          `الأسباب: تكسير الدم أو النزيف الحاد.`,
        ),
        pt(
          `Hypoproliferative Anemia (RPI < 2): Bone marrow fails to produce adequate RBCs due to marrow damage or lack of essential building blocks.`,
          `أنيميا نقص التكاثر (RPI أقل من 2): يفشل النخاع في إنتاج كريات حمراء كافية بسبب تلف النخاع أو نقص المواد الأساسية للبناء.`,
        ),
        sb(
          `Causes: Iron deficiency, B12/folate deficiency, aplastic anemia, chronic disease, renal failure.`,
          `الأسباب: نقص الحديد، نقص B12 والفوليك، الأنيميا اللاتنسجية، الأمراض المزمنة، والفشل الكلوي.`,
        ),

        s(`B. Morphological Classification (by MCV)`, `التصنيف الهيكلي حسب حجم الكرية MCV`),
        fl(
          `The morphological classification by red cell size (MCV) is fundamental and central:`,
          `الجدول الهيكلي بحجم الكرية (MCV) أساسي ومحوري جداً:`,
        ),
        dataTable(
          `MORPHOLOGICAL CLASSIFICATION BY MCV`, `التصنيف الهيكلي بحجم الكرية`,
          [
            { en: `Category`, ar: `الفئة` },
            { en: `MCV Range`, ar: `مدى MCV` },
            { en: `Common Etiologies`, ar: `الأسباب الشائعة` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Microcytic Anemia`, `< 80 fL`, `Iron deficiency, Thalassemia trait, Anemia of chronic disease, Sideroblastic anemia, Lead poisoning.`, `صغر حجم الكريات (أقل من 80): أنيميا نقص الحديد، الثلاسيميا، أنيميا الأمراض المزمنة، وتسمم الرصاص.`], tone: 'level4' },
            { cells: [`Normocytic Anemia`, `80–100 fL`, `Acute blood loss, Hemolysis, Chronic Kidney Disease (CKD), Aplastic anemia, Mixed deficiencies.`, `حجم طبيعي (80-100): النزيف الحاد، تكسير الدم، أمراض الكلى المزمنة، والأنيميا اللاتنسجية.`], tone: 'level5' },
            { cells: [`Macrocytic Anemia`, `> 100 fL`, `Vitamin B12 deficiency, Folate deficiency, Alcohol misuse, Liver disease, Hypothyroidism, MDS.`, `كبر حجم الكريات (أكبر من 100): نقص فيتامين B12، نقص الفوليك، أمراض الكبد، والغدة الدرقية.`], tone: 'level1' },
          ],
          true,
        ),
      ],
    },
    {
      number: 3,
      en: `Diagnostic Algorithm & RPI Calculation`,
      ar: `الخوارزمية التشخيصية وحساب RPI`,
      entries: [
        s(`Step 1: Reticulocyte Production Index (RPI) Calculation`, `الخطوة 1: حساب مؤشر إنتاج الكريات الشبكية`),
        pt(
          `Corrected Reticulocyte Count = Reticulocyte % × (Patient's Hematocrit ÷ Normal Hematocrit (45%))`,
          `عدد الكريات الشبكية المصحح = نسبة الكريات الشبكية × (هيماتوكريت المريض ÷ الهيماتوكريت الطبيعي 45%).`,
        ),
        pt(
          `RPI = Corrected Reticulocyte Count ÷ Maturation Factor`,
          `RPI = عدد الكريات الشبكية المصحح ÷ معامل النضج.`,
        ),
        dataTable(
          `MATURATION FACTOR SCALE`, `معامل نضج الكريات الشبكية حسب مستوى الهيماتوكريت`,
          [
            { en: `Hematocrit (Hct)`, ar: `الهيماتوكريت` },
            { en: `Maturation Factor`, ar: `معامل النضج` },
          ],
          [
            { cells: [`Hct > 40%`, `Factor 1.0`], tone: 'level5' },
            { cells: [`Hct 30–39.9%`, `Factor 1.5`], tone: 'level4' },
            { cells: [`Hct 20–29.9%`, `Factor 2.0`], tone: 'level3' },
            { cells: [`Hct < 20%`, `Factor 2.5`], tone: 'level1' },
          ],
        ),

        s(`Step 2: Peripheral Blood Smear Examination`, `الخطوة 2: فحص لطخة الدم المحيطية`),
        fl(
          `The shape of the cells on the smear directs the diagnosis immediately:`,
          `شكل الكريات في اللطخة يوجه للتشخيص فوراً:`,
        ),
        dataTable(
          `PERIPHERAL BLOOD SMEAR FINDINGS`, `نتائج لطخة الدم المحيطية`,
          [
            { en: `Smear Feature`, ar: `شكل الخلايا باللطخة` },
            { en: `Diagnostic Indication`, ar: `الدلالة التشخيصية` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Microcytes & Pencil cells`, `Iron Deficiency Anemia`, `خلايا دقيقة صغيرة وخلايا قلمية تطاولية تدل على نقص الحديد.`], tone: 'level1' },
            { cells: [`Target cells`, `Thalassemia, Liver disease, HbC`, `خلايا النيشان: خلايا تشبه هدف النيشان تدل على الثلاسيميا أو أمراض الكبد.`], tone: 'level2' },
            { cells: [`Schistocytes`, `Microangiopathic Hemolytic Anemia (MAHA / DIC)`, `خلايا مجزأة: شظايا كريات حمراء مكسرة تدل على تكسير ميكانيكي حاد داخل الأوعية.`], tone: 'level3' },
            { cells: [`Spherocytes`, `Hereditary Spherocytosis or Autoimmune Hemolysis`, `خلايا كروية: دون تقعر وسطي تدل على أنيميا التكسير المناعية أو الوراثية.`], tone: 'level4' },
            { cells: [`Hypersegmented Neutrophils`, `Megaloblastic Anemia (B12 / Folate)`, `كريات بيضاء متعددة الفصوص (أكثر من 5 فصوص) تدل قطعياً على نقص B12 أو الفوليك.`], tone: 'level1' },
            { cells: [`Sickle cells`, `Sickle Cell Disease`, `خلايا هلالية منجلية تدل على أنيميا الخلايا المنجلية.`], tone: 'level5' },
            { cells: [`Basophilic stippling`, `Lead poisoning, Sideroblastic anemia`, `تنقيط قاعدي بالخلية يدل على تسمم الرصاص.`], tone: 'level2' },
          ],
          true,
        ),
      ],
    },
    {
      number: 4,
      en: `Detailed Specific Types of Anemia`,
      ar: `أنواع الأنيميا التفصيلية`,
      entries: [
        s(`1. Iron-Deficiency Anemia (IDA)`, `أنيميا نقص الحديد`),
        pt(
          `Pathophysiology: Depleted iron stores → impaired hemoglobin synthesis → microcytic hypochromic anemia.`,
          `نفاذ مخزون الحديد يمنع تصنيع الهيموجلوبين فتنتج أنيميا صغيرة الحجم شاحبة اللون.`,
        ),
        pt(
          `Clinical Clues: Pica, koilonychia, angular cheilosis; dysphagia with esophageal webs = Plummer-Vinson syndrome.`,
          `الدلائل السريرية: أكل الطين والثلج (Pica)، الأظافر الملعقية، تشقق زوايا الفم؛ وصعوبة البلع مع أغشية المريء = متلازمة بلامر-فنسون.`,
        ),
        pt(`Etiology:`, `الأسباب:`),
        sb(
          `Adult Males & Postmenopausal Females: Chronic GI blood loss until proven otherwise (must perform endoscopy to rule out GI cancer).`,
          `الرجال البالغون والنساء بعد سن اليأس: فقد دم مزمن من الجهاز الهضمي حتى يثبت العكس (يجب عمل مناظير لاستبعاد سرطان الجهاز الهضمي).`,
        ),
        fs(
          `Iron deficiency in men or postmenopausal women is considered occult GI bleeding until proven otherwise and requires endoscopy to exclude tumors.`,
          `نقص الحديد في الرجال أو النساء بعد سن اليأس يعتبر ناتجاً عن نزيف خفي بالجهاز الهضمي حتى يثبت العكس ويستدعي عمل مناظير لاستبعاد الأورام!`,
        ),
        sb(`Menstruating Females: Excessive menstrual bleeding (menorrhagia).`, `السيدات في سن الحيض: غزارة الطمث.`),
        pt(`Laboratory Profile:`, `الصورة المعملية:`),
        sb(
          `Serum Ferritin < 30 ng/mL: Most specific and accurate single diagnostic test for iron deficiency.`,
          `فيريتين المصل أقل من 30 هو الاختبار الأكثر دقة وتخصصاً لتشخيص نقص الحديد.`,
        ),
        sb(
          `Serum Iron: Low; Total Iron Binding Capacity (TIBC): Elevated; Transferrin Saturation: < 15–20%.`,
          `حديد المصل منخفض، السعة الرابطة للحديد (TIBC) مرتفعة، وتشبع الترانسفيرين أقل من 15–20%.`,
        ),

        s(`2. Megaloblastic Anemia (B12 & Folate Deficiency)`, `أنيميا نقص B12 والفوليك`),
        pt(
          `Pathophysiology: Impaired DNA synthesis → nuclear-cytoplasmic asynchronous maturation → megaloblastic erythropoiesis in bone marrow.`,
          `خلل تصنيع الحمض النووي DNA يمنع انقسام الخلايا ويسبب عدم تزامن نضج النواة والسيتوبلازم فينتج تكوين كريات ضخمة الأرومات بالنخاع.`,
        ),
        pt(`Vitamin B12 Deficiency Specifics:`, `خصائص نقص فيتامين B12:`),
        sb(
          `Caused by lack of Intrinsic Factor (Pernicious Anemia), ileal resection, or strict vegan diet.`,
          `ينتج عن نقص العامل الداخلي (الأنيميا الخبيثة)، استئصال اللفائفي، أو النظام النباتي الصارم.`,
        ),
        fs(
          `Neurological Manifestations: Subacute combined degeneration of spinal cord (SCD), paresthesias, sensory loss, and ataxia. Requires urgent B12 injection therapy to prevent permanent paralysis.`,
          `المظاهر العصبية: التنكس المدمج شبه الحاد للحبل الشوكي، التنميل، فقدان الإحساس، والترنح. يتطلب حقن B12 عاجلة لمنع الشلل الدائم.`,
        ),
        pt(
          `Folate Deficiency Specifics: Caused by poor diet, alcohol misuse, pregnancy, or drugs (Methotrexate). NO neurological deficits.`,
          `خصائص نقص الفوليك: ينتج عن سوء التغذية، الإفراط في الكحول، الحمل، أو أدوية مثل الميثوتريكسيت. لا توجد أعراض عصبية.`,
        ),
        pt(
          `Laboratory Profile: MCV > 100 fL, hypersegmented neutrophils, elevated Methylmalonic Acid (MMA) in B12 deficiency (MMA is normal in folate deficiency).`,
          `الصورة المعملية: MCV أكبر من 100، كريات بيضاء متعددة الفصوص، وارتفاع حمض الميثيل مالونيك (MMA) في نقص B12 (يكون طبيعياً في نقص الفوليك).`,
        ),

        s(`3. Hemolytic Anemia`, `أنيميا تكسير الدم`),
        pt(
          `Pathophysiology: Premature destruction of RBCs (RBC lifespan < 120 days); classified into intravascular or extravascular (spleen/liver).`,
          `تكسير مبكر للكريات الحمراء (عمرها أقل من 120 يوماً)؛ ويُصنف إلى داخل الأوعية أو خارجها (الطحال/الكبد).`,
        ),
        pt(
          `Clinical Presentation: Jaundice, splenomegaly, dark urine, and pigment gallstones.`,
          `الصورة السريرية: صفراء، تضخم طحال، بول داكن، وحصوات مرارية صبغية.`,
        ),
        pt(
          `Laboratory Profile: Reticulocytosis (high RPI > 2), low serum haptoglobin, high serum LDH, high indirect (unconjugated) bilirubin, positive Direct Antiglobulin Test (DAT / Coombs test) in autoimmune cases.`,
          `الصورة المعملية: زيادة الكريات الشبكية (RPI أكبر من 2)، انخفاض الهابتوجلوبين، ارتفاع LDH، ارتفاع البيليروبين غير المباشر، وإيجابية اختبار كومبس المباشر (DAT) في الحالات المناعية.`,
        ),

        s(`4. Aplastic Anemia (Bone Marrow Failure)`, `الأنيميا اللاتنسجية - فشل النخاع`),
        pt(
          `Pathophysiology: Immune-mediated destruction of hematopoietic stem cells → bone marrow failure.`,
          `تدمير مناعي للخلايا الجذعية المكونة للدم يؤدي إلى فشل النخاع.`,
        ),
        pt(`Clinical Triad of Pancytopenia:`, `الثالوث السريري لنقص الخلايا الثلاثة:`),
        sb(`Anemia → fatigue, dyspnea, pallor.`, `أنيميا تسبب إجهاد وشحوب.`),
        sb(`Neutropenia → recurrent severe bacterial/fungal infections.`, `نقص النيتروفيل يسبب عدوى متكررة.`),
        sb(`Thrombocytopenia → petechiae, ecchymoses, mucosal bleeding.`, `نقص الصفائح يسبب نقط وكدمات ونزيف.`),
        pt(
          `Diagnosis: Bone marrow biopsy showing hypocellular / empty marrow replaced by fat.`,
          `التشخيص: خزعة النخاع تظهر نخاعاً فارغاً مليئاً بالدهون.`,
        ),

        s(`5. Anemia of Chronic Disease (ACD)`, `أنيميا الأمراض المزمنة`),
        pt(
          `Pathophysiology: Chronic inflammation → elevated cytokine release (IL-6) → increased hepatic Hepcidin synthesis → traps iron inside macrophages and blocks intestinal iron absorption → iron-restricted erythropoiesis.`,
          `الالتهاب المزمن يرفع إفراز السيتوكينات (IL-6) فيزيد تصنيع الهيبسيدين بالكبد، فيحبس الحديد داخل البلعميات ويمنع امتصاصه من الأمعاء فينتج تكوين كريات حمراء مقيد بالحديد.`,
          `الالتهاب المزمن بيزود هرمون الهيبسيدين (Hepcidin) في الكبد، فيقفل على الحديد جوه المخازن ويمنع امتصاصه من الأمعاء، فيظهر نقص حديد وظيفي بالرغم من إن المخازن مليانة!`,
        ),
        pt(
          `Laboratory Profile: Low serum iron, LOW TIBC, NORMAL or ELEVATED Ferritin.`,
          `الصورة المعملية: حديد المصل منخفض، TIBC منخفضة، والفيريتين طبيعي أو مرتفع.`,
        ),

        s(`6. Anemia of Chronic Kidney Disease (CKD)`, `أنيميا أمراض الكلى المزمنة`),
        pt(
          `Primary Mechanism: Deficient production of Erythropoietin (EPO) by diseased renal peritubular cells.`,
          `الآلية الأساسية: نقص إفراز هرمون الإريثروبويتين من خلايا الكلى المصابة المحيطة بالأنابيب.`,
        ),
        pt(`Morphology: Normocytic normochromic anemia.`, `الشكل: أنيميا طبيعية الحجم واللون.`),
        pt(
          `Treatment: Recombinant Human Erythropoietin (EPO) + IV iron supplementation; target Hb 10–11.5 g/dL.`,
          `العلاج: الإريثروبويتين البشري المأشوب مع الحديد الوريدي؛ والهدف هيموجلوبين 10–11.5 جم/ديسيلتر.`,
        ),

        s(`7. Sickle Cell Disease (SCD)`, `أنيميا الخلايا المنجلية`),
        pt(
          `Pathology: Autosomal recessive point mutation in β-globin gene (glutamic acid replaced by valine) → HbS formation. Deoxygenation causes HbS polymerization, RBC sickling, chronic hemolysis, and microvascular vaso-occlusion.`,
          `الباثولوجي: طفرة نقطية جسدية متنحية في جين بيتا-جلوبين (استبدال حمض الجلوتاميك بالفالين) فينتج HbS. ونقص الأكسجين يسبب تبلمر HbS وتشكل الكريات المنجلية وتكسير مزمن وانسداد الأوعية الدقيقة.`,
        ),
        pt(
          `Clinical Complications: Painful vaso-occlusive crises (VOC), dactylitis in infants, acute chest syndrome, stroke, priapism, and functional autosplenectomy (leaving patients at high risk for encapsulated bacterial infections e.g., Pneumococcus).`,
          `المضاعفات السريرية: نوبات انسداد وعائي مؤلمة، التهاب الأصابع عند الرضع، متلازمة الصدر الحادة، السكتة الدماغية، الانتصاب المؤلم المستمر، واستئصال الطحال الوظيفي الذاتي (ما يعرض المريض لخطر عالٍ للعدوى بالبكتيريا المغلفة مثل المكورات الرئوية).`,
        ),
        pt(
          `Diagnosis: Hemoglobin Electrophoresis showing HbS.`,
          `التشخيص: فصل كهربائي للهيموجلوبين يظهر HbS.`,
        ),

        s(`8. Thalassaemias & Mentzer Index`, `الثلاسيميا ومؤشر منتزر`),
        pt(
          `Definition: Inherited quantitative reduction in α- or β-globin chain synthesis.`,
          `التعريف: نقص كمي وراثي في تصنيع سلاسل ألفا أو بيتا جلوبين.`,
        ),
        pt(
          `Forms: β-Thalassemia Major (Cooley's anemia – severe transfusion-dependent), Minor/Trait (asymptomatic microcytosis).`,
          `الأشكال: ثلاسيميا بيتا الكبرى (أنيميا كولي - شديدة تعتمد على نقل الدم)، والصغرى/الحاملة (صغر حجم الكريات بدون أعراض).`,
        ),
        fs(
          `The Mentzer Index for quick differentiation between thalassemia and iron deficiency: Mentzer Index = MCV (fL) ÷ RBC Count (millions/µL).`,
          `مؤشر منتزر للتفرقة السريعة بين الثلاسيميا ونقص الحديد: مؤشر منتزر = MCV ÷ عدد الكريات الحمراء (مليون/ميكرولتر).`,
        ),
        pt(`Interpretation:`, `تفسير المؤشر:`),
        sb(
          `Mentzer Index < 13: Suggests Thalassemia Trait.`,
          `مؤشر منتزر أقل من 13: يشير إلى الثلاسيميا الحاملة (عدد الكريات يكون عالياً جداً بالنسبة لحجمها الصغير).`,
        ),
        sb(
          `Mentzer Index > 13: Suggests Iron Deficiency Anemia.`,
          `مؤشر منتزر أكبر من 13: يشير إلى أنيميا نقص الحديد.`,
        ),
      ],
    },
    {
      number: 5,
      en: `Red Flags Requiring Urgent Evaluation`,
      ar: `علامات الخطر الأحمر بالدم`,
      entries: [
        fl(
          `5 red-flag signs that require urgent consultation with a hematologist:`,
          `5 علامات خطر تستدعي استشارة عاجلة لأخصائي أمراض الدم:`,
        ),
        pt(
          `Pancytopenia: Low RBCs, WBCs, and platelets on CBC → suggests bone marrow failure or acute leukemia.`,
          `نقص الخلايا الثلاثة: انخفاض الكريات الحمراء والبيضاء والصفائح في صورة الدم يشير إلى فشل النخاع أو لوكيميا حادة.`,
        ),
        pt(
          `Blasts on peripheral blood smear: Presence of immature blast cells → indicates acute leukemia.`,
          `وجود خلايا أرومية غير ناضجة في لطخة الدم يدل على لوكيميا حادة.`,
        ),
        pt(
          `Neurological symptoms in macrocytic anemia: Suggests B12 deficiency → requires immediate B12 therapy to prevent permanent spinal cord damage.`,
          `أعراض عصبية مع أنيميا كبيرة الكريات: تشير إلى نقص B12 وتتطلب علاجاً فورياً بـ B12 لمنع تلف الحبل الشوكي الدائم.`,
        ),
        pt(
          `Bone pain with lytic lesions or hypercalcemia: Suggests Multiple Myeloma or metastatic cancer.`,
          `ألم العظام مع آفات حالة للعظم أو ارتفاع الكالسيوم: يشير إلى المايلوما المتعددة أو سرطان منتشر.`,
        ),
        pt(
          `Unexplained iron deficiency in adult male or postmenopausal female: Requires urgent GI workup to rule out occult GI malignancy.`,
          `نقص حديد غير مفسر في رجل بالغ أو امرأة بعد سن اليأس: يتطلب فحصاً عاجلاً للجهاز الهضمي لاستبعاد ورم خفي.`,
        ),
      ],
    },
    {
      number: 6,
      en: `Nursing Considerations for Anemia`,
      ar: `الاعتبارات والتدخلات التمريضية`,
      entries: [
        pt(
          `Assessment: Monitor vital signs, oxygen saturation, mucosal pallor, neuro status, and bleeding manifestations.`,
          `التقييم: متابعة العلامات الحيوية، تشبع الأكسجين، شحوب الأغشية المخاطية، الحالة العصبية، ومظاهر النزيف.`,
        ),
        pt(`Oral Iron Administration Patient Teaching:`, `تثقيف المريض عند إعطاء الحديد بالفم:`),
        sb(
          `Take on an empty stomach with Vitamin C (orange juice) to enhance absorption.`,
          `يُؤخذ على معدة فارغة مع فيتامين C (عصير البرتقال) لتحسين الامتصاص.`,
        ),
        sb(
          `Avoid taking with milk, antacids, tea, or coffee.`,
          `تجنب أخذه مع اللبن أو مضادات الحموضة أو الشاي أو القهوة.`,
        ),
        sb(
          `Warn patient about dark/black stools and constipation.`,
          `تحذير المريض من البراز الداكن/الأسود والإمساك.`,
        ),
        pt(
          `Safety Precautions: Implement fall precautions for patients with severe anemia or B12 neuro deficits.`,
          `احتياطات السلامة: تطبيق احتياطات منع السقوط لمرضى الأنيميا الشديدة أو العجز العصبي لنقص B12.`,
        ),
      ],
    },
  ],
};

void [ld];
