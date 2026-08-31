import { formatTemplate, parseNumber } from './formatters';
import { stepNumber } from './numberInput';

/**
 * Turns the live inputs into the arithmetic a person would write out by hand.
 * The result panel shows the answer; this shows how the answer was reached,
 * using the visitor's own numbers rather than a canned example.
 *
 * Which steps apply depends on both the mode and which field the solver filled
 * in, because the inverse cases are genuinely different arithmetic — finding a
 * base from a result is a division, not a multiplication.
 */
export const buildWorkedSteps = ({ mode, solvedField, values, decimalSeparator, t }) => {
  const base = parseNumber(values.base, decimalSeparator);
  const pct = parseNumber(values.percentage, decimalSeparator);
  const res = parseNumber(values.result, decimalSeparator);
  if (isNaN(base) || isNaN(pct) || isNaN(res)) return [];

  const n = (value, places) => stepNumber(value, decimalSeparator, places);
  const step = (key, params) => (t[key] ? formatTemplate(t[key], params) : null);

  const decimal = pct / 100;
  const multiplier = 1 + decimal;
  const difference = res - base;

  const toDecimal = () => step('step_pct_to_decimal', { pct: n(pct), dec: n(decimal) });
  const toPercent = (dec) => step('step_decimal_to_pct', { dec: n(dec), pct: n(pct) });
  const toMultiplier = () =>
    step('step_multiplier', {
      sign: pct < 0 ? '−' : '+',
      abs: n(Math.abs(pct)),
      mult: n(multiplier)
    });

  let steps = [];

  if (mode === 'increase_decrease' || mode === 'percentage_change') {
    if (solvedField === 'percentage') {
      steps = [
        step('step_difference', { result: n(res), base: n(base), diff: n(difference) }),
        step('step_share_of_base', {
          diff: n(difference),
          base: n(base),
          dec: n(base === 0 ? 0 : difference / base)
        }),
        toPercent(base === 0 ? 0 : difference / base)
      ];
    } else if (solvedField === 'base') {
      steps = [
        toMultiplier(),
        step('step_undo_multiplier', { result: n(res), mult: n(multiplier), base: n(base) })
      ];
    } else {
      steps = [
        toMultiplier(),
        step('step_apply_multiplier', { base: n(base), mult: n(multiplier), result: n(res) })
      ];
    }
  } else if (mode === 'what_percent') {
    // Here `base` is the part and `result` is the whole.
    if (solvedField === 'percentage') {
      steps = [
        step('step_divide_part_whole', {
          part: n(base),
          whole: n(res),
          dec: n(res === 0 ? 0 : base / res)
        }),
        toPercent(res === 0 ? 0 : base / res)
      ];
    } else if (solvedField === 'base') {
      steps = [
        toDecimal(),
        step('step_multiply_whole', { whole: n(res), dec: n(decimal), part: n(base) })
      ];
    } else {
      steps = [
        toDecimal(),
        step('step_divide_part_by_decimal', { part: n(base), dec: n(decimal), whole: n(res) })
      ];
    }
  } else if (solvedField === 'percentage') {
    steps = [
      step('step_divide_part_whole', {
        part: n(res),
        whole: n(base),
        dec: n(base === 0 ? 0 : res / base)
      }),
      toPercent(base === 0 ? 0 : res / base)
    ];
  } else if (solvedField === 'base') {
    steps = [
      toDecimal(),
      step('step_divide_result_by_decimal', { result: n(res), dec: n(decimal), base: n(base) })
    ];
  } else {
    steps = [
      toDecimal(),
      step('step_multiply_base', { base: n(base), dec: n(decimal), result: n(res) })
    ];
  }

  return steps.filter(Boolean);
};
