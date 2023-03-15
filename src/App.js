import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAgeIs, setPredictedAgeIs] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAgeIs(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Ex. major..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}> Give The Age </button>

      <h1> Name: {predictedAgeIs?.name}</h1>
      <h1> Predicted Age Is: {predictedAgeIs?.age}</h1>
      <h1> Count: {predictedAgeIs?.count}</h1>
    </div>
  );
}

export default App;
