import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe));
  }, [id]);

  return (
    <>
      <h1 className="details">Recipe Details:</h1>
      <br />
      <br />
      <br />
      <div className="card">
        {recipe && (
          <card>
            <CardMedia
              sx={{
                width: 300,
                objectFit: "scale-down",
                height: 400,
                margin: "0 auto",
              }}
              component="img"
              image={recipe.image}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div className="titlefont">{recipe.title}</div>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="des"> {recipe.descriprion}</div>
              </Typography>
            </CardContent>
          </card>
        )}
      </div>
    </>
  );
}
export default RecipeDetails;
