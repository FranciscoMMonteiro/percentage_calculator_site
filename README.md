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
  config/reviewed.js   Last-reviewed date per page; feeds the visible date,
                       JSON-LD dateModified and sitemap <lastmod>
  content/<locale>.js  All page copy (headings, prose, tables, FAQ, HowTo steps)
  routes.jsx           Route tree, generated from config/routes.js
  components/Seo.jsx   title, description, canonical, hreflang, OG, JSON-LD, AdSense tag
  components/Layout.jsx  TopBar + <Outlet/> + Footer, one branch per locale
  components/Calculator.jsx  The four-mode calculator and its state
  components/SalaryCalculator.jsx   Standalone tool, own hook
  components/PointsCalculator.jsx   Standalone tool, own hook
  hooks/usePercentageCalculator.js  The three-field solver
  hooks/useSalaryRaise.js           Old pay / new pay / % + inflation
  hooks/usePercentagePoints.js      Points, relative change, % difference
  utils/workedSteps.js  Turns the live inputs into the arithmetic, step by step
  utils/numberInput.js  Separator-aware regex and display formatting
scripts/
  generate-sitemap.js  Vite plugin; reads config/routes.js so it cannot drift
  build-assets.js      Image optimization (sharp)
```

### Adding a page

1. Add the key to `PAGES` and the slugs to `SLUGS` in `src/config/routes.js`.
2. Add it to `LOCALE_PAGES` for each locale that has content for it.
3. Add title/description to `src/config/seo.js` and copy to `src/content/<locale>.js`.
4. Add `nav_<key>` strings to `src/translations.js` — **all six locales**, since the
   footer renders every page key in every language.
5. Add the key to `REVIEWED` in `src/config/reviewed.js`, or the page ships with no
   review date and no `<lastmod>`.

A page with its own maths (rather than a preset of the four-mode calculator) also
needs an entry in `STANDALONE_CALCULATORS` and a component in the `TOOLS` map in
`src/pages/StandaloneCalculatorPage.jsx`.

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
/                              /pt/                                  /es/ /fr/ /de/ /it/
/discount-calculator           /pt/calculadora-de-desconto
/tip-calculator                /pt/calculadora-de-gorjeta
/vat-calculator                /pt/calculadora-de-imposto
/margin-calculator             /pt/calculadora-de-margem
/salary-raise-calculator       /pt/calculadora-de-aumento-salarial
/percentage-points-calculator  /pt/calculadora-de-pontos-percentuais
/percentage-formulas           /pt/formulas-de-porcentagem
/mental-math-percentages       /pt/porcentagem-de-cabeca
/percentage-mistakes           /pt/erros-de-porcentagem
/faq /methodology /about /contact /privacy /terms   (+ Portuguese equivalents)
/es/metodologia  /fr/methodologie  /de/methodik  /it/metodologia
```

40 routes in total. Full editorial content exists in English and Portuguese;
Spanish, French, German and Italian ship the home page and the methodology page.
`hreflang` and the sitemap advertise a page only where it was actually built, and
`getPathWithFallback` sends a locale that lacks a page to the **English** URL
rather than looping it back to its own home — a locale with no outbound links is
the pattern that reads as thin content.

Canonical URLs carry **no trailing slash** (except the root), matching
`"trailingSlash": false` in `vercel.json`. Changing one without the other makes
every canonical point at a redirect.

## Content invariants

These are what the site was rejected for the first time round, so they are worth
keeping:

- **No indexed URL under ~600 words of body text.** Run the build and strip tags
  from `dist/**/index.html` to check; the shared chrome (top bar, calculator
  labels, four-column footer) is roughly 180 of those words on every page.
- **`en.js` and `pt.js` stay 1:1 on page keys.** `getContent` silently falls back
  to English, so a missing `pt` key renders English at a `/pt/` URL with no error.
- **Every page has an outbound path.** `ContentPage` and `StandaloneCalculatorPage`
  both render `RelatedCalculators` for this reason.
- **Worked examples are checked against the tool they sit beside**, and reference
  tables are recomputed rather than copied. The methodology page says so publicly.

## Remaining manual steps

These need an account and cannot be done from the repo:

1. **Search Console** — verify `calcpercentages.com`, submit
   `https://www.calcpercentages.com/sitemap.xml`, and confirm pages are being
   indexed before applying to AdSense. Applying with nothing in the index is the
   most common rejection.
2. **AdSense application** — apply once indexing has started. The publisher ID
   `ca-pub-7168114647201128` is already wired up: the loader script is emitted on
   every page by `src/components/Seo.jsx`, and `public/ads.txt` matches it. The
   two must stay in sync or AdSense reports unauthorized inventory. Set
   `VITE_ADSENSE_CLIENT=""` to produce a build with no ad script.
3. **Consent (EEA/UK/Switzerland)** — enable Google's *Privacy & messaging* CMP
   in the AdSense dashboard. No code needed; it is required before personalised
   ads may be served to European visitors, and the privacy policy already
   describes it.
4. **Ad placement** — once approved, put one responsive unit below the calculator
   card and one mid-article. Do not place ads above or inside the calculator:
   AdSense penalises units that can be mistaken for tool controls.
