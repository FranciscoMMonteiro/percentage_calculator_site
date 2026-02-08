import { useEffect, useMemo, useState } from 'react';

const createNumberRegex = (decimalSeparator, allowNegative) => {
  if (decimalSeparator === '.') {
    return allowNegative ? /^-?\d*\.?\d*$/ : /^\d*\.?\d*$/;
  }
  return allowNegative ? /^-?\d*,?\d*$/ : /^\d*,?\d*$/;
};

const parseValue = (val, decimalSeparator) => {
  if (!val) return NaN;
  if (decimalSeparator === ',') {
    return parseFloat(val.replace(',', '.'));
  }
  return parseFloat(val);
};

const formatValue = (val, decimalSeparator) => {
  if (decimalSeparator === ',') {
    return val.toString().replace('.', ',');
  }
  return val.toString();
};

export const usePercentageCalculator = (decimalSeparator, mode) => {
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

    setValues(prev => ({ ...prev, [field]: value }));

    setLastEdited(prev => {
      const filtered = prev.filter(f => f !== field);
      return [...filtered, field].slice(-2);
    });
  };

  useEffect(() => {
    if (lastEdited.length < 2) return;

    const fields = ['base', 'percentage', 'result'];
    const missingField = fields.find(f => !lastEdited.includes(f));
    if (!missingField) return;

    const val1 = parseValue(values[lastEdited[0]], decimalSeparator);
    const val2 = parseValue(values[lastEdited[1]], decimalSeparator);

    if (isNaN(val1) || isNaN(val2)) return;

    let calculatedValue = '';

    const base = parseValue(values.base, decimalSeparator);
    const pct = parseValue(values.percentage, decimalSeparator);
    const res = parseValue(values.result, decimalSeparator);

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

    if (calculatedValue.endsWith('.00')) {
      calculatedValue = calculatedValue.slice(0, -3);
    }

    const formattedCalculatedValue = formatValue(calculatedValue, decimalSeparator);

    setValues(prev => {
      if (prev[missingField] === formattedCalculatedValue) return prev;
      return { ...prev, [missingField]: formattedCalculatedValue };
    });
  }, [values.base, values.percentage, values.result, lastEdited, decimalSeparator, mode]);

  const handleClear = () => {
    setValues({
      base: '',
      percentage: '',
      result: ''
    });
    setLastEdited([]);
  };

  const displayResult = values.result || '—';
  const displayPercentage = values.percentage || '—';
  const displayBase = values.base || '—';
  const hasAll = values.base && values.percentage && values.result;
  const displayFormula = hasAll
    ? (() => {
        if (mode === 'what_percent') {
          return `${displayBase} is ${displayPercentage}% of ${displayResult}`;
        }
        if (mode === 'increase_decrease') {
          const pctValue = parseValue(values.percentage, decimalSeparator);
          const changeLabel = !isNaN(pctValue) && pctValue < 0 ? 'decrease' : 'increase';
          return `${displayBase} with ${displayPercentage}% ${changeLabel} = ${displayResult}`;
        }
        if (mode === 'percentage_change') {
          return `Change from ${displayBase} to ${displayResult} = ${displayPercentage}%`;
        }
        return `${displayPercentage}% of ${displayBase} = ${displayResult}`;
      })()
    : 'Enter any two fields to calculate the third.';

  return {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    displayResult,
    displayPercentage,
    displayBase,
    displayFormula
  };
};
