import Recipe from "../Recipe/Recipe";
import "./Recipes.css";

function Recipes() {
  const recipes = [
    {
      id: 1,
      title: "Shakshuka",
      description: "easy to make",
      time: "45 minute",
      rating: "*",
      //   image:
      //     "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    },
    {
      id: 2,
      title: "Omlette",
      description: "easy to make",
      time: "45 minute",
      rating: "*",
      //   image:
      //     "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    },
    {
      id: 3,
      title: "Chips",
      description: "easy to make",
      time: "45 minute",
      rating: "*",
      //   image:
      //     "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    },
    {
      id: 4,
      title: "Salad",
      description: "easy to make",
      time: "45 minute",
      rating: "*",
      //   image:
      //     "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    },
    {
      id: 5,
      title: "Tehini",
      description: "easy to make",
      time: "45 minute",
      rating: "*",
      //   image:
      //     "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    },
  ];
  return (
    <div className="recipes-dsgn">
      {recipes.map(({ id, title, description, rating, time }) => (
        <Recipe
          key={id}
          id={id}
          title={title}
          description={description}
          //   image={recipe.image}
          rating={rating}
          time={time}
        />
      ))}
    </div>
  );
}
export default Recipes;
