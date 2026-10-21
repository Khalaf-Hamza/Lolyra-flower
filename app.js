// Page behavior: language switch, product grid, filters, WhatsApp links.

const TEXT = {
  ar: {
    navShop: "المنتجات", navHow: "طريقة الطلب", navContact: "تواصل",
    heroTitle: "ورد يدوي ما بيذبل، وقطع مضيئة بتحكي عنك",
    heroLead: "كل قطعة مصنوعة باليد في الأردن – باقات، قناديل مضيئة، توزيعات للمناسبات وبوكسات هدايا. نصمّم حسب ذوقك وألوانك.",
    orderWa: "اطلب عبر واتساب", browse: "تصفّح المنتجات", handmade: "صُنع يدوياً",
    f1t: "ما بيذبل", f1d: "ورد من خيوط الشانيل يدوم سنين",
    f2t: "حسب طلبك", f2d: "اختار الألوان والكمية والمناسبة",
    f3t: "مناسبات", f3d: "يوم المعلم، تخرج، أعياد ميلاد وأكثر",
    shopTitle: "منتجاتنا",
    howTitle: "طريقة الطلب",
    s1: "اختار القطعة اللي عجبتك",
    s2: "اضغط \"اطلب\" – بتنفتح محادثة واتساب جاهزة",
    s3: "نتفق على الألوان والسعر وموعد التوصيل",
    custom: "بدك تصميم خاص؟ ابعتلنا صورة أو فكرة ونعملها إلك.",
    contactTitle: "تواصل معنا", waChat: "واتساب",
    location: "الأردن – التوصيل حسب المنطقة",
    order: "اطلب", ask: "اسأل عن السعر", currency: "د.أ",
    msgGeneral: "مرحباً Lolyra 🌸 بدي أستفسر عن منتجاتكم",
    msgProduct: (name) => `مرحباً Lolyra 🌸 بدي أطلب: ${name}`,
    lang: "EN",
  },
  en: {
    navShop: "Shop", navHow: "How to order", navContact: "Contact",
    heroTitle: "Handmade flowers that never wilt, and pieces that glow",
    heroLead: "Every piece is handmade in Jordan – bouquets, light-up lamps, occasion giveaways and gift boxes. Made in your colors and style.",
    orderWa: "Order on WhatsApp", browse: "Browse products", handmade: "Handmade",
    f1t: "Never wilts", f1d: "Chenille flowers that last for years",
    f2t: "Made for you", f2d: "Pick colors, quantity and occasion",
    f3t: "Occasions", f3d: "Teacher's Day, graduation, birthdays and more",
    shopTitle: "Our products",
    howTitle: "How to order",
    s1: "Pick the piece you like",
    s2: "Tap \"Order\" – a WhatsApp chat opens ready to send",
    s3: "We agree on colors, price and delivery",
    custom: "Want something custom? Send us a photo or idea and we'll make it.",
    contactTitle: "Contact us", waChat: "WhatsApp",
    location: "Jordan – delivery depends on area",
    order: "Order", ask: "Ask for price", currency: "JD",
    msgGeneral: "Hello Lolyra 🌸 I'd like to ask about your products",
    msgProduct: (name) => `Hello Lolyra 🌸 I'd like to order: ${name}`,
    lang: "عربي",
  },
};

let lang = "ar";
let activeCat = "all";

try {
  const saved = localStorage.getItem("lolyra-lang");
  if (saved === "en" || saved === "ar") lang = saved;
} catch (e) { /* storage unavailable */ }

function waLink(message) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function renderFilters() {
  const box = document.getElementById("filters");
  box.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.role = "tab";
    b.textContent = c[lang];
    b.setAttribute("aria-selected", String(c.id === activeCat));
    b.addEventListener("click", () => { activeCat = c.id; renderFilters(); renderGrid(); });
    box.appendChild(b);
  });
}

function renderGrid() {
  const t = TEXT[lang];
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const catName = Object.fromEntries(CATEGORIES.map((c) => [c.id, c[lang]]));
  PRODUCTS
    .filter((p) => activeCat === "all" || p.cat === activeCat)
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      const img = document.createElement("img");
      img.src = p.img; img.alt = p[lang]; img.loading = "lazy"; img.width = 600; img.height = 600;

      const body = document.createElement("div");
      body.className = "card-body";

      const cat = document.createElement("span");
      cat.className = "card-cat"; cat.textContent = catName[p.cat];

      const h3 = document.createElement("h3");
      h3.textContent = p[lang];

      const foot = document.createElement("div");
      foot.className = "card-foot";
      const price = document.createElement("span");
      if (p.price) { price.className = "price"; price.textContent = `${p.price} ${t.currency}`; }
      else { price.className = "price ask"; price.textContent = t.ask; }

      const btn = document.createElement("a");
      btn.className = "btn btn-wa";
      btn.target = "_blank"; btn.rel = "noopener";
      // Always send the Arabic + English name so the shop knows the exact item
      btn.href = waLink(t.msgProduct(`${p.ar} / ${p.en}`));
      btn.textContent = t.order;

      foot.append(price, btn);
      body.append(cat, h3, foot);
      card.append(img, body);
      grid.appendChild(card);
    });
}

function applyLang() {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.getElementById("langBtn").textContent = t.lang;
  const general = waLink(t.msgGeneral);
  ["heroWa", "contactWa", "waFloat"].forEach((id) => { document.getElementById(id).href = general; });
  renderFilters();
  renderGrid();
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  try { localStorage.setItem("lolyra-lang", lang); } catch (e) { /* ignore */ }
  applyLang();
});

document.getElementById("igLink").href = STORE.instagram;
document.getElementById("fbLink").href = STORE.facebook;
document.getElementById("year").textContent = new Date().getFullYear();

applyLang();
