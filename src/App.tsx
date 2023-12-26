import { Box, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { dark } from "./themes";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Box className="App">
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
