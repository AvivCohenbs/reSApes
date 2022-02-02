import "./Community.css";
import { ReactComponent as Upload } from "./Upload.svg";
import React from "react";
import { useRef, useEffect, useContext } from "react";
import IngredientsContext from "../IngredientsContext";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
function Community() {
  const { ingredients, setIngredientsFilter } = useContext(IngredientsContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);

  const handleIngredientsChange = (values) => {
    setIngredientsFilter(values.map((value) => value.name));
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
            <h1 className="firsttitle">Share Your Favorite Recipe With Us</h1>
            <h1 className="sectitle">Add New Recipe</h1>
          </div>
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
                        <input type="file" name="myfile" />
                      </div>
                    </div>
                  </div>
                </div>
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
                          ref={inputRef}
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
                <div className="row">
                  <div className="left-container">
                    <input
                      className="reci-name"
                      type="text"
                      id="name"
                      name="name"
                      required
                      minlength="4"
                      maxlength="8"
                      size="10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default Community;
