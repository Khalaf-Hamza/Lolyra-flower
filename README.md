# Lolyra website

Simple store website for **Lolyra** (lolyra.jo): handmade chenille flowers, light-up pieces, giveaways and gift boxes. Arabic + English, orders go through WhatsApp. No login or database.

## Files
- `index.html`: page structure
- `style.css`: design and phone layout
- `app.js`: language switch, product grid, filters, WhatsApp links
- `products.js`: **edit this** to change the WhatsApp number, prices and products
- `assets/products/`: product photos (600×600 JPG)

## Add or change a product
1. Put a square photo in `assets/products/` (e.g. `rose-box.jpg`).
2. Add a line to `PRODUCTS` in `products.js`:
   ```js
   { id: "rose-box", cat: "gifts", price: 15, img: "assets/products/rose-box.jpg", ar: "بوكس ورد", en: "Rose box" },
   ```
   Use `price: null` to show "Ask for price".

## Publish (free) on GitHub Pages
Repo **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`, then Save.
