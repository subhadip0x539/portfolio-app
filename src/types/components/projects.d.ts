import { ISkill } from "./skills";

interface IProject {
  name: string;
  key: string;
  image: string;
  description: string;
  skills: ISkill[];
  gitHubLink: string;
  projectLink: string;
}

export { IProject };
