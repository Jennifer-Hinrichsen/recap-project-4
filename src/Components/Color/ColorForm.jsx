import { useState } from "react";
import "./Form.css";

const ColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({
    role: "Primary",
    hexValue: "#000000",
    contrastText: "#ffffff",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addColor(formData);
  };

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
      <button type="submit">ADD COLOR</button>
    </form>
  );
};

export default ColorForm;
