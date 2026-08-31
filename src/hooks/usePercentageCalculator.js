import { useMemo, useState } from 'react';
import { formatTemplate, parseNumber } from '../utils/formatters';
import { createNumberRegex, formatValue } from '../utils/numberInput';
import { buildWorkedSteps } from '../utils/workedSteps';

const buildWhatPercentSegments = (template, params, pctText) => {
  const parts = template.split('{pct}%');
  if (parts.length !== 2) {
    return [{ text: formatTemplate(template, params), strong: false }];
  }
  return [
    { text: formatTemplate(parts[0], params), strong: false },
    { text: `${pctText}%`, strong: true },
    { text: formatTemplate(parts[1], params), strong: false }
  ];
};

const calculateMissingValue = (values, lastEdited, mode, decimalSeparator) => {
  if (lastEdited.length < 2) return null;

  const fields = ['base', 'percentage', 'result'];
  const missingField = fields.find((field) => !lastEdited.includes(field));
  if (!missingField) return null;

  const val1 = parseNumber(values[lastEdited[0]], decimalSeparator);
  const val2 = parseNumber(values[lastEdited[1]], decimalSeparator);
  if (isNaN(val1) || isNaN(val2)) return null;

  const base = parseNumber(values.base, decimalSeparator);
  const pct = parseNumber(values.percentage, decimalSeparator);
  const res = parseNumber(values.result, decimalSeparator);

  let calculatedValue = '';

  if (mode === 'increase_decrease' || mode === 'percentage_change') {
    if (missingField === 'result') {
      if (!isNaN(base) && !isNaN(pct)) {
        calculatedValue = (base * (1 + pct / 100)).toFixed(2);
      }
    } else if (missingField === 'base') {
      if (!isNaN(res) && !isNaN(pct) && (1 + pct / 100) !== 0) {
        calculatedValue = (res / (1 + pct / 100)).toFixed(2);
      }
    } else if (missingField === 'percentage') {
      if (!isNaN(base) && !isNaN(res) && base !== 0) {
        calculatedValue = (((res - base) / base) * 100).toFixed(2);
      }
    }
  } else if (mode === 'what_percent') {
    if (missingField === 'percentage') {
      if (!isNaN(base) && !isNaN(res) && res !== 0) {
        calculatedValue = ((base / res) * 100).toFixed(2);
      }
    } else if (missingField === 'base') {
      if (!isNaN(res) && !isNaN(pct)) {
        calculatedValue = (res * (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'result') {
      if (!isNaN(base) && !isNaN(pct) && pct !== 0) {
        calculatedValue = (base / (pct / 100)).toFixed(2);
      }
    }
  } else {
    if (missingField === 'result') {
      if (!isNaN(base) && !isNaN(pct)) {
        calculatedValue = (base * (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'base') {
      if (!isNaN(res) && !isNaN(pct) && pct !== 0) {
        calculatedValue = (res / (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'percentage') {
      if (!isNaN(base) && !isNaN(res) && base !== 0) {
        calculatedValue = ((res / base) * 100).toFixed(2);
      }
    }
  }

  if (!calculatedValue) return null;

  if (calculatedValue.endsWith('.00')) {
    calculatedValue = calculatedValue.slice(0, -3);
  }

  return {
    field: missingField,
    value: formatValue(calculatedValue, decimalSeparator)
  };
};

const updateLastEdited = (lastEdited, field) => {
  const filtered = lastEdited.filter((existing) => existing !== field);
  return [...filtered, field].slice(-2);
};

export const usePercentageCalculator = (decimalSeparator, mode, translations) => {
  const [values, setValues] = useState({
    base: '',
    percentage: '',
    result: ''
  });

  const [lastEdited, setLastEdited] = useState([]);

  const numberRegex = useMemo(() => createNumberRegex(decimalSeparator, false), [decimalSeparator]);
  const negativeNumberRegex = useMemo(() => createNumberRegex(decimalSeparator, true), [decimalSeparator]);

  const handleInputChange = (field, value) => {
    const allowNegative = mode === 'increase_decrease' && field === 'percentage';
    const regex = allowNegative ? negativeNumberRegex : numberRegex;
    if (!regex.test(value)) return;
    setValues((prev) => {
      const nextValues = { ...prev, [field]: value };
      const nextLastEdited = updateLastEdited(lastEdited, field);
      const calculated = calculateMissingValue(nextValues, nextLastEdited, mode, decimalSeparator);
      if (calculated && nextValues[calculated.field] !== calculated.value) {
        return { ...nextValues, [calculated.field]: calculated.value };
      }
      return nextValues;
    });
    setLastEdited((prev) => updateLastEdited(prev, field));
  };

  const handleClear = () => {
    setValues({
      base: '',
      percentage: '',
      result: ''
    });
    setLastEdited([]);
  };

  const applyPreset = (nextValues, editedOrder = [], nextMode = mode, nextSeparator = decimalSeparator) => {
    const calculated = calculateMissingValue(nextValues, editedOrder, nextMode, nextSeparator);
    const mergedValues = calculated
      ? { ...nextValues, [calculated.field]: calculated.value }
      : nextValues;
    setValues(mergedValues);
    setLastEdited(editedOrder);
  };

  const recalculate = (nextMode = mode, nextSeparator = decimalSeparator) => {
    setValues((prev) => {
      const calculated = calculateMissingValue(prev, lastEdited, nextMode, nextSeparator);
      if (!calculated || prev[calculated.field] === calculated.value) {
        return prev;
      }
      return { ...prev, [calculated.field]: calculated.value };
    });
  };

  const solvedField = lastEdited.length === 2
    ? ['base', 'percentage', 'result'].find((field) => !lastEdited.includes(field))
    : null;

  const displayResult = values.result || '—';
  const displayPercentage = values.percentage || '—';
  const displayBase = values.base || '—';
  const hasAll = values.base && values.percentage && values.result;
  const formulaSegments = hasAll
    ? (() => {
        if (mode === 'what_percent') {
          return buildWhatPercentSegments(
            translations.formula_what_percent,
            { base: displayBase, result: displayResult },
            displayPercentage
          );
        }
        if (mode === 'increase_decrease') {
          const pctValue = parseNumber(values.percentage, decimalSeparator);
          const changeLabel = !isNaN(pctValue) && pctValue < 0
            ? translations.change_decrease
            : translations.change_increase;
          return [{
            text: formatTemplate(translations.formula_increase_decrease, {
              base: displayBase,
              pct: displayPercentage,
              change: changeLabel,
              result: displayResult
            }),
            strong: false
          }];
        }
        if (mode === 'percentage_change') {
          return [{
            text: formatTemplate(translations.formula_percentage_change, {
              base: displayBase,
              pct: displayPercentage,
              result: displayResult
            }),
            strong: false
          }];
        }
        return [{
          text: formatTemplate(translations.formula_percent_of, {
            base: displayBase,
            pct: displayPercentage,
            result: displayResult
          }),
          strong: false
        }];
      })()
    : [{ text: translations.result_help, strong: false }];

  const workedSteps = hasAll && solvedField
    ? buildWorkedSteps({
        mode,
        solvedField,
        values,
        decimalSeparator,
        t: translations
      })
    : [];

  return {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    applyPreset,
    recalculate,
    displayResult,
    displayPercentage,
    displayBase,
    formulaSegments,
    workedSteps
  };
};
