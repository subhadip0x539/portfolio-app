import { Box, Container, Toolbar } from "@mui/material";
import { AppBar } from "../../components/shared/AppBar";

export function HomeLayout() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: (theme) => theme.palette.background.default,
        overflow: "auto",
      }}
    >
      <AppBar />
      <Toolbar />
      <Container sx={{ my: 4, height: "200vh" }}></Container>
    </Box>
  );
}
