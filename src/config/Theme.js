// import * as React from "react";
// import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const mode = "light";
export const MaterialTheme = createTheme({
  global: {
    mainBlue: "#03045E",
    secondaryBlue: "#00B4D8",
    terciaryBlue: "#90E0EF",
    forthyBlue: "#CAF0F8",
    lightGray: "#EEE",
  },
  status: {
    danger: orange[500],
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#03045E",
            contrastText: "#0FF",
          },
          other: {
            main: "#d53e25",
            darker: orange[100],
          },
          secondary: {
            main: "#FF0",
            contrastText: "#F0F",
          },
          neutral: {
            main: "#64748B",
            contrastText: "#fff",
          },
        }
      : {
          primary: {
            main: purple[500],
          },
          other: {
            main: "#d53e25",
            darker: orange[700],
          },
          secondary: {
            main: "#11ddff",
            contrastText: "#2fd",
          },
        }),
  },
});
