import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/Color-form";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    const colorWithId = {
      id: nanoid(),
      ...newColor,
    };
    setColors([colorWithId, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Color color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
