import "./Community.css";
import { ReactComponent as Upload } from "./Upload.svg";
import React, { useState } from "react";
import { useContext } from "react";
import IngredientsContext from "../IngredientsContext";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

function Community() {
  const { allergiesList, ingredients } = useContext(IngredientsContext);
  const [value, setValue] = React.useState("Controlled");

  const [allergies, setAllergies] = useState([]);
  const [, setIngredients] = useState([]);

  const handleChangeAller = (event) => {
    const {
      target: { value },
    } = event;
    setAllergies(typeof value === "string" ? value.split(",") : value);
  };

  const handleIngredientsChange = (values) => {
    setIngredients(values.map((value) => value.name));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#116530",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <form className="community-page">
          <div className="maintitle">
            <div className="firsttitle">Share Your Favorite Recipe With Us</div>
            <div className="sectitle">Add New Recipe</div>
          </div>
          <div className="container-name-des">
            <div className="container-img">
              <div className="container-items">
                <span className="container-title">
                  {" "}
                  Upload a stimulating image
                </span>
                <div className="upload-img">
                  <Upload />
                  <input type="file" id="img" name="img" accept="image/*" />
                </div>
              </div>
            </div>
            <div className="name-des">
              <Box
                className="reci-name"
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "415px",
                    borderRadius: "10px",
                    border: "2px 1f6e3c solid",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Recipe Name"
                  variant="outlined"
                />
              </Box>
              <Box
                className="desc-container"
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "415px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    // sx={{
                    //   bgcolor: "white",
                    // }}
                    id="outlined-multiline-static"
                    label="Descreption"
                    multiline
                    rows={8}
                  />
                </div>
              </Box>
            </div>
          </div>
          <div className="ingr-aller">
            <div className="unit-search">
              <div className="search-bar">
                <Stack spacing={3} sx={{ width: 350 }}>
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
                        label="Add Ingredients"
                        placeholder="Which ingredients do you have?"
                      />
                    )}
                  />
                </Stack>
              </div>
              <div className="units">
                <div className="unit-btn">
                  <button className="min"> - </button>
                  <span className="unt"> {0} </span>
                  <button className="pls"> + </button>
                </div>
                <div className="search-unit">
                  <Box sx={{ width: 130 }}>
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Units
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={10}>Inch</option>
                        <option value={20}>Tablespoons</option>
                        <option value={30}>Tablespoon</option>
                        <option value={30}>Cups</option>
                        <option value={30}>Cup</option>
                        <option value={30}>Teaspoons</option>
                        <option value={30}>Pounds</option>
                        <option value={30}>Pound</option>
                        <option value={30}>Sheets</option>
                        <option value={30}>Package</option>
                        <option value={30}>Ounces</option>
                        <option value={30}>Ounce</option>
                        <option value={30}>Liter</option>
                        <option value={30}>GR</option>
                        <option value={30}>Cans</option>
                        <option value={30}>Can</option>
                        <option value={30}>Bunches</option>
                        <option value={30}>Bunch</option>
                        <option value={30}>Kurt</option>
                        <option value={30}>Unit</option>
                      </NativeSelect>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
            <div className="aller-time">
              <div className="search-aller">
                <FormControl sx={{ m: 1, width: 410 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Allergies
                  </InputLabel>
                  <Select
                    className="select-aller"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={allergies}
                    onChange={handleChangeAller}
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
                            className="select-aller"
                            primary={allergie}
                          />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div className="time-input">
                <Stack
                  className="time-input"
                  component="form"
                  noValidate
                  spacing={3}
                >
                  <TextField
                    id="time"
                    label="Cooking Time"
                    type="number"
                    placeholder="120 Minutes 🕓"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 1,
                    }}
                    sx={{ width: 266 }}
                  />
                </Stack>
              </div>
            </div>
          </div>
          <div className="sub-cont">
            <Box
              className="inst-container"
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "1060px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  // sx={{
                  //   bgcolor: "white",
                  // }}
                  id="outlined-multiline-static"
                  label="Instructions"
                  multiline
                  rows={11}
                />
              </div>
            </Box>
            <button className="sub-butt" type="submit">
              Submit
            </button>
          </div>
        </form>
      </ThemeProvider>
    </>
  );
}
export default Community;
