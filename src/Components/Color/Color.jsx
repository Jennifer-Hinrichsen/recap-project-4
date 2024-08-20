import "./Color.css";
import "./Buttons.css";

export default function Color({
  color,
  onDelete,
  confirmDelete,
  onDeleteConfirm,
  onCancel,
}) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmDelete === color.id ? (
        <div className="delete-container">
          <p className="delete-question-area">Really delete?</p>
          <button onClick={onCancel}>CANCEL</button>
          <button onClick={onDeleteConfirm}>DELETE</button>
        </div>
      ) : (
        <button onClick={() => onDelete(color.id)}>Delete</button>
      )}
    </div>
  );
}
