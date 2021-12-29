import "./RecipeDetails.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReactComponent as Rating } from "./rating.svg";
import { ReactComponent as Clock } from "./clock.svg";
import IngredientsContext from "../IngredientsContext";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { ingredients } = useContext(IngredientsContext);

  useEffect(() => {
    fetch(`http://localhost:3000/data.json`)
      .then((res) => res.json())
      .then((recipe) => {
        setRecipe(recipe.recipes[id - 1]);
      });
  }, [id]);

  return (
    <div className="card">
      {ingredients.length && recipe && (
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
            Description <br /> {recipe.description} <br />
          </div>
          <div className="ingre">
            {recipe.ingredients.map((singleIngredientId) => {
              const foundIngredient = ingredients.find(
                (element) => element.id === singleIngredientId
              );
              return <div>{foundIngredient.name}</div>;
            })}
          </div>
          <div>
            {" "}
            Instructions <br />
            {recipe.instructions.map((step, index) => (
              <div>
                <h3>Step {index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default RecipeDetails;
