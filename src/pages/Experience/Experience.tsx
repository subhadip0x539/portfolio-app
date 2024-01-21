import { Box, Container } from "@mui/material";
import { ScreenSlide } from "../../components/shared/Slides";
import { useIsPresent } from "framer-motion";
import { JobsSection } from "../../components/shared/HigherOrderComponents/Experience";

export function Experience() {
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
          gap: 16,
          py: 10,
        }}
      >
        <JobsSection />
        <ScreenSlide isPresent={isPresent} />
      </Box>
    </Container>
  );
}
