export const getResultText = ({ base, percentage, result, displayBase, displayPercentage, displayResult }) => {
  if (base && percentage && result) {
    return `${displayPercentage}% of ${displayBase} = ${displayResult}`;
  }
  return `Result: ${displayResult}`;
};

export const copyResultText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
};

export const shareResultText = async ({ title, text, url }) => {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return true;
    } catch {
      return false;
    }
  }
  return false;
};
