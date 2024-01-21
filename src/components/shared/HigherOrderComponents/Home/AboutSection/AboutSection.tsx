import { Box } from "@mui/material";
import { TextGroup } from "./TextGroup";
import { Content } from "./Content";

export function AboutSection() {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <TextGroup />
      <Content />
    </Box>
  );
}
