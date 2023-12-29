import { Box } from "@mui/material";
import { ScreenSlide } from "../../components/shared/Slides";
import { useIsPresent } from "framer-motion";

export function Skills() {
  const isPresent = useIsPresent();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
