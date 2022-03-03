import "./Recipe.css";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import { useState, useContext, useEffect, useCallback } from "react";
import Heart from "react-heart";
import FavContext from "../../FavContext";
import TotalContext from "../../TotalContext";
import Button from "@mui/material/Button";

function Recipe({ title, time, image, id, difficulty, button }) {
  const [favorites, setFavorites] = useContext(FavContext);
  const [total, setTotal] = useContext(TotalContext);
  const [recipe, setRecipe] = useState(0);

  const addRecipe = useCallback(() => {
    setRecipe(recipe + 1);

    const currentRecipe = favorites[id] || {
      amount: recipe,
      title: title,
      time: time,
      button: button,
      image: image,
      difficulty: difficulty,
    };

    currentRecipe.amount = currentRecipe.amount + 1;
    const newFavorites = { ...favorites, [id]: currentRecipe };
    setFavorites(newFavorites);
  }, [
    favorites,
    id,
    image,
    time,
    recipe,
    setFavorites,
    title,
    button,
    difficulty,
  ]);

  const removeRecipe = () => {
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

  const isFavorite = () => {
    return favorites[id];
  };

  const getTotal = (cart) => {
    return Object.entries(cart).reduce((acc, item) => {
      const amount = item[1].amount;
      return acc + amount;
    }, 0);
  };

  useEffect(() => {
    if (!favorites) {
      setRecipe(0);
    }
  }, [favorites]);

  useEffect(() => {
    if (addRecipe) {
      setTotal(getTotal(favorites));
    }
  }, [addRecipe, favorites, setTotal]);

  return (
    <div className="recipe-recipe">
      <div className="recipe-card">
        <div className="recipe-image">
          <img
            className="imgrec"
            src={`http://localhost:9000/images/${image}`}
            alt="img"
          />
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{title}</h3>{" "}
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
      <div className="icons-recipe">
        <div className="time-min">
          <Timeclock />
          <span className="minute">{time} min </span>
        </div>

        <div style={{ width: "1.2rem", opacity: "0.6" }}>
          <Heart
            isActive={isFavorite()}
            onClick={() => (isFavorite() ? removeRecipe() : addRecipe())}
          />
        </div>

        <div className="cook-difficulty">
          <Cook />
          <span className="dif">{difficulty}</span>
        </div>
      </div>
    </div>
  );
}
export default Recipe;
