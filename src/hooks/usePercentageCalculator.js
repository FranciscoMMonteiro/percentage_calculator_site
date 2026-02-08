import { useEffect, useMemo, useState } from 'react';

const createNumberRegex = (decimalSeparator) => {
  return decimalSeparator === '.' ? /^\d*\.?\d*$/ : /^\d*,?\d*$/;
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

export const usePercentageCalculator = (decimalSeparator) => {
  const [values, setValues] = useState({
    base: '',
    percentage: '',
    result: ''
  });

  const [lastEdited, setLastEdited] = useState([]);

  const numberRegex = useMemo(() => createNumberRegex(decimalSeparator), [decimalSeparator]);

  const handleInputChange = (field, value) => {
    if (!numberRegex.test(value)) return;

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

    if (missingField === 'result') {
      const base = lastEdited.includes('base') ? parseValue(values.base, decimalSeparator) : 0;
      const pct = lastEdited.includes('percentage') ? parseValue(values.percentage, decimalSeparator) : 0;
      if (!isNaN(base) && !isNaN(pct)) {
        calculatedValue = (base * (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'base') {
      const res = lastEdited.includes('result') ? parseValue(values.result, decimalSeparator) : 0;
      const pct = lastEdited.includes('percentage') ? parseValue(values.percentage, decimalSeparator) : 0;
      if (!isNaN(res) && !isNaN(pct) && pct !== 0) {
        calculatedValue = (res / (pct / 100)).toFixed(2);
      }
    } else if (missingField === 'percentage') {
      const base = lastEdited.includes('base') ? parseValue(values.base, decimalSeparator) : 0;
      const res = lastEdited.includes('result') ? parseValue(values.result, decimalSeparator) : 0;
      if (!isNaN(base) && !isNaN(res) && base !== 0) {
        calculatedValue = ((res / base) * 100).toFixed(2);
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
  }, [values.base, values.percentage, values.result, lastEdited, decimalSeparator]);

  const handleClear = () => {
    setValues({
      base: '',
      percentage: '',
      result: ''
    });
    setLastEdited([]);
  };

  const handleCalculate = () => {
    const hasBase = values.base !== '';
    const hasPercentage = values.percentage !== '';
    const hasResult = values.result !== '';

    if (hasBase && hasPercentage) {
      setLastEdited(['base', 'percentage']);
      return;
    }

    if (hasBase && hasResult) {
      setLastEdited(['base', 'result']);
      return;
    }

    if (hasPercentage && hasResult) {
      setLastEdited(['percentage', 'result']);
    }
  };

  const displayResult = values.result || '—';
  const displayPercentage = values.percentage || '—';
  const displayBase = values.base || '—';
  const displayFormula =
    values.base && values.percentage && values.result
      ? `${displayPercentage}% of ${displayBase} = ${displayResult}`
      : 'Enter any two fields to calculate the third.';

  return {
    values,
    lastEdited,
    handleInputChange,
    handleClear,
    handleCalculate,
    displayResult,
    displayPercentage,
    displayBase,
    displayFormula
  };
};
