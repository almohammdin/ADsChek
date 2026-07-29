(() => {
  "use strict";

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
      title: "نظام حماية حقوق المؤلف",
      url: "https://laws.boe.gov.sa/BoeLaws/Laws/LawDetails/67d159e6-ee98-4efc-a2ee-a9a700f17083/1"
    },
    balady: {
      title: "اشتراطات اللوحات الدعائية والإعلانية",
      url: "https://balady.gov.sa/ar/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D8%B7%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%88%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D8%B9%D8%A7%D8%A6%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-0"
    },
    vat: {
      title: "ضوابط إعلان السعر شاملا الضريبة",
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
      question: "هل شروط العرض وحدوده ومدته مكتوبة بوضوح ولا تخفي معلومة مؤثرة؟",
      help: "مثل الفروع المشاركة، الحد الأدنى للطلب، أوقات الاستفادة، والاستثناءات.",
      severity: "high", weight: 3,
      fix: "أضف الشروط المؤثرة بجوار العرض وبخط مقروء قبل النشر.",
      source: "ecommerce"
    },
    {
      id: "GEN-03", module: "وضوح الإعلان ومصداقيته",
      question: "هل يظهر اسم المنشأة أو هويتها بوضوح ويعرف الجمهور من يقف خلف الإعلان؟",
      help: "تزداد أهمية ذلك في الإعلانات الرقمية التي تقود إلى شراء أو طلب.",
      severity: "high", weight: 3,
      fix: "أظهر الاسم التجاري ووسيلة تواصل صحيحة داخل الإعلان أو الصفحة المرتبطة به.",
      source: "ecommerce"
    },
    {
      id: "GEN-04", module: "وضوح الإعلان ومصداقيته",
      question: "هل صورة المنتج وحجمه ومكوناته وطريقة تقديمه قريبة من الواقع؟",
      help: "لا تستخدم معالجة أو تصويرا يعطي انطباعا جوهريا غير صحيح عن المنتج.",
      severity: "high", weight: 3,
      fix: "استخدم صورة تمثل المنتج المباع فعليا، ووضح أي إضافات أو أحجام غير مشمولة.",
      source: "fraud"
    },
    {
      id: "GEN-05", module: "المحتوى والحقوق",
      question: "هل يخلو الإعلان من الإساءة أو التمييز أو المحتوى المخالف لضوابط المحتوى الإعلامي؟",
      help: "راجع النص والصورة والصوت والسياق كاملا، لا العبارة منفردة فقط.",
      severity: "critical", weight: 4,
      fix: "أوقف المادة وعدل أي نص أو مشهد أو إيحاء قد يخالف ضوابط المحتوى الإعلامي.",
      source: "media"
    },
    {
      id: "GEN-06", module: "المحتوى والحقوق",
      question: "هل تملك حق استخدام التصميم والخط والصورة والموسيقى وكل عنصر إبداعي؟",
      help: "وجود المادة في الإنترنت لا يعني أنها متاحة للاستخدام التجاري.",
      severity: "high", weight: 3,
      fix: "استخدم مادة أصلية أو مرخصة تجاريا، وتأكد من أن الترخيص يغطي طريقة الاستخدام.",
      source: "copyright"
    },
    {
      id: "PRICE-01", module: "السعر والعرض",
      when: { any: ["offer", "discount"] },
      question: "هل السعر الظاهر شامل ضريبة القيمة المضافة ويطابق ما سيدفعه العميل؟",
      help: "لا تجعل العميل يكتشف زيادة إلزامية بعد الوصول إلى السلة أو الفرع.",
      severity: "critical", weight: 4,
      fix: "اعرض السعر النهائي شاملا الضريبة، وطابقه مع نقطة البيع والفاتورة.",
      source: "vat"
    },
    {
      id: "PRICE-02", module: "السعر والعرض",
      when: { any: ["offer", "discount"] },
      question: "هل أوضحت أي رسوم أو إضافات إلزامية مرتبطة بالحصول على السعر؟",
      help: "مثل رسوم التوصيل أو حد أدنى للطلب أو إضافات لا يكتمل المنتج دونها.",
      severity: "high", weight: 3,
      fix: "اذكر التكلفة الإلزامية أو الشرط المؤثر بوضوح بجوار السعر.",
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
      help: "طلب الترخيص أو نية الحصول عليه لاحقا لا تكفي.",
      severity: "critical", weight: 5,
      fix: "أوقف النشر حتى يصدر ترخيص التخفيض وتطابق تفاصيل الإعلان مع بياناته.",
      source: "discounts"
    },
    {
      id: "DISC-02", module: "التخفيضات",
      when: { all: ["discount"] },
      question: "هل يظهر ترخيص التخفيض ويمكن للعميل التحقق منه؟",
      help: "يجب ألا يكون رقم الترخيص مخفيا أو غير مقروء داخل المادة.",
      severity: "high", weight: 3,
      fix: "أضف رقم الترخيص أو رمزه بالطريقة المطلوبة وفي موضع واضح.",
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
      fix: "أزل شرط الشراء وضع طريقة مشاركة مستقلة وواضحة.",
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
      fix: "أضف إفصاحا ظاهرا ومباشرا يفهمه المتلقي من بداية المحتوى.",
      source: "media"
    },
    {
      id: "INF-03", module: "إعلانات المؤثرين",
      when: { all: ["influencer"] },
      question: "هل راجعت المنشأة النسخة النهائية وتأكدت من صحة كلام المؤثر عن المنتج؟",
      help: "المبالغة الصادرة من المؤثر قد تحول الرسالة إلى إعلان مضلل.",
      severity: "high", weight: 3,
      fix: "اعتمد نصا نهائيا واضحا وامنع أي ادعاء أو سعر أو وعد غير معتمد.",
      source: "ecommerce"
    },
    {
      id: "DM-01", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["customer_data", "messages", "email", "calls"] },
      question: "هل حصلت على موافقة مسبقة واضحة لاستخدام قناة التواصل في التسويق؟",
      help: "وجود رقم العميل في فاتورة أو طلب سابق لا يعني تلقائيا موافقته على الإعلانات.",
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
      question: "هل يعرف المستلم بوضوح اسم الجهة المرسلة والغرض التسويقي؟",
      help: "تجنب الأرقام أو العناوين التي لا تكشف هوية المرسل.",
      severity: "high", weight: 3,
      fix: "عرّف بالمنشأة من بداية الرسالة أو المكالمة ووضح أنها تواصل تسويقي.",
      source: "pdplReg"
    },
    {
      id: "DM-04", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["messages", "email", "calls"] },
      question: "هل توجد طريقة مجانية وواضحة لإيقاف الرسائل أو المكالمات؟",
      help: "يجب أن يكون الاعتراض أو إلغاء الاشتراك سهلا وفعالا.",
      severity: "critical", weight: 4,
      fix: "أضف وسيلة إلغاء مباشرة، وطبّق الطلب دون تعقيد أو تأخير.",
      source: "pdplReg"
    },
    {
      id: "DM-05", module: "بيانات العملاء والتسويق المباشر",
      when: { any: ["messages", "email", "calls"] },
      question: "هل استبعدت من الحملة كل من طلب سابقا إيقاف التواصل التسويقي؟",
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
      fix: "اكتب افتتاحية إلزامية للمكالمة تبين الهوية والغرض بوضوح.",
      source: "cst"
    },
    {
      id: "RET-01", module: "إعادة الاستهداف والتتبع",
      when: { all: ["retargeting"] },
      question: "هل توضح سياسة الخصوصية استخدام أدوات التتبع وإعادة الاستهداف؟",
      help: "يجب أن يعرف الزائر نوع البيانات والغرض والجهات التي تستقبلها.",
      severity: "high", weight: 3,
      fix: "حدث إشعار الخصوصية ليشرح التتبع والغرض منه بطريقة واضحة.",
      source: "pdpl"
    },
    {
      id: "RET-02", module: "إعادة الاستهداف والتتبع",
      when: { all: ["retargeting"] },
      question: "هل يستطيع الزائر التحكم في التتبع غير الضروري قبل تفعيله؟",
      help: "لا تجعل القبول مفترضا أو تخفي خيار الرفض.",
      severity: "critical", weight: 4,
      fix: "أضف خيارا واضحا للموافقة أو الرفض، ولا تفعل التتبع التسويقي قبل الاختيار.",
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
      question: "هل يخلو الإعلان من وعد علاجي أو إيحاء بأن الغذاء يعالج أو يمنع مرضا؟",
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
      fix: "حدّث القوائم في جميع القنوات وأظهر الإفصاحات بجوار الصنف بوضوح.",
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
      help: "الموافقة على التصوير لا تعني دائما الموافقة على الاستخدام الإعلاني.",
      severity: "critical", weight: 4,
      fix: "احصل على موافقة واضحة للاستخدام الإعلاني أو استبدل المادة.",
      source: "pdpl"
    },
    {
      id: "IP-01", module: "المحتوى والحقوق",
      when: { all: ["third_party"] },
      question: "هل يجيز الترخيص استخدام الصورة أو الموسيقى أو الشعار تجاريا وفي المنصة المحددة؟",
      help: "بعض التراخيص تسمح بالاستخدام العام لكنها تقيد الإعلانات أو العلامات التجارية.",
      severity: "critical", weight: 4,
      fix: "راجع نطاق الترخيص واحصل على الإذن المناسب أو استخدم بديلا تملكه المنشأة.",
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
      question: "هل راجعت المحتوى المولد وتأكدت أنه لا يصنع منتجا أو شخصا أو شهادة غير حقيقية؟",
      help: "الذكاء الاصطناعي أداة إنتاج ولا يعفي المنشأة من مسؤولية صحة الإعلان.",
      severity: "critical", weight: 4,
      fix: "احذف أو عدل كل عنصر يوهم بواقعة أو منتج أو تجربة عميل غير حقيقية.",
      source: "ecommerce"
    },
    {
      id: "AI-02", module: "المحتوى المولد بالذكاء الاصطناعي",
      when: { all: ["ai"] },
      question: "هل تأكدت من عدم تقليد علامة أو شخصية حقيقية أو مادة محمية دون إذن؟",
      help: "راجع المدخلات والمخرجات النهائية، خصوصا الوجوه والشعارات والأساليب القريبة من أعمال محددة.",
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
                <p class="question-text">${rule.question}</p>
              </div>
              <p class="question-help">${rule.help}</p>
              <div class="answer-grid" role="group" aria-label="إجابة السؤال ${number}">
                ${[
                  ["yes", "نعم"],
                  ["partial", "جزئيا"],
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
    const factor = { yes: 1, partial: .5, no: 0, unknown: .25 };
    const totalWeight = state.activeRules.reduce((sum, rule) => sum + rule.weight, 0);
    const earned = state.activeRules.reduce((sum, rule) => sum + rule.weight * factor[state.answers[rule.id]], 0);
    const score = totalWeight ? Math.round(earned / totalWeight * 100) : 0;

    const issues = state.activeRules
      .filter(rule => state.answers[rule.id] !== "yes")
      .map(rule => ({ ...rule, answer: state.answers[rule.id] }))
      .sort((a, b) => {
        const answerRank = { no: 4, unknown: 3, partial: 2 };
        const severityRank = { critical: 4, high: 3, medium: 2, low: 1 };
        return (severityRank[b.severity] * 10 + answerRank[b.answer])
          - (severityRank[a.severity] * 10 + answerRank[a.answer]);
      });

    const positives = state.activeRules.filter(rule => state.answers[rule.id] === "yes");
    const blockers = issues.filter(rule => rule.severity === "critical" && ["no", "unknown", "partial"].includes(rule.answer));

    let level;
    if (blockers.length || score < 55) {
      level = {
        key: "stop",
        title: "الإعلان غير جاهز للنشر",
        message: "توجد نقاط مؤثرة تحتاج إلى معالجة قبل نشر الإعلان.",
        color: "#b33434",
        bg: "#fff0ef"
      };
    } else if (issues.length || score < 85) {
      level = {
        key: "review",
        title: "الإعلان يحتاج تعديلات",
        message: "أكمل النقاط الموضحة أدناه ثم أعد الفحص قبل النشر.",
        color: "#a56308",
        bg: "#fff6e5"
      };
    } else {
      level = {
        key: "safe",
        title: "الإعلان جاهز مبدئيا",
        message: "إجاباتك لا تظهر مشكلة واضحة ضمن نطاق هذا الفحص الاسترشادي.",
        color: "#167a55",
        bg: "#edf8f3"
      };
    }

    state.result = { score, issues, positives, blockers, level };
    return state.result;
  }

  function renderResult() {
    const result = calculateResult();
    const campaignName = $("campaignName").value.trim();
    const unknownCount = state.activeRules.filter(rule => state.answers[rule.id] === "unknown").length;
    const partialCount = state.activeRules.filter(rule => state.answers[rule.id] === "partial").length;

    $("resultRoot").innerHTML = `
      <section class="status-card ${result.level.key}" style="--score:${result.score * 3.6}deg">
        <div class="score-dial">
          <div><strong>${result.score}%</strong><span>جاهزية مبدئية</span></div>
        </div>
        <div class="status-copy">
          <div class="result-campaign">${campaignName ? escapeHtml(campaignName) : "إعلان دون اسم محدد"}</div>
          <h3>${result.level.title}</h3>
          <p>${result.level.message}</p>
          <div class="result-summary">
            <span>${state.activeRules.length} نقطة تمت مراجعتها</span>
            <span>${result.positives.length} إجابة مطمئنة</span>
            ${unknownCount ? `<span>${unknownCount} غير متأكد منها</span>` : ""}
            ${partialCount ? `<span>${partialCount} مطبقة جزئيا</span>` : ""}
          </div>
        </div>
      </section>

      <div class="result-grid">
        <section class="result-card">
          <div class="result-card-head">
            <h3>${result.issues.length ? "عدّل هذه النقاط قبل النشر" : "لا توجد تعديلات ظاهرة"}</h3>
            <p>${result.issues.length ? "مرتبة بحسب أهميتها وتأثيرها على جاهزية الإعلان." : "بحسب إجاباتك ونطاق الفحص الذي اخترته."}</p>
          </div>
          ${result.issues.length ? `
            <ol class="issue-list">
              ${result.issues.map(issue => {
                const source = SOURCES[issue.source];
                const answerLabel = { no: "غير مطبق", partial: "مطبق جزئيا", unknown: "غير متأكد" }[issue.answer];
                return `
                  <li class="issue-item ${issue.severity === "critical" ? "critical" : ""}">
                    <span class="issue-dot"></span>
                    <div>
                      <h4>${issue.question} <small>(${answerLabel})</small></h4>
                      <p>${issue.fix}</p>
                      ${source ? `<a class="source-link" href="${source.url}" target="_blank" rel="noopener">اطلع على الأساس المستخدم في هذا السؤال</a>` : ""}
                    </div>
                  </li>
                `;
              }).join("")}
            </ol>
          ` : `<div class="empty-result">يمكن الانتقال إلى المراجعة النهائية داخل المنشأة قبل إطلاق الحملة.</div>`}
        </section>

        <section class="result-card">
          <div class="result-card-head">
            <h3>نقاط مطمئنة</h3>
            <p>أهم ما أشرت إلى تطبيقه في الإعلان.</p>
          </div>
          <ul class="positive-list">
            ${result.positives.slice(0, 8).map(rule => `<li>${rule.question}</li>`).join("")}
          </ul>
        </section>
      </div>
    `;

    showView("resultView");
  }

  function createShareCard() {
    const result = state.result || calculateResult();
    const campaignName = $("campaignName").value.trim() || "فحص إعلان";
    const topIssues = result.issues.slice(0, 5);
    const date = new Intl.DateTimeFormat("ar-SA", {
      year: "numeric", month: "long", day: "numeric"
    }).format(new Date());

    const brandIcon = document.querySelector(".brand-mark").innerHTML;
    $("imageExportStage").innerHTML = `
      <div class="share-card" style="--status-color:${result.level.color};--status-bg:${result.level.bg}">
        <div class="share-top">
          <div class="share-brand">
            <span class="brand-mark">${brandIcon}</span>
            <div><strong>فاحص الإعلان</strong><span>راجع إعلانك قبل أن تنشره</span></div>
          </div>
          <div class="share-date">${date}</div>
        </div>

        <div class="share-status">
          <div class="share-score">${result.score}%</div>
          <div>
            <small>${escapeHtml(campaignName)}</small>
            <h2>${result.level.title}</h2>
            <p>${result.level.message}</p>
          </div>
        </div>

        <h3 class="share-section-title">${topIssues.length ? "أهم ما يحتاج إلى تعديل" : "نتيجة الفحص"}</h3>
        ${topIssues.length ? `
          <div class="share-issues">
            ${topIssues.map((issue, index) => `
              <div class="share-issue">
                <span>${index + 1}</span>
                <div><strong>${issue.question}</strong><p>${issue.fix}</p></div>
              </div>
            `).join("")}
          </div>
        ` : `<div class="share-good">لم تظهر مشكلة واضحة ضمن نطاق الأسئلة التي أجبت عنها.</div>`}

        <div class="share-good">تمت مراجعة ${state.activeRules.length} نقطة، منها ${result.positives.length} إجابة مطمئنة.</div>

        <div class="share-footer">
          <img src="https://almohammdin.github.io/emtidad/assets/images/naif-logo.png" alt="نايف المحمدي">
          <div>نتيجة استرشادية مبنية على إجابات المستخدم ولا تعد استشارة قانونية. almohammdin.github.io/ADsChek</div>
        </div>
      </div>
    `;
    return $("imageExportStage").firstElementChild;
  }

  async function shareResultImage() {
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
      await new Promise(resolve => setTimeout(resolve, 150));
      const canvas = await window.html2canvas(card, {
        backgroundColor: "#f7f5ef",
        scale: 2,
        useCORS: true,
        logging: false,
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

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "نتيجة فحص الإعلان",
          text: "نتيجة فحص الإعلان قبل النشر"
        });
        showToast("تم فتح خيارات المشاركة.");
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
        showToast("تم تنزيل صورة النتيجة.");
      }
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
    state.channels.clear();
    state.features.clear();
    state.answers = {};
    state.activeRules = [];
    state.result = null;
    $("campaignName").value = "";
    renderChoices(CHANNELS, "channelChoices", state.channels);
    renderChoices(FEATURES, "featureChoices", state.features);
    updateProfileState();
    showView("homeView");
  }

  document.addEventListener("click", event => {
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
    if (action === "start") showView("profileView");
    if (action === "home") showView("homeView");
    if (action === "edit-profile") showView("profileView");
    if (action === "edit-answers") showView("assessmentView");
    if (action === "restart") restart();
  });

  $("buildAssessment").addEventListener("click", buildAssessment);
  $("showResult").addEventListener("click", renderResult);
  $("shareImage").addEventListener("click", shareResultImage);

  renderChoices(CHANNELS, "channelChoices", state.channels);
  renderChoices(FEATURES, "featureChoices", state.features);
  updateProfileState();
})();
