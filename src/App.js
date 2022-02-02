import "./App.css";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import IngredientsContext from "./IngredientsContext";
import { useCallback, useEffect, useState, useMemo } from "react";
import Header from "./components/Header/Header";
import Notes from "./components/Header/Notes";
import Community from "./pages/Community";
import Tips from "./pages/Tips";
import FavContext from "./FavContext";
import TotalContext from "./TotalContext";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [ingredientsFilter, setIngredientsFilter] = useState([]);
  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [veganFilter, setVeganFilter] = useState(false);
  const [vegetarianFilter, setVegetarianFilter] = useState(false);

  const allergiesList = useMemo(() => {
    return ingredients
      .map((ingredient) => ingredient.allergie)
      .filter((value, index, array) => array.indexOf(value) === index);
  }, [ingredients]);

  const getRecipes = useCallback(() =>
    // allergies = [],
    // ingredients = []
    // isegan = false,
    // isVegeterian = false
    {
      const allergiesQuery = allergies.length
        ? `allergies=${allergies.join(",")}`
        : "";
      const ingridentsQuery = ingredientsFilter.length
        ? `ingredients=${ingredientsFilter.join(",")}`
        : "";
      const veganQuery = veganFilter;
      const vegetarianQuery = vegetarianFilter;

      fetch(
        `/recipes?${allergiesQuery}&${ingridentsQuery}&${veganQuery}&${vegetarianQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data);
        });
    }, [allergies, ingredientsFilter, veganFilter, vegetarianFilter]);

  const addIngredient = useCallback((ingredient) => {
    setIngredientsFilter((prevFilter) => [...prevFilter, ingredient]);
  }, []);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  useEffect(() => {
    fetch("/ingredients")
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data);
      });
  }, []);

  return (
    <div className="pages">
      <FavContext.Provider value={[favorites, setFavorites]}>
        <TotalContext.Provider value={[total, setTotal]}>
          <IngredientsContext.Provider
            value={{
              ingredients,
              recipes,
              getRecipes,
              allergiesList,
              setAllergies,
              allergies,
              addIngredient,
              setIngredientsFilter,
              setVeganFilter,
              setVegetarianFilter,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Notes" element={<Notes />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/About" element={<About />} />
              <Route path="/Tips" element={<Tips />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
            </Routes>
          </IngredientsContext.Provider>
        </TotalContext.Provider>
      </FavContext.Provider>
    </div>
  );
}

export default App;
