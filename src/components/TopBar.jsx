import { Link, useNavigate } from 'react-router-dom';
import { useSite } from '../context/siteContext';
import { getPath, getPathWithFallback } from '../config/routes';
import { LOCALES, LOCALE_LABELS } from '../config/site';
import './TopBar.css';

const LANGUAGE_KEY = 'percentage_calculator_language';

const TopBar = () => {
  const { t, locale, page, decimalSeparator, changeSeparator } = useSite();
  const navigate = useNavigate();

  // Switching language is a navigation, not a state change — each language has
  // its own indexable URL. Falls back to that language's home page when the
  // current page has no translation yet.
  const handleLanguageChange = (nextLocale) => {
    localStorage.setItem(LANGUAGE_KEY, nextLocale);
    navigate(getPathWithFallback(nextLocale, page));
  };

  return (
    <header className="topbar">
      <Link className="brand-title" to={getPath(locale, 'home')}>{t.title}</Link>
      <div className="top-controls">
        <div className="control-group">
          <label className="control-label" htmlFor="language-select">{t.language_label}</label>
          <div className="language-switcher">
            <select
              id="language-select"
              value={locale}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {LOCALES.map((code) => (
                <option key={code} value={code}>{LOCALE_LABELS[code]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label" htmlFor="separator-select">{t.separator_label}</label>
          <div className="separator-switcher">
            <select
              id="separator-select"
              value={decimalSeparator}
              onChange={(e) => changeSeparator(e.target.value)}
            >
              <option value=".">{t.separator_dot}</option>
              <option value=",">{t.separator_comma}</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
