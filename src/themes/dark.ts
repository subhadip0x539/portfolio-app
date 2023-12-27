import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { common } from "./common";

const dark: Theme = createTheme({
  ...common,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --scrollbar-thumb-color: rgba(255, 255, 255, 0.075);
        }
      `,
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#1b1b1f",
    },
  },
});

export { dark };
