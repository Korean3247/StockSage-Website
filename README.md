# StockSage Website

Static landing page for the StockSage Discord bot.

## Live site
- https://stocksage-website.vercel.app/

## Features
- Hero command preview with quick switches (Price / Alert / Portfolio / Chart).
- “See it in chat” demo showing multi-line Discord-style replies and chart image preview.
- Usage section with concise command examples.
- Open Graph/Twitter cards for rich previews, favicon, and Apple touch icon.
- Sitemap (`/sitemap.xml`) and robots.txt for search indexing.

## Project structure
- `index.html` — main page.
- `styles/` — shared styles (`demo.css` for chat/hero interactions).
- `scripts/` — interaction logic (`demo.js` for demos).
- `assets/` — logos, favicons, preview images (`og-share.jpg`), chart demo PNG.
- `_headers` — forces correct content types for sitemap/robots on static hosts (Vercel).
- `sitemap.xml`, `robots.txt` — SEO helpers.

## Local preview
Any static server works (e.g. Python simple server):
```bash
cd Website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (Vercel or any static host)
1) Deploy the `Website/` directory as the site root.  
2) Ensure `_headers` is respected so `sitemap.xml` serves as `application/xml`.  
3) If your domain changes, update these in `index.html`:
   - `og:url`
   - `og:image` / `twitter:image` absolute URLs
   - `robots.txt` sitemap URL

## Updating the preview image
Replace `assets/og-share.jpg` (1200x627 recommended) and keep the Open Graph tags in `index.html` pointing to the new absolute URL.
