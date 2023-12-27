import { Box, Container, Toolbar } from "@mui/material";
import { HomeAppBar as AppBar } from "../../components/shared/AppBars";
import { Outlet } from "react-router";

export function HomeLayout() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <AppBar />
      <Toolbar />
      <Container sx={{ my: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
