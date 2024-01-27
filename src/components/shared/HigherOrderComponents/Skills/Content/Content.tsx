import { Avatar, Button, Tooltip } from "@nextui-org/react";
import {
  BashIcon,
  CssIcon,
  DockerIcon,
  FastApiIcon,
  FlaskIcon,
  FramerIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  PandasIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  TypeScriptIcon,
} from "../../../Icons";
import { hexToRgba } from "../../../../../utils/methods";
import {
  ICategory,
  ISkill,
  TCategory,
} from "../../../../../types/components/skills";
import { useMemo, useState } from "react";

const categories: ICategory[] = [
  {
    name: "All",
    key: "all",
  },
  {
    name: "Languages",
    key: "languages",
  },
  {
    name: "Frameworks",
    key: "frameworks",
  },
  {
    name: "Others",
    key: "others",
  },
];

const skills: ISkill[] = [
  {
    name: "Go",
    key: "go",
    category: "languages",
    color: "#79D4FD",
    icon: <GoIcon size={26} />,
  },
  {
    name: "JavaScript",
    key: "js",
    category: "languages",
    color: "#F7DF1E",
    icon: <JavaScriptIcon size={26} />,
  },
  {
    name: "TypeScript",
    key: "ts",
    category: "languages",
    color: "#007ACC",
    icon: <TypeScriptIcon size={26} />,
  },
  {
    name: "Python",
    key: "py",
    category: "languages",
    color: "#2673B4",
    icon: <PythonIcon size={26} />,
  },
  {
    name: "Bash",
    key: "sh",
    category: "languages",
    color: "#FFFFFF",
    icon: <BashIcon size={26} />,
  },
  {
    name: "HTML",
    key: "html",
    category: "languages",
    color: "#F16529",
    icon: <HtmlIcon size={26} />,
  },
  {
    name: "CSS",
    key: "css",
    category: "languages",
    color: "#1172B8",
    icon: <CssIcon size={26} />,
  },
  {
    name: "Gin",
    key: "gin",
    category: "frameworks",
    color: "#0090D1",
    icon: <></>,
  },
  {
    name: "React",
    key: "react",
    category: "frameworks",
    color: "#53C1DE",
    icon: <ReactIcon size={26} />,
  },
  {
    name: "Redux",
    key: "redux",
    category: "frameworks",
    color: "#764ABC",
    icon: <ReduxIcon size={26} />,
  },
  {
    name: "Matrial UI",
    key: "materialui",
    category: "frameworks",
    color: "#007FFF",
    icon: <MaterialUiIcon size={26} />,
  },
  {
    name: "Framer",
    key: "framer",
    category: "frameworks",
    color: "#00AAFF",
    icon: <FramerIcon size={26} />,
  },
  {
    name: "SCSS",
    key: "scss",
    category: "frameworks",
    color: "#CD6799",
    icon: <ScssIcon size={26} />,
  },
  {
    name: "FastAPI",
    key: "fastapi",
    category: "frameworks",
    color: "#009485",
    icon: <FastApiIcon size={26} />,
  },
  {
    name: "Flask",
    key: "flask",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <FlaskIcon size={26} />,
  },
  {
    name: "Pandas",
    key: "pandas",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <PandasIcon size={26} />,
  },
  {
    name: "Git",
    key: "git",
    category: "others",
    color: "#EE513B",
    icon: <GitIcon size={26} />,
  },
  {
    name: "GitHub",
    key: "github",
    category: "others",
    color: "#ffffff",
    icon: <GitHubIcon size={26} />,
  },
  {
    name: "Docker",
    key: "docker",
    category: "others",
    color: "#2396ed",
    icon: <DockerIcon size={26} />,
  },
  {
    name: "Swagger",
    key: "swagger",
    category: "others",
    color: "#49A32B",
    icon: <></>,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    category: "others",
    color: "#13AA52",
    icon: <></>,
  },
  {
    name: "MySQL",
    key: "mysql",
    category: "others",
    color: "#00758F",
    icon: <></>,
  },
  {
    name: "JIRA",
    key: "jira",
    category: "others",
    color: "#2684FF",
    icon: <></>,
  },
  {
    name: "BitBucket",
    key: "bitbucket",
    category: "others",
    color: "#2684FF",
    icon: <></>,
  },
  {
    name: "Figma",
    key: "figma",
    category: "others",
    color: "#ffffff",
    icon: <></>,
  },
  {
    name: "Jenkins",
    key: "jenkins",
    category: "others",
    color: "#D33833",
    icon: <></>,
  },
  {
    name: "RabbitMQ",
    key: "rabbitmq",
    category: "others",
    color: "#FF6600",
    icon: <></>,
  },
  {
    name: "Nginx",
    key: "nginx",
    category: "others",
    color: "#009639",
    icon: <></>,
  },
  {
    name: "ELK Stack",
    key: "elastic",
    category: "others",
    color: "#24BBB1",
    icon: <></>,
  },
  {
    name: "CTF",
    key: "ctf",
    category: "others",
    color: "#ffffff",
    icon: <></>,
  },
];

export function Content() {
  const [category, setCategory] = useState<TCategory | "all">("all");
  const filteredSkills = useMemo(
    () =>
      category === "all"
        ? skills
        : skills.filter((item) => item.category === category),
    [category]
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex gap-4">
        {categories.map((item, index) => (
          <Button
            key={index}
            size="sm"
            variant="flat"
            color={item.key === category ? "primary" : "default"}
            className="rounded-full"
            onClick={() => setCategory(item.key)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {filteredSkills.map((item) => (
          <Tooltip
            key={item.key}
            content={item.name}
            showArrow={true}
            color="default"
            placement="bottom"
            className="rounded"
          >
            <Avatar
              fallback={item.icon}
              className="h-14 w-14 cursor-pointer"
              style={{
                background: hexToRgba(item.color, 0.125),
              }}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
