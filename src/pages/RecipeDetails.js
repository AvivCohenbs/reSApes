import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReactComponent as Clock } from "./clock.svg";
import Comments from "../components/Comments";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recipeIngredient, setRecipeIngredient] = useState(null);

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setRecipeIngredient(data);
      });
  }, [id]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#116530",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="recipe-details-card">
          {recipe && (
            <div className="img-text">
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
                <div>
                  <div className="desc">
                    <b> Description</b>
                  </div>
                  {recipe.description} <br />
                </div>
                <br />
                <div>
                  <div className="ingre">
                    <b> Ingredients</b>
                  </div>
                  <ul>
                    {recipe.ingredientsQuantities.map(
                      (ingredientQuantity, index) => {
                        return (
                          <li key={index}>
                            {` ${ingredientQuantity.quantity} ${ingredientQuantity.unit.name} of ${ingredientQuantity.ingredient.name}`}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                <div className="instru">
                  {" "}
                  <b> Instructions</b> <br />{" "}
                </div>
                {recipe.instructions.map((step, index) => (
                  <div key={index}>
                    <h3>Step {index + 1}</h3>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
              <div className="img-side">
                <img className="imgdet" src={recipe.image} alt="img" />
                <div className="post-comments">
                  <Comments />
                  <Comments />
                  <Comments />
                  <Comments />
                  <Comments />
                </div>
                <form className="post_form">
                  <div className="add-comment-input">
                    <TextField
                      label="Add comment"
                      size="small"
                      variant="outlined"
                      placeholder="Add comment"
                      className="post-input"
                      sx={{
                        width: "350px",
                      }}
                    />
                  </div>
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<SendIcon />}
                    type="submit"
                    sx={{
                      bgcolor: "#116530",
                      boxShadow: "none",
                    }}
                  >
                    Sent
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}
export default RecipeDetails;
