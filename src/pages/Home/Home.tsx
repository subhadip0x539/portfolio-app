import { Box } from "@mui/material";
import { useIsPresent } from "framer-motion";
import { ScreenSlide } from "../../components/shared/Slides";

import {
  BannerImage,
  BannerText,
} from "../../components/shared/HigherOrderComponents/Home";

export function Home() {
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
      <BannerText />
      <BannerImage />
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
