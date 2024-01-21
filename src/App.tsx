import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.scss";
import { themeSelector } from "./themes";

function App() {
  return (
    <ThemeProvider theme={themeSelector("vite-dark")}>
      <CssBaseline />
      <Box className="app" sx={{ height: "100%", width: "100%" }}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
