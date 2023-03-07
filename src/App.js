import "./App.css";
import { User } from "./User";

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

export default App;
