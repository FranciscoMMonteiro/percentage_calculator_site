import { DEFAULT_LOCALE, LOCALES } from './site.js';

/**
 * Every page key the site knows about. The order here drives the sitemap.
 */
export const PAGES = [
  'home',
  'discount',
  'tip',
  'vat',
  'margin',
  'faq',
  'about',
  'contact',
  'privacy',
  'terms'
];

/**
 * Long-form content only exists in English and Portuguese for now; the other
 * locales ship the calculator home page. hreflang and the sitemap are both
 * derived from this map, so they can never advertise a page that wasn't built.
 */
export const LOCALE_PAGES = {
  en: PAGES,
  pt: PAGES,
  es: ['home'],
  fr: ['home'],
  de: ['home'],
  it: ['home']
};

/**
 * Localized slugs. A Portuguese page ranking on an English URL wastes a signal,
 * so each locale gets its own path segment.
 */
export const SLUGS = {
  en: {
    home: '',
    discount: 'discount-calculator',
    tip: 'tip-calculator',
    vat: 'vat-calculator',
    margin: 'margin-calculator',
    faq: 'faq',
    about: 'about',
    contact: 'contact',
    privacy: 'privacy',
    terms: 'terms'
  },
  pt: {
    home: '',
    discount: 'calculadora-de-desconto',
    tip: 'calculadora-de-gorjeta',
    vat: 'calculadora-de-imposto',
    margin: 'calculadora-de-margem',
    faq: 'perguntas-frequentes',
    about: 'sobre',
    contact: 'contato',
    privacy: 'privacidade',
    terms: 'termos'
  },
  es: { home: '' },
  fr: { home: '' },
  de: { home: '' },
  it: { home: '' }
};

/**
 * The four preset calculators map onto modes the existing hook already supports.
 */
export const CALCULATOR_PRESETS = {
  discount: { mode: 'increase_decrease' },
  tip: { mode: 'percent_of' },
  vat: { mode: 'increase_decrease' },
  margin: { mode: 'what_percent' }
};

export const CALCULATOR_PAGES = Object.keys(CALCULATOR_PRESETS);

export const hasPage = (locale, page) => Boolean(LOCALE_PAGES[locale]?.includes(page));

/** Absolute site path for a page, always with a leading slash. */
export const getPath = (locale, page) => {
  const slug = SLUGS[locale]?.[page];
  if (slug === undefined) return null;

  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (page === 'home') return prefix || '/';
  return `${prefix}/${slug}`;
};

/**
 * Falls back to the locale's home page when the requested page has no
 * translation yet — used by the language switcher so it never dead-ends.
 */
export const getPathWithFallback = (locale, page) =>
  hasPage(locale, page) ? getPath(locale, page) : getPath(locale, 'home');

/** Locales that actually have this page built, for hreflang alternates. */
export const getAlternateLocales = (page) => LOCALES.filter((locale) => hasPage(locale, page));

/** Flat list of every route the site generates. */
export const getAllRoutes = () =>
  LOCALES.flatMap((locale) =>
    LOCALE_PAGES[locale].map((page) => ({ locale, page, path: getPath(locale, page) }))
  );

/**
 * Reverse lookup: pathname -> { locale, page }. The language switcher needs it
 * to send the visitor to the same page in another language.
 */
export const resolveRoute = (pathname) => {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = getAllRoutes().find((route) => route.path === normalized);
  return match ?? { locale: DEFAULT_LOCALE, page: 'home', path: '/' };
};
