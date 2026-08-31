import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getAllRoutes, getAlternateLocales, getPath } from '../src/config/routes.js';
import { getReviewed } from '../src/config/reviewed.js';
import { HREFLANG, SITE_URL, DEFAULT_LOCALE } from '../src/config/site.js';

// Must match the canonical form emitted by src/components/Seo.jsx.
const abs = (routePath) => `${SITE_URL}${routePath === '/' ? '/' : routePath}`;

const LOW_PRIORITY = ['privacy', 'terms', 'about', 'contact', 'methodology'];

const priorityFor = (page) => {
  if (page === 'home') return '1.0';
  if (LOW_PRIORITY.includes(page)) return '0.3';
  return '0.8';
};

const changefreqFor = (page) => (LOW_PRIORITY.includes(page) ? 'yearly' : 'monthly');

export const buildSitemap = (fallbackLastmod = new Date().toISOString().slice(0, 10)) => {
  const entries = getAllRoutes().map(({ page, path: routePath }) => {
    const alternates = getAlternateLocales(page)
      .map(
        (altLocale) =>
          `    <xhtml:link rel="alternate" hreflang="${HREFLANG[altLocale]}" href="${abs(
            getPath(altLocale, page)
          )}" />`
      )
      .join('\n');

    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(
      getPath(DEFAULT_LOCALE, page)
    )}" />`;

    return [
      '  <url>',
      `    <loc>${abs(routePath)}</loc>`,
      alternates,
      xDefault,
      `    <lastmod>${getReviewed(page) ?? fallbackLastmod}</lastmod>`,
      `    <changefreq>${changefreqFor(page)}</changefreq>`,
      `    <priority>${priorityFor(page)}</priority>`,
      '  </url>'
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    ''
  ].join('\n');
};

/**
 * Writes sitemap.xml from the same route table the router uses, so the two can
 * never drift apart.
 */
export const sitemapPlugin = () => {
  let outDir = 'dist';

  return {
    name: 'calcpercentages-sitemap',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
      // The SSR pass of vite-react-ssg writes elsewhere; only emit on the client build.
      this.isSsrBuild = Boolean(config.build.ssr);
    },
    async closeBundle() {
      if (this.isSsrBuild) return;
      const target = path.resolve(process.cwd(), outDir, 'sitemap.xml');
      await writeFile(target, buildSitemap(), 'utf8');
      console.log(`  sitemap.xml  ${getAllRoutes().length} urls`);
    }
  };
};
