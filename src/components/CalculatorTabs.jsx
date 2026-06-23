import './CalculatorTabs.css';

const TABS = [
  { id: 'percent_of', labelKey: 'tab_percent_of' },
  { id: 'what_percent', labelKey: 'tab_what_percent' },
  { id: 'increase_decrease', labelKey: 'tab_increase_decrease' },
  { id: 'percentage_change', labelKey: 'tab_percentage_change' }
];

const CalculatorTabs = ({ t, mode, onModeChange }) => {
  return (
    <div className="tab-row" role="tablist" aria-label={t.title}>
      {TABS.map((tab) => {
        const isActive = mode === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`tab ${isActive ? 'active' : ''}`}
            onClick={() => onModeChange(tab.id)}
          >
            {t[tab.labelKey]}
          </button>
        );
      })}
    </div>
  );
};

export default CalculatorTabs;
