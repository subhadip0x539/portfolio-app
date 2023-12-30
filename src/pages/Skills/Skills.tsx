import { Box } from "@mui/material";
import { ScreenSlide } from "../../components/shared/Slides";
import { useIsPresent } from "framer-motion";
import {
  BannerText,
  SkillSection,
} from "../../components/shared/HigherOrderComponents/Skills";

export function Skills() {
  const isPresent = useIsPresent();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <BannerText />
      <SkillSection />
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
