import { Box } from "@mui/material";
import { SkillsBanner } from "../SkillsBanner/SkillsBanner";
import { SkillsContent } from "../SkillsContent/SkillsContent";

export function SkillsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <SkillsBanner />
      <SkillsContent />
    </Box>
  );
}
