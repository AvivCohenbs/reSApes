import "./Favorites.css";
import FavContext from "../../FavContext";
import TotalContext from "../../TotalContext";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { ReactComponent as Button } from "./button.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import Heart from "react-heart";

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

  const items = Object.entries(favorites).map(([id, value]) => {
    return (
      <div key={id} className="recipe-fav-card">
        <div className="recipe-fav-img">
          <div className="recipe-fav-image">
            <img className="imgrec-fav" src={value.image} alt="av"></img>{" "}
          </div>
        </div>
        <div className="recipe-info-fav">
          <h3 className="recipe-title-fav">{value.title}</h3>{" "}
          <div>
            <Link to={`/recipes/${id}`}>
              <button className="btn-start-fav">
                <Button />{" "}
              </button>
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
    <div>
      <div> My List</div>
      <h6 className="second-title"> You have {total} recipes in list </h6>
      <span className="items">{items}</span>
      <button className="reset" onClick={() => setFavorites(!favorites)}>
        Delete all recipes from your list
      </button>
    </div>
  );
}
export default Favorites;
