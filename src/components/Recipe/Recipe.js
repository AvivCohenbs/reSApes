import "./Recipe.css";
// import { Link } from "react-router-dom";
import { ReactComponent as Button } from "./button.svg";
import { ReactComponent as Rating } from "./rating.svg";

function Recipe({ title, description, time, rating }) {
  return (
    <div className="recipe-card">
      {/* <div className="recipe-image"><img>{recipe.image}</img></div> */}
      <div className="recipe-info">
        {/* <Link to={`/Recipes/${id}`}> */}
        <h3 className="recipe-title">{title}</h3>
        {/* </Link> */}
        <h5>{description}</h5>
        <h6>{time}</h6>
      </div>
      <div className="info">
        <h6>
          <Rating />
        </h6>
        <button className="btn-start">
          <Button />{" "}
        </button>
      </div>
    </div>
  );
}
export default Recipe;
