import "./Recipe.css";
// import { Link } from "react-router-dom";
import { ReactComponent as Button } from "./button.svg";
import { ReactComponent as Rating } from "./rating.svg";

function Recipe({ title, description, time, image }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={image} alt="img" />
      </div>

      <div className="recipe-info">
        {/* <Link to={`/Recipes/${id}`}> */}
        <h3 className="recipe-title">{title}</h3>
        {/* </Link> */}
        <h5 className="desc">{description}</h5>
        <h6 className="time">{time}</h6>
      </div>
      <div className="info">
        <h6 className="star">
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
