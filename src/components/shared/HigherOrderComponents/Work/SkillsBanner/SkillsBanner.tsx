import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function SkillsBanner() {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
          }}
        >
          Technologies
        </Typography>
        <Typography
          className="text-clip"
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
          }}
        >
          I've been working with
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 100,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Trying to learn something about everything and <br /> everything about something
      </Typography>
    </motion.div>
  );
}
