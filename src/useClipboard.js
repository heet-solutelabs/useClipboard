import React from "react";

function useClipboard(value) {
  const [copyText, setCopyText] = React.useState(false);

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyText(true);
    } catch (error) {
      console.error("error", error);
    }
  }, [value]);

  React.useEffect(() => {
    let timerId;
    if (copyText) {
      timerId = setTimeout(() => {
        setCopyText(false);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [copyText]);

  return { copyText, onCopy };
}

export default useClipboard;
