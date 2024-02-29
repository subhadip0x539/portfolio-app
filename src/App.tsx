import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.scss";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="bg-background text-text-primary">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
