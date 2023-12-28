import { Box } from "@mui/material";
import { useIsPresent } from "framer-motion";
import { ScreenSlide } from "../../components/shared/Slides";

export function Contact() {
  const isPresent = useIsPresent();

  return (
    <Box>
      Contact
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
