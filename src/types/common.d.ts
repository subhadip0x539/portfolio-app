import dayjs, { Dayjs } from "dayjs";

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

interface TExperience {
  organization: string;
  type: string;
  address: string;
  tenure: {
    start: Dayjs;
    end: Dayjs;
  };
  positions: {
    name: string;
    tenure: {
      start: Dayjs;
      end: Dayjs;
    };
    description: string;
    type: string;
  }[];
}

export { TRoute, TCategory, TSkill, TProject, TExperience };
