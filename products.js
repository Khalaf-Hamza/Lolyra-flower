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
const PRODUCTS = [
  { id: "jellyfish-lamp", code: "LO-01", cat: "lights", price: null, img: "assets/products/jellyfish-lamp.jpg",
    ar: "قنديل البحر المضيء", en: "Glowing jellyfish lamp",
    dar: "قنديل بحر بقبة تركوازية من خيوط الشانيل وأذرع شفافة مع إضاءة دافئة. قطعة ديكور ونور ليلي بنفس الوقت.",
    den: "Teal chenille dome with clear flowing arms and warm fairy lights. A decor piece and a night light in one." },
  { id: "jellyfish-lamp-gold", code: "LO-02", cat: "lights", price: null, img: "assets/products/jellyfish-lamp-gold.jpg",
    ar: "قنديل البحر مع قاعدة ذهبية", en: "Jellyfish lamp on golden base",
    dar: "قنديل البحر المضيء على قاعدة مزينة بالورد واللؤلؤ. هدية مميزة لغرفة النوم أو المكتب.",
    den: "The glowing jellyfish on a base decorated with flowers and pearls. A special gift for a bedroom or desk." },
  { id: "jellyfish-gift", code: "LO-03", cat: "lights", price: null, img: "assets/products/jellyfish-gift.jpg",
    ar: "قنديل البحر مغلف كهدية", en: "Gift-wrapped jellyfish lamp",
    dar: "قنديل البحر جاهز للإهداء بتغليف شفاف وشريطة. بيوصل جاهز تقدميه مباشرة.",
    den: "Jellyfish lamp ready to give, in clear wrapping with a ribbon." },

  { id: "red-lily-pot", code: "LO-04", cat: "bouquets", price: null, img: "assets/products/red-lily-pot.jpg",
    ar: "زنبق أحمر في كوب", en: "Red lilies in a mug",
    dar: "زنابق حمراء مخملية في كوب أخضر مع كرت إهداء. مناسبة كهدية للمعلمة أو صديقة.",
    den: "Velvety red lilies in a green mug with a gift card. Lovely for a teacher or a friend." },
  { id: "sunflower-vase", code: "LO-05", cat: "bouquets", price: null, img: "assets/products/sunflower-vase.jpg",
    ar: "فازة دوار الشمس", en: "Sunflower vase",
    dar: "فازة مليانة دوار شمس أصفر بتضوّي أي زاوية وبتضل مفتّحة طول السنة.",
    den: "A vase full of bright sunflowers that light up any corner and stay in bloom all year." },
  { id: "purple-lily-box", code: "LO-06", cat: "bouquets", price: null, img: "assets/products/purple-lily-box.jpg",
    ar: "بوكس زنبق بنفسجي", en: "Purple lily box",
    dar: "زنابق بنفسجية غامقة مع ورد رمادي في بوكس أبيض بشعار Lolyra.",
    den: "Deep plum lilies with grey blossoms in a white Lolyra box." },
  { id: "plum-grey-bouquet", code: "LO-07", cat: "bouquets", price: null, img: "assets/products/plum-grey-bouquet.jpg",
    ar: "باقة بنفسجي ورمادي", en: "Plum & grey bouquet",
    dar: "تنسيق راقي بألوان البنفسجي والرمادي مع لمسات خضراء. بنقدر نغيّر الألوان حسب ذوقك.",
    den: "An elegant mix of plum and grey with green touches. Colors can be changed to your taste." },

  { id: "sunflower-hoop", code: "LO-08", cat: "decor", price: null, img: "assets/products/sunflower-hoop.jpg",
    ar: "طوق دوار الشمس للحائط", en: "Sunflower wall hoop",
    dar: "طوق خشبي مزين بدوار الشمس وأوراق خضراء ودوالي متدلية. ديكور جميل للحائط أو الباب.",
    den: "A wooden hoop with sunflowers, green leaves and hanging vines. Lovely on a wall or door." },

  { id: "key-favors", code: "LO-09", cat: "giveaways", price: null, img: "assets/products/key-favors.jpg",
    ar: "توزيعات مفتاح مع وردة", en: "Flower key favors",
    dar: "مفتاح معدني مع وردة يدوية وكرت مطبوع. مثالية للتخرج والمناسبات، والكميات حسب الطلب.",
    den: "A metal key with a handmade flower and a printed card. Great for graduations and events, any quantity." },
  { id: "teacher-card", code: "LO-10", cat: "giveaways", price: null, img: "assets/products/teacher-card.jpg",
    ar: "بطاقة شكراً معلمتي", en: "\"Thank you teacher\" card",
    dar: "كرت \"شكراً معلمتي\" مع وردة يدوية بلون من اختيارك.",
    den: "A \"Thank you teacher\" card with a handmade flower in the color you choose." },
  { id: "teacher-set", code: "LO-11", cat: "giveaways", price: null, img: "assets/products/teacher-set.jpg",
    ar: "توزيعات يوم المعلم", en: "Teacher's Day giveaways",
    dar: "مجموعة توزيعات ليوم المعلم: ورود، مفاتيح وكروت. اطلبي بكميات للصف كامل.",
    den: "Teacher's Day giveaway set: flowers, keys and cards. Order in bulk for a whole class." },
  { id: "chocolate-tags", code: "LO-12", cat: "giveaways", price: null, img: "assets/products/chocolate-tags.jpg",
    ar: "توزيعات وردة مع شوكولاتة", en: "Flower & chocolate favors",
    dar: "وردة يدوية مع قطعة شوكولاتة وكرت صغير. توزيعات حلوة لأي مناسبة.",
    den: "A handmade flower with a chocolate and a small tag. Sweet favors for any occasion." },

  { id: "plush-gift-bag", code: "LO-13", cat: "gifts", price: null, img: "assets/products/plush-gift-bag.jpg",
    ar: "شنطة هدية مع دمية وورد", en: "Gift bag with plush & flowers",
    dar: "شنطة هدية فيها دمية ناعمة وورد ملوّن وحلويات. بتفرّح الكبار والصغار.",
    den: "A gift bag with a soft plush, colorful flowers and sweets. Loved by kids and adults." },
  { id: "candy-plush-box", code: "LO-14", cat: "gifts", price: null, img: "assets/products/candy-plush-box.jpg",
    ar: "هدية حلوى مع دمية", en: "Candy & plush gift",
    dar: "كوب حلوى ملوّن مع دمية وورد. هدية لطيفة لعيد ميلاد أو مفاجأة.",
    den: "A colorful candy cup with a plush and flowers. A cute birthday or surprise gift." },
];
