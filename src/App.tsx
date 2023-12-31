import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import { vite as light } from "./themes/light";
import { vite as dark } from "./themes/dark";
import "./index.scss";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Box className="app" sx={{ height: "100%", width: "100%" }}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
