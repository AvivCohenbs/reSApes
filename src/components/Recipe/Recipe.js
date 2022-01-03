import "./Recipe.css";
import { ReactComponent as Button } from "./button.svg";
import { ReactComponent as Rating } from "./rating.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Timeclock } from "./Timeclock.svg";
import { ReactComponent as Cook } from "./Cook.svg";
import { ReactComponent as Favo } from "./Favo.svg";

function Recipe({ title, description, time, image, rating, id }) {
  return (
    <div className="recipe-recipe">
      <div className="recipe-card">
        <div className="recipe-image">
          <img className="imgrec" src={image} alt="img" />
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{title}</h3>{" "}
        <h6 className="star">
          <Rating /> {rating}
        </h6>
        <div>
          <Link to={`/recipes/${id}`}>
            <button className="btn-start">
              <Button />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="icons-recipe">
        <Timeclock />
        {/* <span className="minute">{time}</span> */}
        <Cook />
        <Favo />
      </div>
      {/* <h5 className="desc">{description}</h5> */}
      {/* <h6 className="time">
        <Clock />
        <span className="minute">{time}</span>
      </h6> */}
    </div>
  );
}
export default Recipe;
