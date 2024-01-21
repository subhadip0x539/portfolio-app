import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function TextGroup() {
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
            fontFamily: "var(--alt-font-family)",
          }}
        >
          Organizations
        </Typography>
        <Typography
          variant="h2"
          className="text-clip"
          sx={{
            textAlign: "center",
            wordBreak: "break-word",
            fontWeight: "bold",
            fontFamily: "var(--alt-font-family)",
          }}
        >
          Where I've Worked
        </Typography>
      </Box>
      {/* <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 100,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Some of my featured projects
      </Typography> */}
    </motion.div>
  );
}
