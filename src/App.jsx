import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { translations } from './translations';
import { copyResultText, getResultText, shareResultText } from './utils/resultActions';
import { usePercentageCalculator } from './hooks/usePercentageCalculator';
import { formatWithSeparator } from './utils/formatters';
import { exampleGroups } from './config/examples';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import CalculatorSection from './components/CalculatorSection';
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
    recalculate,
    displayResult,
    displayPercentage,
    displayBase,
    formulaSegments
  } = usePercentageCalculator(decimalSeparator, mode, t);

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

  const formatPresetValues = (presetValues) => {
    return {
      base: formatWithSeparator(presetValues.base, decimalSeparator),
      percentage: formatWithSeparator(presetValues.percentage, decimalSeparator),
      result: formatWithSeparator(presetValues.result, decimalSeparator)
    };
  };

  const handleExampleSelect = (example) => {
    setMode(example.mode);
    applyPreset(formatPresetValues(example.values), example.edited, example.mode, decimalSeparator);
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    recalculate(nextMode, decimalSeparator);
  };

  const handleSeparatorChange = (nextSeparator) => {
    setDecimalSeparator(nextSeparator);
    recalculate(mode, nextSeparator);
  };

  return (
    <div className="app-container">
      <TopBar
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        decimalSeparator={decimalSeparator}
        onSeparatorChange={handleSeparatorChange}
      />

      <div className="page">
        <Hero
          t={t}
          examplesMain={exampleGroups.main}
          examplesMore={exampleGroups.more}
          showMoreExamples={showMoreExamples}
          onToggleExamples={() => setShowMoreExamples((prev) => !prev)}
          onExampleSelect={handleExampleSelect}
        />
        <CalculatorSection
          t={t}
          mode={mode}
          onModeChange={handleModeChange}
          values={values}
          lastEdited={lastEdited}
          onInputChange={handleInputChange}
          resultPanelValue={resultPanelValue}
          formulaSegments={formulaSegments}
          onCopy={handleCopyResult}
          onClear={handleClear}
          onShare={handleShare}
        />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
