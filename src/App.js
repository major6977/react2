import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={100000} position="Ass Hole" company="Liver LLC" />
      <Job salary={30000} position="Cook" company="White Hastle" />
      <Job salary={80000} position="Coder" company="Yamazon" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3>{props.salary}</h3>
      <h3>{props.position}</h3>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;
