import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((recipes) => {
        console.log(recipes);
        setRecipes(recipes);
      });
  }, []);

  return (
    <div className="recipes-dsgn">
      {recipes.map(({ id, title, description, rating, time, image }) => (
        <Recipe
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          rating={rating}
          time={time}
        />
      ))}
    </div>
  );
}
export default Recipes;
