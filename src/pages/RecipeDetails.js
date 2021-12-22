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
    fetch(`http://localhost:3000/data.json`)
      .then((res) => res.json())
      .then((recipe) => {
        setRecipe(recipe.recipes[id - 1]);
      });
  }, [id]);

  return (
    <div className="det">
      <div className="card">
        {recipe && (
          <card>
            <CardMedia
              sx={{
                width: 200,
                objectFit: "scale-down",
                height: 200,
                margin: "auto",
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
                <div className="des"> {recipe.description}</div>
              </Typography>
            </CardContent>
          </card>
        )}
      </div>
    </div>
  );
}
export default RecipeDetails;
