/**
 * The copied text is the same sentence the result panel shows, so it is already
 * in the visitor's language and already describes the mode they were using.
 * Building it from the rendered segments is what keeps those three in step.
 */
export const getResultText = ({ formulaSegments = [], resultPanelValue, complete, t }) => {
  if (complete && formulaSegments.length) {
    return formulaSegments.map((segment) => segment.text).join('');
  }
  return `${t.result_title}: ${resultPanelValue}`;
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
