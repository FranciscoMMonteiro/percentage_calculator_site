import './CalculatorForm.css';

const CalculatorForm = ({ t, mode, values, lastEdited, onInputChange }) => {
  return (
    <div className="form">
      {mode === 'increase_decrease' ? (
        <>
          <div className="input-group">
            <label htmlFor="base">{t.base_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="base"
              value={values.base}
              onChange={(e) => onInputChange('base', e.target.value)}
              placeholder={t.base_placeholder}
              className={lastEdited.includes('base') ? 'active' : 'calculated'}
            />
          </div>

          <div className="input-group">
            <label htmlFor="percentage">{t.label_percentage_increase_decrease}</label>
            <input
              type="text"
              inputMode="decimal"
              id="percentage"
              value={values.percentage}
              onChange={(e) => onInputChange('percentage', e.target.value)}
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
              inputMode="decimal"
              id="base"
              value={values.base}
              onChange={(e) => onInputChange('base', e.target.value)}
              placeholder={t.base_placeholder}
              className={lastEdited.includes('base') ? 'active' : 'calculated'}
            />
          </div>

          <div className="input-group">
            <label htmlFor="result">{t.label_to}</label>
            <input
              type="text"
              inputMode="decimal"
              id="result"
              value={values.result}
              onChange={(e) => onInputChange('result', e.target.value)}
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
                inputMode="decimal"
                id="percentage"
                value={values.percentage}
                onChange={(e) => onInputChange('percentage', e.target.value)}
                placeholder={t.percentage_placeholder}
                className={lastEdited.includes('percentage') ? 'active' : 'calculated'}
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="base">
              {mode === 'what_percent' ? t.label_what_percentage_is : t.base_label}
            </label>
            <input
              type="text"
              inputMode="decimal"
              id="base"
              value={values.base}
              onChange={(e) => onInputChange('base', e.target.value)}
              placeholder={t.base_placeholder}
              className={lastEdited.includes('base') ? 'active' : 'calculated'}
            />
          </div>

          {mode !== 'percent_of' && (
            <div className="input-group">
              <label htmlFor="result">
                {mode === 'what_percent' ? t.label_out_of : t.result_label}
              </label>
              <input
                type="text"
                inputMode="decimal"
                id="result"
                value={values.result}
                onChange={(e) => onInputChange('result', e.target.value)}
                placeholder={t.result_placeholder}
                className={lastEdited.includes('result') ? 'active' : 'calculated'}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CalculatorForm;
