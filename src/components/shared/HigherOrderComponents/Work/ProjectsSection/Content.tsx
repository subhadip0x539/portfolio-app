import { Box, IconButton, Typography } from "@mui/material";
import PortfolioAppImg from "../../../../../assets/portfolio-app.png";
import ginMicroserviceBoilerplateImg from "../../../../../assets/gin-microservice-boilerplate.png";
import fileIntegrityMonitorImg from "../../../../../assets/file-integrity-monitor.png";
import {
  CssIcon,
  DockerIcon,
  FlaskIcon,
  FramerIcon,
  GinIcon,
  GoIcon,
  HtmlIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  PythonIcon,
  ReactIcon,
  ScssIcon,
  TypeScriptIcon,
} from "../../../../global/Icons";
import { Badge } from "../../../../feature";
import { OpenInNewRounded } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";

const projects: {
  name: string;
  key: string;
  description: string;
  skills: { name: string; icon: JSX.Element; color: string }[];
  gitHubLink: string;
  projectLink: string;
  image: string;
}[] = [
  {
    name: "Portfolio Website",
    key: "portfolio-website",
    gitHubLink: "https://github.com/subhadip0x539/portfolio-app",
    image: PortfolioAppImg,
    projectLink: "",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
    skills: [
      {
        name: "TypeScript",
        icon: <TypeScriptIcon />,
        color: "#007acc",
      },
      {
        name: "HTML",
        icon: <HtmlIcon />,
        color: "#f16529",
      },
      {
        name: "CSS",
        icon: <CssIcon />,
        color: "#1172b8",
      },
      {
        name: "React",
        icon: <ReactIcon />,
        color: "#007acc",
      },
      {
        name: "MaterialUI",
        icon: <MaterialUiIcon />,
        color: "#007fff",
      },
      {
        name: "Framer",
        color: "#00aaff",
        icon: <FramerIcon />,
      },
      {
        name: "SCSS",
        icon: <ScssIcon />,
        color: "#cd6799",
      },
    ],
  },
  {
    name: "Gin Based Microservice Boilerplate",
    key: "gin-microservice-boilerplate",
    gitHubLink: "https://github.com/subhadip0x539/gin-microservice-boilerplate",
    projectLink: "",
    image: ginMicroserviceBoilerplateImg,
    description:
      "This is a simple and lightweight boilerplate for building microservices using the Go programming language and the Gin framework. It includes basic configurations and structure to kickstart your microservices development.",
    skills: [
      {
        name: "Go",
        icon: <GoIcon />,
        color: "#79d4fd",
      },
      {
        name: "Gin",
        icon: <GinIcon />,
        color: "#0090d1",
      },
      {
        name: "Docker",
        color: "#2396ed",
        icon: <DockerIcon />,
      },
    ],
  },
  {
    name: "File Integrity Monitor",
    key: "file-integrity-monitor",
    gitHubLink: "https://github.com/subhadip0x539/file-integrity-monitor",
    projectLink: "",
    image: fileIntegrityMonitorImg,
    description:
      "This is a security tool designed to monitor and detect unauthorized changes to files and directories on a system. It provides a crucial layer of defense against malicious activities.",
    skills: [
      {
        name: "Python",
        icon: <PythonIcon />,
        color: "#2673b4",
      },
      {
        name: "JavaScript",
        icon: <JavaScriptIcon />,
        color: "#f7df1e",
      },
      {
        name: "HTML",
        icon: <HtmlIcon />,
        color: "#f16529",
      },
      {
        name: "CSS",
        icon: <CssIcon />,
        color: "#1172b8",
      },
      {
        name: "Flask",
        icon: <FlaskIcon />,
        color: "#ffffff",
      },
      {
        name: "React",
        icon: <ReactIcon />,
        color: "#007acc",
      },
      {
        name: "MaterialUI",
        icon: <MaterialUiIcon />,
        color: "#007fff",
      },
      {
        name: "SCSS",
        icon: <ScssIcon />,
        color: "#cd6799",
      },
    ],
  },
];

export function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      {projects.map((item, index) => (
        <Box
          key={item.key}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
          }}
        >
          <Box
            sx={{
              gridArea: (index + 1) % 2 === 0 ? "1 / 6 / -1 / -1" : "1 / 1 / -1 / 8",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                background: (theme) => theme.palette.primary.main,
                borderRadius: 1,
                // background: "#0a192f",
                // filter: "blur(50px)",
                opacity: 0.25,
                transition: "opacity 0.3s ease",
                ":hover": {
                  opacity: 0,
                },
              }}
            />
            <img src={item.image} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", borderRadius: 8 }} />
          </Box>
          <Box
            sx={{
              gridArea: (index + 1) % 2 === 0 ? "1 / 1 / -1 / 7" : "1 / 7 / -1 / -1",
              zIndex: 1,
              display: "flex",
              alignItems: (index + 1) % 2 === 0 ? "flex-start" : "flex-end",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                wordBreak: "break-word",
                fontWeight: "bold",
                fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
              }}
            >
              {item.name}
            </Typography>
            <Box
              sx={{
                background: (theme) => theme.palette.background.paper,
                p: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: (index + 1) % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <Typography sx={{ fontSize: 14, color: "text.secondary", textAlign: (index + 1) % 2 === 0 ? "left" : "right" }}>{item.description}</Typography>
              {item.skills.length > 0 && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {item.skills.map((skill, index) => (
                    <Badge key={index} title={skill.name} height={32} width={32} color={skill.color} fontSize={14} children={skill.icon} />
                  ))}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {item.projectLink !== "" && (
                <IconButton size="medium" href={item.projectLink}>
                  <OpenInNewRounded fontSize="inherit" />
                </IconButton>
              )}
              {item.gitHubLink !== "" && (
                <IconButton size="medium" href={item.gitHubLink}>
                  <GitHub fontSize="inherit" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
