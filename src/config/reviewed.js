/**
 * When each page was last read through and its figures checked. Kept here
 * rather than inside src/content so that a single date covers every
 * translation of a page — the locales are revised together — and so that
 * scripts/generate-sitemap.js can read it without pulling in the content
 * bundle.
 *
 * Update the entry whenever a page's substance changes, not for typo fixes.
 */
export const REVIEWED = {
  home: '2026-08-31',
  discount: '2026-08-31',
  tip: '2026-08-31',
  vat: '2026-08-31',
  margin: '2026-08-31',
  salary: '2026-08-31',
  points: '2026-08-31',
  formulas: '2026-08-31',
  mentalmath: '2026-08-31',
  mistakes: '2026-08-31',
  faq: '2026-08-31',
  methodology: '2026-08-31',
  about: '2026-08-31',
  contact: '2026-08-31',
  privacy: '2026-08-31',
  terms: '2026-08-31'
};

export const getReviewed = (page) => REVIEWED[page] ?? null;
