import { Link } from 'react-router-dom';
import { useSite } from '../context/siteContext';
import { GUIDE_PAGES, TOOL_PAGES, getPathWithFallback, isForeignLink } from '../config/routes';
import { RELATED_SITES, SITE_NAME } from '../config/site';
import './Footer.css';

const FooterColumn = ({ heading, pages, t, locale }) => (
  <nav className="footer-column" aria-label={heading}>
    <h2 className="footer-heading">{heading}</h2>
    <ul>
      {pages.map((page) => (
        <li key={page}>
          {/* A locale without this page gets the English one. Saying so beats
              sending the visitor somewhere unexpected without warning. */}
          <Link to={getPathWithFallback(locale, page)}>
            {t[`nav_${page}`]}
            {isForeignLink(locale, page) && (
              <span className="visually-hidden"> ({t.english_link_hint})</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  const { t, locale } = useSite();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-column footer-brand">
          <p className="footer-name">{SITE_NAME}</p>
          <p className="footer-tagline">{t.footer_tagline}</p>
        </div>

        <FooterColumn
          heading={t.footer_calculators}
          pages={['home', ...TOOL_PAGES]}
          t={t}
          locale={locale}
        />
        <FooterColumn
          heading={t.footer_guides}
          pages={GUIDE_PAGES}
          t={t}
          locale={locale}
        />
        <FooterColumn
          heading={t.footer_site}
          pages={['faq', 'methodology', 'about', 'contact']}
          t={t}
          locale={locale}
        />
        <FooterColumn
          heading={t.footer_legal}
          pages={['privacy', 'terms']}
          t={t}
          locale={locale}
        />

        <nav className="footer-column" aria-label={t.footer_other_tools}>
          <h2 className="footer-heading">{t.footer_other_tools}</h2>
          <ul>
            {RELATED_SITES.map(({ href, labelKey }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {t[labelKey]}
                  <span className="visually-hidden"> ({t.external_link_hint})</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="footer-legal-line">
        © {new Date().getFullYear()} {SITE_NAME}. {t.footer_rights}
      </p>
    </footer>
  );
};

export default Footer;
