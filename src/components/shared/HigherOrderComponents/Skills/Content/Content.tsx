import { Avatar, Button, Tooltip } from "@nextui-org/react";
import {
  BashIcon,
  BitBucketIcon,
  CssIcon,
  CtfIcon,
  DockerIcon,
  ElasticIcon,
  FastApiIcon,
  FigmaIcon,
  FlaskIcon,
  FramerIcon,
  GinGonicIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JavaScriptIcon,
  JenkinsIcon,
  JiraIcon,
  MaterialUiIcon,
  MongoDbIcon,
  MySqlIcon,
  NginxIcon,
  PandasIcon,
  PythonIcon,
  RabbitMqIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  SwaggerIcon,
  TypeScriptIcon,
} from "../../../Icons";
import { hexToRgba } from "../../../../../utils/methods";
import {
  ICategory,
  ISkill,
  TCategory,
} from "../../../../../types/components/skills";
import React, { useMemo, useState } from "react";

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
    icon: <GoIcon />,
  },
  {
    name: "JavaScript",
    key: "js",
    category: "languages",
    color: "#F7DF1E",
    icon: <JavaScriptIcon />,
  },
  {
    name: "TypeScript",
    key: "ts",
    category: "languages",
    color: "#007ACC",
    icon: <TypeScriptIcon />,
  },
  {
    name: "Python",
    key: "py",
    category: "languages",
    color: "#2673B4",
    icon: <PythonIcon />,
  },
  {
    name: "Bash",
    key: "sh",
    category: "languages",
    color: "#FFFFFF",
    icon: <BashIcon />,
  },
  {
    name: "HTML",
    key: "html",
    category: "languages",
    color: "#F16529",
    icon: <HtmlIcon />,
  },
  {
    name: "CSS",
    key: "css",
    category: "languages",
    color: "#1172B8",
    icon: <CssIcon />,
  },
  {
    name: "Gin",
    key: "gin",
    category: "frameworks",
    color: "#0090D1",
    icon: <GinGonicIcon />,
  },
  {
    name: "React",
    key: "react",
    category: "frameworks",
    color: "#53C1DE",
    icon: <ReactIcon />,
  },
  {
    name: "Redux",
    key: "redux",
    category: "frameworks",
    color: "#764ABC",
    icon: <ReduxIcon />,
  },
  {
    name: "Matrial UI",
    key: "materialui",
    category: "frameworks",
    color: "#007FFF",
    icon: <MaterialUiIcon />,
  },
  {
    name: "Framer",
    key: "framer",
    category: "frameworks",
    color: "#00AAFF",
    icon: <FramerIcon />,
  },
  {
    name: "SCSS",
    key: "scss",
    category: "frameworks",
    color: "#CD6799",
    icon: <ScssIcon />,
  },
  {
    name: "FastAPI",
    key: "fastapi",
    category: "frameworks",
    color: "#009485",
    icon: <FastApiIcon />,
  },
  {
    name: "Flask",
    key: "flask",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <FlaskIcon />,
  },
  {
    name: "Pandas",
    key: "pandas",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <PandasIcon />,
  },
  {
    name: "Git",
    key: "git",
    category: "others",
    color: "#EE513B",
    icon: <GitIcon />,
  },
  {
    name: "GitHub",
    key: "github",
    category: "others",
    color: "#ffffff",
    icon: <GitHubIcon />,
  },
  {
    name: "Docker",
    key: "docker",
    category: "others",
    color: "#2396ed",
    icon: <DockerIcon />,
  },
  {
    name: "Swagger",
    key: "swagger",
    category: "others",
    color: "#49A32B",
    icon: <SwaggerIcon />,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    category: "others",
    color: "#13AA52",
    icon: <MongoDbIcon />,
  },
  {
    name: "MySQL",
    key: "mysql",
    category: "others",
    color: "#00758F",
    icon: <MySqlIcon />,
  },
  {
    name: "JIRA",
    key: "jira",
    category: "others",
    color: "#2684FF",
    icon: <JiraIcon />,
  },
  {
    name: "BitBucket",
    key: "bitbucket",
    category: "others",
    color: "#2684FF",
    icon: <BitBucketIcon />,
  },
  {
    name: "Figma",
    key: "figma",
    category: "others",
    color: "#ffffff",
    icon: <FigmaIcon />,
  },
  {
    name: "Jenkins",
    key: "jenkins",
    category: "others",
    color: "#D33833",
    icon: <JenkinsIcon />,
  },
  {
    name: "RabbitMQ",
    key: "rabbitmq",
    category: "others",
    color: "#FF6600",
    icon: <RabbitMqIcon />,
  },
  {
    name: "Nginx",
    key: "nginx",
    category: "others",
    color: "#009639",
    icon: <NginxIcon />,
  },
  {
    name: "ELK Stack",
    key: "elastic",
    category: "others",
    color: "#24BBB1",
    icon: <ElasticIcon />,
  },
  {
    name: "CTF",
    key: "ctf",
    category: "others",
    color: "#FFFFFF",
    icon: <CtfIcon />,
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
      <div className="sm:flex hidden gap-4 flex-wrap items-center justify-center">
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
              fallback={React.cloneElement(item.icon, { size: 26 })}
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
