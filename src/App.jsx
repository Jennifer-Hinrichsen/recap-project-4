import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ul className="color-list">
        {initialColors.map((color) => (
          <li key={color.id} className="color-matrix">
            <Color color={color} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
