import "./App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="pages">
      <div className="links">
        <Link to="/Profile">Profile</Link>
        <Link to="/">Home page</Link>
        <Link to="/Favorites">My Favorites</Link>
      </div>

      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
