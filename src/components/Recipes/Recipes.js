import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
// import { Link } from "react-router-dom";
import { ReactComponent as Search } from "./Search.svg";

function Recipes({ recipes }) {
  return (
    <>
      <form className="search-wrapper cf">
        <label>
          <input type="text" placeholder="Find a Recipe" />
          <button type="submit">
            <div className="search">
              <Search />
            </div>
          </button>
        </label>
      </form>

      <div className="popular"> Popular Recipes</div>

      <div className="recipes-dsgn">
        {recipes.map(({ id, title, description, rating, time, image }) => (
          <Recipe
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            rating={rating}
            time={time}
          />
        ))}
      </div>
    </>
  );
}
export default Recipes;
