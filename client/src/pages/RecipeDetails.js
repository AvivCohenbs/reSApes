import "./RecipeDetails.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Comments from "../components/Comments";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "@mui/material/List";
import userContext from "../UserContext";
import { ReactComponent as Cook } from "./Cook.svg";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [recipeIngredient, setRecipeIngredient] = useState(null);
  const [comment, setComment] = useState("");
  const { user } = useContext(userContext);

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleClickComment = async (e) => {
    e.preventDefault();
    const addComment = { user: user._id, content: comment };
    console.log(addComment);

    fetch(`/api/recipes/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json", id: user._id },
      body: JSON.stringify(addComment),
    })
      .then((response) => response.json())
      .then((newComment) => {
        setRecipe({ ...recipe, comments: [...recipe.comments, newComment] });
      });
  };

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
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
                    <div className="time-diff">
                      <Timeclock />
                      <span className="res-min">{recipe.time} min</span>
                      <div className="cook-recipe-difficulty">
                        <Cook />

                        <span className="difficulty">{recipe.difficulty}</span>
                      </div>
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
                          <li key={index} className="list-ing">
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
                    <h3 className="step-by-step"> Step {index + 1}</h3>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
              <div className="img-side">
                <div>
                  <img
                    className="imgdet"
                    src={`/api/images/${recipe.image}`}
                    alt="img"
                  />
                </div>

                <div className="leave-comment">LEAVE A COMMENT</div>

                <form className="post_form" onSubmit={handleClickComment}>
                  <div className="add-comment-input">
                    <TextField
                      onChange={handleChangeComment}
                      label="Add comment"
                      size="small"
                      variant="outlined"
                      placeholder="Add comment"
                      className="post-input"
                      type="text"
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

                <List className="post-comments">
                  {recipe.comments.map((comment) => {
                    return <Comments comment={comment} />;
                  })}
                </List>
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}

export default RecipeDetails;
