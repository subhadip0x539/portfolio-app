import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { common } from "../common/common";

const vite: Theme = createTheme({
  ...common,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --scrollbar-thumb-color: rgba(255, 255, 255, 0.075);
          --screen-slide-bg: #161618;
          --text-clip-bg: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
          --banner-image-bg: linear-gradient( -45deg, #bd34fe 50%, #41d1ff 50% );
        }
      `,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#646cff",
    },
    background: {
      default: "#1b1b1f",
      paper: "#202127",
    },
  },
});

export { vite };
