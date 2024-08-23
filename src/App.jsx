import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/ColorCard";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const addColor = (newColor) => {
    const colorWithId = {
      id: nanoid(),
      ...newColor,
    };
    setColors([colorWithId, ...colors]);
  };

  function handleChangeColor(id, updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updatedColor } : color
      )
    );
  }
  function handleDelete(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {colors.map((color) => (
            <li key={color.id}>
              <Color
                color={color}
                onChange={handleChangeColor}
                onDelete={handleDelete}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
