import { jsx } from "@emotion/react";
import { HomeLayout } from "../layouts/HomeLayout";
import { IRoutes } from "../types/router/routes";

const routes: IRoutes[] = [
  {
    path: "",
    exact: true,
    element: jsx(HomeLayout, {}),
  },
];

export { routes };
