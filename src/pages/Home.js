import Header from "../components/Header/Header";
import Recipes from "../components/Recipes/Recipes";
import "./Home.css";
import { useContext } from "react";
import React from "react";
import IngredientsContext from "../IngredientsContext";

function Home() {
  const { recipes } = useContext(IngredientsContext);
  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  );
}
export default Home;
