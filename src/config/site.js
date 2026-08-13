export const SITE_URL = 'https://calcpercentages.com';
export const SITE_NAME = 'CalcPercentages';
export const CONTACT_EMAIL = 'franfactory.store@gmail.com';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * AdSense publisher ID. Not a secret — it is visible in the page source of
 * every ad-serving site — so it lives in the repo rather than in an env var,
 * and must stay in sync with public/ads.txt.
 *
 * No `import.meta.env` here: this module is also imported by
 * scripts/generate-sitemap.js, which runs in plain Node where that is
 * undefined. Seo.jsx applies the VITE_ADSENSE_CLIENT override instead.
 */
export const ADSENSE_CLIENT = 'ca-pub-7168114647201128';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'pt', 'es', 'fr', 'de', 'it'];

/** Values for the hreflang attribute — more specific than the internal locale key. */
export const HREFLANG = {
  en: 'en',
  pt: 'pt-BR',
  es: 'es',
  fr: 'fr',
  de: 'de',
  it: 'it'
};

export const LOCALE_LABELS = {
  en: 'English',
  pt: 'Português (BR)',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano'
};

/** Sibling projects, previously hardcoded in RelatedCalculators. */
export const RELATED_SITES = [
  { href: 'https://www.matrixcalc.net/', labelKey: 'related_matrix' },
  { href: 'https://www.calcworkdays.com/', labelKey: 'related_work_days' }
];
