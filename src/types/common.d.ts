interface TRoute {
  path: string;
  exact: boolean;
  element: JSX.Element;
  children?: IRoute[];
}

type TCategory = "languages" | "frameworks" | "others";

interface TSkill {
  name: string;
  key: string;
  category: TCategory;
  color: string;
  icon: JSX.Element;
}

interface TProject {
  name: string;
  key: string;
  description: string;
  skills: ISkill[];
  gitHubLink: string;
  projectLink: string;
}

export { TRoute, TCategory, TSkill, TProject };
