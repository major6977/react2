import "./App.css";

function App() {
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
    { building: "Brick", color: "Red", isGreen: false },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <User
            name={user.name}
            age={user.age}
            building={user.building}
            color={user.color}
          />
        );
      })}
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      {props.name} {props.age} {props.building} {props.color}
    </div>
  );
};

export default App;
