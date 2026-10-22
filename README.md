# Lolyra website

Simple store website for **Lolyra** (lolyra.jo): handmade chenille flowers, light-up pieces, giveaways and gift boxes. Arabic + English, orders go through WhatsApp. No login or database.

## Files
- `index.html`: page structure
- `style.css`: design and phone layout
- `app.js`: language switch, product grid, filters, WhatsApp links
- `products.js`: **edit this** to change the WhatsApp number, prices, products, delivery areas/fees, payment options and preparation days
- `assets/products/`: product photos (600×600 JPG)

## What the site does
- Shop with search, sort, category filters and a details window for each product
- Cart: customers add several pieces and send one WhatsApp message with everything
- Custom order form: type, size, occasion, quantity, colors, date, notes, area, payment, urgent option
- Delivery & payment section, About and "Why Lolyra"
- Arabic / English switch

## Before going live (TODO in `products.js`)
- `STORE.whatsapp`: real WhatsApp number
- `STORE.prepDays`: real preparation time
- `STORE.cliqAlias`: CliQ alias (optional)
- `DELIVERY[].fee`: delivery fee per area (null shows "confirmed with order")
- Product `price` values

## Add or change a product
1. Put a square photo in `assets/products/` (e.g. `rose-box.jpg`).
2. Add a line to `PRODUCTS` in `products.js`:
   ```js
   { id: "rose-box", code: "LO-15", cat: "gifts", price: 15, img: "assets/products/rose-box.jpg",
     ar: "بوكس ورد", en: "Rose box", dar: "وصف قصير بالعربي", den: "Short English description" },
   ```
   Use `price: null` to show "Ask for price".

## Publish (free) on GitHub Pages
Repo **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`, then Save.
