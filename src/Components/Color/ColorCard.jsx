import "./Color.css";
import "./Buttons.css";
import { useState } from "react";
import ColorForm from "./ColorForm";

export default function Color({ color, onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

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
  function handleDelete() {
    setConfirmDelete(true);
  }
  function handleDeleteCancel() {
    setConfirmDelete(false);
  }
  function handleDeleteConfirm() {
    onDelete(color.id);
    setConfirmDelete(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isEditing ? (
        <>
          <ColorForm
            onSubmit={handleChange}
            defaultValues={color}
            isEditing={true}
          />
          <button onClick={handleCancelEdit}>CANCEL</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          {confirmDelete ? (
            <div className="delete-confirmation">
              <p className="color-card-headline">Really delete?</p>
              <button onClick={handleDeleteConfirm}>DELETE</button>
              <button onClick={handleDeleteCancel}>CANCEL</button>
            </div>
          ) : (
            <button onClick={handleDelete}>Delete</button>
          )}
        </>
      )}
    </div>
  );
}
