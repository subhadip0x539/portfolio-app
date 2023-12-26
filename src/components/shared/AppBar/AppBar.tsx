import {
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

export function AppBar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <MuiAppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        ...(trigger && {
          background: (theme) => theme.palette.background.default,
          boxShadow: 1,
        }),
      }}
    >
      <Toolbar>
        <Container></Container>
      </Toolbar>
    </MuiAppBar>
  );
}
