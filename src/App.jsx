import { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { translations } from './translations';
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

  useEffect(() => {
    localStorage.setItem('percentage_calculator_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('percentage_calculator_separator', decimalSeparator);
  }, [decimalSeparator]);

  const [values, setValues] = useState({
    base: '',
    percentage: '',
    result: ''
  });

  // Track the order of edited fields to know which one to calculate
  const [lastEdited, setLastEdited] = useState([]);

  const handleInputChange = (field, value) => {
    // Allow numbers and the selected separator
    const regex = decimalSeparator === '.' ? /^\d*\.?\d*$/ : /^\d*,?\d*$/;
    if (!regex.test(value)) return;

    setValues(prev => ({ ...prev, [field]: value }));

    setLastEdited(prev => {
      // Remove the field if it's already in the list to move it to the end
      const filtered = prev.filter(f => f !== field);
      // Add the field to the end (most recently edited)
      const newOrder = [...filtered, field];
      // Keep only the last 2 edited fields
      return newOrder.slice(-2);
    });
  };

  const parseValue = (val) => {
    if (!val) return NaN;
    if (decimalSeparator === ',') {
      return parseFloat(val.replace(',', '.'));
    }
    return parseFloat(val);
  };

  const formatValue = (val) => {
    if (decimalSeparator === ',') {
      return val.toString().replace('.', ',');
    }
    return val.toString();
  };

  useEffect(() => {
    // We need at least 2 fields to calculate the 3rd
    if (lastEdited.length < 2) return;

    const [first, second] = lastEdited;

    // Determine the missing field (the one NOT in the last 2 edited)
    const fields = ['base', 'percentage', 'result'];
    const missingField = fields.find(f => !lastEdited.includes(f));

    if (!missingField) return; // Should not happen if logic is correct

    const val1 = parseValue(values[lastEdited[0]]);
    const val2 = parseValue(values[lastEdited[1]]);

    if (isNaN(val1) || isNaN(val2)) return;

    let calculatedValue = '';

    // Logic:
    // Base * (Percentage / 100) = Result

    if (missingField === 'result') {
      // We have Base and Percentage
      // Result = Base * (Percentage / 100)
      const base = lastEdited.includes('base') ? parseValue(values.base) : 0;
      const pct = lastEdited.includes('percentage') ? parseValue(values.percentage) : 0;
      if (!isNaN(base) && !isNaN(pct)) {
        calculatedValue = (base * (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'base') {
      // We have Result and Percentage
      // Base = Result / (Percentage / 100)
      const res = lastEdited.includes('result') ? parseValue(values.result) : 0;
      const pct = lastEdited.includes('percentage') ? parseValue(values.percentage) : 0;
      if (!isNaN(res) && !isNaN(pct) && pct !== 0) {
        calculatedValue = (res / (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'percentage') {
      // We have Base and Result
      // Percentage = (Result / Base) * 100
      const base = lastEdited.includes('base') ? parseValue(values.base) : 0;
      const res = lastEdited.includes('result') ? parseValue(values.result) : 0;
      if (!isNaN(base) && !isNaN(res) && base !== 0) {
        calculatedValue = ((res / base) * 100).toFixed(2);
      }
    }

    // Remove trailing zeros if it's an integer
    if (calculatedValue.endsWith('.00')) {
      calculatedValue = calculatedValue.slice(0, -3);
    }

    const formattedCalculatedValue = formatValue(calculatedValue);

    // Update the missing field without triggering a re-calculation loop
    // We do this by checking if the value is different
    setValues(prev => {
      if (prev[missingField] === formattedCalculatedValue) return prev;
      return { ...prev, [missingField]: formattedCalculatedValue };
    });

  }, [values.base, values.percentage, values.result, lastEdited, decimalSeparator]);

  const handleClear = () => {
    setValues({
      base: '',
      percentage: '',
      result: ''
    });
    setLastEdited([]);
  };

  const handleCalculate = () => {
    const hasBase = values.base !== '';
    const hasPercentage = values.percentage !== '';
    const hasResult = values.result !== '';

    if (hasBase && hasPercentage) {
      setLastEdited(['base', 'percentage']);
      return;
    }

    if (hasBase && hasResult) {
      setLastEdited(['base', 'result']);
      return;
    }

    if (hasPercentage && hasResult) {
      setLastEdited(['percentage', 'result']);
    }
  };

  const displayResult = values.result || '—';
  const displayPercentage = values.percentage || '—';
  const displayBase = values.base || '—';
  const displayFormula =
    values.base && values.percentage && values.result
      ? `${displayPercentage}% of ${displayBase} = ${displayResult}`
      : 'Enter any two fields to calculate the third.';

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
              <button className="tab active">X% of Y</button>
              <button className="tab">What % is X of Y</button>
              <button className="tab">Increase / Decrease</button>
              <button className="tab">Percentage Change</button>
            </div>

            <div className="form">
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
                <label htmlFor="result">{t.result_label}</label>
                <input
                  type="text"
                  id="result"
                  value={values.result}
                  onChange={(e) => handleInputChange('result', e.target.value)}
                  placeholder={t.result_placeholder}
                  className={lastEdited.includes('result') ? 'active' : 'calculated'}
                />
              </div>

              <div className="button-row">
                <button className="primary-button" onClick={handleCalculate}>
                  Calculate
                </button>
                <button className="secondary-button" onClick={handleClear}>
                  {t.clear_button}
                </button>
              </div>
            </div>

            <div className="result-panel">
              <div className="result-title">Result: <strong>{displayResult}</strong></div>
              <div className="result-formula">{displayFormula}</div>
              <div className="result-actions">
                <button className="ghost-button">Copy Result</button>
                <button className="ghost-button">Reset</button>
                <button className="ghost-button">Share</button>
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
