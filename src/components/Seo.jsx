import { Head } from 'vite-react-ssg';
import { getAlternateLocales, getPath } from '../config/routes';
import { getSeo } from '../config/seo';
import {
  ADSENSE_CLIENT,
  HREFLANG,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  DEFAULT_LOCALE
} from '../config/site';

// Set VITE_ADSENSE_CLIENT to an empty string to build without the ad script.
const adsenseClient = import.meta.env.VITE_ADSENSE_CLIENT ?? ADSENSE_CLIENT;

// No trailing slash except on the root — vercel.json pins `trailingSlash: false`,
// so any other form would make canonical point at a redirecting URL.
const absolute = (routePath) => `${SITE_URL}${routePath === '/' ? '/' : routePath}`;

const faqSchema = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
});

const howToSchema = (howTo, url) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  url,
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text
  }))
});

const appSchema = ({ title, description, url, locale }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: title,
  description,
  url,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  inLanguage: HREFLANG[locale],
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
});

const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`
});

const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    item: absolute(crumb.path)
  }))
});

/**
 * Emits every head tag and JSON-LD block for a page. Alternates come from the
 * route table, so hreflang can only ever point at pages that were built.
 */
const Seo = ({ locale, page, breadcrumbs, faq, howTo, isCalculator }) => {
  const { title, description } = getSeo(locale, page);
  const path = getPath(locale, page);
  const url = absolute(path);

  const schemas = [];
  if (isCalculator) schemas.push(appSchema({ title, description, url, locale }));
  if (page === 'home') schemas.push(organizationSchema());
  if (howTo) schemas.push(howToSchema(howTo, url));
  if (faq?.length) schemas.push(faqSchema(faq));
  if (breadcrumbs?.length > 1) schemas.push(breadcrumbSchema(breadcrumbs));

  return (
    <Head>
      <html lang={HREFLANG[locale]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {getAlternateLocales(page).map((altLocale) => (
        <link
          key={altLocale}
          rel="alternate"
          hrefLang={HREFLANG[altLocale]}
          href={absolute(getPath(altLocale, page))}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absolute(getPath(DEFAULT_LOCALE, page))} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={HREFLANG[locale].replace('-', '_')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* AdSense site verification and ad serving. The publisher ID also has
          to appear in public/ads.txt or AdSense flags unauthorized inventory. */}
      {adsenseClient && (
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
        />
      )}
    </Head>
  );
};

export default Seo;
