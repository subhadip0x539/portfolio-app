import { Box } from "@mui/material";
import { HomeNavBar } from "../../components/shared/NavBars";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";

export function HomeLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <HomeNavBar />
      <AnimatePresence mode="wait">
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            scrollbarGutter: "stable",
            pl: 1,
          }}
        >
          <Outlet />
        </Box>
      </AnimatePresence>
    </Box>
  );
}
