import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { common } from "../../common/common";

const dark: Theme = createTheme({
  ...common,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --scrollbar-thumb-color: rgba(255, 255, 255, 0.075);
          --screen-slide-bg: #161618;
          --text-clip-bg: linear-gradient(315deg, #42d392 25%, #647eff);
          --banner-image-bg: linear-gradient( -45deg, #42d392 50%, #647eff 50% );
          --alt-font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
        }
      `,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#6fb587",
    },
    background: {
      default: "#1b1b1f",
    },
  },
});

export { dark };
