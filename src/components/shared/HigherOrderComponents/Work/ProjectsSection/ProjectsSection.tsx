import { Box } from "@mui/material";
import { ProjectsBanner } from "../ProjectsBanner/ProjectsBanner";
import { ProjectsContent } from "../ProjectsContent/ProjectsContent";

export function ProjectsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <ProjectsBanner />
      <ProjectsContent />
    </Box>
  );
}
