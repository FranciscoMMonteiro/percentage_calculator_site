import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { translations } from './translations';
import { copyResultText, getResultText, shareResultText } from './utils/resultActions';
import { usePercentageCalculator } from './hooks/usePercentageCalculator';
import './App.css';

function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('percentage_calculator_language');
    return translations[saved] ? saved : 'en';
  });
  const t = translations[language];

  const [decimalSeparator, setDecimalSeparator] = useState(() => {
    return localStorage.getItem('percentage_calculator_separator') || '.';
  });

  const [mode, setMode] = useState('percent_of');

  useEffect(() => {
    localStorage.setItem('percentage_calculator_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('percentage_calculator_separator', decimalSeparator);
  }, [decimalSeparator]);

  const {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    displayResult,
    displayPercentage,
    displayBase,
    displayFormula
  } = usePercentageCalculator(decimalSeparator, mode);

  const handleCopyResult = async () => {
    const text = getResultText({
      base: values.base,
      percentage: values.percentage,
      result: values.result,
      displayBase,
      displayPercentage,
      displayResult
    });
    await copyResultText(text);
  };

  const handleShare = async () => {
    const text = getResultText({
      base: values.base,
      percentage: values.percentage,
      result: values.result,
      displayBase,
      displayPercentage,
      displayResult
    });

    const shared = await shareResultText({
      title: t.title,
      text,
      url: window.location.href
    });

    if (!shared) {
      await copyResultText(text);
    }
  };

  return (
    <div className="app-container">
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" />
          {t.title}
        </div>
        <div className="top-controls">
          <div className="control-group">
            <label className="control-label">{t.language_label}</label>
            <div className="language-switcher">
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
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
              <select value={decimalSeparator} onChange={(e) => setDecimalSeparator(e.target.value)}>
                <option value=".">{t.separator_dot}</option>
                <option value=",">{t.separator_comma}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="page">
        <section className="hero">
          <div className="hero-header">
            <h1>{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
            <div className="hero-badges">
              <span>No signup</span>
              <span>Fast</span>
              <span>Mobile-friendly</span>
            </div>
          </div>

          <div className="hero-section">
            <h2>Example Calculations</h2>
            <div className="pill-grid">
              <button className="pill">Tip 10% on $45</button>
              <button className="pill">25% off $199</button>
              <button className="pill">From 80 to 100, what %?</button>
            </div>
            <button className="link-button">See more examples →</button>
          </div>

          <div className="hero-section">
            <h2>Related Calculators</h2>
            <div className="pill-grid">
              <button className="pill">Discount Calculator</button>
              <button className="pill">Tax / VAT Calculator</button>
              <button className="pill">Tip Calculator</button>
              <button className="pill">Fraction to Percent</button>
              <button className="pill">Percentage Change</button>
            </div>
          </div>
        </section>

        <section className="calculator-panel">
          <div className="calculator-card">
            <div className="tab-row">
              <button
                className={`tab ${mode === 'percent_of' ? 'active' : ''}`}
                onClick={() => setMode('percent_of')}
              >
                X% of Y
              </button>
              <button
                className={`tab ${mode === 'what_percent' ? 'active' : ''}`}
                onClick={() => setMode('what_percent')}
              >
                What % is X of Y
              </button>
              <button
                className={`tab ${mode === 'increase_decrease' ? 'active' : ''}`}
                onClick={() => setMode('increase_decrease')}
              >
                Increase / Decrease
              </button>
              <button
                className={`tab ${mode === 'percentage_change' ? 'active' : ''}`}
                onClick={() => setMode('percentage_change')}
              >
                Percentage Change
              </button>
            </div>

            <div className="form">
              {mode === 'increase_decrease' ? (
                <>
                  <div className="input-group">
                    <label htmlFor="base">{t.base_label}</label>
                    <input
                      type="text"
                      id="base"
                      value={values.base}
                      onChange={(e) => handleInputChange('base', e.target.value)}
                      placeholder={t.base_placeholder}
                      className={lastEdited.includes('base') ? 'active' : 'calculated'}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="percentage">Percentage (%) Increase/Decrease</label>
                    <input
                      type="text"
                      id="percentage"
                      value={values.percentage}
                      onChange={(e) => handleInputChange('percentage', e.target.value)}
                      placeholder={t.percentage_placeholder}
                      className={lastEdited.includes('percentage') ? 'active' : 'calculated'}
                    />
                  </div>
                </>
              ) : (
                <>
                  {mode !== 'what_percent' && (
                    <div className="input-group">
                      <label htmlFor="percentage">{t.percentage_label}</label>
                      <input
                        type="text"
                        id="percentage"
                        value={values.percentage}
                        onChange={(e) => handleInputChange('percentage', e.target.value)}
                        placeholder={t.percentage_placeholder}
                        className={lastEdited.includes('percentage') ? 'active' : 'calculated'}
                      />
                    </div>
                  )}

                  <div className="input-group">
                    <label htmlFor="base">{mode === 'what_percent' ? 'What percentage (%) is' : t.base_label}</label>
                    <input
                      type="text"
                      id="base"
                      value={values.base}
                      onChange={(e) => handleInputChange('base', e.target.value)}
                      placeholder={t.base_placeholder}
                      className={lastEdited.includes('base') ? 'active' : 'calculated'}
                    />
                  </div>

                  {mode !== 'percent_of' && (
                    <div className="input-group">
                      <label htmlFor="result">{mode === 'what_percent' ? 'out of' : t.result_label}</label>
                      <input
                        type="text"
                        id="result"
                        value={values.result}
                        onChange={(e) => handleInputChange('result', e.target.value)}
                        placeholder={t.result_placeholder}
                        className={lastEdited.includes('result') ? 'active' : 'calculated'}
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="result-panel">
              <div className="result-title">Result: <strong>{displayResult}</strong></div>
              <div className="result-formula">{displayFormula}</div>
              <div className="result-actions">
                <button className="ghost-button" onClick={handleCopyResult}>Copy Result</button>
                <button className="ghost-button" onClick={handleClear}>Clear all</button>
                <button className="ghost-button" onClick={handleShare}>Share</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
