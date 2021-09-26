import React from "react";
import "./App.css";
import useClipboard from "./useClipboard";

function App() {
  const [value, setValue] = React.useState("");
  const onInputChangeHandler = React.useCallback((currentValue) => {
    setValue(currentValue);
  }, []);
  const { copyText, onCopy } = useClipboard(value);
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChangeHandler(e.target.value)}
      />
      <button onClick={onCopy}> {copyText ? "Copied" : "copy text"}</button>
    </div>
  );
}

export default App;
