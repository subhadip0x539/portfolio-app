import { Box, Container } from "@mui/material";
import { ScreenSlide } from "../../components/shared/Slides";
import { useIsPresent } from "framer-motion";
import { ProjectsSection, SkillsSection } from "../../components/shared/HigherOrderComponents/Work";

export function Work() {
  const isPresent = useIsPresent();

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
          py: 10,
        }}
      >
        <ProjectsSection />
        <SkillsSection />
        <ScreenSlide isPresent={isPresent} />
      </Box>
    </Container>
  );
}
