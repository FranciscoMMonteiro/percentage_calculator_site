import { useMemo, useState } from 'react';
import { parseNumber } from '../utils/formatters';
import { createNumberRegex, formatValue, stepNumber, trimZeros } from '../utils/numberInput';

const FIELDS = ['oldPay', 'newPay', 'percent'];

const solve = (values, lastEdited, decimalSeparator) => {
  if (lastEdited.length < 2) return null;
  const missing = FIELDS.find((field) => !lastEdited.includes(field));
  if (!missing) return null;

  const oldPay = parseNumber(values.oldPay, decimalSeparator);
  const newPay = parseNumber(values.newPay, decimalSeparator);
  const percent = parseNumber(values.percent, decimalSeparator);

  let raw = null;
  if (missing === 'newPay' && !isNaN(oldPay) && !isNaN(percent)) {
    raw = oldPay * (1 + percent / 100);
  } else if (missing === 'oldPay' && !isNaN(newPay) && !isNaN(percent) && 1 + percent / 100 !== 0) {
    raw = newPay / (1 + percent / 100);
  } else if (missing === 'percent' && !isNaN(oldPay) && !isNaN(newPay) && oldPay !== 0) {
    raw = ((newPay - oldPay) / oldPay) * 100;
  }
  if (raw === null || !isFinite(raw)) return null;

  return { field: missing, value: formatValue(trimZeros(raw.toFixed(2)), decimalSeparator) };
};

const rememberEdit = (lastEdited, field) => [
  ...lastEdited.filter((existing) => existing !== field),
  field
].slice(-2);

/**
 * A pay rise is three linked numbers — old pay, new pay and the percentage —
 * so it uses the same fill-any-two shape as the main calculator. What it adds
 * is the part the three-field solver cannot express: the cash difference, the
 * monthly equivalent of an annual figure, and the real-terms change once
 * inflation is taken into account.
 */
export const useSalaryRaise = (decimalSeparator) => {
  const [values, setValues] = useState({ oldPay: '', newPay: '', percent: '', inflation: '' });
  const [lastEdited, setLastEdited] = useState([]);

  const positiveRegex = useMemo(() => createNumberRegex(decimalSeparator, false), [decimalSeparator]);
  const signedRegex = useMemo(() => createNumberRegex(decimalSeparator, true), [decimalSeparator]);

  const handleInputChange = (field, value) => {
    // A pay cut is a real thing to model, and so is negative inflation.
    const regex = field === 'percent' || field === 'inflation' ? signedRegex : positiveRegex;
    if (!regex.test(value)) return;

    if (field === 'inflation') {
      setValues((prev) => ({ ...prev, inflation: value }));
      return;
    }

    setValues((prev) => {
      const next = { ...prev, [field]: value };
      const solved = solve(next, rememberEdit(lastEdited, field), decimalSeparator);
      if (solved && next[solved.field] !== solved.value) {
        return { ...next, [solved.field]: solved.value };
      }
      return next;
    });
    setLastEdited((prev) => rememberEdit(prev, field));
  };

  const handleClear = () => {
    setValues({ oldPay: '', newPay: '', percent: '', inflation: '' });
    setLastEdited([]);
  };

  const recalculate = (nextSeparator = decimalSeparator) => {
    setValues((prev) => {
      const solved = solve(prev, lastEdited, nextSeparator);
      if (!solved || prev[solved.field] === solved.value) return prev;
      return { ...prev, [solved.field]: solved.value };
    });
  };

  const oldPay = parseNumber(values.oldPay, decimalSeparator);
  const newPay = parseNumber(values.newPay, decimalSeparator);
  const percent = parseNumber(values.percent, decimalSeparator);
  const inflation = parseNumber(values.inflation, decimalSeparator);

  const complete = !isNaN(oldPay) && !isNaN(newPay) && !isNaN(percent);
  const solvedField = lastEdited.length === 2
    ? FIELDS.find((field) => !lastEdited.includes(field))
    : null;
  const n = (value, places = 2) => stepNumber(value, decimalSeparator, places);

  const derived = complete
    ? {
        raiseAmount: n(newPay - oldPay),
        monthlyOld: n(oldPay / 12),
        monthlyNew: n(newPay / 12),
        monthlyRaise: n((newPay - oldPay) / 12),
        realChange: isNaN(inflation)
          ? null
          : n(((1 + percent / 100) / (1 + inflation / 100) - 1) * 100)
      }
    : null;

  return {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    recalculate,
    complete,
    derived,
    solvedField,
    displayNewPay: values.newPay || '—',
    displayPercent: values.percent || '—'
  };
};
