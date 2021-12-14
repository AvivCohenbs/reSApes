import "./Recipe.css";
import { Link } from "react-router-dom";

function Recipe({ title, description, time, rating }) {
  return (
    <div className="recipe-card">
      {/* <div className="recipe-image"><img>{recipe.image}</img></div> */}
      <div className="recipe-info">
        {/* <Link to={`/Recipes/${id}`}> */}
        <h3>{title}</h3>
        {/* </Link> */}
        <h5 className="description">{description}</h5>
        <h6>{time}</h6>
      </div>
      <div className="info">
        <h6>{rating}</h6>
        <button className="btn-start">Start </button>
      </div>
    </div>
  );
}
export default Recipe;
