import { hematologyChapter } from './chapters';
import { dataTable, s, type Lecture } from './types';
import { fl, fs, ld, pt, sb } from './helpers';

export const hema3: Lecture = {
  id: 11,
  chapter: hematologyChapter,
  number: 3,
  en: `Blood Transfusion`,
  ar: `نقل الدم ومكوناته`,
  shortEn: `Blood Transfusion`,
  shortAr: `نقل الدم`,
  sections: [
    {
      number: 1,
      en: `Definition & Core Purpose`,
      ar: `التعريف والهدف الأساسي`,
      entries: [
        pt(
          `Definition: Intravenous administration of whole blood or specific blood components (PRBCs, platelets, plasma, cryoprecipitate) to restore circulating blood volume, improve oxygen-carrying capacity, or replace clotting factors.`,
          `التعريف: إعطاء الدم الكامل أو مكونات محددة منه (كريات حمراء مركزة، صفائح، بلازما، راسب بارد) عن طريق الوريد لاستعادة حجم الدم الدائر، أو تحسين قدرته على حمل الأكسجين، أو تعويض عوامل التجلط.`,
        ),
        pt(
          `Core Medical Principle: Blood transfusion is a form of liquid tissue transplantation and carries significant immunological and infectious risks; it must be administered strictly when clinically indicated.`,
          `المبدأ الطبي الأساسي: نقل الدم هو نوع من زراعة الأنسجة السائلة ويحمل مخاطر مناعية وعدوائية كبيرة؛ لذلك يجب إعطاؤه فقط عند وجود دواعٍ سريرية.`,
        ),
      ],
    },
    {
      number: 2,
      en: `Indications by Blood Component`,
      ar: `دواعي نقل كل مكون من مكونات الدم`,
      entries: [
        fl(
          `Detailed table of indications and thresholds for transfusing blood products:`,
          `جدول تفصيلي بدواعي وعتبات نقل مشتقات الدم:`,
        ),
        dataTable(
          `INDICATIONS BY BLOOD COMPONENT`, `دواعي نقل مكونات الدم`,
          [
            { en: `Blood Component`, ar: `مكون الدم` },
            { en: `Clinical Indications`, ar: `دواعي الاستخدام` },
            { en: `Target Thresholds & Clinical Notes`, ar: `العتبات والملاحظات` },
            { en: `Translation & Explanation`, ar: `الترجمة العربية والشرح بالمصري` },
          ],
          [
            { cells: [`Packed Red Blood Cells (PRBCs)`, `Symptomatic anemia, acute hemorrhage, perioperative blood loss.`, `Transfuse if Hb < 7 g/dL in stable adults; Hb < 8 g/dL in cardiovascular disease.`, `كرات دم حمراء مركزة: تُعطى لرفع الهيموجلوبين والأكسجين عند انخفاضه عن 7 (أو 8 لمرضى القلب).`], tone: 'level1' },
            { cells: [`Platelets`, `Severe thrombocytopenia with active bleeding or high bleeding risk; platelet dysfunction.`, `Prophylactic if Platelets < 10,000/µL; Pre-surgery if < 50,000/µL.`, `صفائح دموية: تُعطى لمنع النزيف تلقائياً لو الصفائح أقل من 10,000 أو قبل الجراحة لو أقل من 50,000.`], tone: 'level2' },
            { cells: [`Fresh Frozen Plasma (FFP)`, `Coagulopathy with active bleeding, liver disease, massive transfusion, warfarin reversal.`, `Replaces all coagulation factors; used when PT/INR or aPTT are prolonged.`, `بلازما طازجة مجمدة: تحتوي على كافة عوامل التجلط لعلاج السيولة الشديدة ونزيف الكبد.`], tone: 'level3' },
            { cells: [`Cryoprecipitate`, `Hypofibrinogenemia, Disseminated Intravascular Coagulation (DIC), Hemophilia A.`, `Rich in Fibrinogen, Factor VIII, Factor XIII, and Von Willebrand Factor.`, `الراسب البارد: غني جداً بالفيبرينوجين وعامل التجلط الثامن.`], tone: 'level4' },
            { cells: [`Whole Blood`, `Severe massive hemorrhage with hemodynamic collapse.`, `Rarely used in modern therapy; blood component therapy is strongly preferred.`, `دم كامل: نادراً ما يُستخدم حالياً، ويُفضل استخدام المكونات الفردية.`], tone: 'level5' },
          ],
          true,
        ),
      ],
    },
    {
      number: 3,
      en: `Blood Groups, Compatibility & Emergency Release`,
      ar: `أنظمة الفصائل والمطابقة`,
      entries: [
        pt(
          `ABO System: Group A, B, AB, and O based on RBC surface antigens and plasma antibodies.`,
          `نظام ABO: الفصائل A وB وAB وO حسب المستضدات على سطح الكريات الحمراء والأجسام المضادة في البلازما.`,
        ),
        pt(
          `Rh System: Rh D positive or Rh D negative. Rh-negative recipients must NEVER receive Rh-positive blood to prevent alloimmunization and hemolytic transfusion reactions.`,
          `نظام Rh: موجب أو سالب. يجب ألا يتلقى المريض سالب Rh دماً موجباً أبداً لمنع التحسس المناعي وتفاعلات تكسير الدم.`,
        ),
        s(`Compatibility Testing Protocol (3 steps)`, `خطوات اختبار التوافق الثلاثية`),
        pt(`ABO and Rh typing.`, `تحديد الفصيلة والعامل الرئيسي.`),
        pt(`Antibody screening (Indirect Coombs test).`, `مسح الأجسام المضادة (كومبس غير المباشر).`),
        pt(
          `Full crossmatch between donor RBCs and recipient serum.`,
          `اختبار التوافق المباشر بين كريات المتبرع ومصل المريض.`,
        ),
        s(`Emergency Universal Donors`, `فصائل الإفراج الطارئ الشامل`),
        fl(
          `Emergency universal donors:`,
          `فصائل الإفراج الطارئ الشامل:`,
        ),
        pt(
          `Universal PRBC Donor: O-Negative PRBCs.`,
          `المتبرع الشامل للكريات الحمراء: كريات O سالب (تُعطى فوراً في نزيف الطوارئ الحاد القاتل قبل ظهور نتيجة التوافق).`,
        ),
        pt(
          `Universal Plasma Donor: AB Plasma.`,
          `المتبرع الشامل للبلازما: بلازما AB (الخالية تماماً من الأجسام المضادة للـ A أو B).`,
        ),
      ],
    },
    {
      number: 4,
      en: `Priority Nursing Actions for Blood Transfusion`,
      ar: `الأولويات والإجراءات التمريضية`,
      entries: [
        s(`Pre-Transfusion Bedside Verification`, `التحقق عند السرير قبل نقل الدم`),
        pt(
          `Two qualified registered nurses must independently verify patient identity, MRN, blood group, donor unit number, expiration date, and signed consent at the bedside BEFORE spiking the bag.`,
          `يجب أن يتحقق ممرضان مسجلان مؤهلان بشكل مستقل عند سرير المريض من هوية المريض، الرقم الطبي، فصيلة الدم، رقم وحدة المتبرع، تاريخ الصلاحية، والموافقة الموقعة قبل توصيل الكيس.`,
          `ممرضان اثنين مأذون لهما يقومان بالتحقق المزدوج المستقل عند سرير المريض من مطابقة اسم المريض والرقم الطبي ورقم كيس الدم والفصيلة وتاريخ الصلاحية.`,
        ),
        fs(
          `Two qualified registered nurses must independently verify the patient and the blood unit at the bedside BEFORE spiking the bag.`,
          `ممرضان مؤهلان يتحققان بشكل مستقل عند السرير من المريض ووحدة الدم قبل توصيل الكيس.`,
        ),
        pt(
          `Baseline Assessment & Vital Signs: Measure baseline vital signs (BP, HR, RR, Temperature) immediately before starting infusion.`,
          `التقييم الأساسي والعلامات الحيوية: قياس العلامات الحيوية (الضغط، النبض، التنفس، الحرارة) مباشرة قبل بدء النقل.`,
        ),
        s(`Slow Initial Infusion Rate`, `معدل النقل البطيء في البداية`),
        pt(
          `Infuse slowly at 1–2 mL/min for the first 15 minutes.`,
          `النقل ببطء بمعدل 1–2 مل/دقيقة خلال أول 15 دقيقة.`,
        ),
        pt(
          `Stay at the bedside with the patient for the first 15 minutes to observe for signs of severe acute hemolytic or anaphylactic reaction.`,
          `البقاء بجانب المريض خلال أول 15 دقيقة لملاحظة علامات التفاعل التكسيري الحاد أو التحسسي الشديد.`,
        ),
        pt(
          `Transfusion Time Limit: Complete PRBC transfusion within 4 hours of leaving the blood bank refrigerator to prevent bacterial proliferation.`,
          `الحد الزمني للنقل: إكمال نقل الكريات الحمراء خلال 4 ساعات من خروجها من ثلاجة بنك الدم لمنع تكاثر البكتيريا.`,
        ),
        s(`Actions Upon Acute Transfusion Reaction (5 immediate steps)`, `الخطوات التمريضية الخمس الفورية عند حدوث تفاعل`),
        pt(`STOP THE TRANSFUSION IMMEDIATELY.`, `إيقاف نقل الدم فوراً.`),
        pt(
          `Maintain IV access with 0.9% Normal Saline using a NEW tubing set.`,
          `الحفاظ على الوريد مفتوحاً بمحلول ملح 0.9% باستخدام وصلة جديدة.`,
        ),
        pt(`Notify the physician and blood bank immediately.`, `إبلاغ الطبيب وبنك الدم فوراً.`),
        pt(`Monitor vital signs and treat symptoms as ordered.`, `متابعة العلامات الحيوية وإعطاء العلاج الموصوف.`),
        pt(
          `Send blood bag, tubing, and fresh blood/urine samples to lab.`,
          `إرسال كيس الدم والوصلات وعينات دم وبول جديدة للمعمل لاختبار التحلل.`,
        ),
      ],
    },
  ],
};

void [ld, sb];
