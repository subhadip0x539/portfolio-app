import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.scss";

function App() {
  return (
    <NextUIProvider>
      <div className="vite-dark bg-background text-text-primary overflow-auto">
        <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  );
}

export default App;
