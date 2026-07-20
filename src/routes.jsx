import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PresetCalculatorPage from './pages/PresetCalculatorPage';
import ContentPage from './pages/ContentPage';
import NotFoundPage from './pages/NotFoundPage';
import { CALCULATOR_PAGES, LOCALE_PAGES, SLUGS } from './config/routes';
import { DEFAULT_LOCALE, LOCALES } from './config/site';

const elementFor = (page) => {
  if (page === 'home') return <HomePage />;
  if (CALCULATOR_PAGES.includes(page)) return <PresetCalculatorPage page={page} />;
  return <ContentPage page={page} />;
};

/**
 * One layout branch per locale so the layout knows its language without a
 * param lookup. Children come straight from the slug map, which means adding a
 * page to config/routes.js is enough to make it build, sitemap and hreflang.
 */
const localeRoutes = LOCALES.map((locale) => ({
  path: locale === DEFAULT_LOCALE ? '/' : `/${locale}`,
  element: <Layout locale={locale} />,
  children: LOCALE_PAGES[locale].map((page) =>
    page === 'home'
      ? { index: true, element: elementFor(page) }
      : { path: SLUGS[locale][page], element: elementFor(page) }
  )
}));

export const routes = [
  ...localeRoutes,
  { path: '*', element: <NotFoundPage /> }
];

export default routes;
