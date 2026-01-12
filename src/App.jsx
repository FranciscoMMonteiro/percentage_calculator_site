import { useState, useEffect } from 'react';
import { translations } from './translations';

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

  return (
    <div className="app-container">
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

      <div className="calculator-card">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>

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

        <button className="clear-button" onClick={handleClear}>
          {t.clear_button}
        </button>
      </div>
    </div>
  );
}

export default App;
