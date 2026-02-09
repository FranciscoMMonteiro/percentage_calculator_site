import CalculatorCard from './CalculatorCard';
import './CalculatorSection.css';

const CalculatorSection = ({
  t,
  mode,
  onModeChange,
  values,
  lastEdited,
  onInputChange,
  resultPanelValue,
  formulaSegments,
  onCopy,
  onClear,
  onShare
}) => {
  return (
    <section className="calculator-panel">
      <p className="card-explainer">{t.subtitle}</p>
      <CalculatorCard
        t={t}
        mode={mode}
        onModeChange={onModeChange}
        values={values}
        lastEdited={lastEdited}
        onInputChange={onInputChange}
        resultPanelValue={resultPanelValue}
        formulaSegments={formulaSegments}
        onCopy={onCopy}
        onClear={onClear}
        onShare={onShare}
      />
    </section>
  );
};

export default CalculatorSection;
