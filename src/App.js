import "./App.css";
import { Route, Routes } from "react-router";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./components/Header/Profile";
import RecipeDetails from "./pages/RecipeDetails";
import IngredientsContext from "./IngredientsContext";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setIngredients(data.ingredients);
      });
  }, []);

  return (
    <div className="pages">
      <IngredientsContext.Provider value={{ ingredients, recipes }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;
