import {
  DockerIcon,
  FlaskIcon,
  GinGonicIcon,
  GitHub,
  GoIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  MoreHorizontal,
  OpenInNew,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "../../../Icons";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { hexToRgba } from "../../../../../utils/methods";
import { TProject } from "../../../../../types/common";

export function Content() {
  const projects: TProject[] = [
    {
      name: "Portfolio Website",
      key: "portfolio-website",
      gitHubLink: "https://github.com/subhadip0x539/portfolio-app",
      projectLink: "",
      description:
        "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean experience.",
      skills: [
        {
          name: "TypeScript",
          icon: <TypeScriptIcon />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "React",
          icon: <ReactIcon />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "MaterialUI",
          icon: <MaterialUiIcon />,
          category: "languages",
          key: "ts",
          color: "#007fff",
        },
      ],
    },
    {
      name: "Gin Microservice Boilerplate",
      key: "gin-microservice-boilerplate",
      gitHubLink:
        "https://github.com/subhadip0x539/gin-microservice-boilerplate",
      projectLink: "",
      description:
        "This is a simple boilerplate for building microservices using Go and Gin framework. It includes basic configurations and structure to kickstart your microservices development.",
      skills: [
        {
          name: "Go",
          icon: <GoIcon />,
          category: "languages",
          key: "ts",
          color: "#79d4fd",
        },
        {
          name: "Gin",
          icon: <GinGonicIcon />,
          category: "languages",
          key: "ts",
          color: "#0090d1",
        },
        {
          name: "Docker",
          color: "#2396ed",
          icon: <DockerIcon />,
          category: "languages",
          key: "ts",
        },
      ],
    },
    {
      name: "File Integrity Monitor",
      key: "file-integrity-monitor",
      gitHubLink: "https://github.com/subhadip0x539/file-integrity-monitor",
      projectLink: "",
      description:
        "This is a security tool designed to monitor and detect unauthorized changes to files and directories on a system. It provides a crucial layer of defense against malicious activities.",
      skills: [
        {
          name: "Python",
          icon: <PythonIcon />,
          category: "languages",
          key: "ts",
          color: "#2673b4",
        },
        {
          name: "JavaScript",
          icon: <JavaScriptIcon />,
          category: "languages",
          key: "ts",
          color: "#f7df1e",
        },
        {
          name: "Flask",
          icon: <FlaskIcon />,
          category: "languages",
          key: "ts",
          color: "#ffffff",
        },
        {
          name: "React",
          icon: <ReactIcon />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "MaterialUI",
          icon: <MaterialUiIcon />,
          category: "languages",
          key: "ts",
          color: "#007fff",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {projects.map((item, index) => (
          <div
            className="bg-accent p-6 flex flex-col gap-8 rounded-lg justify-between"
            key={index}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Avatar radius="sm" className="text-lg" fallback={"🛠️"} />
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button
                      isIconOnly
                      radius="full"
                      variant="ghost"
                      startContent={<MoreHorizontal size={18} />}
                    />
                  </DropdownTrigger>
                  <DropdownMenu variant="flat" aria-label="Dropdown menu">
                    <DropdownItem
                      key="github"
                      startContent={<GitHub size={18} />}
                    >
                      GitHub
                    </DropdownItem>
                    <DropdownItem
                      key="externallink"
                      startContent={<OpenInNew size={18} />}
                    >
                      External Link
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <h4 className="text-foreground text-lg">{item.name}</h4>
              <p className="sm:text-sm text-xs text-foreground-50 font-thin">
                {item.description}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {item.skills.map((skill, index) => (
                <Avatar
                  key={index}
                  fallback={React.cloneElement(skill.icon, { size: 16 })}
                  className="h-8 w-8 cursor-pointer"
                  style={{
                    background: hexToRgba(skill.color, 0.125),
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
