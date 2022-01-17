import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
import * as React from "react";
import Switch from "@mui/material/Switch";
import { ReactComponent as Search } from "./Search.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

function Recipes({ recipes }) {
  // const allergieChange = recipes.filter(
  //   (recipe) =>
  //     !recipe.ingredients
  //       .map((ingredient) => (ingredient.allergie === allergie ? true : false))
  //       .includes(true)
  // );

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#116530",
      },
    },
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const allergies = ["None", "Lactose", "Eggs", "Gluten", "Peanuts", "Nuts"];

  const [allergieName, setAllergieName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllergieName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="recipes-wrapper">
          <div className="text">
            <span className="change-color">
              <b>
                We know the deal.
                <br /> We feel your pain.{" "}
              </b>
            </span>
            <span className="workhorse">
              <br /> Here are our superstar workhorse recipes, <br /> designed
              and tasted to help you cook a great meal. <br />
              Add the ingredients you have in your fridge and find the recipie
              that suits you best!
            </span>
          </div>

          <div className="row-search-switch">
            <form className="search-wrapper cf">
              <label>
                <input
                  type="text"
                  placeholder="Which ingredients do you have?"
                />
                <button type="submit">
                  <div className="search">
                    <Search />
                  </div>
                </button>
              </label>
            </form>
            <div className="switches">
              <div className="switch1">
                Veagen <Switch {...label} />
              </div>
              <div className="switch2">
                Vageterian <Switch {...label} />
              </div>

              <div>
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Allergies
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={allergieName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Allergies" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {allergies.map((allergie) => (
                      <MenuItem key={allergie} value={allergie}>
                        <Checkbox
                          checked={allergieName.indexOf(allergie) > -1}
                        />
                        <ListItemText primary={allergie} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="popular"> Popular Recipes</div>

          <div className="recipes-dsgn">
            {recipes.map(
              ({
                _id: id,
                title,
                description,
                rating,
                time,
                image,
                difficulty,
                instructions,
              }) => (
                <Recipe
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  image={image}
                  rating={rating}
                  time={time}
                  difficulty={difficulty}
                  instructions={instructions}
                />
              )
            )}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default Recipes;
