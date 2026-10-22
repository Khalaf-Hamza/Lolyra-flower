// ============================================================
//  Lolyra store settings + product list
//  Edit this file to change the WhatsApp number, delivery, payment or products.
// ============================================================

const STORE = {
  // WhatsApp number in international format, digits only (e.g. 9627XXXXXXXX).
  // TODO: replace with the real Lolyra number.
  whatsapp: "962700000000",
  instagram: "https://www.instagram.com/lolyra_jo",
  facebook: "https://www.facebook.com/people/lolyra-jo/61593904466924/",
  // Minimum days needed to prepare a custom order. TODO: confirm.
  prepDays: 5,
  // CliQ alias shown to customers who pick CliQ. TODO: replace or leave "" to hide it.
  cliqAlias: "",
};

// Delivery areas. fee: number in JD, 0 = free, null = "confirmed on WhatsApp".
// TODO: set the real fees.
const DELIVERY = [
  { id: "pickup",  ar: "استلام شخصي",            en: "Pickup",                fee: 0 },
  { id: "amman",   ar: "عمّان",                  en: "Amman",                 fee: null },
  { id: "zarqa",   ar: "الزرقاء والرصيفة",        en: "Zarqa & Russeifa",      fee: null },
  { id: "irbid",   ar: "إربد والشمال",            en: "Irbid & the north",     fee: null },
  { id: "salt",    ar: "السلط ومادبا",            en: "Salt & Madaba",         fee: null },
  { id: "south",   ar: "الكرك والعقبة والجنوب",   en: "Karak, Aqaba & south",  fee: null },
];

const PAYMENTS = [
  { id: "cash", ar: "الدفع نقداً عند الاستلام", en: "Cash on delivery",
    dar: "ادفع عند استلام الطلب", den: "Pay when you receive your order" },
  { id: "cliq", ar: "تحويل CliQ", en: "CliQ transfer",
    dar: "نرسل لك تفاصيل التحويل على واتساب", den: "We send transfer details on WhatsApp" },
];

// Categories shown as filter buttons
const CATEGORIES = [
  { id: "all",       ar: "الكل",               en: "All" },
  { id: "lights",    ar: "قطع مضيئة",          en: "Light-up pieces" },
  { id: "bouquets",  ar: "باقات وفازات",       en: "Bouquets & vases" },
  { id: "decor",     ar: "ديكور جداري",        en: "Wall decor" },
  { id: "giveaways", ar: "توزيعات المناسبات",  en: "Occasion giveaways" },
  { id: "gifts",     ar: "بوكسات هدايا",       en: "Gift boxes" },
];

// Products. price: number in JD, or null to show "Ask for price".
// code: short reference customers can quote on WhatsApp.
// imgs: photos (the first one is the main photo; the others show in the details window).
const P = "assets/products/";
const PRODUCTS = [
  // ---------- Light-up pieces ----------
  { id: "glow-lamps", code: "LO-15", cat: "lights", price: null, imgs: [P + "glow-lamps.jpg"],
    ar: "أباجورة اللوتس والزنبق المضيئة", en: "Glowing lotus & lily lamps",
    dar: "لوتس بنفسجي وزنبقة على ساق ملتف، مع إضاءة دافئة من جوّا. نور ليلي ساحر لغرفة النوم، والألوان حسب طلبك.",
    den: "A purple lotus and a lily on a curling stem, lit warmly from inside. A dreamy night light, in the colors you choose." },
  { id: "jellyfish-lamp", code: "LO-01", cat: "lights", price: null, imgs: [P + "jellyfish-lamp.jpg", P + "jellyfish-lamp-gold.jpg"],
    ar: "قنديل البحر المضيء", en: "Glowing jellyfish lamp",
    dar: "قنديل بحر بقبة تركوازية من خيوط الشانيل وأذرع شفافة مع إضاءة دافئة. قطعة ديكور ونور ليلي بنفس الوقت.",
    den: "Teal chenille dome with clear flowing arms and warm fairy lights. A decor piece and a night light in one." },
  { id: "jellyfish-gift", code: "LO-03", cat: "lights", price: null, imgs: [P + "jellyfish-gift.jpg"],
    ar: "قنديل البحر مغلف كهدية", en: "Gift-wrapped jellyfish lamp",
    dar: "قنديل البحر جاهز للإهداء بتغليف شفاف وشريطة. بيوصل جاهز تقدميه مباشرة.",
    den: "Jellyfish lamp ready to give, in clear wrapping with a ribbon." },

  // ---------- Gift boxes ----------
  { id: "stitch-glow", code: "LO-16", cat: "gifts", price: null, imgs: [P + "stitch-glow-1.jpg", P + "glow-lamps.jpg"],
    ar: "دمية ستيتش مع زنبقة مضيئة", en: "Stitch plush with a glowing lily",
    dar: "دمية ستيتش (أزرق أو وردي) حاضنة زنبقة شانيل مضيئة، مغلفة وجاهزة للإهداء. بتنعمل كزوج كمان.",
    den: "A Stitch plush (blue or pink) hugging a glowing chenille lily, wrapped and ready to give. Also available as a pair." },
  { id: "plush-gift-bag", code: "LO-13", cat: "gifts", price: null, imgs: [P + "gift-bag-1.jpg", P + "gift-bag-2.jpg", P + "gift-bag-3.jpg"],
    ar: "شنطة هدية مع دمية وورد وحلوى", en: "Gift bag with plush, flowers & candy",
    dar: "شنطة هدية فيها دمية ناعمة، باقة ورد شانيل ملوّنة، وكاسة حلوى. بتفرّح الكبار والصغار.",
    den: "A gift set with a soft plush, a colorful chenille bouquet and a candy cup. Loved by kids and adults." },
  { id: "teal-cake", code: "LO-17", cat: "gifts", price: null, imgs: [P + "teal-cake.jpg", P + "teal-set.jpg"],
    ar: "كيكة شانيل تركوازية", en: "Teal chenille cake",
    dar: "كيكة من خيوط الشانيل بشمعة ولؤلؤ، في بوكس شفاف. هدية عيد ميلاد بتضل للذكرى.",
    den: "A cake made of chenille with a candle and pearls, in a clear box. A birthday gift to keep forever." },
  { id: "candy-cup", code: "LO-14", cat: "gifts", price: null, imgs: [P + "candy-cup.jpg"],
    ar: "كاسة حلوى مزينة", en: "Decorated candy cup",
    dar: "كاسة حلوى ملوّنة بغطاء مزين بالدانتيل واللؤلؤ. بتنضاف لأي هدية أو بتنطلب لحالها.",
    den: "A colorful candy cup with a lace and pearl lid. Add it to any gift or order it on its own." },

  // ---------- Bouquets & vases ----------
  { id: "red-lily-mug", code: "LO-04", cat: "bouquets", price: null, imgs: [P + "red-lily-mug.jpg"],
    ar: "زنبق أحمر في كوب", en: "Red lilies in a mug",
    dar: "زنابق حمراء مخملية في كوب أخضر مع كرت إهداء. مناسبة كهدية للمعلمة أو صديقة.",
    den: "Velvety red lilies in a green mug with a gift card. Lovely for a teacher or a friend." },
  { id: "lily-mugs", code: "LO-18", cat: "bouquets", price: null, imgs: [P + "lily-mug-pink.jpg", P + "lily-mugs.jpg"],
    ar: "كوب زنبق بلون من اختيارك", en: "Lily mug in your color",
    dar: "زنابق شانيل في كوب سيراميك مع كرت \"شكراً معلمتي\" أو أي عبارة بدك ياها. الألوان: وردي، ليلكي، أبيض، أحمر وأكثر.",
    den: "Chenille lilies in a ceramic mug with a \"Thank you teacher\" card or any message. Pink, lilac, white, red and more." },
  { id: "tulip-crate", code: "LO-19", cat: "bouquets", price: null, imgs: [P + "tulip-crate-1.jpg", P + "tulip-crate-2.jpg"],
    ar: "صندوق توليب أحمر", en: "Red tulip crate",
    dar: "توليب أحمر مخملي، كل وردة مغلفة بتول ولؤلؤ، مرتبة في صندوق خشبي.",
    den: "Velvety red tulips, each wrapped in tulle with pearls, arranged in a wooden crate." },
  { id: "teal-tulip-pot", code: "LO-20", cat: "bouquets", price: null, imgs: [P + "teal-tulip-pot.jpg", P + "teal-set.jpg"],
    ar: "أصيص توليب تركوازي", en: "Teal tulip pot",
    dar: "توليب تركوازي في أصيص من الشانيل البيج مع حبل جوت. قطعة لطيفة للمكتب أو الرف.",
    den: "Teal tulips in a beige chenille pot tied with jute. A sweet piece for a desk or shelf." },
  { id: "sunflower-vase", code: "LO-05", cat: "bouquets", price: null, imgs: [P + "sunflower-vase.jpg"],
    ar: "فازة دوار الشمس", en: "Sunflower vase",
    dar: "فازة مليانة دوار شمس أصفر بتضوّي أي زاوية وبتضل مفتّحة طول السنة.",
    den: "A vase full of bright sunflowers that light up any corner and stay in bloom all year." },
  { id: "purple-lily-box", code: "LO-06", cat: "bouquets", price: null, imgs: [P + "purple-lily-box.jpg"],
    ar: "بوكس زنبق بنفسجي", en: "Purple lily box",
    dar: "زنابق بنفسجية غامقة مع ورد رمادي في بوكس أبيض بشعار Lolyra.",
    den: "Deep plum lilies with grey blossoms in a white Lolyra box." },
  { id: "plum-grey-bouquet", code: "LO-07", cat: "bouquets", price: null, imgs: [P + "plum-grey-bouquet.jpg"],
    ar: "باقة بنفسجي ورمادي", en: "Plum & grey bouquet",
    dar: "تنسيق راقي بألوان البنفسجي والرمادي مع لمسات خضراء. بنقدر نغيّر الألوان حسب ذوقك.",
    den: "An elegant mix of plum and grey with green touches. Colors can be changed to your taste." },

  // ---------- Wall decor ----------
  { id: "sunflower-mirror", code: "LO-08", cat: "decor", price: null, imgs: [P + "sunflower-mirror.jpg"],
    ar: "مراية دوار الشمس", en: "Sunflower mirror",
    dar: "مراية دائرية بإطار جوت، مزينة بدوار الشمس وأوراق خضراء ودوالي متدلية ولؤلؤ.",
    den: "A round jute-framed mirror with sunflowers, green leaves, hanging vines and pearls." },
  { id: "teal-flower-tray", code: "LO-21", cat: "decor", price: null, imgs: [P + "teal-flower-tray.jpg", P + "teal-set.jpg"],
    ar: "صحن وردة للإكسسوارات", en: "Flower jewelry dish",
    dar: "وردة تركوازية كبيرة بقلب أبيض، بتستعمليها صحن للخواتم والسلاسل. ديكور حلو للتسريحة.",
    den: "A large teal flower with a white center that holds rings and necklaces. A pretty vanity piece." },

  // ---------- Occasion giveaways ----------
  { id: "wedding-tulips", code: "LO-22", cat: "giveaways", price: null, imgs: [P + "wedding-tulips.jpg"],
    ar: "توزيعات توليب للخطوبة والأعراس", en: "Tulip favors for engagements & weddings",
    dar: "توليب مخملي مغلف بتول ولؤلؤ، مع كرت فيه أسماء العرسان أو عبارتك. بكميات حسب عدد الضيوف.",
    den: "Velvety tulips wrapped in tulle and pearls, with a tag showing the couple's names or your message. Any quantity." },
  { id: "tulip-single", code: "LO-23", cat: "giveaways", price: null, imgs: [P + "tulip-single.jpg", P + "tulip-crate-2.jpg"],
    ar: "توليب مغلف (حبة)", en: "Single wrapped tulip",
    dar: "توليبة مخملية مغلفة بتول ولؤلؤ وشريطة. توزيعة أنيقة لأي مناسبة.",
    den: "One velvety tulip wrapped in tulle with pearls and a ribbon. An elegant favor for any occasion." },
  { id: "key-favors", code: "LO-09", cat: "giveaways", price: null, imgs: [P + "key-favors-2.jpg"],
    ar: "توزيعات مفتاح مع وردة", en: "Flower key favors",
    dar: "مفتاح معدني مع وردة يدوية وكرت مطبوع (مثل \"يوم المعلم\"). مثالية للتخرج والمناسبات، والكميات حسب الطلب.",
    den: "A metal key with a handmade flower and a printed card (like Teacher's Day). Great for graduations and events." },
  { id: "teacher-keychain", code: "LO-10", cat: "giveaways", price: null, imgs: [P + "teacher-keychain.jpg"],
    ar: "ميدالية \"شكراً معلمتي\"", en: "\"Thank you teacher\" keychain",
    dar: "ميدالية بوردة شانيل وكرت \"شكراً معلمتي – دمتِ منارة للعلم\". الألوان حسب اختيارك.",
    den: "A keychain with a chenille flower and a \"Thank you teacher\" card. Choose your colors." },
  { id: "chocolate-favors", code: "LO-12", cat: "giveaways", price: null, imgs: [P + "chocolate-favors.jpg"],
    ar: "توزيعات زنبقة مع شوكولاتة", en: "Lily & chocolate favors",
    dar: "زنبقة يدوية مع قطعة شوكولاتة وكرت \"شكراً معلمتي\" وشريطة. توزيعات حلوة للصف كامل.",
    den: "A handmade lily with a chocolate bar, a \"Thank you teacher\" tag and a ribbon. Sweet favors for a whole class." },
  { id: "teacher-set", code: "LO-11", cat: "giveaways", price: null, imgs: [P + "teacher-set.jpg"],
    ar: "مجموعة توزيعات يوم المعلم", en: "Teacher's Day giveaway set",
    dar: "مجموعة توزيعات ليوم المعلم: ورود، مفاتيح وكروت. اطلبي بكميات للصف كامل.",
    den: "Teacher's Day giveaway set: flowers, keys and cards. Order in bulk for a whole class." },
];

// Keep "img" (main photo) for older code paths.
PRODUCTS.forEach((p) => { p.img = p.imgs[0]; });
