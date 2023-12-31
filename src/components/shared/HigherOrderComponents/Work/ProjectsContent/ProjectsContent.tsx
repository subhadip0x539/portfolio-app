import { Box, Typography } from "@mui/material";
import PortfolioAppImg from "../../../../../assets/portfolio-app.png";

const projects: { name: string; key: string; description: string }[] = [
  {
    name: "Portfolio Website",
    key: "portfolio-website",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
  },
  {
    name: "Gin Based Microservice Boilerplate",
    key: "gin-microservice-boilerplate",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
  },
  {
    name: "File Integrity Monitor",
    key: "file-integrity-monitor",
    description:
      "This website is a representation of my online presence and a hub for information about my background, projects, and achievements. The design is aimed at providing a clean and user-friendly experience.",
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
              background: "#393939",
              cursor: "pointer",
              backgroundImage: PortfolioAppImg,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                background: (theme) => theme.palette.primary.main,
                filter: "blur(50px)",
                opacity: 0.25,
                transition: "opacity 0.3s ease",
                ":hover": {
                  opacity: 0,
                },
              }}
            ></Box>
            <img src={PortfolioAppImg} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
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
              }}
            >
              <Typography sx={{ fontSize: 14, color: "text.secondary", textAlign: (index + 1) % 2 === 0 ? "left" : "right" }}>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
