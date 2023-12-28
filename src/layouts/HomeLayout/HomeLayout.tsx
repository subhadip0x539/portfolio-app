import { Box, Container } from "@mui/material";
import { HomeAppBar as AppBar } from "../../components/shared/AppBars";
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
      <AppBar />
      <AnimatePresence mode="wait" initial={true}>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <Container
            sx={{
              height: "100%",
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </AnimatePresence>
    </Box>
  );
}
