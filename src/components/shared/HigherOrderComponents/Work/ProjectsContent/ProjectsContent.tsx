import { Box, Typography } from "@mui/material";
import PortfolioAppImg from "../../../../../assets/portfolio-app.png";
import { MaterialUiIcon, ReactIcon, TypeScriptIcon } from "../../../../global/Icons";
import { Badge } from "../../../Badges";

const projects: { name: string; key: string; description: string; skills: { name: string; icon: JSX.Element; color: string }[] }[] = [
  {
    name: "Portfolio Website",
    key: "portfolio-website",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
    skills: [
      {
        name: "TypeScript",
        icon: <TypeScriptIcon />,
        color: "#007acc",
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
    ],
  },
  {
    name: "Gin Based Microservice Boilerplate",
    key: "gin-microservice-boilerplate",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
    skills: [],
  },
  {
    name: "File Integrity Monitor",
    key: "file-integrity-monitor",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
    skills: [],
  },
];

export function ProjectsContent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
                // background: (theme) => theme.palette.primary.main,
                background: "#ffffff",
                filter: "blur(50px)",
                opacity: 0.125,
                transition: "opacity 0.3s ease",
                ":hover": {
                  opacity: 0,
                },
              }}
            />
            <img src={PortfolioAppImg} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", borderRadius: 8 }} />
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
                color: "#dfdfd6",
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
                alignItems: "flex-end",
              }}
            >
              <Typography sx={{ fontSize: 14, color: "text.secondary", textAlign: (index + 1) % 2 === 0 ? "left" : "right" }}>{item.description}</Typography>
              {item.skills.length > 0 && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {item.skills.map((skill, index) => (
                    <Badge key={index} title={skill.name} height={40} width={40} color={skill.color} fontSize={12} children={skill.icon} />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
