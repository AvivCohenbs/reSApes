import Header from "../components/Header/Header";
import Recipes from "../components/Recipes/Recipes";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div>
      <Header />
      <Recipes recipes={recipes} />
    </div>
  );
}
export default Home;
