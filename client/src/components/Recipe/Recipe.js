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
  const [favorites, addFav, removeFav] = useContext(FavContext);

  const isFavorite = (id) => {
    return favorites.find((fav) => fav._id === id);
  };

  return (
    <div className="recipe-recipe">
      <div className="recipe-card">
        <div className="recipe-image">
          <img className="imgrec" src={`/images/${image}`} alt="img" />
        </div>
      </div>
      <div className="recipe-info">
        <div className="recipe-title">{title}</div>{" "}
        <div>
          <Link to={`/recipes/${id}`}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFCA40",
                width: "12px",
                height: "25px",
                boxShadow: "none",
                fontSize: "0.70rem",
                borderRadius: 10,
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
            isActive={isFavorite(id)}
            onClick={() => (isFavorite(id) ? removeFav(id) : addFav(id))}
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
