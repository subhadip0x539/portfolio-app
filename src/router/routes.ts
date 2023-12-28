import { jsx } from "@emotion/react";
import { HomeLayout } from "../layouts";
import { IRoute } from "../types/router/routes";
import { About, Contact, Experience, Skills } from "../pages";

const routes: IRoute[] = [
  {
    path: "",
    exact: true,
    element: jsx(HomeLayout, {}),
    children: [
      {
        path: "",
        exact: true,
        element: jsx(About, {}),
      },
      {
        path: "about",
        exact: true,
        element: jsx(About, {}),
      },
      {
        path: "skills",
        exact: true,
        element: jsx(Skills, {}),
      },
      {
        path: "experience",
        exact: true,
        element: jsx(Experience, {}),
      },
      {
        path: "contact",
        exact: true,
        element: jsx(Contact, {}),
      },
    ],
  },
];

export { routes };
