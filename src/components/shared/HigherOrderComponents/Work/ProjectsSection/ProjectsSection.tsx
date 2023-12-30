import { Box } from "@mui/material";
import { ProjectsBanner } from "../ProjectsBanner/ProjectsBanner";

export function ProjectsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProjectsBanner />
    </Box>
  );
}
