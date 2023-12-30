import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LogoIcon } from "../../../global/Icons";
import { useNavigate, useLocation, matchPath } from "react-router";

const links: { name: string; path: string; index: boolean }[] = [
  {
    name: "Home",
    path: "home",
    index: true,
  },
  {
    name: "Skills",
    path: "skills",
    index: false,
  },
  {
    name: "Experience",
    path: "experience",
    index: false,
  },
  // {
  //   name: "About",
  //   path: "about",
  //   index: false,
  // },
  {
    name: "Contact",
    path: "contact",
    index: false,
  },
];

export function HomeAppBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickNavigate = (params: { path: string }) => {
    const { path } = params;

    navigate(path);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: (theme) => theme.palette.background.default,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ px: "0!important" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoIcon />
              <Typography
                sx={{
                  color: "text.secondary",
                }}
              >
                Subhadip Biswas
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {links.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    transition: "color 0.3s",
                    ...(matchPath(pathname, `/${item.path}`) && {
                      color: "primary.main",
                    }),
                    ...(item.index &&
                      matchPath(pathname, `/`) && { color: "primary.main" }),
                    ":hover": { color: "primary.main" },
                  }}
                  onClick={() => {
                    handleClickNavigate({ path: item.path });
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
