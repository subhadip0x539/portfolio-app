import { AppLayout } from "../layouts";
import { IRoute } from "../types/router/routes";

const routes: IRoute[] = [
  {
    path: "",
    exact: true,
    element: <AppLayout />,
  },
];

export { routes };
