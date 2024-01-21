interface IRoute {
  path: string;
  exact: boolean;
  element: JSX.Element;
  children?: IRoute[];
}

export { IRoute };
