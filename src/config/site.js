export const SITE_URL = 'https://www.calcpercentages.com';
export const SITE_NAME = 'CalcPercentages';
export const CONTACT_EMAIL = 'franfactory.store@gmail.com';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

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
