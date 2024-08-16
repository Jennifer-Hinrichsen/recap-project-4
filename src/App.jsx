import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/Color-form";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    const colorWithId = {
      id: colors.length + 1,
      ...newColor,
    };
    setColors([colorWithId, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
