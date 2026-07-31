(() => {
  "use strict";

  const APP_VERSION = "2.1.0";

  const ICONS = {
    social: '<svg viewBox="0 0 24 24"><path d="M7 8.5a5 5 0 0 1 10 0v7a5 5 0 0 1-10 0v-7Z"/><path d="M10 12h4M12 10v4"/></svg>',
    message: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3z"/><path d="m4 6 8 7 8-7"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M7.5 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2.5l-5-1-1.2 2a13.3 13.3 0 0 1-8.3-8.3l2-1.2-1-5Z"/></svg>',
    web: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    physical: '<svg viewBox="0 0 24 24"><path d="M4 4h16v11H4zM8 15v5M16 15v5M6 20h12"/></svg>',
    tag: '<svg viewBox="0 0 24 24"><path d="m3 12 9 9 9-9-9-9H3v9Z"/><circle cx="8" cy="8" r="1.5"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM12 13v5M8 21h8M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M15 9l5-5"/></svg>',
    price: '<svg viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></svg>',
    food: '<svg viewBox="0 0 24 24"><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 2 4 5 4 8h-4"/></svg>',
    people: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 5"/></svg>',
    image: '<svg viewBox="0 0 24 24"><path d="M3 4h18v16H3z"/><circle cx="8" cy="9" r="2"/><path d="m3 17 5-5 4 4 3-3 6 6"/></svg>',
    child: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M7 21v-5a5 5 0 0 1 10 0v5M8 4l-2-2M16 4l2-2"/></svg>',
    ai: '<svg viewBox="0 0 24 24"><rect x="5" y="6" width="14" height="12" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 3v3M3 10h2M19 10h2"/></svg>'
  };

  const CHANNELS = [
    { id: "social", label: "منصات التواصل", icon: "social" },
    { id: "messages", label: "واتساب والرسائل النصية (SMS)", icon: "message" },
    { id: "email", label: "البريد الإلكتروني", icon: "mail" },
    { id: "calls", label: "مكالمات تسويقية", icon: "phone" },
    { id: "website", label: "موقع أو تطبيق", icon: "web" },
    { id: "physical", label: "لوحة أو مطبوعات", icon: "physical" }
  ];

  const FEATURES = [
    { id: "offer", label: "سعر أو عرض", icon: "price" },
    { id: "discount", label: "تخفيض", icon: "tag" },
    { id: "competition", label: "مسابقة أو سحب", icon: "trophy" },
    { id: "influencer", label: "مؤثر أو معلن فرد", icon: "user" },
    { id: "customer_data", label: "بيانات عملاء", icon: "database" },
    { id: "retargeting", label: "إعادة استهداف", icon: "target" },
    { id: "food_claim", label: "ادعاء صحي أو غذائي", icon: "food" },
    { id: "menu", label: "قائمة طعام", icon: "food" },
    { id: "people", label: "أشخاص ظاهرون", icon: "people" },
    { id: "third_party", label: "صور أو موسيقى أو شعار", icon: "image" },
    { id: "children", label: "موجه للأطفال", icon: "child" },
    { id: "ai", label: "محتوى مولد بالذكاء الاصطناعي", icon: "ai" }
  ];

  const SOURCES = {
    ecommerce: {
      title: "نظام التجارة الإلكترونية",
      url: "https://laws.boe.gov.sa/BoeLaws/Laws/LawDetails/360de590-0286-4fa5-a243-aa9100c31979/1"
    },
    fraud: {
      title: "نظام مكافحة الغش التجاري",
      url: "https://mc.gov.sa/ar/Regulations/Pages/Details.aspx?lawId=2a4c454b-f116-4f16-ab4b-a81e00be5030"
    },
    pdpl: {
      title: "نظام حماية البيانات الشخصية",
      url: "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL"
    },
    pdplReg: {
      title: "اللائحة التنفيذية لنظام حماية البيانات الشخصية",
      url: "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2"
    },
    cst: {
      title: "تنظيمات الحد من الرسائل والمكالمات الاقتحامية",
      url: "https://www.cst.gov.sa/regulations-and-licenses/decisions/Regulation-469"
    },
    discounts: {
      title: "ضوابط التخفيضات التجارية",
      url: "https://mc.gov.sa/ar/mediacenter/News/Pages/26-09-22-01.aspx"
    },
    competitions: {
      title: "تنظيم المسابقات التجارية",
      url: "https://mc.gov.sa/ar/mediacenter/News/Pages/10-09-24-01.aspx"
    },
    mowthooq: {
      title: "ترخيص موثوق",
      url: "https://gmedia.gov.sa/services/licensing-for-providing-advertising-content-through-social-media-platforms-trusted"
    },
    media: {
      title: "أنظمة ولوائح تنظيم الإعلام",
      url: "https://gmedia.gov.sa/executive-regulations"
    },
    copyright: {
      title: "نظام حقوق المؤلف الجديد",
      url: "https://www.uqn.gov.sa/details?p=28845",
      linkLabel: "نظام حقوق المؤلف الجديد — يبدأ العمل به في 12 أغسطس 2026",
      extraTitle: "مشروع اللائحة التنفيذية لنظام حقوق المؤلف",
      extraUrl: "https://istitlaa.ncc.gov.sa/ar/Trade/SAIP/IRCopyright/Pages/default.aspx"
    },
    balady: {
      title: "اشتراطات اللوحات الدعائية والإعلانية",
      url: "https://balady.gov.sa/ar/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D8%B7%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%88%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D8%B9%D8%A7%D8%A6%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-0"
    },
    vat: {
      title: "ضوابط إعلان السعر شامل الضريبة",
      url: "https://mc.gov.sa/ar/mediacenter/News/Pages/04-08-20-01.aspx"
    },
    sfdaMenu: {
      title: "متطلبات القوائم الغذائية للمطاعم والمقاهي",
      url: "https://www.sfda.gov.sa/ar/news/3745904"
    },
    sfdaClaims: {
      title: "اشتراطات الادعاءات الصحية والتغذوية",
      url: "https://www.sfda.gov.sa/sites/default/files/2021-02/SFDA822021a1a.pdf"
    },
    sfdaChildren: {
      title: "ضوابط الإعلان عن الأغذية الموجه للأطفال",
      url: "https://www.sfda.gov.sa/ar/regulations/86698"
    }
  };

  const RULES = [
    {
      id: "GEN-01", module: "وضوح الإعلان ومصداقيته",
      question: "هل كل معلومة أو ادعاء في الإعلان صحيح ويمكن إثباته؟",
      help: "يشمل المبالغات، النتائج المضمونة، الأفضل والأول، وشهادات العملاء.",
      severity: "critical", weight: 4,
      fix: "احذف الادعاء غير المثبت أو استبدله بصياغة دقيقة يمكن دعمها بمعلومة أو مستند موثوق.",
      source: "ecommerce"
    },
    {
      id: "GEN-02", module: "وضوح الإعلان ومصداقيته",
      question: "هل تظهر شروط العرض وحدوده ومدته بلغة واضحة دون إخفاء معلومة مؤثرة؟",
      help: "مثل الفروع المشاركة، الحد الأدنى للطلب، أوقات الاستفادة، والاستثناءات.",
      severity: "high", weight: 3,
      fix: "أضف الشروط المؤثرة بجوار العرض وبخط مقروء قبل النشر.",
      source: "ecommerce"
    },
    {
      id: "GEN-03", module: "وضوح الإعلان ومصداقيته",
      question: "هل يظهر اسم المنشأة أو هويتها بحيث يعرف الجمهور الجهة التي تقف خلف الإعلان؟",
      help: "تزداد أهمية ذلك في الإعلانات الرقمية التي تقود إلى شراء أو طلب.",
      severity: "high", weight: 3,
      fix: "أظهر الاسم التجاري ووسيلة تواصل صحيحة داخل الإعلان أو الصفحة المرتبطة به.",
      source: "ecommerce"
    },
    {
      id: "GEN-04", module: "وضوح الإعلان ومصداقيته",
      question: "هل صورة المنتج وحجمه ومكوناته وطريقة تقديمه قريبة من الواقع؟",
      help: "تجنب المعالجة أو التصوير الذي يقدم صورة غير صحيحة عن المنتج.",
      severity: "high", weight: 3,
      fix: "استخدم صورة تمثل المنتج المباع، وبيّن أي إضافات أو أحجام غير مشمولة.",
      source: "fraud"
    },
    {
      id: "GEN-05", module: "المحتوى والحقوق",
      question: "هل يخلو الإعلان من الإساءة أو التمييز أو المحتوى المخالف لضوابط المحتوى الإعلامي؟",
      help: "راجع النص والصورة والصوت والسياق الكامل، وليس العبارة منفردة فقط.",
      severity: "critical", weight: 4,
      fix: "أوقف المادة وعدل أي نص أو مشهد أو إيحاء قد يخالف ضوابط المحتوى الإعلامي.",
      source: "media"
    },
    {
      id: "GEN-06", module: "المحتوى والحقوق",
      question: "هل تملك حق استخدام التصميم والخط والصورة والموسيقى وكل عنصر إبداعي؟",
      help: "وجود المادة على الإنترنت لا يمنح حق استخدامها لأغراض تجارية.",
      severity: "high", weight: 3,
      fix: "استخدم مادة أصلية أو مرخصة للاستخدام التجاري، وتأكد من أن الترخيص يغطي طريقة الاستخدام.",
      source: "copyright"
    },
    {
      id: "PRICE-01", module: "السعر والعرض",
      when: { any: ["offer", "discount"] },
      question: "هل السعر الظاهر شامل ضريبة القيمة المضافة ويطابق ما سيدفعه العميل؟",
      help: "لا تجعل العميل يكتشف زيادة إلزامية بعد الوصول إلى السلة أو الفرع.",
      severity: "critical", weight: 4,
      fix: "اعرض السعر النهائي شامل الضريبة، وطابقه مع نقطة البيع والفاتورة.",
      source: "vat"
    },
    {
      id: "PRICE-02", module: "السعر والعرض",
      when: { any: ["offer", "discount"] },
      question: "هل أوضحت أي رسوم أو إضافات إلزامية مرتبطة بالحصول على السعر؟",
      help: "مثل رسوم التوصيل أو حد أدنى للطلب أو إضافات لا يكتمل المنتج دونها.",
      severity: "high", weight: 3,
      fix: "ضع التكلفة الإلزامية أو الشرط المؤثر بجوار السعر في موضع ظاهر.",
      source: "ecommerce"
    },
    {
      id: "PRICE-03", module: "السعر والعرض",
      when: { any: ["offer", "discount"] },
      question: "هل مدة العرض والمنتجات والفروع والكميات المشمولة محددة؟",
      help: "العبارات العامة مثل «لفترة محدودة» لا تكفي عندما تؤثر المدة في قرار العميل.",
      severity: "medium", weight: 2,
      fix: "حدد تاريخ البداية والنهاية والنطاق والاستثناءات بطريقة ظاهرة.",
      source: "ecommerce"
    },
    {
      id: "DISC-01", module: "التخفيضات",
      when: { all: ["discount"] },
      question: "هل صدر ترخيص التخفيض قبل نشر الإعلان؟",
      help: "طلب الترخيص أو نية الحصول عليه في وقت لاحق لا تكفي.",
      severity: "critical", weight: 5,
      fix: "أوقف النشر حتى يصدر ترخيص التخفيض وتطابق تفاصيل الإعلان مع بياناته.",
      source: "discounts"
    },
    {
      id: "DISC-02", module: "التخفيضات",
      when: { all: ["discount"] },
      question: "هل يظهر ترخيص التخفيض ويمكن للعميل التحقق منه؟",
      help: "يجب أن يظهر رقم الترخيص بخط مقروء داخل المادة.",
      severity: "high", weight: 3,
      fix: "أضف رقم الترخيص أو رمزه بالطريقة المطلوبة وفي موضع يسهل رؤيته.",
      source: "discounts"
    },
    {
      id: "DISC-03", module: "التخفيضات",
      when: { all: ["discount"] },
      question: "هل السعر قبل التخفيض حقيقي ولم يرفع لإظهار خصم أكبر؟",
      help: "راجع السعر السابق والسعر بعد التخفيض ونسبة الخصم في جميع القنوات.",
      severity: "critical", weight: 5,
      fix: "صحح السعر السابق ونسبة التخفيض ووحد البيانات بين الإعلان ونقطة البيع.",
      source: "discounts"
    },
    {
      id: "COMP-01", module: "المسابقات والسحوبات",
      when: { all: ["competition"] },
      question: "هل صدر ترخيص المسابقة قبل الإعلان عنها؟",
      help: "يجب أن تتطابق الجهة والفترة والتفاصيل مع الترخيص.",
      severity: "critical", weight: 5,
      fix: "أوقف الإعلان حتى يصدر الترخيص وتثبت بياناته في المادة.",
      source: "competitions"
    },
    {
      id: "COMP-02", module: "المسابقات والسحوبات",
      when: { all: ["competition"] },
      question: "هل يستطيع الشخص الاشتراك دون اشتراط الشراء؟",
      help: "اشتراط شراء منتج أو وضع القسيمة داخله من النقاط المحظورة في المسابقات التجارية.",
      severity: "critical", weight: 5,
      fix: "أزل شرط الشراء، وأضف طريقة مشاركة مستقلة ومفهومة.",
      source: "competitions"
    },
    {
      id: "COMP-03", module: "المسابقات والسحوبات",
      when: { all: ["competition"] },
      question: "هل رقم الترخيص وطريقة الاشتراك والجوائز ومدة المسابقة واضحة؟",
      help: "يجب أن يعرف المشارك القواعد الأساسية قبل الاشتراك.",
      severity: "high", weight: 3,
      fix: "أضف رقم الترخيص والبداية والنهاية والجوائز وطريقة اختيار الفائز وإعلان النتيجة.",
      source: "competitions"
    },
    {
      id: "COMP-04", module: "المسابقات والسحوبات",
      when: { all: ["competition"] },
      question: "هل بقيت أسعار المنتجات طبيعية ولم ترفع أثناء المسابقة؟",
      help: "الجائزة لا تبرر زيادة السعر أو تحميل قيمتها على المشتري.",
      severity: "high", weight: 3,
      fix: "أعد الأسعار إلى وضعها الطبيعي وافصل تكلفة المسابقة عن أسعار المنتجات.",
      source: "competitions"
    },
    {
      id: "INF-01", module: "إعلانات المؤثرين",
      when: { all: ["influencer"] },
      question: "هل المعلن الفرد حاصل على ترخيص «موثوق» ساري وينطبق على الإعلان؟",
      help: "تحقق من صلاحية الترخيص وهوية المعلن قبل نشر المحتوى المدفوع.",
      severity: "critical", weight: 5,
      fix: "لا تنشر الإعلان عبر المعلن حتى تتحقق من ترخيص موثوق ونطاقه وصلاحيته.",
      source: "mowthooq"
    },
    {
      id: "INF-02", module: "إعلانات المؤثرين",
      when: { all: ["influencer"] },
      question: "هل يوضح المحتوى من بدايته أنه إعلان أو تعاون مدفوع؟",
      help: "يجب ألا يبدو المحتوى تجربة شخصية مستقلة إذا كان مقابله منفعة أو مبلغ.",
      severity: "high", weight: 3,
      fix: "ضع الإفصاح المباشر والظاهر في بداية المحتوى.",
      source: "media"
    },
    {
      id: "INF-03", module: "إعلانات المؤثرين",
      when: { all: ["influencer"] },
      question: "هل راجعت المنشأة النسخة النهائية وتأكدت من صحة كلام المؤثر عن المنتج؟",
      help: "المبالغة الصادرة من المؤثر قد تحول الرسالة إلى إعلان مضلل.",
      severity: "high", weight: 3,
      fix: "اعتمد النص النهائي بعد مراجعته، واحذف أي ادعاء أو سعر أو وعد غير معتمد.",
      source: "ecommerce"
    },
    {
      id: "DM-01", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["customer_data", "messages", "email", "calls"] },
      question: "هل حصلت على موافقة مسبقة واضحة لاستخدام قناة التواصل في التسويق؟",
      help: "وجود رقم العميل في فاتورة أو طلب سابق لا يمثل موافقة على الإعلانات.",
      severity: "critical", weight: 5,
      fix: "لا ترسل الحملة إلى هذه القائمة حتى تكون لديك موافقة تسويقية صحيحة ومحددة.",
      source: "pdpl"
    },
    {
      id: "DM-02", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["customer_data", "messages", "email", "calls"] },
      question: "هل جُمعت بيانات التواصل مباشرة من العميل مع توضيح الغرض التسويقي؟",
      help: "راجع مصدر القائمة، لا تكتف بوجودها داخل نظام المنشأة.",
      severity: "critical", weight: 5,
      fix: "استبعد البيانات مجهولة المصدر أو التي لم تجمع على أساس يسمح بالتسويق.",
      source: "pdpl"
    },
    {
      id: "DM-03", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["messages", "email", "calls"] },
      question: "هل يعرف المستلم اسم الجهة المرسلة والغرض التسويقي من بداية الرسالة؟",
      help: "تجنب الأرقام أو العناوين التي لا تكشف هوية المرسل.",
      severity: "high", weight: 3,
      fix: "عرّف بالمنشأة من بداية الرسالة أو المكالمة، وبيّن أن التواصل لأغراض تسويقية.",
      source: "pdplReg"
    },
    {
      id: "DM-04", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["messages", "email", "calls"] },
      question: "هل توجد طريقة مجانية وواضحة لإيقاف الرسائل أو المكالمات؟",
      help: "وفّر طريقة سهلة وفعالة للاعتراض أو إلغاء الاشتراك.",
      severity: "critical", weight: 4,
      fix: "أضف وسيلة إلغاء مباشرة، وطبّق الطلب دون تعقيد أو تأخير.",
      source: "pdplReg"
    },
    {
      id: "DM-05", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["messages", "email", "calls"] },
      question: "هل استبعدت من الحملة كل من سبق أن طلب إيقاف التواصل التسويقي؟",
      help: "إعادة إدخال المعترض في حملة جديدة يعيد المشكلة حتى لو تغير العرض.",
      severity: "critical", weight: 4,
      fix: "حدّث قائمة الإيقاف قبل الإرسال واربطها بجميع أدوات التسويق.",
      source: "cst"
    },
    {
      id: "CALL-01", module: "المكالمات التسويقية",
      when: { all: ["calls"] },
      question: "هل تبدأ المكالمة بتعريف المتصل والمنشأة وسبب الاتصال؟",
      help: "ينطبق ذلك على المكالمات البشرية والآلية بحسب طبيعة الخدمة.",
      severity: "high", weight: 3,
      fix: "اكتب افتتاحية إلزامية للمكالمة تبين الهوية والغرض من الاتصال.",
      source: "cst"
    },
    {
      id: "RET-01", module: "إعادة الاستهداف والتتبع",
      when: { all: ["retargeting"] },
      question: "هل توضح سياسة الخصوصية استخدام أدوات التتبع وإعادة الاستهداف؟",
      help: "يجب أن يعرف الزائر نوع البيانات والغرض والجهات التي تستقبلها.",
      severity: "high", weight: 3,
      fix: "حدّث إشعار الخصوصية لشرح التتبع والغرض منه بلغة سهلة.",
      source: "pdpl"
    },
    {
      id: "RET-02", module: "إعادة الاستهداف والتتبع",
      when: { all: ["retargeting"] },
      question: "هل يستطيع الزائر التحكم في التتبع غير الضروري قبل تفعيله؟",
      help: "اجعل القبول باختيار صريح، وأظهر خيار الرفض.",
      severity: "critical", weight: 4,
      fix: "وفّر خيار الموافقة أو الرفض، وفعّل التتبع التسويقي بعد الاختيار.",
      source: "pdpl"
    },
    {
      id: "WEB-01", module: "الإعلان الإلكتروني",
      when: { any: ["website", "social"] },
      question: "هل الصفحة المرتبطة بالإعلان تعرض وصف المنتج وبيانات المنشأة والتواصل بصورة متسقة؟",
      help: "يجب ألا تختلف الشروط أو السعر بين الإعلان وصفحة الطلب.",
      severity: "high", weight: 3,
      fix: "وحّد السعر والوصف والشروط وأظهر بيانات مقدم الخدمة ووسيلة التواصل.",
      source: "ecommerce"
    },
    {
      id: "PHY-01", module: "اللوحات والمطبوعات",
      when: { all: ["physical"] },
      question: "هل حددت نوع اللوحة أو الإعلان وحصلت على التصريح الذي ينطبق عليه؟",
      help: "لوحة المحل والإعلان الخارجي واللوحة المؤقتة والمطبوع ليست حالة واحدة.",
      severity: "critical", weight: 5,
      fix: "حدد التصنيف والموقع والمدة، ثم استخرج التصريح المناسب قبل التركيب أو التوزيع.",
      source: "balady"
    },
    {
      id: "PHY-02", module: "اللوحات والمطبوعات",
      when: { all: ["physical"] },
      question: "هل المقاس والموقع والإضاءة وطريقة التثبيت مطابقة لاشتراطات نوع اللوحة؟",
      help: "الموافقة على المحتوى لا تغني عن مطابقة الاشتراطات الفنية والمكانية.",
      severity: "high", weight: 3,
      fix: "طابق تصميم اللوحة وموقعها ومقاسها مع الاشتراطات والتصريح الصادر.",
      source: "balady"
    },
    {
      id: "FOOD-01", module: "الادعاءات الغذائية والصحية",
      when: { all: ["food_claim"] },
      question: "هل الادعاء مثل «قليل السكر» أو «غني بالبروتين» يطابق الضوابط وتركيبة المنتج؟",
      help: "لا يكفي أن تبدو العبارة منطقية؛ لها شروط فنية محددة.",
      severity: "critical", weight: 5,
      fix: "تحقق من شروط الادعاء وقيم المنتج قبل استخدام العبارة، أو احذفها.",
      source: "sfdaClaims"
    },
    {
      id: "FOOD-02", module: "الادعاءات الغذائية والصحية",
      when: { all: ["food_claim"] },
      question: "هل يخلو الإعلان من وعد علاجي أو إيحاء بأن الغذاء يعالج الأمراض أو يمنعها؟",
      help: "العبارات العلاجية تختلف عن الوصف الغذائي المعتاد وقد تغير تصنيف المنتج.",
      severity: "critical", weight: 5,
      fix: "احذف الوعد العلاجي واستبدله بوصف غذائي مسموح ومثبت.",
      source: "sfdaClaims"
    },
    {
      id: "MENU-01", module: "قوائم المطاعم والمقاهي",
      when: { all: ["menu"] },
      question: "هل تعرض القائمة السعرات الحرارية والإفصاحات المطلوبة بجوار الأصناف؟",
      help: "يشمل ذلك القوائم المطبوعة والرقمية وشاشات الطلب عندما ينطبق المتطلب.",
      severity: "critical", weight: 4,
      fix: "حدّث القوائم في جميع القنوات، وضع الإفصاحات المطلوبة بجوار الصنف.",
      source: "sfdaMenu"
    },
    {
      id: "MENU-02", module: "قوائم المطاعم والمقاهي",
      when: { all: ["menu"] },
      question: "هل راجعت إفصاح الكافيين والملح العالي وما يعادل النشاط البدني حيث ينطبق؟",
      help: "بدأ تطبيق المتطلبات الإضافية على منشآت الطعام في 1 يوليو 2025.",
      severity: "high", weight: 3,
      fix: "حدد الأصناف التي تنطبق عليها المتطلبات وأضف الرموز والقيم المطلوبة.",
      source: "sfdaMenu"
    },
    {
      id: "PEO-01", module: "الأشخاص والخصوصية",
      when: { all: ["people"] },
      question: "هل وافق الأشخاص الظاهرون على استخدام صورهم أو أصواتهم في هذا الإعلان؟",
      help: "الموافقة على التصوير لا تشمل بالضرورة الاستخدام الإعلاني.",
      severity: "critical", weight: 4,
      fix: "احصل على موافقة واضحة للاستخدام الإعلاني أو استبدل المادة.",
      source: "pdpl"
    },
    {
      id: "IP-01", module: "المحتوى والحقوق",
      when: { all: ["third_party"] },
      question: "هل يجيز الترخيص استخدام الصورة أو الموسيقى أو الشعار لأغراض تجارية وفي المنصة المحددة؟",
      help: "بعض التراخيص تسمح بالاستخدام العام لكنها تقيد الإعلانات أو العلامات التجارية.",
      severity: "critical", weight: 4,
      fix: "راجع نطاق الترخيص واحصل على الإذن المناسب أو استخدم مادة بديلة تملكها المنشأة.",
      source: "copyright"
    },
    {
      id: "CH-01", module: "الإعلان الموجه للأطفال",
      when: { all: ["children"] },
      question: "هل راجعت ضوابط الإعلان عن الأغذية الموجه للأطفال قبل اعتماد المادة؟",
      help: "استهداف الطفل يحتاج مراجعة مستقلة للمحتوى والمنتج وطريقة التأثير.",
      severity: "critical", weight: 5,
      fix: "أوقف النشر حتى تطابق المادة ضوابط الإعلان عن الأغذية الموجه للأطفال.",
      source: "sfdaChildren"
    },
    {
      id: "CH-02", module: "الإعلان الموجه للأطفال",
      when: { all: ["children"] },
      question: "هل يخلو الإعلان من استغلال قلة خبرة الطفل أو الضغط عليه لإقناع والديه بالشراء؟",
      help: "راجع الشخصيات والجوائز والألعاب والعبارات الموجهة للطفل.",
      severity: "high", weight: 3,
      fix: "أزل الضغط المباشر أو الإيحاء الذي يستغل الطفل، وأعد صياغة الرسالة لولي الأمر.",
      source: "sfdaChildren"
    },
    {
      id: "AI-01", module: "المحتوى المولد بالذكاء الاصطناعي",
      when: { all: ["ai"] },
      question: "هل راجعت المحتوى المولد وتأكدت من أنه لا يصنع صورة غير حقيقية لمنتج أو شخص أو شهادة؟",
      help: "الذكاء الاصطناعي أداة إنتاج ولا يعفي المنشأة من مسؤولية صحة الإعلان.",
      severity: "critical", weight: 4,
      fix: "احذف أو عدل كل عنصر يوهم بواقعة أو منتج أو تجربة عميل غير حقيقية.",
      source: "ecommerce"
    },
    {
      id: "AI-02", module: "المحتوى المولد بالذكاء الاصطناعي",
      when: { all: ["ai"] },
      question: "هل تأكدت من عدم تقليد علامة أو شخصية حقيقية أو مادة محمية دون إذن؟",
      help: "راجع المدخلات والمخرجات النهائية، وبالأخص الوجوه والشعارات والأساليب القريبة من أعمال محددة.",
      severity: "high", weight: 3,
      fix: "استبدل العنصر المقلد، وتجنب استخدام هوية أو وجه أو عمل محمي دون حق.",
      source: "copyright"
    }
  ];

  const state = {
    channels: new Set(),
    features: new Set(),
    answers: {},
    activeRules: [],
    result: null
  };

  const $ = id => document.getElementById(id);
  const views = ["homeView", "profileView", "assessmentView", "resultView"];

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
  }

  function formatExportDateParts(date = new Date()) {
    const options = { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Riyadh" };
    const weekday = new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", {
      weekday: "long",
      timeZone: "Asia/Riyadh"
    }).format(date);
    const hijriParts = new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura-nu-latn", options).formatToParts(date);
    const gregorianParts = new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", options).formatToParts(date);
    const value = (parts, type) => parts.find(part => part.type === type)?.value || "";

    return {
      weekday,
      hijri: `${value(hijriParts, "day")} ${value(hijriParts, "month")} ${value(hijriParts, "year")} هـ`,
      gregorian: `${value(gregorianParts, "day")} ${value(gregorianParts, "month")} ${value(gregorianParts, "year")} م`
    };
  }

  function selectedKeys() {
    return new Set([...state.channels, ...state.features]);
  }

  function applies(rule) {
    if (!rule.when) return true;
    const selected = selectedKeys();
    if (rule.when.all && !rule.when.all.every(key => selected.has(key))) return false;
    if (rule.when.any && !rule.when.any.some(key => selected.has(key))) return false;
    if (rule.when.not && rule.when.not.some(key => selected.has(key))) return false;
    return true;
  }

  function showView(id) {
    views.forEach(viewId => { $(viewId).hidden = viewId !== id; });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderChoices(items, targetId, selectedSet) {
    $(targetId).innerHTML = items.map(item => `
      <label class="choice-chip${selectedSet.has(item.id) ? " selected" : ""}">
        <input type="checkbox" value="${item.id}" ${selectedSet.has(item.id) ? "checked" : ""}>
        <span class="choice-icon">${ICONS[item.icon]}</span>
        <strong>${item.label}</strong>
      </label>
    `).join("");

    $(targetId).onchange = event => {
      const input = event.target.closest("input");
      if (!input) return;
      input.checked ? selectedSet.add(input.value) : selectedSet.delete(input.value);
      input.closest(".choice-chip").classList.toggle("selected", input.checked);
      updateProfileState();
    };
  }

  function updateProfileState() {
    const hasChannel = state.channels.size > 0;
    $("buildAssessment").disabled = !hasChannel;
    $("profileHint").textContent = hasChannel
      ? `اخترت ${state.channels.size} ${state.channels.size === 1 ? "قناة" : "قنوات"}${state.features.size ? ` و${state.features.size} من مكونات الإعلان` : ""}.`
      : "اختر قناة واحدة على الأقل.";
  }

  function buildAssessment() {
    state.activeRules = RULES.filter(applies);
    const activeIds = new Set(state.activeRules.map(rule => rule.id));
    Object.keys(state.answers).forEach(id => {
      if (!activeIds.has(id)) delete state.answers[id];
    });

    const modules = new Map();
    state.activeRules.forEach(rule => {
      if (!modules.has(rule.module)) modules.set(rule.module, []);
      modules.get(rule.module).push(rule);
    });

    let number = 0;
    $("questionsRoot").innerHTML = [...modules.entries()].map(([module, rules]) => `
      <section class="question-module">
        <div class="module-head">
          <h3>${module}</h3>
          <span>${rules.length} ${rules.length === 1 ? "سؤال" : "أسئلة"}</span>
        </div>
        ${rules.map(rule => {
          number += 1;
          return `
            <article class="question-card" data-rule="${rule.id}">
              <div class="question-top">
                <span class="question-number">${number}</span>
                <div class="question-content">
                  <div class="question-line">
                    <p class="question-text">${rule.question}</p>
                    <button class="answer-tip-trigger" type="button" aria-label="مساعدة للإجابة عن السؤال ${number}" aria-expanded="false">؟</button>
                  </div>
                  <div class="answer-tip" role="tooltip">
                    <strong>كيف تجيب؟</strong>
                    <span>اعتمد النسخة النهائية من الإعلان. ${rule.help}</span>
                  </div>
                </div>
              </div>
              <div class="answer-grid" role="group" aria-label="إجابة السؤال ${number}">
                ${[
                  ["yes", "نعم"],
                  ["partial", "إلى حد ما"],
                  ["no", "لا"],
                  ["unknown", "غير متأكد"]
                ].map(([value, label]) => `
                  <button class="answer-btn${state.answers[rule.id] === value ? " selected" : ""}" type="button" data-value="${value}">${label}</button>
                `).join("")}
              </div>
            </article>
          `;
        }).join("")}
      </section>
    `).join("");

    const campaignName = $("campaignName").value.trim();
    $("assessmentIntro").textContent = `${campaignName ? `حملة «${campaignName}» تتطلب` : "هذا الإعلان يتطلب"} مراجعة ${state.activeRules.length} نقطة تنطبق على وصفك.`;
    updateProgress();
    showView("assessmentView");
  }

  function updateProgress() {
    const answered = state.activeRules.filter(rule => state.answers[rule.id]).length;
    const total = state.activeRules.length;
    const percent = total ? Math.round(answered / total * 100) : 0;
    $("progressText").textContent = `${answered} من ${total}`;
    $("progressPercent").textContent = `${percent}%`;
    $("progressBar").style.width = `${percent}%`;
    $("showResult").disabled = answered !== total;
    $("answerHint").textContent = answered === total
      ? "اكتملت الإجابات. النتيجة جاهزة."
      : `متبقي ${total - answered} ${total - answered === 1 ? "سؤال" : "أسئلة"}. استخدم «غير متأكد» إذا لم تملك الإجابة.`;
  }

  function calculateResult() {
    const factor = { yes: 1, partial: .5, no: 0, unknown: .35 };
    const totalWeight = state.activeRules.reduce((sum, rule) => sum + rule.weight, 0);
    const earned = state.activeRules.reduce((sum, rule) => sum + rule.weight * factor[state.answers[rule.id]], 0);
    const score = totalWeight ? Math.round(earned / totalWeight * 100) : 0;

    const issues = state.activeRules
      .filter(rule => state.answers[rule.id] !== "yes")
      .map(rule => ({ ...rule, answer: state.answers[rule.id] }))
      .sort((a, b) => {
        const answerRank = { no: 4, partial: 3, unknown: 2 };
        const severityRank = { critical: 4, high: 3, medium: 2, low: 1 };
        return (severityRank[b.severity] * 10 + answerRank[b.answer])
          - (severityRank[a.severity] * 10 + answerRank[a.answer]);
      });

    const positives = state.activeRules.filter(rule => state.answers[rule.id] === "yes");
    const blockers = issues.filter(rule => rule.severity === "critical" && rule.answer === "no");
    const incompleteCritical = issues.filter(rule => rule.severity === "critical" && rule.answer === "partial");
    const uncertainCritical = issues.filter(rule => rule.severity === "critical" && rule.answer === "unknown");

    let level;
    if (score >= 90) {
      level = {
        key: "safe",
        title: "جاهزية مرتفعة",
        message: "معظم نقاط الفحص مستوفاة، مع مراجعة الملاحظات المتبقية قبل النشر.",
        color: "#167a55",
        bg: "#edf8f3"
      };
    } else if (score >= 75) {
      level = {
        key: "limited",
        title: "جاهزية جيدة",
        message: "الأساس جيد، وتحتاج النقاط أدناه إلى استكمال أو تحقق قبل المراجعة النهائية.",
        color: "#668b2b",
        bg: "#f2f7e9"
      };
    } else if (score >= 55) {
      level = {
        key: "caution",
        title: "جاهزية متوسطة",
        message: "توجد نقاط مؤثرة تحتاج إلى تعديل قبل اعتماد الإعلان.",
        color: "#b98512",
        bg: "#fff8e5"
      };
    } else if (score >= 35) {
      level = {
        key: "high",
        title: "جاهزية منخفضة",
        message: "توجد فجوات جوهرية، والأولوية الآن تعديل الإعلان ثم إعادة الفحص.",
        color: "#c8661a",
        bg: "#fff2e8"
      };
    } else {
      level = {
        key: "severe",
        title: "جاهزية ضعيفة",
        message: "الإعلان يحتاج إلى مراجعة شاملة قبل التفكير في النشر.",
        color: "#b33434",
        bg: "#fff0ef"
      };
    }

    let decision;
    if (blockers.length) {
      decision = {
        key: "stop",
        title: blockers.length === 1 ? "مانع واحد قبل النشر" : `${blockers.length} موانع قبل النشر`,
        message: "عالج النقاط المانعة أدناه قبل النشر."
      };
    } else if (incompleteCritical.length || uncertainCritical.length) {
      decision = {
        key: "verify",
        title: "أكمل وتحقق قبل النشر",
        message: "أكمل النقاط ذات التطبيق الجزئي، وتحقق من النقاط التي اخترت لها «غير متأكد»."
      };
    } else if (score < 75) {
      decision = {
        key: "review",
        title: "أكمل التعديلات قبل النشر",
        message: "راجع الأولويات أدناه، ثم أعد الفحص قبل اعتماد الإعلان."
      };
    } else {
      decision = {
        key: "clear",
        title: "انتقل إلى المراجعة النهائية",
        message: "راجع النسخة النهائية داخل المنشأة، ثم اعتمد قرار النشر."
      };
    }

    state.result = {
      score,
      issues,
      positives,
      blockers,
      incompleteCritical,
      uncertainCritical,
      level,
      decision
    };
    return state.result;
  }

  function renderResult() {
    const result = calculateResult();
    const campaignName = $("campaignName").value.trim();
    const unknownCount = state.activeRules.filter(rule => state.answers[rule.id] === "unknown").length;
    const changeCount = state.activeRules.filter(rule => ["no", "partial"].includes(state.answers[rule.id])).length;
    const priorityMeta = {
      critical: { label: "أولوية قصوى", className: "critical" },
      high: { label: "أولوية عالية", className: "high" },
      medium: { label: "أولوية متوسطة", className: "medium" },
      low: { label: "أولوية لاحقة", className: "low" }
    };
    const issueAnswerMeta = {
      no: "غير مطبق",
      partial: "تطبيق جزئي",
      unknown: "تحتاج تحقق"
    };

    $("resultRoot").innerHTML = `
      <section class="status-card ${result.level.key}" style="--status-color:${result.level.color};--status-bg:${result.level.bg};--score-position:${100 - result.score}%">
        <div class="status-topline">
          <span class="status-badge">نتيجة الفحص</span>
          ${campaignName ? `<div class="result-campaign"><span>الحملة</span><strong>${escapeHtml(campaignName)}</strong></div>` : ""}
        </div>
        <div class="status-layout">
          <div class="status-copy">
            <span class="status-label">مستوى الجاهزية</span>
            <h3>${result.level.title}</h3>
            <p>${result.level.message}</p>
          </div>
          <div class="score-box" aria-label="درجة الجاهزية ${result.score} من 100">
            <strong>${result.score}</strong>
            <span>من 100</span>
            <small>الأعلى أفضل</small>
          </div>
        </div>
        <div class="risk-meter" role="img" aria-label="درجة جاهزية الإعلان ${result.score} من 100، والأعلى أفضل">
          <div class="risk-meter-head"><span>درجة الجاهزية</span><strong>${result.score} من 100 • الأعلى أفضل</strong></div>
          <div class="risk-meter-track"><span class="risk-meter-pointer"></span></div>
          <div class="risk-meter-labels"><span>جاهزية منخفضة</span><span>جاهزية متوسطة</span><span>جاهزية مرتفعة</span></div>
        </div>
        <div class="publish-decision ${result.decision.key}">
          <span class="publish-decision-icon" aria-hidden="true">${result.decision.key === "clear" ? "✓" : "!"}</span>
          <div><strong>${result.decision.title}</strong><p>${result.decision.message}</p></div>
        </div>
        <aside class="result-reading">
          <strong>كيف تقرأ النتيجة؟</strong>
          <p>ابدأ بالنقاط المانعة، ثم أكمل التعديلات بحسب ترتيب الأولوية. الدرجة تعكس إجاباتك ضمن نطاق الفحص المختار.</p>
        </aside>
      </section>

      <div class="result-metrics" aria-label="ملخص نتيجة الفحص">
        <div class="result-metric"><strong>${state.activeRules.length}</strong><span>نقطة تمت مراجعتها</span></div>
        <div class="result-metric positive"><strong>${result.positives.length}</strong><span>نقطة مستوفاة</span></div>
        <div class="result-metric warning"><strong>${changeCount}</strong><span>تحتاج إلى تعديل</span></div>
        <div class="result-metric verify"><strong>${unknownCount}</strong><span>تحتاج إلى تحقق</span></div>
      </div>

      <div class="result-grid">
        <section class="result-card">
          <div class="result-card-head">
            <h3>${result.issues.length ? "أولويات ما قبل النشر" : "جاهز للمراجعة النهائية"}</h3>
            <p>${result.issues.length ? "ابدأ بالأولوية القصوى، ثم أكمل بقية التعديلات ونقاط التحقق." : "بحسب إجاباتك ونطاق الفحص الذي اخترته."}</p>
          </div>
          ${result.issues.length ? `
            <ol class="issue-list">
              ${result.issues.map(issue => {
                const source = SOURCES[issue.source];
                const priority = priorityMeta[issue.severity] || priorityMeta.low;
                return `
                  <li class="issue-item priority-${priority.className}">
                    <span class="issue-dot"></span>
                    <div>
                      <div class="issue-meta"><span class="issue-priority">${priority.label}</span><span class="issue-answer">${issueAnswerMeta[issue.answer]}</span></div>
                      <h4>${issue.question}</h4>
                      <p class="issue-action"><strong>الإجراء المقترح</strong><span>${issue.fix}</span></p>
                      ${source ? `<div class="source-links"><a class="source-link" href="${source.url}" target="_blank" rel="noopener">${source.linkLabel || `المصدر: ${source.title}`}</a>${source.extraUrl ? `<a class="source-link" href="${source.extraUrl}" target="_blank" rel="noopener">${source.extraTitle}</a>` : ""}</div>` : ""}
                    </div>
                  </li>
                `;
              }).join("")}
            </ol>
          ` : `<div class="empty-result">راجع النسخة النهائية داخل المنشأة، ثم اعتمد قرار النشر.</div>`}
        </section>

        <section class="result-card">
          <div class="result-card-head">
            <h3>إشارات مطمئنة</h3>
            <p>نقاط أشرت إلى اكتمالها في الإعلان.</p>
          </div>
          <ul class="positive-list">
            ${result.positives.length
              ? result.positives.slice(0, 8).map(rule => `<li>${rule.question}</li>`).join("")
              : `<li class="positive-empty">تظهر هنا النقاط المستوفاة بعد تعديل الإجابات وإعادة الفحص.</li>`}
          </ul>
        </section>
      </div>
    `;

    showView("resultView");
  }

  function renderPrintReport() {
    const result = state.result || calculateResult();
    const campaignName = $("campaignName").value.trim();
    const date = `${new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", {
      year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Riyadh"
    }).format(new Date())} م`;
    const answerMeta = {
      yes: { label: "نعم", className: "yes" },
      partial: { label: "إلى حد ما", className: "partial" },
      no: { label: "لا", className: "no" },
      unknown: { label: "غير متأكد", className: "unknown" }
    };
    const unknownCount = state.activeRules.filter(rule => state.answers[rule.id] === "unknown").length;
    const changeCount = state.activeRules.filter(rule => ["no", "partial"].includes(state.answers[rule.id])).length;
    const selectedChannels = CHANNELS.filter(item => state.channels.has(item.id));
    const selectedFeatures = FEATURES.filter(item => state.features.has(item.id));
    const reportHeader = () => `
      <header class="print-report-header">
        <div class="print-report-brand">
          <img src="assets/images/adschek-icon-256.png" alt="">
          <div>
            <strong>فاحص الامتثال الإعلاني</strong>
            <span>Ad Compliance Checker</span>
          </div>
        </div>
        <div class="print-report-meta">
          <strong>تقرير فحص الإعلان</strong>
          <span>${date}</span>
        </div>
      </header>
    `;
    const reportFooter = () => `
      <footer class="print-report-footer">
        <div class="print-report-footer-tool">
          <img src="assets/images/adschek-icon-256.png" alt="">
          <div>
            <strong>فاحص الامتثال الإعلاني</strong>
            <span class="print-report-footer-link">almohammdin.github.io/ADsChek</span>
            <span>الإصدار ${APP_VERSION}</span>
          </div>
        </div>
        <div class="print-report-footer-guidance">
          <span>فحص استرشادي أولي، وتخضع المواءمة النهائية لتفاصيل النشاط والحملة والجهة المختصة.</span>
          <strong class="print-report-page-number">__REPORT_PAGINATION__</strong>
        </div>
        <div class="print-report-footer-naif">
          <img src="assets/images/naif-logo-navy.png?v=2.1.0" alt="نايف المحمدي">
        </div>
      </footer>
    `;
    const reportPage = (content, modifier = "") => `
      <section class="print-report print-report-page ${modifier}">
        <img class="print-report-pattern" src="assets/images/brand-pattern-export.svg" alt="">
        ${reportHeader()}
        <div class="print-report-page-content">${content}</div>
        ${reportFooter()}
      </section>
    `;
    const issueRows = issues => issues.map(issue => {
      const answer = answerMeta[issue.answer] || { label: issue.answer, className: "" };
      return `<tr>
        <td>${escapeHtml(issue.question)}</td>
        <td><span class="print-report-answer ${answer.className}">${answer.label}</span></td>
        <td>${escapeHtml(issue.fix)}</td>
      </tr>`;
    }).join("");
    const questionRows = rules => rules.map(rule => {
      const answer = answerMeta[state.answers[rule.id]] || { label: "لم تتم الإجابة", className: "" };
      return `<tr>
        <td>${escapeHtml(rule.module)}</td>
        <td>${escapeHtml(rule.question)}</td>
        <td><span class="print-report-answer ${answer.className}">${answer.label}</span></td>
      </tr>`;
    }).join("");

    const questionTableNumber = result.issues.length ? 2 : 1;
    const issueTable = (items, firstOnPage = false) => `
      <section class="print-report-section ${firstOnPage ? "print-report-section--first" : ""}">
        <table class="print-report-table">
          <colgroup><col style="width:34%"><col style="width:18%"><col style="width:48%"></colgroup>
          <thead>
            <tr class="print-report-table-title"><th colspan="3"><span>الجدول 1</span><strong>النقاط التي تحتاج إلى تعديل</strong></th></tr>
            <tr><th>نقطة الفحص</th><th>الإجابة</th><th>الإجراء المقترح</th></tr>
          </thead>
          <tbody>${issueRows(items)}</tbody>
        </table>
      </section>
    `;
    const questionTable = (items, firstOnPage = false) => `
      <section class="print-report-section ${firstOnPage ? "print-report-section--first" : ""}">
        <table class="print-report-table print-report-table--questions">
          <colgroup><col style="width:17%"><col style="width:55%"><col style="width:28%"></colgroup>
          <thead>
            <tr class="print-report-table-title"><th colspan="3"><span>الجدول ${questionTableNumber}</span><strong>سجل الأسئلة والإجابات</strong></th></tr>
            <tr><th>المحور</th><th>نقطة الفحص</th><th>الإجابة</th></tr>
          </thead>
          <tbody>${questionRows(items)}</tbody>
        </table>
      </section>
    `;
    const lineCount = (text, length) => Math.max(1, Math.ceil(String(text || "").length / length));
    const issueHeight = item => 6 + Math.max(lineCount(item.question, 48), lineCount(item.fix, 62)) * 4.2;
    const questionHeight = item => 6 + Math.max(lineCount(item.module, 20), lineCount(item.question, 68)) * 4.2;
    const takeRows = (items, capacity, estimate) => {
      const selected = [];
      let used = 0;
      for (const item of items) {
        const height = estimate(item);
        if (selected.length && used + height > capacity) break;
        selected.push(item);
        used += height;
      }
      return { selected, used };
    };

    const firstIssuePack = takeRows(result.issues, 82, issueHeight);
    const firstIssues = firstIssuePack.selected;
    const firstPage = reportPage(`
      <div class="print-report-title">
        <small>تقرير استرشادي قبل النشر</small>
        <h1>${campaignName ? escapeHtml(campaignName) : "نتيجة فحص الإعلان"}</h1>
        ${campaignName ? `<p>نتيجة فحص الإعلان</p>` : ""}
      </div>
      <section class="print-report-summary">
        <div>
          <h2>${result.level.title}</h2>
          <p>${result.level.message}</p>
        </div>
        <div class="print-report-readiness">
          <div><span>درجة الجاهزية • الأعلى أفضل</span><strong>${result.score} من 100</strong></div>
          <div class="print-risk-track"><span></span></div>
          <div class="print-risk-labels"><span>جاهزية منخفضة</span><span>جاهزية متوسطة</span><span>جاهزية مرتفعة</span></div>
        </div>
        <div class="print-report-decision ${result.decision.key}">
          <strong>${result.decision.title}</strong>
          <span>${result.decision.message}</span>
        </div>
      </section>
      <div class="print-report-facts">
        <div class="print-report-fact"><span>النقاط التي تمت مراجعتها</span><strong>${state.activeRules.length}</strong></div>
        <div class="print-report-fact"><span>تحتاج إلى تعديل</span><strong>${changeCount}</strong></div>
        <div class="print-report-fact"><span>تحتاج إلى تحقق</span><strong>${unknownCount}</strong></div>
        <div class="print-report-fact"><span>نقاط مستوفاة</span><strong>${result.positives.length}</strong></div>
      </div>
      <section class="print-report-section">
        <h3>نطاق الفحص</h3>
        <div class="print-report-chips">
          ${selectedChannels.map(item => `<span class="print-report-chip">القناة: ${escapeHtml(item.label)}</span>`).join("")}
          ${selectedFeatures.map(item => `<span class="print-report-chip">${escapeHtml(item.label)}</span>`).join("")}
        </div>
      </section>
      ${firstIssues.length ? issueTable(firstIssues) : `
        <section class="print-report-section">
          <div class="print-report-note">تشير الإجابات إلى استيفاء نقاط الفحص ضمن النطاق المختار.</div>
        </section>
      `}
    `);

    const tableGroups = [];
    const remainingIssues = result.issues.slice(firstIssues.length);
    if (remainingIssues.length) {
      tableGroups.push({ items: remainingIssues, estimate: issueHeight, render: issueTable });
    }
    tableGroups.push({ items: state.activeRules, estimate: questionHeight, render: questionTable });

    const detailPages = [];
    let pageSections = [];
    let remainingCapacity = 255;
    const flushPage = () => {
      if (!pageSections.length) return;
      detailPages.push(reportPage(pageSections.join(""), "print-report-page--details"));
      pageSections = [];
      remainingCapacity = 255;
    };

    for (const group of tableGroups) {
      let remainingRows = [...group.items];
      while (remainingRows.length) {
        const firstOnPage = pageSections.length === 0;
        const sectionCost = (firstOnPage ? 15 : 20);
        const available = remainingCapacity - sectionCost;
        if (available < 14 && !firstOnPage) {
          flushPage();
          continue;
        }
        const packed = takeRows(remainingRows, Math.max(14, available), group.estimate);
        pageSections.push(group.render(packed.selected, firstOnPage));
        remainingCapacity -= sectionCost + packed.used;
        remainingRows = remainingRows.slice(packed.selected.length);
        if (remainingRows.length) flushPage();
      }
    }
    flushPage();

    const reportPages = [firstPage, ...detailPages];
    const numberedReportPages = reportPages.map((page, index) => page.replace(
      "__REPORT_PAGINATION__",
      reportPages.length > 1 ? `صفحة ${index + 1} من ${reportPages.length}` : ""
    ));

    $("printReportStage").innerHTML = `
      <div class="print-report-shell" style="--report-status:${result.level.color};--score-position:${100 - result.score}%">
        ${numberedReportPages.join("")}
      </div>
    `;
  }

  async function printResultReport() {
    const button = $("printReport");
    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = "جارٍ تجهيز التقرير...";
    try {
      renderPrintReport();
      await document.fonts.ready;
      const reportImages = [...$("printReportStage").querySelectorAll("img")];
      await Promise.all(reportImages.map(image => new Promise(resolve => {
        if (image.complete) {
          resolve();
          return;
        }
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
        setTimeout(resolve, 5000);
      })));
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      window.print();
    } catch (error) {
      console.error(error);
      showToast("تعذر تجهيز التقرير. حاول مرة أخرى.");
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  }

  function createShareCard() {
    const result = state.result || calculateResult();
    const campaignName = $("campaignName").value.trim();
    const topIssues = result.issues.slice(0, 3);
    const topPositives = result.positives.slice(0, 2);
    const unknownCount = state.activeRules.filter(rule => state.answers[rule.id] === "unknown").length;
    const changeCount = state.activeRules.filter(rule => ["no", "partial"].includes(state.answers[rule.id])).length;
    const priorityLabels = {
      critical: "أولوية قصوى",
      high: "أولوية عالية",
      medium: "أولوية متوسطة",
      low: "أولوية لاحقة"
    };
    const answerLabels = {
      no: "غير مطبق",
      partial: "تطبيق جزئي",
      unknown: "تحتاج تحقق"
    };
    const exportDate = formatExportDateParts();

    $("imageExportStage").innerHTML = `
      <div class="share-card" style="--status-color:${result.level.color};--status-bg:${result.level.bg};--score-position:${100 - result.score}%">
        <img class="share-pattern" src="assets/images/brand-pattern-export.svg" alt="">

        <div class="share-top">
          <div class="share-brand">
            <img class="share-logo" src="assets/images/adschek-icon-256.png" alt="" loading="eager" decoding="sync">
            <div class="share-brand-copy">
              <strong>فاحص الامتثال الإعلاني</strong>
              <span>Ad Compliance Checker</span>
            </div>
          </div>
          <div class="share-date" aria-label="${exportDate.weekday}، ${exportDate.hijri}، ${exportDate.gregorian}">
            <span>${exportDate.weekday}</span><b>|</b><span>${exportDate.hijri}</span><b>|</b><span>${exportDate.gregorian}</span>
          </div>
        </div>

        <div class="share-context">
          <div>
            <small>${campaignName ? "اسم الحملة" : "نتيجة الفحص"}</small>
            <strong>${campaignName ? escapeHtml(campaignName) : "مراجعة الإعلان قبل النشر"}</strong>
          </div>
          <span>تقرير تنفيذي</span>
        </div>

        <div class="share-status">
          <div class="share-status-main">
            <div>
              <small>مستوى الجاهزية</small>
              <h2>${result.level.title}</h2>
              <p>${result.level.message}</p>
            </div>
            <div class="share-score" aria-label="درجة الجاهزية ${result.score} من 100">
              <strong>${result.score}</strong>
              <span>من 100</span>
              <small>الأعلى أفضل</small>
            </div>
          </div>
          <div class="share-readiness">
            <div class="share-readiness-head"><span>درجة الجاهزية</span><strong>${result.score} من 100 • الأعلى أفضل</strong></div>
            <div class="share-risk-track"><span></span></div>
            <div class="share-risk-labels"><span>جاهزية منخفضة</span><span>جاهزية متوسطة</span><span>جاهزية مرتفعة</span></div>
          </div>
          <div class="share-decision ${result.decision.key}">
            <strong>${result.decision.title}</strong>
            <span>${result.decision.message}</span>
          </div>
        </div>

        <div class="share-metrics">
          <div><strong>${state.activeRules.length}</strong><span>تمت مراجعتها</span></div>
          <div class="positive"><strong>${result.positives.length}</strong><span>مستوفاة</span></div>
          <div class="warning"><strong>${changeCount}</strong><span>تحتاج تعديل</span></div>
          <div class="verify"><strong>${unknownCount}</strong><span>تحتاج تحقق</span></div>
        </div>

        <div class="share-content">
          <section class="share-priorities">
            <h3 class="share-section-title">${topIssues.length ? "أهم أولويات ما قبل النشر" : "جاهز للمراجعة النهائية"}</h3>
            ${topIssues.length ? `
              <div class="share-issues">
                ${topIssues.map((issue, index) => `
                  <div class="share-issue">
                    <span>${index + 1}</span>
                    <div>
                      <small>${priorityLabels[issue.severity] || priorityLabels.low} • ${answerLabels[issue.answer]}</small>
                      <strong>${issue.question}</strong>
                      <p>${issue.fix}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
              ${result.issues.length > topIssues.length ? `<p class="share-more">تظهر بقية الأولويات في التقرير الكامل.</p>` : ""}
            ` : `<div class="share-good">تشير الإجابات إلى استيفاء نقاط الفحص ضمن النطاق المختار.</div>`}
          </section>

          <section class="share-positive-panel">
            <h3>إشارات مطمئنة</h3>
            <ul>
              ${topPositives.length
                ? topPositives.map(rule => `<li>${rule.question}</li>`).join("")
                : `<li>تظهر الإشارات المطمئنة بعد استكمال نقاط الفحص.</li>`}
            </ul>
          </section>
        </div>

        <div class="share-reading">
          <strong>طريقة القراءة</strong>
          <span>كلما ارتفعت الدرجة زادت الجاهزية. تبدأ الأولوية بالنقاط المانعة ثم بقية التعديلات.</span>
        </div>

        <div class="share-footer">
          <div class="share-footer-main">
            <div class="share-owner">
              <img src="assets/images/naif-logo-navy.png?v=2.1.0" alt="نايف المحمدي">
              <div>
                <strong>فاحص الامتثال الإعلاني</strong>
                <span>الإصدار ${APP_VERSION}</span>
              </div>
            </div>
            <div class="share-accounts">
              <strong>Almohammdin</strong>
              <div class="share-social" aria-label="حسابات نايف المحمدي">
                <span aria-label="إكس (X)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2H22l-8.3 9.5L23.5 22h-7.7l-6-7.9L2.9 22H-.9l8.9-10.2L-1.4 2h7.9l5.4 7.2L18.2 2Zm-1.3 18h2.1L5.4 3.9H3.2L16.9 20Z"/></svg>
                </span>
                <span aria-label="لينكدإن (LinkedIn)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.9H1.7V22h3.6V7.9ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.9c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2v-2H9.1V22h3.6v-7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22H22v-8.1Z"/></svg>
                </span>
                <span aria-label="سناب شات (Snapchat)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>
                </span>
                <span aria-label="لنك تري (Linktree)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.736 5.852 17.644 2l1.92 1.92-3.852 3.736h5.644v2.736h-5.66l3.868 3.752-1.92 1.92-5.276-5.28-5.276 5.28-1.92-1.92 3.868-3.752H3.38V7.656h5.644L5.172 3.92 7.092 2l3.932 3.852V0h2.712v5.852ZM11.024 24v-8.604h2.712V24h-2.712Z"/></svg>
                </span>
              </div>
            </div>
          </div>
          <p class="share-guidance">فحص استرشادي أولي • almohammdin.github.io/ADsChek</p>
        </div>
      </div>
    `;
    return $("imageExportStage").firstElementChild;
  }

  async function waitForExportAssets(card) {
    const images = [...card.querySelectorAll("img")];
    await Promise.all(images.map(image => new Promise(resolve => {
      if (image.complete) {
        resolve();
        return;
      }
      const done = () => resolve();
      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
      setTimeout(done, 5000);
    })));

    const requiredAssets = [
      [card.querySelector(".share-logo"), "شعار الأداة"],
      [card.querySelector(".share-pattern"), "نمط الهوية"],
      [card.querySelector(".share-owner img"), "شعار نايف المحمدي"]
    ];
    const missingAsset = requiredAssets.find(([image]) => !image?.naturalWidth);
    if (missingAsset) {
      throw new Error(`تعذر تحميل ${missingAsset[1]} داخل الصورة`);
    }
  }

  let preparedImage = null;

  function releasePreparedImage() {
    if (preparedImage?.url) URL.revokeObjectURL(preparedImage.url);
    preparedImage = null;
    $("resultImagePreview").removeAttribute("src");
  }

  function openImagePreview(blob, file) {
    releasePreparedImage();
    const url = URL.createObjectURL(blob);
    preparedImage = { blob, file, url };
    $("resultImagePreview").src = url;
    $("imagePreview").hidden = false;
    document.body.classList.add("preview-open");
    document.querySelector(".image-preview-close")?.focus();
  }

  function closeImagePreview() {
    $("imagePreview").hidden = true;
    document.body.classList.remove("preview-open");
    releasePreparedImage();
    $("shareImage").focus();
  }

  function downloadPreparedImage() {
    if (!preparedImage) {
      showToast("ابدأ بتجهيز الصورة.");
      return;
    }
    const link = document.createElement("a");
    link.href = preparedImage.url;
    link.download = preparedImage.file.name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("بدأ تنزيل الصورة.");
  }

  function sharePreparedImage() {
    if (!preparedImage) {
      showToast("ابدأ بتجهيز الصورة.");
      return;
    }
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [preparedImage.file] })) {
      navigator.share({
        files: [preparedImage.file],
        title: "نتيجة فاحص الامتثال الإعلاني",
        text: "نتيجة فاحص الامتثال الإعلاني قبل النشر"
      }).then(() => {
        showToast("تمت مشاركة الصورة.");
      }).catch(error => {
        if (error?.name !== "AbortError") {
          console.error(error);
          showToast("تعذرت المشاركة. يمكنك تنزيل الصورة.");
        }
      });
      return;
    }
    downloadPreparedImage();
  }

  async function prepareResultImage() {
    const button = $("shareImage");
    const original = button.innerHTML;
    if (typeof window.html2canvas !== "function") {
      showToast("مكتبة إنشاء الصورة لم تكتمل. حاول مرة أخرى بعد لحظة.");
      return;
    }

    button.disabled = true;
    button.textContent = "جارٍ تجهيز الصورة...";

    try {
      await document.fonts.ready;
      const card = createShareCard();
      await waitForExportAssets(card);
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const canvas = await window.html2canvas(card, {
        backgroundColor: "#f7f5ef",
        scale: 2,
        useCORS: true,
        logging: false,
        imageTimeout: 10000,
        width: 1080,
        height: 1350,
        windowWidth: 1080,
        windowHeight: 1350
      });

      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(value => value ? resolve(value) : reject(new Error("تعذر إنشاء ملف الصورة")), "image/png", 1);
      });
      const safeName = ($("campaignName").value.trim() || "ad-check").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
      const file = new File([blob], `ADsChek-${safeName}.png`, { type: "image/png" });
      openImagePreview(blob, file);
      showToast("تم تجهيز الصورة.");
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error(error);
        showToast("تعذر تجهيز الصورة. حاول مرة أخرى.");
      }
    } finally {
      $("imageExportStage").innerHTML = "";
      button.disabled = false;
      button.innerHTML = original;
    }
  }

  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    $("toast").textContent = message;
    $("toast").classList.add("show");
    toastTimer = setTimeout(() => $("toast").classList.remove("show"), 3000);
  }

  function restart() {
    if (!$("imagePreview").hidden) closeImagePreview();
    state.channels.clear();
    state.features.clear();
    state.answers = {};
    state.activeRules = [];
    state.result = null;
    $("campaignName").value = "";
    $("printReportStage").innerHTML = "";
    renderChoices(CHANNELS, "channelChoices", state.channels);
    renderChoices(FEATURES, "featureChoices", state.features);
    updateProfileState();
    showView("homeView");
  }

  document.addEventListener("click", event => {
    const tipTrigger = event.target.closest(".answer-tip-trigger");
    if (tipTrigger) {
      const card = tipTrigger.closest(".question-card");
      const isOpen = card.classList.toggle("tip-open");
      tipTrigger.setAttribute("aria-expanded", String(isOpen));
      document.querySelectorAll(".question-card.tip-open").forEach(openCard => {
        if (openCard === card) return;
        openCard.classList.remove("tip-open");
        openCard.querySelector(".answer-tip-trigger")?.setAttribute("aria-expanded", "false");
      });
      return;
    }

    const answer = event.target.closest(".answer-btn");
    if (answer) {
      const card = answer.closest(".question-card");
      state.answers[card.dataset.rule] = answer.dataset.value;
      card.querySelectorAll(".answer-btn").forEach(btn => btn.classList.toggle("selected", btn === answer));
      updateProgress();
      return;
    }

    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;
    if (action === "close-image-preview") {
      closeImagePreview();
      return;
    }
    if (action === "start") showView("profileView");
    if (action === "home") showView("homeView");
    if (action === "edit-profile") showView("profileView");
    if (action === "edit-answers") showView("assessmentView");
    if (action === "restart") restart();
  });

  $("buildAssessment").addEventListener("click", buildAssessment);
  $("showResult").addEventListener("click", renderResult);
  $("shareImage").addEventListener("click", prepareResultImage);
  $("printReport").addEventListener("click", printResultReport);
  $("sharePreparedImage").addEventListener("click", sharePreparedImage);
  $("downloadPreparedImage").addEventListener("click", downloadPreparedImage);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !$("imagePreview").hidden) closeImagePreview();
  });

  renderChoices(CHANNELS, "channelChoices", state.channels);
  renderChoices(FEATURES, "featureChoices", state.features);
  updateProfileState();
})();
