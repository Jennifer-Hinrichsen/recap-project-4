import { useState } from "react";

const ColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({
    role: "Primary",
    hexValue: "#000000",
    contrastText: "#ffffff",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hex">Hex</label>
        <input
          type="color"
          id="hex"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        />
        <input
          type="text"
          id="hexText"
          name="hex"
          value={formData.hex}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contrastText">Contrast Text</label>
        <input
          type="color"
          id="contrastText"
          name="contrastText"
          value={formData.contrastText}
          onChange={handleChange}
        />
        <input
          type="text"
          id="contrastTextInput"
          name="contrastText"
          value={formData.contrastText}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
};

export default ColorForm;
