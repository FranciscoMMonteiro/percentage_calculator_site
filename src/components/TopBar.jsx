import './TopBar.css';

const TopBar = ({ t, language, onLanguageChange, decimalSeparator, onSeparatorChange }) => {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-dot" />
        {t.title}
      </div>
      <div className="top-controls">
        <div className="control-group">
          <label className="control-label">{t.language_label}</label>
          <div className="language-switcher">
            <select value={language} onChange={(e) => onLanguageChange(e.target.value)}>
              <option value="en">English</option>
              <option value="pt">Português (BR)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
            </select>
          </div>
        </div>

        <div className="control-group">
          <label className="control-label">{t.separator_label}</label>
          <div className="separator-switcher">
            <select value={decimalSeparator} onChange={(e) => onSeparatorChange(e.target.value)}>
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
