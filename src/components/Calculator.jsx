import { useEffect, useRef, useState } from 'react';
import { useSite } from '../context/siteContext';
import { usePercentageCalculator } from '../hooks/usePercentageCalculator';
import { copyResultText, getResultText, shareResultText } from '../utils/resultActions';
import { formatWithSeparator } from '../utils/formatters';
import { exampleGroups } from '../config/examples';
import CalculatorCard from './CalculatorCard';
import ExamplesSection from './ExamplesSection';
import './CalculatorSection.css';

/**
 * The interactive calculator, holding the state that used to live in App.jsx.
 * `initialMode` lets the preset pages (discount, tip, VAT, margin) open on the
 * tab that matches their topic.
 */
const Calculator = ({ initialMode = 'percent_of', showExamples = false }) => {
  const { t, decimalSeparator } = useSite();
  const [mode, setMode] = useState(initialMode);
  const [showMoreExamples, setShowMoreExamples] = useState(false);

  const calculator = usePercentageCalculator(decimalSeparator, mode, t);
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
  } = calculator;

  // Re-solve when the separator preference changes, without re-running on mount.
  const previousSeparator = useRef(decimalSeparator);
  useEffect(() => {
    if (previousSeparator.current === decimalSeparator) return;
    previousSeparator.current = decimalSeparator;
    recalculate(mode, decimalSeparator);
  }, [decimalSeparator, mode, recalculate]);

  const resultText = () => getResultText({
    base: values.base,
    percentage: values.percentage,
    result: values.result,
    displayBase,
    displayPercentage,
    displayResult
  });

  const handleCopyResult = () => copyResultText(resultText());

  const handleShare = async () => {
    const text = resultText();
    const shared = await shareResultText({
      title: t.title,
      text,
      url: window.location.href
    });
    if (!shared) await copyResultText(text);
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    recalculate(nextMode, decimalSeparator);
  };

  const handleExampleSelect = (example) => {
    setMode(example.mode);
    applyPreset(
      {
        base: formatWithSeparator(example.values.base, decimalSeparator),
        percentage: formatWithSeparator(example.values.percentage, decimalSeparator),
        result: formatWithSeparator(example.values.result, decimalSeparator)
      },
      example.edited,
      example.mode,
      decimalSeparator
    );
  };

  const isPercentageOutput = mode === 'what_percent' || mode === 'percentage_change';
  const resultPanelValue = isPercentageOutput ? `${displayPercentage}%` : displayResult;

  return (
    <section className="calculator-panel" id="calculator">
      <p className="card-explainer">{t.subtitle}</p>
      <CalculatorCard
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
      {showExamples && (
        <ExamplesSection
          t={t}
          examplesMain={exampleGroups.main}
          examplesMore={exampleGroups.more}
          showMoreExamples={showMoreExamples}
          onToggleExamples={() => setShowMoreExamples((prev) => !prev)}
          onExampleSelect={handleExampleSelect}
        />
      )}
    </section>
  );
};

export default Calculator;
