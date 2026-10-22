// Page behavior: language switch, shop (search/sort/filter), product details,
// cart, custom order form, delivery info. Every order is sent as a WhatsApp message.

const TEXT = {
  ar: {
    navShop: "المنتجات", navCustom: "طلب خاص", navDelivery: "التوصيل", navAbout: "من نحن", navContact: "تواصل",
    heroTitle: "ورد يدوي ما بيذبل، وقطع مضيئة بتحكي عنك",
    heroLead: "كل قطعة مصنوعة باليد في الأردن – باقات، قناديل مضيئة، توزيعات للمناسبات وبوكسات هدايا. نصمّم حسب ذوقك وألوانك.",
    browse: "تصفّح المنتجات", customCta: "اطلب تصميم خاص", handmade: "صُنع يدوياً",
    f1t: "ما بيذبل", f1d: "ورد من خيوط الشانيل يدوم سنين",
    f2t: "حسب طلبك", f2d: "اختار الألوان والكمية والمناسبة",
    f3t: "توصيل بالأردن", f3d: "لكل المحافظات أو استلام شخصي",
    shopTitle: "منتجاتنا", searchPh: "ابحث بالاسم أو الوصف…",
    sortDefault: "الترتيب الافتراضي", sortLow: "السعر: من الأقل", sortHigh: "السعر: من الأعلى", sortName: "الاسم",
    countText: (n) => `عدد المنتجات: ${n}`,
    noResults: "ما في نتائج. جرّب كلمة ثانية أو اطلب تصميم خاص.",
    orderNow: "اطلب الآن", details: "التفاصيل", addCart: "أضف للسلة", added: "انضاف للسلة ✓",
    ask: "اسأل عن السعر", currency: "د.أ",
    customTitle: "الطلب الخاص",
    customSub: "صمّم قطعتك بالألوان والحجم اللي بدك ياهم، وبنبعتلك السعر على واتساب.",
    fType: "نوع القطعة", fSize: "الحجم", fOccasion: "المناسبة", fQty: "الكمية",
    fColors: "الألوان المفضلة", fColorsPh: "مثلاً: بنفسجي وأبيض",
    fDate: "بدك ياه بتاريخ", fNotes: "ملاحظات أو فكرة",
    fNotesPh: "اكتب أي تفاصيل، أو ابعت صورة على واتساب بعد الإرسال",
    fName: "الاسم", fArea: "منطقة التوصيل", fPay: "طريقة الدفع",
    fUrgent: "طلب مستعجل (أقل من أسبوع)",
    sizes: [["small", "صغير"], ["medium", "وسط"], ["large", "كبير"]],
    occasions: [["gift", "هدية"], ["birthday", "عيد ميلاد"], ["graduation", "تخرج"], ["teacher", "يوم المعلم"],
                ["mother", "عيد الأم"], ["wedding", "خطوبة أو عرس"], ["newborn", "مولود جديد"], ["other", "غير ذلك"]],
    summary: "ملخص الطلب", product: "المنتج", qty: "الكمية", delivery: "التوصيل", payment: "الدفع",
    priceConfirm: "السعر النهائي بنأكده معك على واتساب بعد ما نتفق على التفاصيل.",
    prep: (d) => `وقت التحضير: ${d} أيام على الأقل`,
    urgentNote: "الطلب المستعجل حسب التوفر، وبنأكدلك على واتساب.",
    sendCustom: "أرسل الطلب عبر واتساب", openIg: "افتح إنستغرام",
    deliveryTitle: "التوصيل والدفع", deliverySub: "كل المعلومات اللي بتحتاجها لتكمّل طلبك براحة.",
    free: "مجاني", feeAsk: "تُحدَّد عند التأكيد", feeLabel: "رسوم التوصيل",
    i1t: "وقت التحضير", i2t: "الدفع", i2d: "نقداً عند الاستلام أو تحويل CliQ",
    i3t: "تأكيد السعر", i3d: "السعر النهائي ورسوم التوصيل بنأكدهم معك على واتساب قبل التحضير",
    prepInfo: (d) => `${d} أيام على الأقل للطلب الخاص. المنتجات الجاهزة أسرع.`,
    aboutTitle: "من نحن",
    about1: "Lolyra مشروع أردني صغير بيصنع ورد وقطع ديكور يدوياً من خيوط الشانيل. كل قطعة بتنعمل بإيدينا وبتاخد وقتها لتطلع مميزة.",
    about2: "ورودنا ما بتذبل، وقطعنا المضيئة زي قنديل البحر واللوتس بتحوّل أي زاوية لمكان دافي. منعمل باقات، توزيعات مناسبات، ديكور وبوكسات هدايا بالألوان اللي بتحبها.",
    whyTitle: "ليش Lolyra؟",
    w1: "صناعة يدوية بتفاصيل دقيقة", w2: "ألوان وتصاميم حسب طلبك", w3: "قطع مضيئة ما بتلاقيها بمكان ثاني",
    w4: "توزيعات بكميات للمدارس والمناسبات", w5: "تغليف جاهز للإهداء", w6: "توصيل لكل محافظات الأردن",
    contactTitle: "تواصل معنا", waChat: "واتساب",
    cartTitle: "سلة الطلبات", cartEmpty: "السلة فاضية. أضف منتجات من المتجر.", sendCart: "أرسل الطلب عبر واتساب",
    remove: "حذف", total: "المجموع", someAsk: "بعض الأسعار بنأكدها على واتساب",
    cliqAlias: (a) => `اسم CliQ: ${a}`,
    msgHello: "مرحباً Lolyra 🌸",
    msgGeneral: "مرحباً Lolyra 🌸 بدي أستفسر عن منتجاتكم",
    msgProduct: (p) => `مرحباً Lolyra 🌸 بدي أطلب: ${p}`,
    msgCustom: "طلب خاص", msgCart: "طلب من المتجر",
    lName: "الاسم", lColors: "الألوان", lDate: "التاريخ", lNotes: "ملاحظات", lUrgent: "⚡ طلب مستعجل",
    lType: "النوع", lSize: "الحجم", lOccasion: "المناسبة",
    lang: "EN",
  },
  en: {
    navShop: "Shop", navCustom: "Custom order", navDelivery: "Delivery", navAbout: "About", navContact: "Contact",
    heroTitle: "Handmade flowers that never wilt, and pieces that glow",
    heroLead: "Every piece is handmade in Jordan – bouquets, light-up lamps, occasion giveaways and gift boxes. Made in your colors and style.",
    browse: "Browse products", customCta: "Request a custom design", handmade: "Handmade",
    f1t: "Never wilts", f1d: "Chenille flowers that last for years",
    f2t: "Made for you", f2d: "Pick colors, quantity and occasion",
    f3t: "Delivery in Jordan", f3d: "To every governorate, or pick up",
    shopTitle: "Our products", searchPh: "Search by name or description…",
    sortDefault: "Default order", sortLow: "Price: low to high", sortHigh: "Price: high to low", sortName: "Name",
    countText: (n) => `${n} products`,
    noResults: "No results. Try another word or request a custom design.",
    orderNow: "Order now", details: "Details", addCart: "Add to cart", added: "Added to cart ✓",
    ask: "Ask for price", currency: "JD",
    customTitle: "Custom order",
    customSub: "Design your piece in the colors and size you want, and we'll send you the price on WhatsApp.",
    fType: "Type of piece", fSize: "Size", fOccasion: "Occasion", fQty: "Quantity",
    fColors: "Favorite colors", fColorsPh: "e.g. purple and white",
    fDate: "Needed by", fNotes: "Notes or idea",
    fNotesPh: "Any details – you can also send a photo on WhatsApp after sending",
    fName: "Name", fArea: "Delivery area", fPay: "Payment method",
    fUrgent: "Urgent order (less than a week)",
    sizes: [["small", "Small"], ["medium", "Medium"], ["large", "Large"]],
    occasions: [["gift", "Gift"], ["birthday", "Birthday"], ["graduation", "Graduation"], ["teacher", "Teacher's Day"],
                ["mother", "Mother's Day"], ["wedding", "Engagement or wedding"], ["newborn", "New baby"], ["other", "Other"]],
    summary: "Order summary", product: "Product", qty: "Quantity", delivery: "Delivery", payment: "Payment",
    priceConfirm: "We confirm the final price with you on WhatsApp once we agree on the details.",
    prep: (d) => `Preparation time: at least ${d} days`,
    urgentNote: "Urgent orders depend on availability – we'll confirm on WhatsApp.",
    sendCustom: "Send order on WhatsApp", openIg: "Open Instagram",
    deliveryTitle: "Delivery & payment", deliverySub: "Everything you need to complete your order easily.",
    free: "Free", feeAsk: "Confirmed with order", feeLabel: "Delivery fee",
    i1t: "Preparation time", i2t: "Payment", i2d: "Cash on delivery or CliQ transfer",
    i3t: "Price confirmation", i3d: "We confirm the final price and delivery fee on WhatsApp before we start",
    prepInfo: (d) => `At least ${d} days for custom orders. Ready pieces are faster.`,
    aboutTitle: "About us",
    about1: "Lolyra is a small Jordanian studio making handmade flowers and decor from chenille wire. Every piece is made by hand and takes its time to turn out special.",
    about2: "Our flowers never wilt, and our light-up pieces like the jellyfish and lotus lamps turn any corner warm. We make bouquets, occasion giveaways, decor and gift boxes in the colors you love.",
    whyTitle: "Why Lolyra?",
    w1: "Handmade with fine detail", w2: "Colors and designs made to order", w3: "Light-up pieces you won't find elsewhere",
    w4: "Bulk giveaways for schools and events", w5: "Gift-ready wrapping", w6: "Delivery across Jordan",
    contactTitle: "Contact us", waChat: "WhatsApp",
    cartTitle: "Your cart", cartEmpty: "Your cart is empty. Add products from the shop.", sendCart: "Send order on WhatsApp",
    remove: "Remove", total: "Subtotal", someAsk: "Some prices are confirmed on WhatsApp",
    cliqAlias: (a) => `CliQ alias: ${a}`,
    msgHello: "Hello Lolyra 🌸",
    msgGeneral: "Hello Lolyra 🌸 I'd like to ask about your products",
    msgProduct: (p) => `Hello Lolyra 🌸 I'd like to order: ${p}`,
    msgCustom: "Custom order", msgCart: "Shop order",
    lName: "Name", lColors: "Colors", lDate: "Date", lNotes: "Notes", lUrgent: "⚡ Urgent order",
    lType: "Type", lSize: "Size", lOccasion: "Occasion",
    lang: "عربي",
  },
};

// ---------- state ----------
let lang = "ar";
let activeCat = "all";
let query = "";
let sortBy = "default";
let cart = []; // [{id, qty}]
let modalProduct = null;

const $ = (id) => document.getElementById(id);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
};

const saved = store.get("lolyra-lang");
if (saved === "en" || saved === "ar") lang = saved;
try { cart = JSON.parse(store.get("lolyra-cart") || "[]").filter((i) => PRODUCTS.some((p) => p.id === i.id)); } catch (e) { cart = []; }

const t = () => TEXT[lang];
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {})[lang] || "";
const priceText = (p) => (p.price ? `${p.price} ${t().currency}` : t().ask);
const feeText = (a) => (a.fee === 0 ? t().free : a.fee ? `${a.fee} ${t().currency}` : t().feeAsk);
const waLink = (msg) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
const both = (o) => (o.ar === o.en ? o.ar : `${o.ar} / ${o.en}`);

function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") n.className = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  });
  kids.flat().forEach((k) => n.append(k));
  return n;
}

function toast(msg) {
  const box = $("toast");
  box.textContent = msg;
  box.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => box.classList.remove("show"), 1800);
}

function fillSelect(select, options, keep = true) {
  const prev = select.value;
  select.innerHTML = "";
  options.forEach(([value, label]) => select.append(el("option", { value }, label)));
  if (keep && options.some(([v]) => v === prev)) select.value = prev;
}

function payRadios(box, name) {
  const prev = (box.querySelector("input:checked") || {}).value || "cash";
  box.innerHTML = "";
  PAYMENTS.forEach((p) => {
    const input = el("input", { type: "radio", name, value: p.id });
    input.checked = p.id === prev;
    const extra = p.id === "cliq" && STORE.cliqAlias ? ` – ${t().cliqAlias(STORE.cliqAlias)}` : "";
    box.append(el("label", { class: "radio" }, input,
      el("span", {}, el("b", {}, p[lang]), el("small", {}, p["d" + lang] + extra))));
  });
}

// ---------- shop ----------
function renderShopControls() {
  const box = $("filters");
  box.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const n = c.id === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c.id).length;
    box.append(el("button", {
      type: "button", role: "tab", "aria-selected": String(c.id === activeCat),
      onclick: () => { activeCat = c.id; renderShopControls(); renderGrid(); },
    }, c[lang], el("span", { class: "n" }, String(n))));
  });
  fillSelect($("sort"), [["default", t().sortDefault], ["low", t().sortLow], ["high", t().sortHigh], ["name", t().sortName]]);
  $("sort").value = sortBy;
}

function visibleProducts() {
  const q = query.trim().toLowerCase();
  let list = PRODUCTS.filter((p) => activeCat === "all" || p.cat === activeCat);
  if (q) list = list.filter((p) => [p.ar, p.en, p.dar, p.den, p.code, catName(p.cat)].join(" ").toLowerCase().includes(q));
  const priced = (p, dir) => (p.price == null ? Infinity : dir * p.price);
  if (sortBy === "low") list = [...list].sort((a, b) => priced(a, 1) - priced(b, 1));
  if (sortBy === "high") list = [...list].sort((a, b) => priced(a, -1) - priced(b, -1));
  if (sortBy === "name") list = [...list].sort((a, b) => a[lang].localeCompare(b[lang], lang));
  return list;
}

function renderGrid() {
  const grid = $("grid");
  const list = visibleProducts();
  grid.innerHTML = "";
  $("count").textContent = t().countText(list.length);
  $("empty").hidden = list.length > 0;
  list.forEach((p) => {
    grid.append(el("article", { class: "card" },
      el("button", { type: "button", class: "card-img", "aria-label": t().details, onclick: () => openProduct(p.id) },
        el("img", { src: p.img, alt: p[lang], loading: "lazy", width: "750", height: "1000" }),
        p.imgs.length > 1 ? el("span", { class: "photos-tag" }, `📷 ${p.imgs.length}`) : "",
        el("span", { class: "code-tag" }, p.code)),
      el("div", { class: "card-body" },
        el("span", { class: "card-cat" }, catName(p.cat)),
        el("h3", {}, p[lang]),
        el("p", { class: "desc" }, p["d" + lang]),
        el("span", { class: p.price ? "price" : "price ask" }, priceText(p)),
        el("div", { class: "card-actions" },
          el("button", { type: "button", class: "btn btn-primary", onclick: () => addToCart(p.id) }, t().addCart),
          el("a", { class: "btn btn-wa", target: "_blank", rel: "noopener",
            href: waLink(t().msgProduct(`${both(p)} (${p.code})`)) }, t().orderNow)),
        el("button", { type: "button", class: "link", onclick: () => openProduct(p.id) }, t().details))));
  });
}

// ---------- product modal ----------
function openProduct(id) {
  const p = byId(id);
  if (!p) return;
  modalProduct = p;
  fillModal();
  const m = $("productModal");
  if (!m.open) m.showModal();
}

function fillModal() {
  const p = modalProduct;
  if (!p) return;
  $("mImg").src = p.img; $("mImg").alt = p[lang];
  const thumbs = $("mThumbs");
  thumbs.innerHTML = "";
  thumbs.hidden = p.imgs.length < 2;
  p.imgs.forEach((src, i) => {
    const b = el("button", { type: "button", "aria-label": `${i + 1}`, "aria-current": String(i === 0),
      onclick: () => {
        $("mImg").src = src;
        thumbs.querySelectorAll("button").forEach((x) => x.setAttribute("aria-current", String(x === b)));
      } }, el("img", { src, alt: "", width: "56", height: "56" }));
    thumbs.append(b);
  });
  $("mCat").textContent = catName(p.cat);
  $("mName").textContent = p[lang];
  $("mCode").textContent = p.code;
  $("mDesc").textContent = p["d" + lang];
  $("mPrice").textContent = priceText(p);
  $("mPrice").className = p.price ? "price" : "price ask";
  $("mWa").href = waLink(t().msgProduct(`${both(p)} (${p.code})`));
}

// ---------- cart ----------
function saveCart() { store.set("lolyra-cart", JSON.stringify(cart)); }

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty += 1; else cart.push({ id, qty: 1 });
  saveCart(); renderCart(); toast(t().added);
}

function setQty(id, qty) {
  cart = qty <= 0 ? cart.filter((i) => i.id !== id) : cart.map((i) => (i.id === id ? { ...i, qty } : i));
  saveCart(); renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $("cartCount").textContent = count;
  $("cartCount").hidden = count === 0;
  const list = $("cartList");
  list.innerHTML = "";
  cart.forEach((i) => {
    const p = byId(i.id);
    list.append(el("li", { class: "cart-item" },
      el("img", { src: p.img, alt: "", width: "64", height: "64" }),
      el("div", { class: "ci-info" },
        el("b", {}, p[lang]),
        el("small", {}, `${p.code} · ${priceText(p)}`),
        el("div", { class: "qty" },
          el("button", { type: "button", "aria-label": "-", onclick: () => setQty(i.id, i.qty - 1) }, "−"),
          el("span", {}, String(i.qty)),
          el("button", { type: "button", "aria-label": "+", onclick: () => setQty(i.id, i.qty + 1) }, "+"))),
      el("button", { type: "button", class: "link", onclick: () => setQty(i.id, 0) }, t().remove)));
  });
  $("cartEmpty").hidden = cart.length > 0;
  $("cartForm").hidden = cart.length === 0;
  renderCartSummary();
}

function cartTotals() {
  let total = 0; let unknown = false;
  cart.forEach((i) => { const p = byId(i.id); if (p.price) total += p.price * i.qty; else unknown = true; });
  return { total, unknown };
}

function areaById(id) { return DELIVERY.find((a) => a.id === id) || DELIVERY[0]; }
function payById(id) { return PAYMENTS.find((p) => p.id === id) || PAYMENTS[0]; }

function renderCartSummary() {
  const f = $("cartForm");
  const area = areaById(f.area.value);
  const { total, unknown } = cartTotals();
  const box = $("kSummary");
  box.innerHTML = "";
  box.append(el("h4", {}, t().summary),
    row(t().total, total ? `${total} ${t().currency}` : t().ask),
    row(t().delivery, `${area[lang]} – ${feeText(area)}`));
  if (unknown || total === 0) box.append(el("p", { class: "hint" }, t().someAsk));
  box.append(el("p", { class: "hint" }, t().priceConfirm));
}

function row(label, value) {
  return el("div", { class: "srow" }, el("span", {}, label), el("b", {}, value));
}

function sendCart(e) {
  e.preventDefault();
  if (!cart.length) return;
  const f = $("cartForm");
  const area = areaById(f.area.value);
  const pay = payById((f.querySelector("input[name=kpay]:checked") || {}).value);
  const { total } = cartTotals();
  const lines = [t().msgHello, `🛍️ ${t().msgCart}:`];
  cart.forEach((i) => { const p = byId(i.id); lines.push(`• ${i.qty} × ${both(p)} (${p.code})${p.price ? ` – ${p.price * i.qty} ${t().currency}` : ""}`); });
  if (total) lines.push(`${t().total}: ${total} ${t().currency}`);
  if (f.name.value.trim()) lines.push(`${t().lName}: ${f.name.value.trim()}`);
  lines.push(`${t().delivery}: ${area[lang]}`, `${t().payment}: ${pay[lang]}`);
  if (f.notes.value.trim()) lines.push(`${t().lNotes}: ${f.notes.value.trim()}`);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
}

// ---------- custom order ----------
function renderCustomForm() {
  fillSelect($("cType"), CATEGORIES.filter((c) => c.id !== "all").map((c) => [c.id, c[lang]]));
  fillSelect($("cSize"), t().sizes);
  fillSelect($("cOccasion"), t().occasions);
  fillSelect($("cArea"), DELIVERY.map((a) => [a.id, a[lang]]));
  fillSelect($("kArea"), DELIVERY.map((a) => [a.id, a[lang]]));
  payRadios($("cPay"), "cpay");
  payRadios($("kPay"), "kpay");
  const min = new Date(); min.setDate(min.getDate() + 1);
  $("cDate").min = min.toISOString().slice(0, 10);
  renderCustomSummary();
}

function customValues() {
  const f = $("customForm");
  const opt = (sel) => sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : "";
  return {
    type: opt(f.type), size: opt(f.size), occasion: opt(f.occasion),
    qty: Math.max(1, parseInt(f.qty.value, 10) || 1),
    colors: f.colors.value.trim(), date: f.date.value, notes: f.notes.value.trim(),
    name: f.name.value.trim(), area: areaById(f.area.value),
    pay: payById((f.querySelector("input[name=cpay]:checked") || {}).value),
    urgent: f.urgent.checked,
  };
}

function renderCustomSummary() {
  const v = customValues();
  const box = $("cSummary");
  box.innerHTML = "";
  box.append(el("h4", {}, t().summary),
    row(t().product, `${v.type} – ${v.size}`),
    row(t().qty, String(v.qty)),
    row(t().delivery, `${v.area[lang]} – ${feeText(v.area)}`),
    row(t().payment, v.pay[lang]),
    el("p", { class: "big" }, t().priceConfirm),
    el("p", { class: "hint strong" }, v.urgent ? t().urgentNote : t().prep(STORE.prepDays)));
}

function sendCustom(e) {
  e.preventDefault();
  const v = customValues();
  const lines = [t().msgHello, `✨ ${t().msgCustom}:`,
    `${t().lType}: ${v.type}`, `${t().lSize}: ${v.size}`, `${t().lOccasion}: ${v.occasion}`, `${t().qty}: ${v.qty}`];
  if (v.colors) lines.push(`${t().lColors}: ${v.colors}`);
  if (v.date) lines.push(`${t().lDate}: ${v.date}`);
  if (v.notes) lines.push(`${t().lNotes}: ${v.notes}`);
  if (v.name) lines.push(`${t().lName}: ${v.name}`);
  lines.push(`${t().delivery}: ${v.area[lang]}`, `${t().payment}: ${v.pay[lang]}`);
  if (v.urgent) lines.push(t().lUrgent);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
}

// ---------- delivery ----------
function renderDelivery() {
  const box = $("areas");
  box.innerHTML = "";
  DELIVERY.forEach((a) => box.append(el("div", { class: "mini" },
    el("b", {}, a[lang]), el("span", {}, `${t().feeLabel}: ${feeText(a)}`))));
  $("prepText").textContent = t().prepInfo(STORE.prepDays);
}

// ---------- language ----------
function applyLang() {
  const tx = t();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    const v = tx[n.dataset.i18n];
    if (typeof v === "string") n.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((n) => {
    const v = tx[n.dataset.i18nPh];
    if (typeof v === "string") n.placeholder = v;
  });
  $("langBtn").textContent = tx.lang;
  const general = waLink(tx.msgGeneral);
  ["contactWa", "waFloat"].forEach((id) => { $(id).href = general; });
  renderShopControls();
  renderGrid();
  renderCustomForm();
  renderDelivery();
  renderCart();
  fillModal();
}

// ---------- wiring ----------
$("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  store.set("lolyra-lang", lang);
  applyLang();
});
$("search").addEventListener("input", (e) => { query = e.target.value; renderGrid(); });
$("sort").addEventListener("change", (e) => { sortBy = e.target.value; renderGrid(); });
$("cartBtn").addEventListener("click", () => $("cartDrawer").showModal());
$("mAdd").addEventListener("click", () => { if (modalProduct) addToCart(modalProduct.id); });
$("customForm").addEventListener("input", renderCustomSummary);
$("customForm").addEventListener("change", renderCustomSummary);
$("customForm").addEventListener("submit", sendCustom);
$("cartForm").addEventListener("change", renderCartSummary);
$("cartForm").addEventListener("submit", sendCart);

document.querySelectorAll("dialog").forEach((d) => {
  d.addEventListener("click", (e) => {
    if (e.target === d || e.target.closest("[data-close]")) d.close();
  });
});

$("igLink").href = STORE.instagram;
$("customIg").href = STORE.instagram;
$("fbLink").href = STORE.facebook;
$("year").textContent = new Date().getFullYear();

applyLang();
