import {
  DockerColored,
  FlaskColored,
  GinGonicColored,
  GitHub,
  GoColored,
  JavaScriptColored,
  MaterialUiColored,
  MoreHorizontal,
  OpenInNew,
  PythonColored,
  ReactColored,
  TypeScriptColored,
} from "../../../components/shared/Icons";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { TProject } from "../../../types/common";

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
          icon: <TypeScriptColored />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "React",
          icon: <ReactColored />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "MaterialUI",
          icon: <MaterialUiColored />,
          category: "languages",
          key: "ts",
          color: "#007fff",
        },
      ],
    },
    {
      name: "Gin Microservice Boilerplate",
      key: "gin-microservice-boilerplate",
      gitHubLink: "https://github.com/subhadip0x539/gin-microservice-boilerplate",
      projectLink: "",
      description:
        "This is a simple boilerplate for building microservices using Go and Gin framework. It includes basic configurations and structure to kickstart your microservices development.",
      skills: [
        {
          name: "Go",
          icon: <GoColored />,
          category: "languages",
          key: "ts",
          color: "#79d4fd",
        },
        {
          name: "Gin",
          icon: <GinGonicColored />,
          category: "languages",
          key: "ts",
          color: "#0090d1",
        },
        {
          name: "Docker",
          color: "#2396ed",
          icon: <DockerColored />,
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
          icon: <PythonColored />,
          category: "languages",
          key: "ts",
          color: "#2673b4",
        },
        {
          name: "JavaScript",
          icon: <JavaScriptColored />,
          category: "languages",
          key: "ts",
          color: "#f7df1e",
        },
        {
          name: "Flask",
          icon: <FlaskColored />,
          category: "languages",
          key: "ts",
          color: "#ffffff",
        },
        {
          name: "React",
          icon: <ReactColored />,
          category: "languages",
          key: "ts",
          color: "#007acc",
        },
        {
          name: "MaterialUI",
          icon: <MaterialUiColored />,
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
          <Card shadow="sm" key={index} isPressable className="bg-accent p-4" as="div">
            <CardHeader className="flex justify-between">
              <Avatar radius="sm" className="text-lg" fallback={"🛠️"} />
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" variant="ghost" startContent={<MoreHorizontal size={18} />} />
                </DropdownTrigger>
                <DropdownMenu variant="flat" aria-label="Dropdown menu">
                  <DropdownItem key="github" startContent={<GitHub size={18} />}>
                    GitHub
                  </DropdownItem>
                  <DropdownItem key="externallink" startContent={<OpenInNew size={18} />}>
                    External Link
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <h4 className="text-foreground text-lg">{item.name}</h4>
              <p className="sm:text-sm text-xs text-foreground-50 font-thin">{item.description}</p>
            </CardBody>
            <CardFooter className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <Chip className="text-sm" variant="flat" color="primary" key={index}>
                  {skill.name}
                </Chip>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
