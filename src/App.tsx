import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.scss";

function App() {
  return (
    <NextUIProvider>
      <div className="vite-dark bg-background-primary text-foreground overflow-auto">
        <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  );
}

export default App;
