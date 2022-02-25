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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Community() {
  const { ingredients, units } = useContext(IngredientsContext);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [description, setDecription] = useState("");
  const [instructions, setInstructions] = useState([""]);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [ingredient, setIngredient] = useState([
    { Quantity: "", Unit: "", Ingredients: "" },
  ]);

  const handelDifficultyChange = (event) => {
    console.log(event.target.value);
    setDifficulty(event.target.value);
  };

  const veganLabel = { inputProps: { "aria-label": "Switch vegan" } };
  const vegetarianLabel = { inputProps: { "aria-label": "Switch vegetarian" } };

  const veganChange = (event, value) => {
    console.log(event.target.checked);
    setVegan(value);
  };
  const vegetarianChange = (event, value) => {
    setVegetarian(value);
  };

  const handleInputChange = (name, value, index) => {
    const list = [...ingredient];
    list[index][name] = value;
    setIngredient(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...ingredient];
    list.splice(index, 1);
    setIngredient(list);
  };

  const handleAddClick = () => {
    setIngredient([...ingredient, { Quantity: "", Unit: "", Ingredients: "" }]);
  };

  const handleRemoveInstru = (index) => {
    const list = [...instructions];
    list.splice(index, 1);
    setInstructions(list);
  };

  const handleAddInstru = () => {
    setInstructions([...instructions, ""]);
  };

  const handleChangeInstru = (index, value) => {
    const list = [...instructions];
    list.splice(index, 1, value);
    setInstructions(list);
  };

  const handleSubmitRecipe = async (e) => {
    e.preventDefault();
    const addRecipe = {
      title,
      time,
      difficulty,
      description,
      instructions,
      ingredients: ingredient,
      vegan,
      vegetarian,
    };
    console.log("addRecipe", addRecipe);

    // fetch("/recipes", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(addRecipe),
    // });
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
        <form className="community-page" onSubmit={handleSubmitRecipe}>
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
              <div className="switch-veg">
                <div>
                  Vegan <Switch {...veganLabel} onChange={veganChange} />
                </div>
                <div>
                  Vegetarian{" "}
                  <Switch {...vegetarianLabel} onChange={vegetarianChange} />
                </div>
              </div>
            </div>
            <div className="name-des">
              <div className="add-time">
                <TextField
                  sx={{ width: 150 }}
                  id="standard-basic"
                  label="Cook time 🕓"
                  variant="outlined"
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Min"
                  type="number"
                />
              </div>
              <div className="add-name">
                <Box
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
                    // error={!title.length}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic"
                    label="Recipe Name"
                    variant="outlined"
                  />
                </Box>
              </div>
              <Box
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
                    // error={!description.length}
                    onChange={(e) => setDecription(e.target.value)}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={8}
                  />
                </div>
              </Box>

              <div className="add-difficulty">
                <Box sx={{ width: "415px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Difficulty
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={difficulty}
                      label="Difficulty"
                      onChange={handelDifficultyChange}
                    >
                      <MenuItem value={"Beginner"}>Beginner</MenuItem>
                      <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                      <MenuItem value={"Advanced"}>Advanced</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>

          <div className="add-inputList">
            <div className="list-title">List your ingredients</div>
            {ingredient.map((x, i) => {
              return (
                <div className="Qua-uni-ingre">
                  <div className="add-quantity">
                    <TextField
                      sx={{ width: 130 }}
                      id="standard-basic"
                      label="Quantity"
                      variant="standard"
                      onChange={(e) =>
                        handleInputChange("Quantity", e.target.value, i)
                      }
                      value={x.Quantity}
                      placeholder="Add Quantity"
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      name="Quantity"
                    />
                  </div>
                  <div className="add-unit">
                    <Stack spacing={3} sx={{ width: 130 }}>
                      <Autocomplete
                        autoWidth
                        id="tags-standard"
                        onChange={(e, value) =>
                          handleInputChange("Unit", value.name, i)
                        }
                        options={units}
                        getOptionLabel={(unit) => unit.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Unit"
                            placeholder="Choose Unit"
                          />
                        )}
                      />
                    </Stack>
                  </div>
                  <div className="add-ingredient">
                    <Stack spacing={3} sx={{ width: 130 }}>
                      <Autocomplete
                        id="tags-standard"
                        onChange={(e, value) =>
                          handleInputChange("Ingredients", value.name, i)
                        }
                        options={ingredients}
                        getOptionLabel={(ingredient) => ingredient.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Add Ingredient"
                            placeholder="Choose Ingredient"
                          />
                        )}
                      />
                    </Stack>
                  </div>
                  <div className="btn-box">
                    {ingredient.length !== 1 && (
                      <Button
                        sx={{ color: "#ffca40" }}
                        onClick={() => handleRemoveClick(i)}
                        startIcon={<DeleteIcon />}
                      ></Button>
                    )}
                    {ingredient.length - 1 === i && (
                      <Fab
                        onClick={handleAddClick}
                        color="primary"
                        aria-label="add"
                        size="small"
                      >
                        <AddIcon />
                      </Fab>
                    )}
                  </div>
                </div>
              );
            })}
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
                <div className="instructions-title">Add your instructions</div>
                {instructions.map((x, i) => {
                  return (
                    <div className="instru-list">
                      {i + 1}.
                      <TextField
                        style={{ width: 900 }}
                        onChange={(e) => handleChangeInstru(i, e.target.value)}
                        id="outlined-multiline-static"
                        label="Instruction"
                        multiline
                        rows={1}
                      />
                      <div className="btn-box">
                        {instructions.length !== 1 && (
                          <Button
                            sx={{ color: "#ffca40" }}
                            onClick={() => handleRemoveInstru(i)}
                            startIcon={<DeleteIcon />}
                          ></Button>
                        )}
                        {instructions.length - 1 === i && (
                          <Fab
                            sx={{ ml: 2 }}
                            onClick={handleAddInstru}
                            color="primary"
                            aria-label="add"
                            size="small"
                          >
                            <AddIcon />
                          </Fab>
                        )}
                      </div>
                    </div>
                  );
                })}
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
