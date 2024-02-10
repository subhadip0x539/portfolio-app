import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.scss";

function App() {
  return (
    <NextUIProvider>
      <div className="gemini-dark bg-background text-text-primary">
        <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  );
}

export default App;
