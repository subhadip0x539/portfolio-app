import {
  Container,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Chip,
} from "@mui/material";
import { Box } from "@mui/system";
import { LogoIcon } from "../../../global/Icons";
import { useNavigate, useParams } from "react-router";

const links: { name: string; path: string }[] = [
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Experience",
    path: "experience",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export function HomeAppBar() {
  const navigate = useNavigate();
  const { sectionId } = useParams();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClickNavigate = (params: { path: string }) => {
    const { path } = params;

    navigate(path);
  };

  return (
    <AppBar
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
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <LogoIcon />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {links.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    transition: "color 0.3s",
                    ...(sectionId === item.path && { color: "primary.main" }),
                    ":hover": { color: "primary.main" },
                  }}
                  onClick={() => {
                    handleClickNavigate({ path: item.path });
                  }}
                >
                  {item.name}
                </Typography>
              ))}
              <Chip
                label="Resume"
                onClick={() => {}}
                color="primary"
                sx={{ px: 1, fontSize: 12 }}
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}