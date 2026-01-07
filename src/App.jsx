import { useState } from "react";
import Clock from "./Clock";
function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>Digital clock in React Js</h1>
      <h3>Select the color for clock</h3>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="white">White</option>
        <option value="orange">Orange</option>
        <option value="aqua">Aqua</option>
        <option value="yellow">Yellow</option>
      </select>

      <Clock color={color} />
    </>
  );
}
export default App;
