import "./Community.css";
import { ReactComponent as Upload } from "./Upload.svg";
import React from "react";
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
  const {
    ingredients,
    setIngredientsFilter,
    allergies,
    allergiesList,
    setAllergies,
  } = useContext(IngredientsContext);

  const handleChangeAller = (event) => {
    const {
      target: { value },
    } = event;
    setAllergies(typeof value === "string" ? value.split(",") : value);
  };

  const handleIngredientsChange = (values) => {
    setIngredientsFilter(values.map((value) => value.name));
  };

  // const handleAllergiesChange = (values) => {
  //   setAllergiesFilter(values.map((value) => value.name));
  // };

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
        <div className="community-page">
          <div className="maintitle">
            <div className="firsttitle">Share Your Favorite Recipe With Us</div>
            <div className="sectitle">Add New Recipe</div>

            <div className="form-wrapper">
              <div className="row">
                <div className="form-col">
                  <div className="form-inpt">
                    <div className="container-img">
                      <div className="container-items">
                        <span className="container-title">
                          {" "}
                          Upload a stimulating image
                        </span>
                        <div className="upload-img">
                          <Upload />
                          <input
                            type="file"
                            id="img"
                            name="img"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-bar">
                    <Stack spacing={3} sx={{ width: 350 }}>
                      <Autocomplete
                        multiple
                        id="tags-standard"
                        onChange={(e, values) =>
                          handleIngredientsChange(values)
                        }
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
                      <span className="unt"> {} </span>
                      <button className="pls"> + </button>
                    </div>
                    <div className="search-unit">
                      <Box sx={{ width: 100 }}>
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
                            <option value={10}>g</option>
                            <option value={20}>kg</option>
                            <option value={30}>ml</option>
                          </NativeSelect>
                        </FormControl>
                      </Box>
                    </div>
                  </div>
                  <textarea
                    className="inst-container"
                    name="instructions"
                    rows="40"
                  ></textarea>
                </div>
                <div className="form-col">
                  {/* <div className="row"> */}
                  {/* <div className="left-container"> */}
                  <input className="reci-name" type="text" />
                  <textarea
                    className="desc-container"
                    name="description"
                    rows="40"
                  ></textarea>
                  <div className="search-aller">
                    {/* <Stack spacing={3} sx={{ width: 350 }}>
                      <Autocomplete
                        multiple
                        id="tags-standard"
                        // onChange={(e, allergies) =>
                        //   handleIngredientsChange(allergies)
                        // }
                        options={allergiesList}
                        getOptionLabel={(ingredient) =>
                          ingredient.allergiesList
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Add Allergies"
                            placeholder="Allergies"
                          />
                        )}
                      />
                    </Stack> */}
                    <FormControl sx={{ m: 1, width: 150 }}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </ThemeProvider>
    </>
  );
}
export default Community;
