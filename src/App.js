import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { NavBar } from "./pages/NavBar";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("MajorTech");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<h1> THIS IS A BLANK PAGE </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
