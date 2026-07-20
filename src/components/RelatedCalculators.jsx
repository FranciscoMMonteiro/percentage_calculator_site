import { Link } from 'react-router-dom';
import { useSite } from '../context/siteContext';
import { CALCULATOR_PAGES, getPath, hasPage } from '../config/routes';
import { RELATED_SITES } from '../config/site';
import './Hero.css';

/**
 * Internal links to the preset calculators (only those built for this locale)
 * followed by the sibling sites.
 */
const RelatedCalculators = ({ exclude }) => {
  const { t, locale } = useSite();
  const internal = CALCULATOR_PAGES.filter(
    (page) => page !== exclude && hasPage(locale, page)
  );

  return (
    <div className="hero-section">
      <h2>{t.section_related}</h2>
      <div className="pill-grid">
        {internal.map((page) => (
          <Link key={page} className="pill" to={getPath(locale, page)}>
            {t[`nav_${page}`]}
          </Link>
        ))}
        {RELATED_SITES.map(({ href, labelKey }) => (
          <a key={href} className="pill" href={href} target="_blank" rel="noopener noreferrer">
            {t[labelKey]}
            <span className="visually-hidden"> ({t.external_link_hint})</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
