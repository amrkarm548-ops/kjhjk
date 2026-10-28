import { chips, dataTable, figure, figures, kvTable, n, s, term, text, type Lecture } from './types';

export const lectureOne: Lecture = {
  number: 1,
  en: 'Degeneration, Pathological Calcification & Cell Death',
  ar: 'التنكس الخلوي والتكلس المرضي وموت الخلايا',
  shortEn: 'Degeneration & Calcification',
  sections: [
    {
      number: 1,
      en: 'Reversible Cell Injury / Degeneration',
      ar: 'التنكس الخلوي / الإصابة العكوسة',
      entries: [
        s('Definition & Characteristics', 'التعريف والخصائص'),
        term('Reversible Cell Injury (Degeneration)', 'التنكس الخلوي / الإصابة العكوسة', text(
          'Reversible cell injury (degeneration) is caused by mild injury of short duration, affects active parenchymatous cells, and the morphological changes affect only the cytoplasm.',
          'الإصابة الخلوية العكوسة (التنكس) تنتج عن إصابات خفيفة قصيرة المدى، وتؤثر على الخلايا الوظيفية النشطة، والتغيرات الشكلية تقتصر على السيتوبلازم فقط دون النواة.',
          'طالما الإصابة بسيطة ولفة زمنية قصيرة، النواة بتفضل سليمة ومش بتتأثر، والتغيرات والتورم بيحصلوا جوة السيتوبلازم بس. وعشان كده الخلية بتقدر ترجع لحالتها الطبيعية وتتصلح تماماً (Reversible) بمجرد زوال المؤثر الضار.',
        ), 'good'),
        kvTable('SHARED CHARACTERISTICS OF ALL DEGENERATIONS', 'السمات المشتركة لكل أنواع التنكس', [
          { labelEn: 'Cause', labelAr: 'السبب', value: 'Mild injury of short duration', note: 'إصابة خفيفة قصيرة المدى' },
          { labelEn: 'Cells affected', labelAr: 'الخلايا المصابة', value: 'Active parenchymatous cells', note: 'الخلايا الوظيفية النشطة' },
          { labelEn: 'Site of change', labelAr: 'مكان التغير', value: 'Cytoplasm ONLY', note: 'النواة سليمة تماماً' },
          { labelEn: 'Outcome', labelAr: 'النتيجة', value: 'Fully reversible', note: 'ترجع طبيعية بمجرد زوال المؤثر' },
        ]),
        s('Types of Degeneration', 'أنواع التنكس الخلوي'),
        term('1. Cloudy Swelling', 'الانتفاخ الضبابي / التورم الغائم', text(
          'Characterized by accumulation of water inside the cell due to failure of the Na+/K+ pump, making the cytoplasm pale and cloudy.',
          'يتميز بتراكم الماء داخل الخلية نتيجة فشل مضخة الصوديوم والبوتاسيوم، مما يجعل السيتوبلازم باهتاً وضبابياً.',
          'لما الأكسجين يقل أو يحصل نقص طاقة (ATP depletion)، مضخة الصوديوم والبوتاسيوم في غشاء الخلية بتقف. الصوديوم والمية يدخلوا جوة الخلية، فتنتفخ العضيات وسيتوبلازم الخلية ويبان تحت الميكروسكوب كأنه ضبابي أو غائم (Cloudy).',
        ), 'level1'),
        term('2. Hydropic Swelling / Hydropic Degeneration', 'التنكس المائي', text(
          'Advanced stage of cloudy swelling where severe accumulation of water creates large clear vacuoles inside the cytoplasm.',
          'مرحلة متقدمة من الانتفاخ الضبابي حيث يؤدي التراكم الشديد للماء إلى تكوين فجوات مائية كبيرة وواضحة داخل السيتوبلازم.',
          'دي خطوة أشد من الـ Cloudy swelling؛ المية هنا بتتجمع بكميات أكبر وبتبدأ تعمل فجوات مائية ضخمة (Vacuoles) جوة السيتوبلازم وتزق النواة، بس برضه لسه إصابة عكوسة ويمكن شفاء الخلية منها.',
        ), 'level3'),
        term('3. Fatty Change / Steatosis', 'التغير الدهني', text(
          'Abnormal accumulation of triglycerides within parenchymatous cells, most commonly seen in the liver.',
          'التراكم غير الطبيعي للدهون الثلاثية داخل الخلايا الوظيفية، وأكثر ما يُرى في الكبد.',
          'لما يحصل خلل في أيض وتكسير الدهون، تبدأ الدهون الثلاثية تتجمع وتتراكم جوة الخلايا النشطة زي خلايا الكبد (Hepatocytes)، ودي حالة شائعة بتصلح بمجرد معالجة السبب.',
        ), 'level2'),
        figures(figure('/images/reversible-degeneration.svg', 'Three Types of Degeneration', 'أنواع التنكس الخلوي الثلاثة', { tall: true, ratio: 1100 / 620 })),
      ],
    },
    {
      number: 2,
      en: 'Pathological Calcification',
      ar: 'التكلس المرضي',
      entries: [
        term('Pathological Calcification', 'التكلس المرضي', text(
          'Pathological calcification is the abnormal deposition of calcium salts, together with smaller amounts of iron, magnesium, and other mineral salts in tissues.',
          'التكلس المرضي هو الترسيب غير الطبيعي لأملاح الكالسيوم، مع كميات أصغر من أملاح الحديد والمغنيسيوم والمعادن الأخرى في الأنسجة.',
          'ترسيب أملاح الكالسيوم في أماكن غير طبيعية، ومعاه كميات صغيرة من الحديد والمغنيسيوم.',
        ), 'level2'),
        s('1. Metastatic Calcification', 'التكلس الانتقالي / المرضي العام'),
        term('Metastatic Calcification — Definition & Mechanism', 'التعريف والآلية', text(
          'Metastatic calcification is the deposition of calcium salts in normal tissues due to hypercalcemia (increased calcium level in blood).',
          'التكلس الانتقالي هو ترسب أملاح الكالسيوم في أنسجة سليمة وطبيعية نتيجة زيادة نسبة الكالسيوم في الدم (Hypercalcemia).',
          'هنا النسيج نسيج طبيعي وسليم 100% ومش ميت ولا تالف، لكن المشكلة إن الدم مليان كالسيوم بنسبة عالية جداً فوق الطبيعي (Hypercalcemia)، فالكالسيوم الزيادة ده يبدأ يترسب في الأنسجة المختلفة.',
        ), 'gold'),
        s('Causes of Metastatic Calcification', 'أسباب التكلس الانتقالي'),
        n('Hypercalcemia results from the following three groups of causes:', 'تنتج زيادة الكالسيوم في الدم عن المجموعات الآتية من الأسباب:', '', undefined, false, true),
        s('1. Increased calcium absorption from intestine', 'زيادة الامتصاص من الأمعاء'),
        n('Hypervitaminosis D: excess vitamin D leads to massive intestinal calcium absorption.', 'فرط فيتامين د: زيادة فيتامين د تؤدي لامتصاص كميات هائلة من الكالسيوم.', '', undefined, true),
        n('Excess milk intake for treatment of peptic ulcer (milk-alkali syndrome).', 'تناول الحليب بكثرة لعلاج قرحة المعدة: متلازمة الحليب والقلويات الناتجة عن شرب الحليب بكثرة مع مضادات الحموضة.', '', undefined, true),
        s('2. Increased calcium mobilization from bone', 'زيادة السحب من العظام'),
        n('Hyperparathyroidism: increased PTH dissolves bone calcium and transfers it to blood.', 'فرط نشاط الغدة الجارات درقية: زيادة هرمون PTH يذيب الكالسيوم من العظام وينقله للدم.', '', undefined, true),
        n('Prolonged immobilization: e.g. long-term limb casting, where reduced pressure on bone releases calcium into blood.', 'التثبيت أو الترقيد الطويل للطرف: مثل الجبس لفترات طويلة حيث يقل الضغط على العظام فيخرج الكالسيوم منها للدم.', '', undefined, true),
        n('Destructive diseases of bone: such as Paget disease.', 'أمراض العظام المدمرة: مثل مرض باجيت (Paget disease).', '', undefined, true),
        n('Malignant tumors of bone: such as multiple myeloma.', 'أورام العظام الخبيثة: مثل سرطان المايلوما المتعددة (Multiple myeloma).', '', undefined, true),
        n('Diffuse skeletal metastasis: malignant tumors destroy bone and release its calcium into blood.', 'انتشار السرطانات الثانوية في الهيكل العظمي: تدمير الأورام الخبيثة للعظام ويخرج منها الكالسيوم للدم.', '', undefined, true),
        s('3. Other Causes', 'أسباب أخرى'),
        n('Sarcoidosis.', 'مرض الساركوئيد المزمن.', '', undefined, true),
        n('Renal failure: leads to phosphate retention and secondary stimulation of the parathyroid glands.', 'الفشل الكلوي المزمن: يؤدي لاحتباس الفوسفات وتحفيز الغدة الجارات درقية ثانوياً.', '', undefined, true),
        figures(figure('/images/metastatic-calcification-sites.svg', 'Causes & Sites of Metastatic Calcification', 'أسباب وأماكن التكلس الانتقالي', { tall: true, ratio: 1100 / 470 })),
        s('Sites of Metastatic Calcification', 'أماكن ترسب التكلس الانتقالي'),
        n('Metastatic calcification occurs principally in the interstitial tissues of: 1) Renal tubules (nephrocalcinosis). 2) Mucosa of stomach. 3) Wall of lung alveoli. 4) Media of the blood vessels.', 'يحدث التكلس الانتقالي بشكل أساسي في الأنسجة الخلالية للأماكن التالية: ١) أنابيب الكلية (تكلس الكلى). ٢) مخاطية المعدة. ٣) جدار الحويصلات الهوائية في الرئة. ٤) الطبقة الوسطى للأوعية الدموية.', 'الأماكن دي بالذات بتميل لترسيب الكالسيوم لأنها أماكن بيفقد فيها الجسم حمضية وبيميل فيها للوسط القلوي (Alkaline medium)، مما يسهل ترسيب أملاح الكالسيوم فيها.', undefined, false, false, true),
        dataTable(
          'THE 4 SITES OF METASTATIC CALCIFICATION', 'المواقع الأربعة للتكلس الانتقالي',
          [
            { en: 'Site', ar: 'الموقع' },
            { en: 'Arabic Term', ar: 'المصطلح العربي' },
          ],
          [
            { cells: ['1. Renal tubules', 'أنابيب الكلية — Nephrocalcinosis'], tone: 'level1' },
            { cells: ['2. Mucosa of stomach', 'مخاطية المعدة'], tone: 'level2' },
            { cells: ['3. Wall of lung alveoli', 'جدار الحويصلات الهوائية في الرئة'], tone: 'level3' },
            { cells: ['4. Media of the blood vessels', 'الطبقة الوسطى للأوعية الدموية'], tone: 'level4' },
          ],
        ),
        s('Microscopic Picture of Calcification', 'الصورة المجهرية للتكلس'),
        term('Basophilic Calcium Deposits', 'الترسبات القاعدية', text(
          'Basophilic, amorphous, granular or clumped calcium deposits stained blue/purple with Hematoxylin & Eosin (H&E) stain.',
          'تظهر أملاح الكالسيوم تحت الميكروسكوب كترسبات قاعدية (زارقة/بنفسجية اللون)، غير منتظمة أو حبيبية أو متكتلة مع صبغة الهيماتوكسيلين والإيوسين.',
          'تحت الميكروسكوب الكالسيوم بيطلع زارق أو بنفسجي، وشكله غير منتظم أو حبيبي أو متكتل.',
        ), 'level2'),
      ],
    },
    {
      number: 3,
      en: 'Apoptosis — Programmed Cell Death',
      ar: 'الموت الخلوي المبرمج (Apoptosis)',
      entries: [
        term('Apoptosis', 'الموت الخلوي المبرمج', text(
          'Apoptosis is a pathway of cell death in which cells activate enzymes that degrade the cells own nuclear DNA and nuclear and cytoplasmic proteins.',
          'الموت الخلوي المبرمج هو مسار لموت الخلية تقوم فيه الخلية بتنشيط إنزيمات داخلية تهضم وتفكك الـ DNA الخاص بالنواة وبروتينات السيتوبلازم والنواة.',
          'يسمى الانتحار الخلوي المبرمج؛ الخلية هنا بتكون مبرمجة جينياً إنها تموت نفسها بنفسها بشكل نظيف وهادي ومنظم دون أن يخرج محتواها لبرة ودون أن تسبب أي التهاب حولها (No inflammatory reaction)، عكس الموت النخر التدميري.',
        ), 'level1'),
        figures(figure('/images/apoptosis-vs-necrosis.svg', 'Apoptosis vs Necrosis', 'الموت المبرمج مقابل النخر', { tall: true, ratio: 1100 / 560 })),
        chips([
          { en: 'Cell activates its own degrading enzymes', ar: 'الخلية تنشط إنزيماتها الذاتية الهاضمة' },
          { en: 'Degrades nuclear DNA and cytoplasmic proteins', ar: 'تفكك الـ DNA النووي وبروتينات السيتوبلازم' },
          { en: 'No inflammatory reaction around the dead cell', ar: 'لا يوجد أي التهاب حول الخلية الميتة' },
        ]),
      ],
    },
    {
      number: 4,
      en: 'Key Facts You Must Know',
      ar: 'الحقائق الواجب حفظها',
      entries: [
        kvTable('CRITICAL PATHOLOGY FACTS', 'حقائق باثولوجية حاسمة للامتحان', [
          { labelEn: 'Degeneration cause', labelAr: 'سبب التنكس', value: 'Mild, short-duration injury' },
          { labelEn: 'Site of change', labelAr: 'مكان التغير', value: 'Cytoplasm only (nucleus intact)' },
          { labelEn: 'Cloudy swelling mechanism', labelAr: 'آلية الانتفاخ الضبابي', value: 'Na+/K+ pump failure' },
          { labelEn: 'Hydropic swelling', labelAr: 'التنكس المائي', value: 'Large clear vacuoles' },
          { labelEn: 'Fatty change target', labelAr: 'أشهر عضو للتغير الدهني', value: 'Liver (Hepatocytes)' },
          { labelEn: 'Metastatic calcification cause', labelAr: 'سبب التكلس الانتقالي', value: 'Hypercalcemia in NORMAL tissue' },
          { labelEn: 'Metastatic sites count', labelAr: 'عدد مواقع التكلس', value: '4 sites' },
          { labelEn: 'Calcium microscopy', labelAr: 'الصورة المجهرية للتكلس', value: 'Basophilic, amorphous, granular' },
          { labelEn: 'Apoptosis inflammation', labelAr: 'الالتهاب في الموت المبرمج', value: 'NO inflammation' },
          { labelEn: 'Necrosis inflammation', labelAr: 'الالتهاب في النخر', value: 'Always inflammatory response' },
        ]),
      ],
    },
  ],
};
