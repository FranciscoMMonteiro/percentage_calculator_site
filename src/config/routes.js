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
  'salary',
  'points',
  'formulas',
  'mentalmath',
  'mistakes',
  'faq',
  'methodology',
  'about',
  'contact',
  'privacy',
  'terms'
];

/**
 * Long-form content only exists in English and Portuguese for now; the other
 * locales ship the calculator home page plus the methodology page. hreflang and
 * the sitemap are both derived from this map, so they can never advertise a
 * page that wasn't built.
 */
export const LOCALE_PAGES = {
  en: PAGES,
  pt: PAGES,
  es: ['home', 'methodology'],
  fr: ['home', 'methodology'],
  de: ['home', 'methodology'],
  it: ['home', 'methodology']
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
    salary: 'salary-raise-calculator',
    points: 'percentage-points-calculator',
    formulas: 'percentage-formulas',
    mentalmath: 'mental-math-percentages',
    mistakes: 'percentage-mistakes',
    faq: 'faq',
    methodology: 'methodology',
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
    salary: 'calculadora-de-aumento-salarial',
    points: 'calculadora-de-pontos-percentuais',
    formulas: 'formulas-de-porcentagem',
    mentalmath: 'porcentagem-de-cabeca',
    mistakes: 'erros-de-porcentagem',
    faq: 'perguntas-frequentes',
    methodology: 'metodologia',
    about: 'sobre',
    contact: 'contato',
    privacy: 'privacidade',
    terms: 'termos'
  },
  es: { home: '', methodology: 'metodologia' },
  fr: { home: '', methodology: 'methodologie' },
  de: { home: '', methodology: 'methodik' },
  it: { home: '', methodology: 'metodologia' }
};

/**
 * Pages that re-open the main four-mode calculator on the tab matching their
 * topic. These share the solver in usePercentageCalculator.
 */
export const CALCULATOR_PRESETS = {
  discount: { mode: 'increase_decrease' },
  tip: { mode: 'percent_of' },
  vat: { mode: 'increase_decrease' },
  margin: { mode: 'what_percent' }
};

export const CALCULATOR_PAGES = Object.keys(CALCULATOR_PRESETS);

/**
 * Calculators with maths the three-field solver cannot express, each with its
 * own hook and form.
 */
export const STANDALONE_CALCULATORS = ['salary', 'points'];

/** Everything that is a tool, for the footer and the related-links strip. */
export const TOOL_PAGES = [...CALCULATOR_PAGES, ...STANDALONE_CALCULATORS];

/** Long-form articles with no calculator of their own. */
export const GUIDE_PAGES = ['formulas', 'mentalmath', 'mistakes'];

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
 * Falls back to the English page when the requested one has no translation yet.
 * Pointing at the real article in another language beats looping the visitor
 * back to their own home page, which is what a locale without subpages used to
 * do — it left those locales with no outbound navigation at all.
 */
export const getPathWithFallback = (locale, page) =>
  hasPage(locale, page) ? getPath(locale, page) : getPath(DEFAULT_LOCALE, page);

/** True when the link a locale gets for this page leaves its own language. */
export const isForeignLink = (locale, page) => !hasPage(locale, page);

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
