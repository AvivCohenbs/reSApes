import "./Favorites.css";
import FavContext from "../../FavContext";
import TotalContext from "../../TotalContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import Heart from "react-heart";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Favorites() {
  const [total, setTotal] = useContext(TotalContext);
  const [favorites, setFavorites] = useContext(FavContext);
  const [recipe, setRecipe] = useState(0);

  const isFavorite = (id) => {
    return favorites[id];
  };

  const removeRecipe = (id) => {
    recipe > 0 && setRecipe(recipe - 1);

    let newFavorite;

    const currentRecipe = favorites[id];

    if (!currentRecipe) return;

    currentRecipe.amount = currentRecipe.amount - 1;

    if (currentRecipe.amount === 0) {
      newFavorite = { ...favorites };
      delete newFavorite[id];
    } else {
      newFavorite = { ...favorites, [id]: currentRecipe };
    }

    setFavorites(newFavorite);
  };

  const getTotal = (favorite) => {
    return Object.entries(favorite).reduce((acc, item) => {
      const amount = item[1].amount;
      return acc + amount;
    }, 0);
  };

  useEffect(() => {
    setTotal(getTotal(favorites));
  }, [favorites]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#116530",
      },
    },
  });

  const items = Object.entries(favorites).map(([id, value]) => {
    return (
      <div key={id} className="recipe-fav-card">
        <div className="recipe-fav-img">
          <div className="recipe-fav-image">
            <img
              className="imgrec-fav"
              src={`http://localhost:9000/images/${recipe.image}`}
              alt="av"
            />
          </div>
        </div>
        <div className="recipe-info-fav">
          <h3 className="recipe-title-fav">{value.title}</h3>{" "}
          <div>
            <Link to={`/recipes/${id}`}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFCA40",
                  width: "12px",
                  height: "25px",
                  boxShadow: "none",
                  fontSize: "0.85rem",
                }}
              >
                Start
              </Button>
            </Link>
          </div>
        </div>
        <div className="icons-recipe-fav">
          <div className="time-min-fav">
            <Timeclock />
            <span className="minute-fav">{value.time} min </span>
          </div>

          <div style={{ width: "1.2rem", opacity: "0.6" }}>
            <Heart isActive={isFavorite(id)} onClick={() => removeRecipe(id)} />
          </div>

          <div className="cook-difficulty-fav">
            <Cook />
            <span className="dif-fav">{value.difficulty}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="fav-page">
          <div className="title-fav"> My Favorites 🖤</div>
          <div className="second-title-fav">
            {" "}
            You have {total} recipes in your list{" "}
          </div>
          <span className="items">{items}</span>

          <div className="reset">
            {!!total && (
              <Button
                onClick={() => setFavorites(!favorites)}
                variant="contained"
                sx={{
                  bgcolor: "#116530",
                  minWidth: "30px",
                  height: "25px",
                  boxShadow: "none",
                  fontSize: "0.85rem",
                }}
              >
                Delete all recipes from your list
              </Button>
            )}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default Favorites;
