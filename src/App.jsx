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
  const [showMoreExamples, setShowMoreExamples] = useState(false);

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
    applyPreset,
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

  const isWhatPercent = mode === 'what_percent';
  const isPercentageChange = mode === 'percentage_change';
  const resultPanelValue = (isWhatPercent || isPercentageChange)
    ? `${displayPercentage}%`
    : displayResult;
  const hasAllValues = values.base && values.percentage && values.result;
  const parseNumber = (value) => {
    if (!value) return NaN;
    return decimalSeparator === ',' ? parseFloat(value.replace(',', '.')) : parseFloat(value);
  };
  const formatTemplate = (template, params) => {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return params[key] ?? match;
    });
  };

  const renderWhatPercentFormula = () => {
    const template = t.formula_what_percent;
    const parts = template.split('{pct}%');
    if (parts.length !== 2) {
      return formatTemplate(template, {
        base: displayBase,
        pct: displayPercentage,
        result: displayResult
      });
    }
    return (
      <>
        {formatTemplate(parts[0], { base: displayBase, result: displayResult })}
        <strong>{displayPercentage}%</strong>
        {formatTemplate(parts[1], { base: displayBase, result: displayResult })}
      </>
    );
  };

  const formulaElement = hasAllValues
    ? (() => {
        if (mode === 'what_percent') {
          return renderWhatPercentFormula();
        }
        if (mode === 'increase_decrease') {
          const pctValue = parseNumber(values.percentage);
          const changeLabel = !isNaN(pctValue) && pctValue < 0 ? t.change_decrease : t.change_increase;
          return formatTemplate(t.formula_increase_decrease, {
            base: displayBase,
            pct: displayPercentage,
            change: changeLabel,
            result: displayResult
          });
        }
        if (mode === 'percentage_change') {
          return formatTemplate(t.formula_percentage_change, {
            base: displayBase,
            pct: displayPercentage,
            result: displayResult
          });
        }
        return formatTemplate(t.formula_percent_of, {
          base: displayBase,
          pct: displayPercentage,
          result: displayResult
        });
      })()
    : t.result_help;

  const formatWithSeparator = (value) => {
    if (decimalSeparator === ',') {
      return value.replace('.', ',');
    }
    return value;
  };

  const handleExampleClick = (exampleKey) => {
    switch (exampleKey) {
      case 'percent_of_main':
        setMode('percent_of');
        applyPreset(
          {
            base: formatWithSeparator('150'),
            percentage: formatWithSeparator('20'),
            result: ''
          },
          ['base', 'percentage']
        );
        return;
      case 'percent_of_more':
        setMode('percent_of');
        applyPreset(
          {
            base: formatWithSeparator('45'),
            percentage: formatWithSeparator('10'),
            result: ''
          },
          ['base', 'percentage']
        );
        return;
      case 'what_percent_main':
        setMode('what_percent');
        applyPreset(
          {
            base: formatWithSeparator('45'),
            percentage: '',
            result: formatWithSeparator('180')
          },
          ['base', 'result']
        );
        return;
      case 'what_percent_more':
        setMode('what_percent');
        applyPreset(
          {
            base: formatWithSeparator('12'),
            percentage: '',
            result: formatWithSeparator('60')
          },
          ['base', 'result']
        );
        return;
      case 'increase_main':
        setMode('increase_decrease');
        applyPreset(
          {
            base: formatWithSeparator('120'),
            percentage: formatWithSeparator('15'),
            result: ''
          },
          ['base', 'percentage']
        );
        return;
      case 'increase_more':
        setMode('increase_decrease');
        applyPreset(
          {
            base: formatWithSeparator('90'),
            percentage: formatWithSeparator('-20'),
            result: ''
          },
          ['base', 'percentage']
        );
        return;
      case 'change_main':
        setMode('percentage_change');
        applyPreset(
          {
            base: formatWithSeparator('80'),
            percentage: '',
            result: formatWithSeparator('100')
          },
          ['base', 'result']
        );
        return;
      case 'change_more':
        setMode('percentage_change');
        applyPreset(
          {
            base: formatWithSeparator('250'),
            percentage: '',
            result: formatWithSeparator('200')
          },
          ['base', 'result']
        );
        return;
      default:
        return;
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
            <div className="hero-badges">
              <span>{t.badge_no_signup}</span>
              <span>{t.badge_fast}</span>
              <span>{t.badge_mobile}</span>
            </div>
          </div>

          <div className="hero-section">
            <h2>{t.section_examples}</h2>
            <div className="pill-grid">
              <button className="pill" onClick={() => handleExampleClick('percent_of_main')}>{t.example_percent_of_main}</button>
              <button className="pill" onClick={() => handleExampleClick('what_percent_main')}>{t.example_what_percent_main}</button>
              <button className="pill" onClick={() => handleExampleClick('increase_main')}>{t.example_increase_main}</button>
              <button className="pill" onClick={() => handleExampleClick('change_main')}>{t.example_change_main}</button>
            </div>
            <button
              className="link-button"
              onClick={() => setShowMoreExamples((prev) => !prev)}
              aria-expanded={showMoreExamples}
              aria-controls="more-examples"
            >
              {showMoreExamples ? t.link_examples_close : t.link_examples_open}
            </button>
            {showMoreExamples && (
              <div className="pill-grid examples-more" id="more-examples">
                <button className="pill" onClick={() => handleExampleClick('percent_of_more')}>{t.example_percent_of_more}</button>
                <button className="pill" onClick={() => handleExampleClick('what_percent_more')}>{t.example_what_percent_more}</button>
                <button className="pill" onClick={() => handleExampleClick('increase_more')}>{t.example_increase_more}</button>
                <button className="pill" onClick={() => handleExampleClick('change_more')}>{t.example_change_more}</button>
              </div>
            )}
          </div>

          <div className="hero-section">
            <h2>{t.section_related}</h2>
            <div className="pill-grid">
              <a
                className="pill"
                href="https://www.matrixcalc.net/"
                target="_blank"
                rel="noreferrer"
              >
                {t.related_matrix}
              </a>
              <a
                className="pill"
                href="https://www.calcworkdays.com/"
                target="_blank"
                rel="noreferrer"
              >
                {t.related_work_days}
              </a>
            </div>
          </div>
        </section>

        <section className="calculator-panel">
          <p className="card-explainer">{t.subtitle}</p>
          <div className="calculator-card">
            <div className="tab-row">
              <button
                className={`tab ${mode === 'percent_of' ? 'active' : ''}`}
                onClick={() => setMode('percent_of')}
              >
                {t.tab_percent_of}
              </button>
              <button
                className={`tab ${mode === 'what_percent' ? 'active' : ''}`}
                onClick={() => setMode('what_percent')}
              >
                {t.tab_what_percent}
              </button>
              <button
                className={`tab ${mode === 'increase_decrease' ? 'active' : ''}`}
                onClick={() => setMode('increase_decrease')}
              >
                {t.tab_increase_decrease}
              </button>
              <button
                className={`tab ${mode === 'percentage_change' ? 'active' : ''}`}
                onClick={() => setMode('percentage_change')}
              >
                {t.tab_percentage_change}
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
                    <label htmlFor="percentage">{t.label_percentage_increase_decrease}</label>
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
              ) : mode === 'percentage_change' ? (
                <>
                  <div className="input-group">
                    <label htmlFor="base">{t.label_from}</label>
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
                    <label htmlFor="result">{t.label_to}</label>
                    <input
                      type="text"
                      id="result"
                      value={values.result}
                      onChange={(e) => handleInputChange('result', e.target.value)}
                      placeholder={t.result_placeholder}
                      className={lastEdited.includes('result') ? 'active' : 'calculated'}
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
                    <label htmlFor="base">{mode === 'what_percent' ? t.label_what_percentage_is : t.base_label}</label>
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
                      <label htmlFor="result">{mode === 'what_percent' ? t.label_out_of : t.result_label}</label>
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
              <div className="result-title">{t.result_title}: <strong>{resultPanelValue}</strong></div>
              <div className="result-formula">{formulaElement}</div>
              <div className="result-actions">
                <button className="ghost-button" onClick={handleCopyResult}>{t.button_copy}</button>
                <button className="ghost-button" onClick={handleClear}>{t.button_clear}</button>
                <button className="ghost-button" onClick={handleShare}>{t.button_share}</button>
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
