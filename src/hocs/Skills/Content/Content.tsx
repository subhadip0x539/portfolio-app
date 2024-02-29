import { Avatar, Button, Tooltip } from "@nextui-org/react";
import {
  BashColored,
  BitBucketColored,
  CssColored,
  Ctf,
  DockerColored,
  ElasticColored,
  FastApiColored,
  FigmaColored,
  FlaskColored,
  FramerColored,
  GinGonicColored,
  GitColored,
  GitHubColored,
  GoColored,
  HtmlColored,
  JavaScriptColored,
  JenkinsColored,
  JiraColored,
  MaterialUiColored,
  MongoDbColored,
  MySqlColored,
  NginxColored,
  PandasColored,
  PythonColored,
  RabbitMqColored,
  ReactColored,
  ReduxColored,
  ScssColored,
  SwaggerColored,
  TypeScriptColored,
} from "../../../components/shared/Icons";
import { hexToRgba } from "../../../utils/methods";

import React, { useMemo, useState } from "react";
import { TCategory, TSkill } from "../../../types/common";

const categories: { name: string; key: TCategory | "all" }[] = [
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

const skills: TSkill[] = [
  {
    name: "Go",
    key: "go",
    category: "languages",
    color: "#79D4FD",
    icon: <GoColored />,
  },
  {
    name: "JavaScript",
    key: "js",
    category: "languages",
    color: "#F7DF1E",
    icon: <JavaScriptColored />,
  },
  {
    name: "TypeScript",
    key: "ts",
    category: "languages",
    color: "#007ACC",
    icon: <TypeScriptColored />,
  },
  {
    name: "Python",
    key: "py",
    category: "languages",
    color: "#2673B4",
    icon: <PythonColored />,
  },
  {
    name: "Bash",
    key: "sh",
    category: "languages",
    color: "#FFFFFF",
    icon: <BashColored />,
  },
  {
    name: "HTML",
    key: "html",
    category: "languages",
    color: "#F16529",
    icon: <HtmlColored />,
  },
  {
    name: "CSS",
    key: "css",
    category: "languages",
    color: "#1172B8",
    icon: <CssColored />,
  },
  {
    name: "Gin",
    key: "gin",
    category: "frameworks",
    color: "#0090D1",
    icon: <GinGonicColored />,
  },
  {
    name: "React",
    key: "react",
    category: "frameworks",
    color: "#53C1DE",
    icon: <ReactColored />,
  },
  {
    name: "Redux",
    key: "redux",
    category: "frameworks",
    color: "#764ABC",
    icon: <ReduxColored />,
  },
  {
    name: "Matrial UI",
    key: "materialui",
    category: "frameworks",
    color: "#007FFF",
    icon: <MaterialUiColored />,
  },
  {
    name: "Framer",
    key: "framer",
    category: "frameworks",
    color: "#00AAFF",
    icon: <FramerColored />,
  },
  {
    name: "SCSS",
    key: "scss",
    category: "frameworks",
    color: "#CD6799",
    icon: <ScssColored />,
  },
  {
    name: "FastAPI",
    key: "fastapi",
    category: "frameworks",
    color: "#009485",
    icon: <FastApiColored />,
  },
  {
    name: "Flask",
    key: "flask",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <FlaskColored />,
  },
  {
    name: "Pandas",
    key: "pandas",
    category: "frameworks",
    color: "#FFFFFF",
    icon: <PandasColored />,
  },
  {
    name: "Git",
    key: "git",
    category: "others",
    color: "#EE513B",
    icon: <GitColored />,
  },
  {
    name: "GitHub",
    key: "github",
    category: "others",
    color: "#ffffff",
    icon: <GitHubColored />,
  },
  {
    name: "Docker",
    key: "docker",
    category: "others",
    color: "#2396ed",
    icon: <DockerColored />,
  },
  {
    name: "Swagger",
    key: "swagger",
    category: "others",
    color: "#49A32B",
    icon: <SwaggerColored />,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    category: "others",
    color: "#13AA52",
    icon: <MongoDbColored />,
  },
  {
    name: "MySQL",
    key: "mysql",
    category: "others",
    color: "#00758F",
    icon: <MySqlColored />,
  },
  {
    name: "JIRA",
    key: "jira",
    category: "others",
    color: "#2684FF",
    icon: <JiraColored />,
  },
  {
    name: "BitBucket",
    key: "bitbucket",
    category: "others",
    color: "#2684FF",
    icon: <BitBucketColored />,
  },
  {
    name: "Figma",
    key: "figma",
    category: "others",
    color: "#ffffff",
    icon: <FigmaColored />,
  },
  {
    name: "Jenkins",
    key: "jenkins",
    category: "others",
    color: "#D33833",
    icon: <JenkinsColored />,
  },
  {
    name: "RabbitMQ",
    key: "rabbitmq",
    category: "others",
    color: "#FF6600",
    icon: <RabbitMqColored />,
  },
  {
    name: "Nginx",
    key: "nginx",
    category: "others",
    color: "#009639",
    icon: <NginxColored />,
  },
  {
    name: "ELK Stack",
    key: "elastic",
    category: "others",
    color: "#24BBB1",
    icon: <ElasticColored />,
  },
  {
    name: "CTF",
    key: "ctf",
    category: "others",
    color: "#FFFFFF",
    icon: <Ctf />,
  },
];

export function Content() {
  const [category, setCategory] = useState<TCategory | "all">("all");
  const filteredSkills = useMemo(() => (category === "all" ? skills : skills.filter((item) => item.category === category)), [category]);

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
          <Tooltip key={item.key} content={item.name} showArrow={true} color="default" placement="bottom" radius="sm">
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
