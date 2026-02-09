export const parseNumber = (value, decimalSeparator) => {
  if (!value) return NaN;
  if (decimalSeparator === ',') {
    return parseFloat(value.replace(',', '.'));
  }
  return parseFloat(value);
};

export const formatWithSeparator = (value, decimalSeparator) => {
  if (value === '' || value === null || value === undefined) {
    return '';
  }
  if (decimalSeparator === ',') {
    return value.toString().replace('.', ',');
  }
  return value.toString();
};

export const formatTemplate = (template, params) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key] ?? match;
  });
};
