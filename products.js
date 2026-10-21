// ============================================================
//  Lolyra store settings + product list
//  Edit this file to change the WhatsApp number, links or products.
// ============================================================

const STORE = {
  // WhatsApp number in international format, digits only (e.g. 9627XXXXXXXX).
  // TODO: replace with the real Lolyra number.
  whatsapp: "962700000000",
  instagram: "https://www.instagram.com/lolyra_jo",
  facebook: "https://www.facebook.com/people/lolyra-jo/61593904466924/",
};

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
const PRODUCTS = [
  { id: "jellyfish-lamp",     cat: "lights",    price: null, img: "assets/products/jellyfish-lamp.jpg",
    ar: "قنديل البحر المضيء",          en: "Glowing jellyfish lamp" },
  { id: "jellyfish-lamp-gold", cat: "lights",   price: null, img: "assets/products/jellyfish-lamp-gold.jpg",
    ar: "قنديل البحر مع قاعدة ذهبية",   en: "Jellyfish lamp on golden base" },
  { id: "jellyfish-gift",     cat: "lights",    price: null, img: "assets/products/jellyfish-gift.jpg",
    ar: "قنديل البحر مغلف كهدية",       en: "Gift-wrapped jellyfish lamp" },

  { id: "red-lily-pot",       cat: "bouquets",  price: null, img: "assets/products/red-lily-pot.jpg",
    ar: "زنبق أحمر في كوب",             en: "Red lilies in a mug" },
  { id: "sunflower-vase",     cat: "bouquets",  price: null, img: "assets/products/sunflower-vase.jpg",
    ar: "فازة دوار الشمس",              en: "Sunflower vase" },
  { id: "purple-lily-box",    cat: "bouquets",  price: null, img: "assets/products/purple-lily-box.jpg",
    ar: "بوكس زنبق بنفسجي",             en: "Purple lily box" },
  { id: "plum-grey-bouquet",  cat: "bouquets",  price: null, img: "assets/products/plum-grey-bouquet.jpg",
    ar: "باقة بنفسجي ورمادي",           en: "Plum & grey bouquet" },

  { id: "sunflower-hoop",     cat: "decor",     price: null, img: "assets/products/sunflower-hoop.jpg",
    ar: "طوق دوار الشمس للحائط",        en: "Sunflower wall hoop" },

  { id: "key-favors",         cat: "giveaways", price: null, img: "assets/products/key-favors.jpg",
    ar: "توزيعات مفتاح مع وردة",        en: "Flower key favors" },
  { id: "teacher-card",       cat: "giveaways", price: null, img: "assets/products/teacher-card.jpg",
    ar: "بطاقة شكراً معلمتي",           en: "\"Thank you teacher\" card" },
  { id: "teacher-set",        cat: "giveaways", price: null, img: "assets/products/teacher-set.jpg",
    ar: "توزيعات يوم المعلم",           en: "Teacher's Day giveaways" },
  { id: "chocolate-tags",     cat: "giveaways", price: null, img: "assets/products/chocolate-tags.jpg",
    ar: "توزيعات وردة مع شوكولاتة",     en: "Flower & chocolate favors" },

  { id: "plush-gift-bag",     cat: "gifts",     price: null, img: "assets/products/plush-gift-bag.jpg",
    ar: "شنطة هدية مع دمية وورد",       en: "Gift bag with plush & flowers" },
  { id: "candy-plush-box",    cat: "gifts",     price: null, img: "assets/products/candy-plush-box.jpg",
    ar: "هدية حلوى مع دمية",            en: "Candy & plush gift" },
];
