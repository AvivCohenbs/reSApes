import "./RecipeDetails.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReactComponent as Clock } from "./clock.svg";
import IngredientsContext from "../IngredientsContext";
import Recipes from "../components/Recipes/Recipes";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  //const { ingredients } = useContext(IngredientsContext);
  const [recipeIngredient, setRecipeIngredient] = useState(null);

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setRecipeIngredient(data);
      });
  }, [id]);

  return (
    <div className="recipe-details-card">
      {recipe && (
        <div className="img-text">
          <div className="img-side">
            <img className="imgdet" src={recipe.image} alt="img" />
          </div>

          <div className="about">
            <div className="titledet">{recipe.title}</div>
            <div className="rat-tim">
              <div>
                <div>
                  <Clock />
                  <span className="res-min">{recipe.time} min</span>
                </div>
              </div>
            </div>
            <div className="res-des">
              Description <br /> {recipe.description} <br />
            </div>
            <br />
            <div>
              Ingredients
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}> {ingredient.name}</li>
                ))}
              </ul>
            </div>
            Instructions <br />
            {recipe.instructions.map((step, index) => (
              <div key={index}>
                <h3>Step {index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default RecipeDetails;
