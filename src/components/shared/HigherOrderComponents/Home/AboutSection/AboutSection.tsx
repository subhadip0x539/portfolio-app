import { Box } from "@mui/material";
import { AboutBanner } from "../AboutBanner/AboutBanner";
import { AboutContent } from "../AboutContent/AboutContent";

export function AboutSection() {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <AboutBanner />
      <AboutContent />
    </Box>
  );
}
