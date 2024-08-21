import "./Color.css";
import "./Buttons.css";
import { useState } from "react";
import ColorForm from "./ColorForm";

export default function Color({
  color,
  onDelete,
  confirmDelete,
  onDeleteConfirm,
  onCancel,
  onChange,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleChange(updatedColor) {
    onChange(color.id, updatedColor);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <>
          <ColorForm addColor={handleChange} defaultValues={color} />
          <button onClick={handleCancelEdit}>CANCEL</button>
        </>
      ) : (
        <>
          <h3 className="color-card-highlight">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <button onClick={handleEdit}>Edit</button>
          {confirmDelete === color.id ? (
            <>
              <button onClick={onDeleteConfirm}>DELETE</button>
              <button onClick={onCancel}>CANCEL</button>
            </>
          ) : (
            <button onClick={() => onDelete(color.id)}>Delete</button>
          )}
        </>
      )}
    </div>
  );
}
