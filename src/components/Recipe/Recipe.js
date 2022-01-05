import "./Recipe.css";
import { ReactComponent as Button } from "./button.svg";
// import { ReactComponent as Rating } from "./rating.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import { ReactComponent as Favo } from "./Favo.svg";

function Recipe({ title, time, image, rating, id, difficulty }) {
  return (
    <div className="recipe-recipe">
      <div className="recipe-card">
        <div className="recipe-image">
          <img className="imgrec" src={image} alt="img" />
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{title}</h3>{" "}
        {/* <h6 className="star">
          <Rating /> {rating}
        </h6> */}
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
          <span className="minute">{time}</span>
        </div>
        <div className="cook-difficulty">
          <Cook />
          <span className="dif">{difficulty}</span>
        </div>
        <Favo />
      </div>
    </div>
  );
}
export default Recipe;
