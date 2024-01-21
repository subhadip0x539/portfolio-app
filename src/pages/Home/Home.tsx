import { Box, Container } from "@mui/material";
import { useIsPresent } from "framer-motion";
import { ScreenSlide } from "../../components/shared/Slides";

import { AboutSection } from "../../components/shared/HigherOrderComponents/Home";

export function Home() {
  const isPresent = useIsPresent();

  return (
    <Container
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <AboutSection />
        <ScreenSlide isPresent={isPresent} />
      </Box>
    </Container>
  );
}
