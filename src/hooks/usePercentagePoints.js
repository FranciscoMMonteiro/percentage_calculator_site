import { useMemo, useState } from 'react';
import { parseNumber } from '../utils/formatters';
import { createNumberRegex, stepNumber } from '../utils/numberInput';

/**
 * Two percentages produce several different — and all correct — answers to
 * "how far apart are they". The point of this tool is that it shows them side
 * by side and names each one, instead of picking one and calling it "the"
 * difference, which is where most of the confusion comes from.
 */
export const usePercentagePoints = (decimalSeparator) => {
  const [values, setValues] = useState({ first: '', second: '' });

  const regex = useMemo(() => createNumberRegex(decimalSeparator, true), [decimalSeparator]);

  const handleInputChange = (field, value) => {
    if (!regex.test(value)) return;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => setValues({ first: '', second: '' });

  const first = parseNumber(values.first, decimalSeparator);
  const second = parseNumber(values.second, decimalSeparator);
  const complete = !isNaN(first) && !isNaN(second);

  const n = (value, places = 2) => stepNumber(value, decimalSeparator, places);
  const mean = (first + second) / 2;

  const derived = complete
    ? {
        points: n(second - first),
        relative: first === 0 ? null : n(((second - first) / first) * 100),
        difference: mean === 0 ? null : n((Math.abs(second - first) / mean) * 100),
        ratio: first === 0 ? null : n(second / first, 3)
      }
    : null;

  return {
    values,
    handleInputChange,
    handleClear,
    complete,
    derived,
    displayPoints: derived ? derived.points : '—'
  };
};
