import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [showLoginMenu, setShowLoginMenu] = useState(true);
  const [avatar, setAvatar] = useState();

  const logInMenu = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  const getAvatar = (photo) => {
    setAvatar(photo);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar logInMenu={logInMenu} avatar={avatar} />
        <Routes>
          <Route path="/odin-twitter-clone" element={<Feed />} />
          <Route
            path="/odin-twitter-clone/profile"
            element={<Profile getAvatar={getAvatar} />}
          />
        </Routes>
        <Widgets />
      </div>
      {showLoginMenu ? <Login logInMenu={logInMenu} /> : null}
    </Router>
  );
}

export default App;
