import './ResultPanel.css';

/**
 * The answer, the one-line restatement of it, and — when the inputs are
 * complete — the arithmetic that produced it. `extraResults` lets a calculator
 * report several named figures at once, which the percentage-points tool needs.
 */
const ResultPanel = ({
  t,
  resultPanelValue,
  formulaSegments,
  steps = [],
  extraResults = [],
  onCopy,
  onClear,
  onShare
}) => {
  const renderFormula = () =>
    formulaSegments.map((segment, index) =>
      segment.strong
        ? <strong key={`formula-${index}`}>{segment.text}</strong>
        : <span key={`formula-${index}`}>{segment.text}</span>
    );

  return (
    <div className="result-panel">
      <div className="result-title" aria-live="polite">
        <span className="result-label">{t.result_title}</span>
        <strong className="result-value">{resultPanelValue}</strong>
      </div>

      <div className="result-formula">{renderFormula()}</div>

      {extraResults.length > 0 && (
        <dl className="result-extras">
          {extraResults.map(({ label, value }) => (
            <div key={label} className="result-extra">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* Deliberately outside the aria-live region: announcing the whole
          derivation on every keystroke would make the tool unusable. */}
      {steps.length > 0 && (
        <div className="result-steps">
          <p className="result-steps-label">{t.steps_title}</p>
          <ol>
            {steps.map((stepText, index) => <li key={index}>{stepText}</li>)}
          </ol>
        </div>
      )}

      <div className="result-actions">
        <button className="ghost-button" onClick={onCopy}>{t.button_copy}</button>
        <button className="ghost-button" onClick={onClear}>{t.button_clear}</button>
        <button className="ghost-button" onClick={onShare}>{t.button_share}</button>
      </div>
    </div>
  );
};

export default ResultPanel;
