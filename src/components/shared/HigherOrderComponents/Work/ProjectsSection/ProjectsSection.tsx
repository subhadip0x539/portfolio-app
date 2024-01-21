import { Box } from "@mui/material";
import { TextGroup } from "./TextGroup";
import { Content } from "./Content";

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
      <TextGroup />
      <Content />
    </Box>
  );
}
