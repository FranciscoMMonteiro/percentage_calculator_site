import './CalculatorTabs.css';

const CalculatorTabs = ({ t, mode, onModeChange }) => {
  return (
    <div className="tab-row">
      <button
        className={`tab ${mode === 'percent_of' ? 'active' : ''}`}
        onClick={() => onModeChange('percent_of')}
      >
        {t.tab_percent_of}
      </button>
      <button
        className={`tab ${mode === 'what_percent' ? 'active' : ''}`}
        onClick={() => onModeChange('what_percent')}
      >
        {t.tab_what_percent}
      </button>
      <button
        className={`tab ${mode === 'increase_decrease' ? 'active' : ''}`}
        onClick={() => onModeChange('increase_decrease')}
      >
        {t.tab_increase_decrease}
      </button>
      <button
        className={`tab ${mode === 'percentage_change' ? 'active' : ''}`}
        onClick={() => onModeChange('percentage_change')}
      >
        {t.tab_percentage_change}
      </button>
    </div>
  );
};

export default CalculatorTabs;
