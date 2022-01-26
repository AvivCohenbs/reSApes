import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
import React from "react";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useRef, useEffect, useContext } from "react";
import IngredientsContext from "../../IngredientsContext";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function Recipes() {
  const {
    ingredients,
    recipes,
    setAllergies,
    allergies,
    allergiesList,
    setIngredientsFilter,
  } = useContext(IngredientsContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllergies(typeof value === "string" ? value.split(",") : value);
  };

  const handleIngredientsChange = (values) => {
    setIngredientsFilter(values.map((value) => value.name));
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
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                multiple
                id="tags-standard"
                onChange={(e, values) => handleIngredientsChange(values)}
                options={ingredients}
                getOptionLabel={(ingredient) => ingredient.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Ingredients"
                    placeholder="Which ingredients do you have?"
                    ref={inputRef}
                  />
                )}
              />
            </Stack>
            <div className="switches">
              <div className="switch1">
                Vegan <Switch {...label} />
              </div>
              <div className="switch2">
                Vegetarian <Switch {...label} />
              </div>

              <div>
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Allergies
                  </InputLabel>
                  <Select
                    className="selectaler"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={allergies}
                    onChange={handleChange}
                    input={<OutlinedInput label="Allergies" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {allergiesList
                      .filter((allergie) => allergie !== "None")
                      .map((allergie) => (
                        <MenuItem key={allergie} value={allergie}>
                          <Checkbox
                            checked={allergies.indexOf(allergie) > -1}
                          />
                          <ListItemText
                            className="selectaler"
                            primary={allergie}
                          />
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
                ingredients,
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
                  ingredients={ingredients}
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
