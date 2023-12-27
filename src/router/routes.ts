import { jsx } from "@emotion/react";
import { HomeLayout } from "../layouts";
import { IRoute } from "../types/router/routes";
import { HomeContainer } from "../containers";

const routes: IRoute[] = [
  {
    path: "",
    exact: true,
    element: jsx(HomeLayout, {}),
    children: [
      {
        path: "",
        exact: true,
        element: jsx(HomeContainer, {}),
        children: [],
      },
      {
        path: ":sectionId",
        exact: true,
        element: jsx(HomeContainer, {}),
        children: [],
      },
    ],
  },
];

export { routes };
