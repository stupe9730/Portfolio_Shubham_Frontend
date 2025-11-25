import React from "react";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
// import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { Box, CssBaseline } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const materialTheme = materialExtendTheme();
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  const theme = createTheme();
  return (
    <Box sx={{ backgroundColor: "red" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
          <JoyCssVarsProvider></JoyCssVarsProvider>
        </MaterialCssVarsProvider>
      </ThemeProvider>

      <Box>
        <Box
          sx={{
            backgroundImage: `url(https://t4.ftcdn.net/jpg/02/17/89/41/240_F_217894165_H4jRalQ4eg9Kp8XUVGEa7XFDEPtTQ9PY.jpg)`,
            height: "100%",
            width: "100%",
            backgroundPosition: "top",
          }}
        >
          <Box sx={{ backgroundColor: "rgba(247,242,242,0.9)" }}>
            <ToastContainer />
            <Home />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
