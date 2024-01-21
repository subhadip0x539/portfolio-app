import { Box } from "@mui/material";
import { TextGroup } from "./TextGroup";
import Content from "./Content";
export function JobsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <TextGroup />
      <Content />
    </Box>
  );
}
