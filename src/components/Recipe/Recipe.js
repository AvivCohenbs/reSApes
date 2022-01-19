import "./Recipe.css";
import { ReactComponent as Button } from "./button.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import React, { useState } from "react";
import Heart from "react-heart";

function Recipe({ title, time, image, id, difficulty }) {
  const [active, setActive] = useState(false);

  return (
    <div className="recipe-recipe">
      <div className="recipe-card">
        <div className="recipe-image">
          <img className="imgrec" src={image} alt="img" />
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{title}</h3>{" "}
        <div>
          <Link to={`/recipes/${id}`}>
            <button className="btn-start">
              <Button />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="icons-recipe">
        <div className="time-min">
          <Timeclock />
          <span className="minute">{time} min </span>
        </div>

        <div style={{ width: "1.2rem", opacity: "0.6" }}>
          <Heart isActive={active} onClick={() => setActive(!active)} />
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
