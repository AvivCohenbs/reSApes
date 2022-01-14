import Recipe from "../Recipe/Recipe";
import "./Recipes.css";
import * as React from "react";
import Switch from "@mui/material/Switch";
import { ReactComponent as Search } from "./Search.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Recipes({ recipes }) {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#116530",
      },
    },
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="recipes-wrapper">
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
              <Box sx={{ minWidth: 110 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Allergies
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Allergies"
                    onChange={handleChange}
                    size="small"
                  >
                    <MenuItem value={5}>None</MenuItem>
                    <MenuItem value={10}>Milk</MenuItem>
                    <MenuItem value={20}>Eggs</MenuItem>
                    <MenuItem value={30}>Gluten</MenuItem>
                    <MenuItem value={40}>Peanuts and Nuts</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
