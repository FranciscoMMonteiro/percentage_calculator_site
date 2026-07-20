# calcpercentages.com

A percentage calculator built as a pre-rendered React app. Every route is a real
HTML file — the calculator hydrates on top of it — so crawlers and AdSense
reviewers see the full content without running JavaScript.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server (`vite-react-ssg dev`) |
| `npm run build` | Client build → SSR build → pre-render every route → write `sitemap.xml` |
| `npm run preview` | Serve `dist/` locally on :4173 |
| `npm run lint` | ESLint |
| `npm run assets` | Regenerate `background.webp` / `og-image.png` from `public/background.png` |

## Project structure

```
src/
  config/site.js       Domain, locales, hreflang codes, contact email
  config/routes.js     Page keys, per-locale slugs, path helpers  ← single source of truth
  config/seo.js        Title + meta description per locale/page
  config/examples.js   Example preset data for the pills
  content/<locale>.js  All page copy (headings, prose, tables, FAQ, HowTo steps)
  routes.jsx           Route tree, generated from config/routes.js
  components/Seo.jsx   title, description, canonical, hreflang, OG, JSON-LD, AdSense tag
  components/Layout.jsx  TopBar + <Outlet/> + Footer, one branch per locale
  components/Calculator.jsx  All calculator state (was App.jsx)
  hooks/usePercentageCalculator.js  Calculation logic (unchanged)
scripts/
  generate-sitemap.js  Vite plugin; reads config/routes.js so it cannot drift
  build-assets.js      Image optimization (sharp)
```

### Adding a page

1. Add the key to `PAGES` and the slugs to `SLUGS` in `src/config/routes.js`.
2. Add it to `LOCALE_PAGES` for each locale that has content for it.
3. Add title/description to `src/config/seo.js` and copy to `src/content/<locale>.js`.
4. Add `nav_<key>` strings to `src/translations.js`.

Routing, the sitemap, hreflang alternates and the footer links all follow
automatically.

### Adding a language

Add the code to `LOCALES` and `HREFLANG` in `src/config/site.js`, a slug map and
`LOCALE_PAGES` entry in `src/config/routes.js`, a `src/content/<locale>.js`, and a
block in `src/translations.js`.

## URLs

English lives at the root; other languages sit under a prefix, with localized
slugs:

```
/                     /pt/                    /es/ /fr/ /de/ /it/
/tip-calculator       /pt/calculadora-de-gorjeta
/discount-calculator  /pt/calculadora-de-desconto
/vat-calculator       /pt/calculadora-de-imposto
/margin-calculator    /pt/calculadora-de-margem
/faq /about /contact /privacy /terms  (+ Portuguese equivalents)
```

Full editorial content exists in English and Portuguese. Spanish, French, German
and Italian ship the calculator home page only; `hreflang` and the sitemap
advertise a page only where it was actually built.

Canonical URLs carry **no trailing slash** (except the root), matching
`"trailingSlash": false` in `vercel.json`. Changing one without the other makes
every canonical point at a redirect.

## Remaining manual steps

These need an account and cannot be done from the repo:

1. **Search Console** — verify `calcpercentages.com`, submit
   `https://www.calcpercentages.com/sitemap.xml`, and confirm pages are being
   indexed before applying to AdSense. Applying with nothing in the index is the
   most common rejection.
2. **AdSense application** — apply once indexing has started. Then:
   - Set `VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX` as an environment variable
     in the Vercel project and redeploy. `src/components/Seo.jsx` injects the
     verification/serving script on every page when that variable is present.
   - Replace `pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` with the real publisher
     ID. AdSense reports an "unauthorized inventory" warning until this matches.
3. **Consent (EEA/UK/Switzerland)** — enable Google's *Privacy & messaging* CMP
   in the AdSense dashboard. No code needed; it is required before personalised
   ads may be served to European visitors, and the privacy policy already
   describes it.
4. **Ad placement** — once approved, put one responsive unit below the calculator
   card and one mid-article. Do not place ads above or inside the calculator:
   AdSense penalises units that can be mistaken for tool controls.
