import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Widgets />
      </div>
    </Router>
  );
}

export default App;
