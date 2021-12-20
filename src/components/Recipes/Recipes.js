import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

function Recipes({ recipes }) {
  return (
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
  );
}
export default Recipes;
