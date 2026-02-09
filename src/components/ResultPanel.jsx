import './ResultPanel.css';

const ResultPanel = ({ t, resultPanelValue, formulaSegments, onCopy, onClear, onShare }) => {
  const renderFormula = () => {
    return formulaSegments.map((segment, index) => {
      if (segment.strong) {
        return <strong key={`formula-${index}`}>{segment.text}</strong>;
      }
      return <span key={`formula-${index}`}>{segment.text}</span>;
    });
  };

  return (
    <div className="result-panel">
      <div className="result-title">
        {t.result_title}: <strong>{resultPanelValue}</strong>
      </div>
      <div className="result-formula">{renderFormula()}</div>
      <div className="result-actions">
        <button className="ghost-button" onClick={onCopy}>{t.button_copy}</button>
        <button className="ghost-button" onClick={onClear}>{t.button_clear}</button>
        <button className="ghost-button" onClick={onShare}>{t.button_share}</button>
      </div>
    </div>
  );
};

export default ResultPanel;
