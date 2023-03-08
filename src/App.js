import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "blue" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}> Hello My Name Is Major</h1>
    </div>
  );
}

export default App;
