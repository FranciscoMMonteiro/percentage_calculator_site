import { useSite } from '../context/siteContext';
import { usePercentagePoints } from '../hooks/usePercentagePoints';
import { formatTemplate, parseNumber } from '../utils/formatters';
import { stepNumber } from '../utils/numberInput';
import { copyResultText, shareResultText } from '../utils/resultActions';
import ResultPanel from './ResultPanel';
import './CalculatorCard.css';
import './CalculatorForm.css';
import './CalculatorSection.css';

/**
 * Reports every reasonable answer to "how far apart are these two percentages"
 * at once, each under its own name, because picking one and calling it the
 * difference is exactly the confusion this page exists to clear up.
 */
const PointsCalculator = () => {
  const { t, decimalSeparator } = useSite();
  const { values, handleInputChange, handleClear, complete, derived } =
    usePercentagePoints(decimalSeparator);

  const first = parseNumber(values.first, decimalSeparator);
  const second = parseNumber(values.second, decimalSeparator);
  const n = (value, places = 2) => stepNumber(value, decimalSeparator, places);

  const headline = derived ? `${derived.points} ${t.points_unit}` : '—';

  const summary = complete
    ? formatTemplate(t.points_summary, {
        first: values.first,
        second: values.second,
        points: derived.points,
        relative: derived.relative ?? '—'
      })
    : t.points_help;

  const steps = complete
    ? [
        formatTemplate(t.points_step_gap, {
          second: values.second,
          first: values.first,
          points: derived.points
        }),
        derived.relative === null
          ? null
          : formatTemplate(t.points_step_relative, {
              points: derived.points,
              first: values.first,
              relative: derived.relative
            }),
        derived.difference === null
          ? null
          : formatTemplate(t.points_step_difference, {
              points: n(Math.abs(second - first)),
              mean: n((first + second) / 2),
              difference: derived.difference
            })
      ].filter(Boolean)
    : [];

  const extras = derived
    ? [
        { label: t.points_extra_points, value: `${derived.points} ${t.points_unit}` },
        {
          label: t.points_extra_relative,
          value: derived.relative === null ? t.points_undefined : `${derived.relative}%`
        },
        {
          label: t.points_extra_difference,
          value: derived.difference === null ? t.points_undefined : `${derived.difference}%`
        },
        {
          label: t.points_extra_ratio,
          value: derived.ratio === null ? t.points_undefined : `${derived.ratio}×`
        }
      ]
    : [];

  const handleShare = async () => {
    const shared = await shareResultText({
      title: t.points_title,
      text: summary,
      url: window.location.href
    });
    if (!shared) await copyResultText(summary);
  };

  return (
    <section className="calculator-panel" id="calculator">
      <p className="card-explainer">{t.points_explainer}</p>
      <div className="calculator-card">
        <div className="form">
          <div className="input-group">
            <label htmlFor="first-percent">{t.points_first_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="first-percent"
              value={values.first}
              onChange={(event) => handleInputChange('first', event.target.value)}
              placeholder={t.points_first_placeholder}
              className="active"
            />
          </div>

          <div className="input-group">
            <label htmlFor="second-percent">{t.points_second_label}</label>
            <input
              type="text"
              inputMode="decimal"
              id="second-percent"
              value={values.second}
              onChange={(event) => handleInputChange('second', event.target.value)}
              placeholder={t.points_second_placeholder}
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
          onCopy={() => copyResultText(summary)}
          onClear={handleClear}
          onShare={handleShare}
        />
      </div>
    </section>
  );
};

export default PointsCalculator;
