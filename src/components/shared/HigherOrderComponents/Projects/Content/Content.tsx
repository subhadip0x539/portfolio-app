import { IProject } from "../../../../../types/components/projects";
import {
  CssIcon,
  DockerIcon,
  FlaskIcon,
  FramerIcon,
  GinGonicIcon,
  GitHubIcon,
  GoIcon,
  HtmlIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  PythonIcon,
  ReactIcon,
  ScssIcon,
  TypeScriptIcon,
} from "../../../Icons";
import GinMicroserviceBoilterplateImg from "../../../../../assets/gin-microservice-boilerplate.png";
import PortfolioAppImg from "../../../../../assets/portfolio-app.png";
import FileIntegrityMonitorImg from "../../../../../assets/file-integrity-monitor.png";
import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { hexToRgba } from "../../../../../utils/methods";

export function Content() {
  const projects: IProject[] = [
    {
      name: "Portfolio Website",
      key: "portfolio-website",
      gitHubLink: "https://github.com/subhadip0x539/portfolio-app",
      projectLink: "",
      image: PortfolioAppImg,
      description:
        "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
      skills: [
        {
          name: "TypeScript",
          icon: <TypeScriptIcon />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "HTML",
          icon: <HtmlIcon />,
          category: "languages",
          key: "ts",
          color: "#f16529",
        },
        {
          name: "CSS",
          icon: <CssIcon />,
          category: "languages",
          key: "ts",
          color: "#1172b8",
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
        {
          name: "Framer",
          color: "#00aaff",
          icon: <FramerIcon />,
          category: "languages",
          key: "ts",
        },
        {
          name: "SCSS",
          icon: <ScssIcon />,
          category: "languages",
          key: "ts",
          color: "#cd6799",
        },
      ],
    },
    {
      name: "Gin Based Microservice Boilerplate",
      key: "gin-microservice-boilerplate",
      image: GinMicroserviceBoilterplateImg,
      gitHubLink:
        "https://github.com/subhadip0x539/gin-microservice-boilerplate",
      projectLink: "",
      description:
        "This is a simple and lightweight boilerplate for building microservices using the Go programming language and the Gin web framework. It includes basic configurations and structure to kickstart your microservices development.",
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
      image: FileIntegrityMonitorImg,
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
          name: "HTML",
          icon: <HtmlIcon />,
          category: "languages",
          key: "ts",
          color: "#f16529",
        },
        {
          name: "CSS",
          icon: <CssIcon />,
          category: "languages",
          key: "ts",
          color: "#1172b8",
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
        {
          name: "SCSS",
          icon: <ScssIcon />,
          category: "languages",
          key: "ts",
          color: "#cd6799",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-16">
      {projects.map((item, index) => (
        <div className="grid grid-cols-12">
          <div
            className="relative cursor-pointer"
            style={{
              gridArea:
                (index + 1) % 2 === 0 ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8",
            }}
          >
            <div className="absolute h-full w-full bg-primary opacity-25 hover:opacity-0 transition-opacity duration-300 rounded-md" />
            <img
              className="rounded-md"
              src={item.image}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="flex z-10 justify-center flex-col gap-4"
            style={{
              gridArea:
                (index + 1) % 2 === 0 ? "1 / 1 / -1 / 7" : "1 / 7 / -1 / -1",
              alignItems: (index + 1) % 2 === 0 ? "flex-start" : "flex-end",
              justifyContent: "center",
            }}
          >
            <h3 className="text-xl break-words alt-font-family font-bold">
              {item.name}
            </h3>
            <div
              className="bg-background-secondary flex flex-col gap-8 p-8 rounded-md"
              style={{
                alignItems: (index + 1) % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <p
                className="text-sm"
                style={{
                  textAlign: (index + 1) % 2 === 0 ? "left" : "right",
                }}
              >
                {item.description}
              </p>
              {item.skills.length > 0 && (
                <div className="flex gap-2">
                  {item.skills.map((skill) => (
                    <Avatar
                      fallback={React.cloneElement(skill.icon, { size: 18 })}
                      className="h-10 w-10 cursor-pointer"
                      style={{
                        background: hexToRgba(skill.color, 0.125),
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {item.gitHubLink !== "" && (
                <Button
                  variant="flat"
                  isIconOnly
                  size="md"
                  className="rounded-full"
                  onClick={() => window.open(item.gitHubLink)}
                >
                  <GitHubIcon size={18} />
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
