import { cardiologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fc, fl, fs, ld, pt, sb } from './helpers';

export const cardio1: Lecture = {
  id: 2,
  chapter: cardiologyChapter,
  number: 1,
  en: `Cardiac Manifestations (Symptoms & Signs) & Pathophysiology`,
  ar: `الأعراض والعلامات السريرية لأمراض القلب وآلياتها المرضية`,
  shortEn: `Cardiac Manifestations`,
  shortAr: `الأعراض والعلامات القلبية`,
  sections: [
    {
      number: 1,
      en: `Overview & Basic Concepts`,
      ar: `نظرة عامة ومفاهيم أساسية`,
      entries: [
        pt(
          `Clinical Manifestations of Cardiac Disease: This chapter presents the clinical manifestations of cardiac disease, organized into symptoms (subjective complaints) and signs (objective findings from physical examination).`,
          `يقدم هذا الفصل التظاهرات السريرية لأمراض القلب، وهي مقسمة إلى أعراض (شكاوى شخصية يشتكي منها المريض بنفسه) وعلامات (نتائج موضوعية يكتشفها الفحص البدني).`,
          `الـ Symptoms هي الحاجة اللي المريض بيحس بيها ويقولهالك بصوته زي "أنا صدري بيوجعني" أو "عندي نهجان"، لكن الـ Signs هي الحاجة اللي إنت كطبيب أو ممرض بتشوفها وتفحصها بنفسك زي التورم أو سماع الخرير بالسماعة.`,
        ),
        pt(
          `Systematic Approach: The content emphasizes a systematic approach to cardiovascular assessment and the pathophysiological mechanisms underlying key cardiac symptoms.`,
          `يركز المحتوى على النهج المنهجي لتقييم الجهاز القلبي الوعائي والآليات الفسيولوجية المرضية المسببة للأعراض القلبية الرئيسية.`,
          `المنهج بيعلمنا نمشي بأسلوب منظم عشان نفهم السبب الفسيولوجي المرضي (Pathophysiology) اللي خلى العرض ده يظهر على مريض القلب.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Cardiac Symptoms`,
      ar: `الأعراض القلبية`,
      entries: [
        s(`A. Pulmonary Congestion / Left-Sided Heart Disease`, `احتقان الرئة الناتج عن فشل الجانب الأيسر`),
        ld(
          `Pathophysiology: Pulmonary congestion results from impaired left ventricular function, leading to blood backing up into the pulmonary circulation.`,
          `ينتج الاحتقان الرئوي عن تدهور وظيفة البطين الأيسر، مما يؤدي إلى ارتداد الدم وتجمعه في الدورة الدموية الرئوية.`,
          `لما البطين الأيسر (Left Ventricle) يضعف وما يقدرش يضخ الدم للجسم، الدم بيرجع لورا ويركن في شرايين وأوردة الرئة فيعمل احتقان وتظهر الأعراض التالية:`,
        ),
        pt(
          `Dyspnea: Difficulty or awareness of breathing.`,
          `ضيق التنفس: صعوبة في التنفس أو الشعور الواعي بالأنفاس.`,
          `المريض بيحس إنه مش عارف ياخد نفسه أو حاسس بجهد كبير في كل نفس.`,
        ),
        pt(
          `Orthopnea: Dyspnea that worsens when lying flat and improves with upright positioning.`,
          `ضيق التنفس الاستلقائي: ضيق تنفس يزداد سوءاً عند الاستلقاء فلات (مستوياً) ويتحسن بالجلوس أو الوقوف.`,
          `المريض لما ينام فلات على ظهره الدم بيرجع للرئة أكتر فينكتدح، وما يرتاحش غير لما يقعد أو يحط مخاديد متعددة ورا ظهره.`,
        ),
        pt(
          `Paroxysmal Nocturnal Dyspnea (PND): Sudden nocturnal breathlessness occurring 1–2 hours after sleep onset.`,
          `ضيق التنفس النوبي الليلي: نوبات نهجان وصعوبة تنفس مفاجئة تحدث بعد 1-2 ساعة من النوم.`,
          `المريض بينام عادي، وبعد ساعة لساعتين يقوم فجأة من أحلى نومة على كتمة نفس شديدة ويجري على الشباك عشان ياخد نفسه.`,
        ),
        pt(
          `Exertional cough and recurrent chest infections: Cough triggered by exertion and repeated chest infections.`,
          `سعال مرتبط بالمجهود وعدوى صدرية متكررة.`,
          `السعال بيزيد مع المجهود، وركود السوائل بالرئة بيخليها بيئة سهلة للعدوى البكتيرية المتكررة.`,
        ),
        pt(
          `Hemoptysis: Coughing up blood.`,
          `خروج دم مع السعال (بصاق مدمم).`,
          `كحة طالع معاها دم نتيجة زيادة الضغط وانفجار الأوعية الدموية الصغيرة في الرئة.`,
        ),
        pt(
          `Pleural effusion and pulmonary edema: Fluid accumulation in the pleural cavity and lung alveoli.`,
          `الانصباب البلوري (تجمع سوائل بالغشاء البلوري) والإديمة الرئوية (تجمع سوائل بالحويصلات الهوائية).`,
          `السوائل بتترشح وتتجمع في الغشاء المحيط بالرئة (Pleural effusion) وجوه الحويصلات الهوائية نفسها (Pulmonary edema).`,
        ),
        pt(
          `Bilateral basal lung crepitations on auscultation: Crackling sound at the base of both lungs when listening with a stethoscope.`,
          `كركرة/خرير بقاعدتي الرئتين بالجانبين عند التسمع بالسماعة.`,
          `لما تحط السماعة على ظهر المريض من تحت في الجانبين، تسمع صوت زقزقة أو كركرة زي فقاقيع المية بسبب السوائل المحبوسة.`,
        ),

        s(`B. Systemic Venous Congestion / Right-Sided Heart Disease`, `احتقان الأوردة الجهازية الناتج عن فشل الجانب الأيمن`),
        ld(
          `Pathophysiology: Right-sided heart failure causes blood to accumulate in the systemic venous circulation.`,
          `يسبب فشل الجانب الأيمن للقلب تجمع الدم وركوده في الدورة الوريدية الجهازية.`,
          `لما البطين الأيمن (Right Ventricle) يفشل، الدم بيرد لورا في أوردة الجسم، فيعمل احتقان في أوردة الرقبة والكبد والرجلين والأمعاء.`,
        ),
        pt(
          `Fatigue, insomnia, and excessive sweating with minimal exertion: General tiredness, sleep disturbance, and profuse perspiration with slight effort.`,
          `إجهاد، أرق، وعرق مفرط مع أقل مجهود.`,
          `المريض بيحس بتعب دائم، ومش عارف ينام، وبيغرق عرق مع أقل حركة.`,
        ),
        pt(
          `Raised jugular venous pressure (JVP) with distended neck veins: Elevated blood pressure in the jugular vein visible as swollen neck veins.`,
          `ارتفاع ضغط الوريد الوداجي مع احتقان وانتفاخ أوردة الرقبة.`,
          `أوردة الرقبة بتكون منفوخة والنبض فيها باين بالعين، وده دليل على إن الضغط عالي في الأذين الأيمن.`,
        ),
        pt(
          `Peripheral edema – may progress to ascites: Swelling in lower limbs that can advance to fluid collection in the abdomen.`,
          `تورم الأطراف السفلى وقد يتطور إلى استسقاء (تجمع سوائل في البطن).`,
          `رشح وتورم سوائل في القدمين والساقين، ولو زاد الموضوع السوائل بتجمع في البطن وتعمل استسقاء (Ascites).`,
        ),
        pt(
          `Hepatomegaly – typically soft and tender: Liver enlargement that is soft and painful on palpation.`,
          `تضخم الكبد – يكون عادة طرياً ومؤلماً عند الجس باليد.`,
          `الكبد بيكبر في الحجم ويحتقن بالدم، ولما تضغط عليه تلاقيه طري وبيوجع المريض.`,
        ),
        pt(
          `Gastrointestinal symptoms – dyspepsia and anorexia: Indigestion and loss of appetite.`,
          `أعراض الجهاز الهضمي – سوء هضم وفقدان شهية.`,
          `احتقان أوردة الجدار الهضمي والمعدة بيخلي المريض مش قادر يأكل وعنده سوء هضم باستمرار.`,
        ),

        s(`C. Low Cardiac Output – LCOP`, `انخفاض نتاج القلب`),
        ld(
          `Pathophysiology: Reduced cardiac output impairs tissue perfusion, affecting multiple organ systems.`,
          `يعيق انخفاض نتاج القلب تروية الأنسجة بالدم، مما يؤثر على أجهزة جسم متعددة:`,
        ),
        dataTable(
          `LOW CARDIAC OUTPUT (LCOP) — SYSTEMIC MANIFESTATIONS`, `مظاهر انخفاض نتاج القلب على أجهزة الجسم`,
          [
            { en: `System`, ar: `الجهاز` },
            { en: `Manifestation`, ar: `العرض السريري` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`CNS`, `Dizziness, headache, syncope`, `الجهاز العصبي المركزي: دوخة، صداع، وإغماء نتيجة نقص تدفق الدم للمخ.`], tone: 'level1' },
            { cells: [`Heart`, `Myocardial ischemia`, `القلب: قصور وتروية عضلة القلب (شعور بوجع وألم بالصدر).`], tone: 'level2' },
            { cells: [`Kidneys`, `Oliguria`, `الكليتان: قلة كمية البول المفرزة لنقص تروية الكليتين.`], tone: 'level3' },
            { cells: [`Skin`, `Cold extremities, peripheral cyanosis`, `الجلد: برودة الأطراف وزرقة الجلد لانقباض الأوعية.`], tone: 'level4' },
            { cells: [`Skeletal muscles`, `Fatigue, intermittent claudication`, `العضلات: إجهاد وتعب، وعرج/ألم متقطع بالعضلات مع المشي.`], tone: 'level5' },
            { cells: [`Blood pressure`, `Hypotension`, `ضغط الدم: انخفاض ضغط الدم الانقباضي.`], tone: 'level1' },
            { cells: [`Pulse`, `Weak, low-volume`, `النبض: نبض ضعيف وصغير الحجم.`], tone: 'level2' },
          ],
        ),

        s(`D. Chest Pain Evaluation (7 Parameters)`, `تقييم ألم الصدر عبر 7 عناصر`),
        ld(`Chest Pain Parameters:`, `عناصر تقييم ألم الصدر:`),
        pt(`Site: Location of pain.`, `موقع ومكان الألم بالضبط.`),
        pt(`Character: Nature of sensation e.g., pressure, burning, sharp.`, `طبيعة الألم: عصرة، ثقل، حرقان، أو سكين.`),
        pt(`Radiation: Pattern of spread.`, `انتشار الألم للكتف، الذراع، الفك، أو الظهر.`),
        pt(`Duration: Timing of episodes.`, `مدة النوبة والألم.`),
        pt(`Precipitating factors: What triggers the pain.`, `المحفزات كالمجهود البدني أو الانفعال.`),
        pt(`Relieving factors: What provides relief.`, `العوامل المهدئة كأخذ راحة أو حبة نيتروجليسرين تحت اللسان.`),
        pt(`Associated symptoms: Accompanying manifestations.`, `الأعراض المصاحبة كالعرق والنهجان والغثيان.`),

        s(`E. Palpitations & Pressure Effects`, `الخفقان وتأثيرات الضغط الميكانيكي`),
        pt(
          `Palpitations Definition: Awareness of one's heartbeat, commonly associated with cardiac rhythm disturbances.`,
          `الخفقان هو الشعور والوعي بنبضات القلب، ويرتبط عادة باضطرابات رتم ونبض القلب.`,
          `الطبيعي إنك مش حاسس بقلبك وهو بينبض، لما المريض ييجي يقولك "أنا حاسس بقلبي بيلعب في صدري"، ده اسمه Palpitations.`,
        ),
        ld(
          `Pressure Effects (effects of pressure by enlarged cardiac chambers or vessels):`,
          `تأثير ضغط حجرات القلب أو الأوعية المتضخمة:`,
        ),
        pt(`Trachea compression: Causes cough and dyspnea.`, `الضغط على القصبة الهوائية يسبب كحة وضيق تنفس.`),
        pt(`Esophagus compression: Causes dysphagia.`, `الضغط على المريء يسبب صعوبة في البلع.`),
        pt(`Left recurrent laryngeal nerve compression: Causes hoarseness.`, `الضغط على العصب الحنجري الراجع الأيسر يسبب بحة وتغير في الصوت.`),
      ],
    },
    {
      number: 3,
      en: `Physical Examination`,
      ar: `الفحص الجسدي للقلب والأوعية`,
      entries: [
        s(`1. Vascular Examination`, `فحص الأوعية الدموية`),
        s(`Arterial System Assessment`, `تقييم الجهاز الشرياني`),
        pt(`Pulse rate and rhythm: Rate and regularity.`, `معدل وانتظام النبض.`),
        pt(`Pulse volume/amplitude: Size of pulse wave.`, `حجم وقوة موجة النبض.`),
        pt(`Equality and symmetry between upper limbs: Checking both arms.`, `المساواة والتجانس بين الذراعين الأيمن والأيسر.`),
        pt(`Arterial wall character: Elasticity vs. sclerosis.`, `طبيعة جدار الشريان هل هو مرن أو متصلب.`),
        pt(`Special pulse characteristics: Collapsing, slow-rising, irregular.`, `خصائص النبض الخاصة: النبض المنهار، البطيء الصعود، أو غير المنتظم.`),
        s(`Venous System Assessment`, `تقييم الجهاز الوريدي`),
        pt(`Jugular venous pulse (JVP) waveform assessment: Evaluating a, c, x, v, y waves.`, `تقييم شكل موجات الوريد الوداجي.`),
        pt(`Jugular venous pressure: Used as an estimate of right atrial pressure.`, `قياس ضغط الوريد الوداجي لتقدير الضغط بالأذين الأيمن.`),

        s(`2. Precordial Cardiac Examination`, `الفحص المباشر لمنطقة القلب`),
        s(`Inspection`, `المعاينة بالعين`),
        pt(`Visible precordial pulsations: Pulsations seen on chest wall.`, `نبضات مرئية على جدار الصدر.`),
        pt(`Precordial bulging: Bulging of ribs over the heart.`, `انتفاخ أو بروز عظام الصدر فوق منطقة القلب.`),
        s(`Palpation`, `الجس باليد`),
        pt(`Apex beat site & localization:`, `موضع وتحديد ضربة القمة:`),
        sb(`Localized: Reflects left ventricular impulse.`, `ضربة القمة محددة بنقطة واحدة تدل على انقباض البطين الأيسر.`),
        sb(`Diffuse: Suggests right ventricular enlargement.`, `ضربة القمة منتشرة تشير لتضخم البطين الأيمن.`),
        pt(`Character of apex beat: Normal, tapping, sustained, or non-sustained.`, `طبيعة ضربة القمة: طبيعية، نقرية، مستمرة، أو غير مستمرة.`),
        pt(`Thrills: Palpable cardiac murmurs.`, `اهتزازات محسوسة باليد تمثل اللغط أو المرمر القلبي.`),
        pt(`Palpable S2: May indicate accentuated second heart sound.`, `إحساس صوت القلب الثاني باليد عند شدته.`),
        pt(`Parasternal heave: Suggests right ventricular enlargement or pressure overload.`, `اندفاع بجانب عظمة القص يشير لتضخم أو زيادة الضغط على البطين الأيمن.`),
        s(`Auscultation`, `التسمع بالسماعة`),
        pt(`First and second heart sounds (S1 and S2): Main cardiac sounds.`, `أصوات القلب الأساسية الأول والثاني.`),
        pt(`Additional sounds: S3, S4, clicks, opening snaps.`, `أصوات إضافية: الثالث، الرابع، الطقاطق والنقرات.`),
        pt(`Cardiac murmurs: Timing, site, intensity, radiation, characteristics.`, `اللغط القلبي: توقيته، مكانه، شدته، انتشاره، وخصائصه.`),
        s(`Percussion`, `النقر`),
        pt(
          `Clinical utility: Limited clinical value; primarily useful when pericardial effusion is suspected.`,
          `قيمته السريرية محدودة؛ ويفيد أساساً عند الشك في وجود انصباب التامور (تجمع سوائل حول القلب).`,
        ),
      ],
    },
    {
      number: 4,
      en: `Pathogenesis of Cardiac Dyspnea`,
      ar: `الآليات المرضية لضيق التنفس القلبي`,
      entries: [
        pt(`Definition of Dyspnea: Awareness or difficulty of breathing.`, `صعوبة التنفس أو الشعور الواعي به.`),

        s(`Etiological Categories of Dyspnea`, `أسباب ضيق التنفس حسب أجهزة الجسم`),
        pt(
          `Cardiovascular: Left-sided heart failure, mitral regurgitation, aortic regurgitation, myocardial infarction.`,
          `أسباب قلبية: فشل الجانب الأيسر، ارتجاع الميترالي، ارتجاع الأورطي، واحتشاء القلب.`,
        ),
        pt(
          `Respiratory/Chest: Obesity, kyphoscoliosis, COPD, bronchial asthma, pleurisy, pleural effusion, pulmonary embolism, pulmonary hypertension.`,
          `أسباب تنفسية: سمنة، انحناء العمود الفقري، سدة رئوية، ربو، التهاب البلورا، انصباب بلوري، جلطة رئوية، وضغط شريان الرئة.`,
        ),
        pt(`Increased ICP: Inhibition of respiratory center.`, `ارتفاع ضغط المخ يثبط مركز التنفس.`),
        pt(
          `Abdominal: Conditions increasing intra-abdominal pressure, restricting diaphragmatic movement.`,
          `أسباب بطنية تزيد الضغط وتكتف الحركة.`,
        ),
        pt(`Other: Pregnancy, ascites, hepatosplenomegaly.`, `الحمل، الاستسقاء، وتضخم الكبد والطحال.`),
        pt(
          `Metabolic: Diabetic ketoacidosis, lactic acidosis, uremic acidosis.`,
          `أسباب حمضية استقلابية كحموضة السكر أو البول.`,
        ),

        s(`7 Mechanisms of Cardiac Dyspnea`, `آليات ضيق التنفس القلبي الـ 7`),
        pt(
          `Reduced vital capacity: Increased pulmonary blood volume decreases effective lung volume for ventilation.`,
          `نقص السعة الحيوية للرئة بسبب تجمع الدم الذي يقلل المساحة المتاحة للهواء.`,
        ),
        pt(
          `Exaggerated Hering-Breuer reflex: Pulmonary congestion reduces alveolar compliance, increasing reflex stimulation.`,
          `تحفيز مفرط لمنعكس هيرينغ-بروير نتيجة نقص مرونة الحويصلات.`,
        ),
        pt(
          `Churchill-Cope reflex: Pulmonary congestion activates receptors that stimulate the respiratory center.`,
          `منعكس تشرشل-كوب: الاحتقان ينبه مستقبلات ترسل لمركز التنفس.`,
        ),
        pt(
          `Respiratory muscle fatigue: Low cardiac output reduces energy supply to respiratory muscles.`,
          `إجهاد عضلات التنفس لقلة الدم والطاقة الواصلة لها.`,
        ),
        pt(
          `Pulmonary edema: Fluid accumulation impairs alveolar function.`,
          `تجمع السوائل بالحويصلات يعيق تبادل الغازات.`,
        ),
        pt(
          `Pleural and pericardial effusion: Fluid mechanically compresses lungs and impairs expansion.`,
          `تجمع السوائل حول الرئة أو القلب يضغط عليها ميكانيكياً.`,
        ),
        pt(
          `Hypoxia: Reduced oxygen levels stimulate the respiratory center.`,
          `نقص الأكسجين بالدم ينبه مركز التنفس.`,
        ),

        dataTable(
          `NYHA CLASSIFICATION OF DYSPNEA`, `تصنيف جمعية نيويورك للقلب لشدة ضيق التنفس`,
          [
            { en: `Grade`, ar: `الدرجة` },
            { en: `Description`, ar: `الوصف` },
            { en: `Translation`, ar: `الترجمة العربية` },
          ],
          [
            { cells: [`Grade I`, `Dyspnea only with extraordinary exertion.`, `نهجان مع المجهود الشديد جداً فقط.`], tone: 'level5' },
            { cells: [`Grade II`, `Dyspnea with ordinary physical activity.`, `نهجان مع المجهود البدني العادي كطلع السلم.`], tone: 'level4' },
            { cells: [`Grade III`, `Dyspnea with less than ordinary activity.`, `نهجان مع مجهود أقل من العادي كالمشي بالشقة.`], tone: 'level3' },
            { cells: [`Grade IV`, `Dyspnea at rest.`, `نهجان وضيق تنفس أثناء الراحة التامة دون أي مجهود.`], tone: 'level1' },
          ],
        ),

        s(`Detailed Mechanisms of Orthopnea, PND & Hemoptysis`, `الآليات التفصيلية للأورثوبنيا و PND وكحة الدم`),
        s(`Orthopnea Mechanisms`, `آليات الأورثوبنيا`),
        pt(
          `Increased venous return in supine position, worsening pulmonary congestion.`,
          `زيادة عودة الدم للقلب عند الاستلقاء تزيد احتقان الرئة.`,
        ),
        pt(`Elevation of the diaphragm in the supine position.`, `ارتفاع الحجاب الحاجز يضغط على الرئة.`),
        s(`PND Mechanisms & Clinical Note`, `آليات PND وملاحظة سريرية`),
        pt(
          `Vagal predominance during sleep: Reduces left ventricular contractility.`,
          `نشاط العصب الحائر أثناء النوم يقلل قوة انقباض البطين الأيسر.`,
        ),
        pt(
          `Fluid reabsorption: Edema fluid returns to circulation, increasing blood volume and worsening pulmonary congestion.`,
          `إعادة امتصاص سوائل التورم للدورة الدموية تزيد حجم الدم واحتقان الرئة.`,
        ),
        pt(
          `Cardiac Asthma: PND accompanied by wheezing.`,
          `الربو القلبي هو نوبة PND مصحوبة بتزييق في الصدر تشبه الربو الشعبي.`,
        ),
        s(`Hemoptysis Causes & Mechanisms`, `أسباب وآليات كحة الدم القلبية`),
        pt(
          `Pulmonary apoplexy: Rupture of dilated bronchial veins (bronchial varices), classically associated with mitral stenosis.`,
          `انفجار الدوالي الوريدية الشعبية لاتساعها كلاسيكياً مع ضيق الصمام الميترالي.`,
        ),
        pt(
          `Chest infection: Pulmonary congestion predisposes to respiratory infection.`,
          `احتقان الرئة يهيئ لعدوى تعمل كحة مدممة.`,
        ),
        pt(
          `Acute pulmonary edema: Blood-tinged or pink, frothy sputum.`,
          `بلغم وردي رغوي مخلوط بدم.`,
        ),
        pt(
          `Pulmonary infarction: Related to pulmonary vascular obstruction.`,
          `احتشاء وموت جزء من الرئة لانسداد وعاء دموي.`,
        ),
        pt(
          `Ruptured aortic aneurysm: Rare but severe cause.`,
          `انفجار تمدد الشريان الأورطي.`,
        ),
      ],
    },
    {
      number: 5,
      en: `Key Clinical Takeaways for Nursing Practice`,
      ar: `نقاط تمريضية رئيسية`,
      entries: [
        pt(
          `Systematic assessment of cardiac symptoms and signs is essential for early detection of heart disease.`,
          `التقييم المنظم أساسي للاكتشاف المبكر.`,
        ),
        pt(
          `Left-sided heart failure manifests primarily with pulmonary symptoms (dyspnea, orthopnea, PND, hemoptysis).`,
          `فشل الجانب الأيسر يظهر بوضوح بأعراض رئوية.`,
        ),
        pt(
          `Right-sided heart failure manifests with systemic venous congestion (raised JVP, edema, hepatomegaly).`,
          `فشل الجانب الأيمن يظهر باحتقان وريدي جهازي.`,
        ),
        pt(
          `Low cardiac output affects multiple organ systems and requires comprehensive assessment.`,
          `انخفاض نتاج القلب يؤثر على أجهزة متعددة.`,
        ),
        pt(
          `Physical examination follows a structured approach: inspection, palpation, auscultation, and percussion.`,
          `الفحص السريري يتبع نهجاً منظماً: معاينة، جس، تسمع، ونقر.`,
        ),
        pt(
          `Understanding pathophysiological mechanisms enables nurses to anticipate complications and prioritize interventions.`,
          `فهم الآليات يتيح للتمريض توقع المضاعفات وتحديد الأولويات.`,
        ),
      ],
    },
  ],
};

// keep the focus helpers referenced for tree-shaking-free type checks in this module family
void [fc, fl, fs];
