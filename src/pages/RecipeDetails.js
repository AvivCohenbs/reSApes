import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReactComponent as Rating } from "./rating.svg";
import { ReactComponent as Clock } from "./clock.svg";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/data.json`)
      .then((res) => res.json())
      .then((recipe) => {
        setRecipe(recipe.recipes[id - 1]);
      });
  }, [id]);

  return (
    <div className="card">
      {recipe && (
        <>
          <div className="titledet">{recipe.title}</div>

          <img className="imgdet" src={recipe.image} alt="img" />
          <div className="rat-min">
            <div>
              <Clock />
              <span className="res-min">{recipe.time}</span>
            </div>
            <div>
              <Rating />
              <span className="res-rat">{recipe.rating}</span>{" "}
            </div>
          </div>
          <div className="res-des">
            Description <br /> {recipe.description} <br /> The recipe is adapted
            for two pizzas measuring 30 × 40 cm.
          </div>
          <div className="ingre">
            Ingredients <br /> {recipe.ingredients}
          </div>
        </>
      )}
    </div>
  );
}
export default RecipeDetails;

//       title
// image
// rating  + time

//       description
