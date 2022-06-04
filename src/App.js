import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import React, { createContext, useState } from "react";*/

/*export const ThemeContext = createContext(null);*/

function App() {
  /*const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };*/

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/odin-twitter-clone" element={<Feed />} />
          <Route path="/odin-twitter-clone/profile" element={<Profile />} />
        </Routes>
        <Widgets />
      </div>
    </Router>
  );
}

export default App;
