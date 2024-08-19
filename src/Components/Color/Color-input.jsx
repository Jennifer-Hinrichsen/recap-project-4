import { useState, useEffect } from "react";

export default function ColorInput({ id, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="color-input-container">
      <input
        type="text"
        id={`${id}-text`}
        name={id}
        value={inputValue}
        onChange={handleInputChange}
        className="color-text-input"
      />
      <input
        type="color"
        id={`${id}-color`}
        name={id}
        value={inputValue}
        onChange={handleInputChange}
        className="color-picker"
      />
    </div>
  );
}
