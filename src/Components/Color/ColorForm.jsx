import { useState } from "react";
import "./Form.css";

function ColorForm({ onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    role: "Primary",
    hex: "#000000",
    contrastText: "#ffffff",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form data:", formData);
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="role">
        <label htmlFor="role">Role</label>
        <br></br>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      <div className="hex">
        <label htmlFor="hex">Hex</label>
        <br></br>
        <input
          type="text"
          id="hexText"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        />
        <input
          type="color"
          id="hex"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        />
      </div>
      <div className="contrastText">
        <label htmlFor="contrastText">Contrast Text</label>
        <br></br>
        <input
          type="text"
          id="contrastTextInput"
          name="contrastText"
          value={formData.contrastText}
          onChange={handleChange}
        />
        <input
          type="color"
          id="contrastText"
          name="contrastText"
          value={formData.contrastText}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{isEditing ? "Update Color" : "Add Color"}</button>
    </form>
  );
}

export default ColorForm;
