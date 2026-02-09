import CalculatorForm from './CalculatorForm';
import CalculatorTabs from './CalculatorTabs';
import ResultPanel from './ResultPanel';
import './CalculatorCard.css';

const CalculatorCard = ({
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
    <div className="calculator-card">
      <CalculatorTabs t={t} mode={mode} onModeChange={onModeChange} />
      <CalculatorForm
        t={t}
        mode={mode}
        values={values}
        lastEdited={lastEdited}
        onInputChange={onInputChange}
      />
      <ResultPanel
        t={t}
        resultPanelValue={resultPanelValue}
        formulaSegments={formulaSegments}
        onCopy={onCopy}
        onClear={onClear}
        onShare={onShare}
      />
    </div>
  );
};

export default CalculatorCard;
