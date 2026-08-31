/**
 * Shared numeric-input plumbing. Both the three-field percentage solver and the
 * standalone calculators need the same separator-aware regex and display
 * formatting, so it lives here rather than being duplicated per hook.
 */

export const createNumberRegex = (decimalSeparator, allowNegative) => {
  if (decimalSeparator === '.') {
    return allowNegative ? /^-?\d*\.?\d*$/ : /^\d*\.?\d*$/;
  }
  return allowNegative ? /^-?\d*,?\d*$/ : /^\d*,?\d*$/;
};

/** Swaps in the user's decimal separator for display. */
export const formatValue = (val, decimalSeparator) => {
  if (decimalSeparator === ',') {
    return val.toString().replace('.', ',');
  }
  return val.toString();
};

/** `2.50` -> `2.5`, `30.00` -> `30`. Operates on the dot form. */
export const trimZeros = (text) =>
  text.includes('.') ? text.replace(/0+$/, '').replace(/\.$/, '') : text;

/**
 * Rounds to `places` and drops the padding. Intermediate values in a worked
 * derivation need more precision than the two decimals used for results —
 * showing `0.16` for 15.5 ÷ 100 would make the next line look wrong.
 */
export const roundTo = (value, places = 6) => trimZeros(value.toFixed(places));

/** A number ready to drop into a step sentence, in the user's separator. */
export const stepNumber = (value, decimalSeparator, places = 6) =>
  formatValue(roundTo(value, places), decimalSeparator);
