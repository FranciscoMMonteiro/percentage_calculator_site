import { useEffect, useRef } from 'react';
import { useSite } from '../context/siteContext';
import { useSalaryRaise } from '../hooks/useSalaryRaise';
import { buildWorkedSteps } from '../utils/workedSteps';
import { formatTemplate } from '../utils/formatters';
import { copyResultText, shareResultText } from '../utils/resultActions';
import ResultPanel from './ResultPanel';
import './CalculatorCard.css';
import './CalculatorForm.css';
import './CalculatorSection.css';

// Old pay, new pay and the raise percentage are the same three quantities as
// base, result and percentage in an increase — so the derivation is shared.
const SOLVED_TO_GENERIC = { oldPay: 'base', newPay: 'result', percent: 'percentage' };

const SalaryCalculator = () => {
  const { t, decimalSeparator } = useSite();
  const {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    recalculate,
    complete,
    derived,
    solvedField
  } = useSalaryRaise(decimalSeparator);

  const previousSeparator = useRef(decimalSeparator);
  useEffect(() => {
    if (previousSeparator.current === decimalSeparator) return;
    previousSeparator.current = decimalSeparator;
    recalculate(decimalSeparator);
  }, [decimalSeparator, recalculate]);

  const fieldClass = (field) => (lastEdited.includes(field) ? 'active' : 'calculated');

  const headline = complete
    ? (solvedField === 'percent' ? `${values.percent}%` : values[solvedField] ?? values.newPay)
    : '—';

  const summary = complete
    ? formatTemplate(t.salary_summary, {
        old: values.oldPay,
        new: values.newPay,
        pct: values.percent
      })
    : t.salary_help;

  const steps = complete && solvedField
    ? buildWorkedSteps({
        mode: 'increase_decrease',
        solvedField: SOLVED_TO_GENERIC[solvedField],
        values: { base: values.oldPay, percentage: values.percent, result: values.newPay },
        decimalSeparator,
        t
      })
    : [];

  const extras = derived
    ? [
        { label: t.salary_extra_amount, value: derived.raiseAmount },
        { label: t.salary_extra_monthly_old, value: derived.monthlyOld },
        { label: t.salary_extra_monthly_new, value: derived.monthlyNew },
        { label: t.salary_extra_monthly_raise, value: derived.monthlyRaise },
        ...(derived.realChange === null
          ? []
          : [{ label: t.salary_extra_real, value: `${derived.realChange}%` }])
      ]
    : [];

  const shareText = () => summary;
  const handleShare = async () => {
    const text = shareText();
    const shared = await shareResultText({ title: t.salary_title, text, url: window.location.href });
    if (!shared) await copyResultText(text);
  };

  return (
    <section className="calculator-panel" id="calculator">
      <p className="card-explainer">{t.salary_explainer}</p>
      <div className="calculator-card">
        <div className="form">
          <div className="input-group">
            <label htmlFor="old-pay">{t.salary_old_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="old-pay"
              value={values.oldPay}
              onChange={(event) => handleInputChange('oldPay', event.target.value)}
              placeholder={t.salary_old_placeholder}
              className={fieldClass('oldPay')}
            />
          </div>

          <div className="input-group">
            <label htmlFor="new-pay">{t.salary_new_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="new-pay"
              value={values.newPay}
              onChange={(event) => handleInputChange('newPay', event.target.value)}
              placeholder={t.salary_new_placeholder}
              className={fieldClass('newPay')}
            />
          </div>

          <div className="input-group">
            <label htmlFor="raise-percent">{t.salary_percent_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="raise-percent"
              value={values.percent}
              onChange={(event) => handleInputChange('percent', event.target.value)}
              placeholder={t.salary_percent_placeholder}
              className={fieldClass('percent')}
            />
          </div>

          <div className="input-group">
            <label htmlFor="inflation">{t.salary_inflation_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="inflation"
              value={values.inflation}
              onChange={(event) => handleInputChange('inflation', event.target.value)}
              placeholder={t.salary_inflation_placeholder}
              className="active"
            />
          </div>
        </div>

        <ResultPanel
          t={t}
          resultPanelValue={headline}
          formulaSegments={[{ text: summary, strong: false }]}
          steps={steps}
          extraResults={extras}
          onCopy={() => copyResultText(shareText())}
          onClear={handleClear}
          onShare={handleShare}
        />
      </div>
    </section>
  );
};

export default SalaryCalculator;
