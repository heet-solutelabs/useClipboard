import React from "react";

function useClipboard(value = "", timeout = 1000) {
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
      }, timeout);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [copyText, timeout]);

  return { copyText, onCopy };
}

export default useClipboard;
