import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const addColor = (newColor) => {
    const colorWithId = {
      id: nanoid(),
      ...newColor,
    };
    setColors([colorWithId, ...colors]);
  };

  function handleDelete(id) {
    setConfirmDelete(id);
  }
  function handleDeleteConfirm() {
    setColors(colors.filter((color) => color.id !== confirmDelete));
  }
  function handleDeleteCancel() {
    setConfirmDelete(null);
  }
  function handleChangeColor(id, updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updatedColor } : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        <ul>
          {colors.map((color) => (
            <li key={color.id}>
              <Color
                color={color}
                onDelete={handleDelete}
                confirmDelete={confirmDelete}
                onDeleteConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                onChange={handleChangeColor}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
