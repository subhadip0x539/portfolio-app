import { Box } from "@mui/material";
import { useIsPresent } from "framer-motion";
import { ScreenSlide } from "../../components/shared/Slides";

export function About() {
  const isPresent = useIsPresent();

  return (
    <Box>
      About
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
