import "./App.css";
import { Route, Routes } from "react-router";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Header/Profile";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <NavigationBar />
    </div>
  );
}

export default App;
