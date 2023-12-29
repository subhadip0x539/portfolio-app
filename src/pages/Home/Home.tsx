import { Box, Button, IconButton, Typography } from "@mui/material";
import { useIsPresent, motion } from "framer-motion";
import { ScreenSlide } from "../../components/shared/Slides";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Resume from "../../assets/resume.pdf";

const socialLinks: {
  label: string;
  description: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    label: "GitHub",
    description: "",
    link: "https://github.com/subhadip0x539",
    icon: <GitHubIcon fontSize="inherit" />,
  },
  {
    label: "LinkedIn",
    description: "",
    link: "https://www.linkedin.com/in/subhadip0x539",
    icon: <LinkedInIcon fontSize="inherit" />,
  },
  {
    label: "Mail",
    description: "",
    link: "mailto:biswassubhadip0x539@gmail.com",
    icon: <EmailRoundedIcon fontSize="inherit" />,
  },
];

export function Home() {
  const isPresent = useIsPresent();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
            color: "primary.main",
          }}
        >
          Hi👋 my name is
        </Typography>
        <Box>
          <Typography
            variant="h2"
            sx={{
              wordBreak: "break-word",
              fontWeight: "bold",
              color: "#dfdfd6",
            }}
          >
            Subhadip Biswas
          </Typography>
          <Typography
            className="text-clip"
            variant="h2"
            sx={{ fontWeight: "bold" }}
          >
            Building stuffs on the web.
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: 650,
            fontWeight: 100,
            fontSize: 15,
            fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
          }}
        >
          I am a{" "}
          <span style={{ color: theme?.palette?.warning?.main }}>
            Full Stack Developer
          </span>{" "}
          and{" "}
          <span style={{ color: theme?.palette?.warning?.main }}>
            Cybersecurity Enthusiast
          </span>
          , I combine technical expertise with a security-focused mindset to
          deliver innovative solutions. With proficiency in various programming
          languages and frameworks, I'm always seeking out new technologies to
          improve my skills.
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href={Resume}
            sx={{
              borderRadius: 8,
              textTransform: "none",
              px: 3,
              fontSize: 12,
              fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
            }}
          >
            Resume
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {socialLinks.map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                size="medium"
                sx={{ border: 0.5, borderColor: "divider" }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </motion.div>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.3 }}
          style={{
            height: 200,
            width: 200,
            background: "linear-gradient( -45deg, #bd34fe 50%, #47caff 50% )",
            filter: "blur(90px)",
            animation: "glow 1s ease-in-out infinite alternate",
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.svg height="147" width="104" viewBox="0 0 104 147">
            <motion.path
              initial={{ x: 50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 2 }}
              d="M21.254 67.097C48.581 44.771 75.312 21.671 103.234 0C88.588 22.505 73.526 44.711 58.88 67.215C46.318 67.275 33.757 67.276 21.254 67.097Z"
              fill="#FFA726"
            />
            <motion.path
              initial={{ x: -50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 2 }}
              d="M44.354 79.539C56.975 79.539 69.537 79.539 82.099 79.718C54.594 101.924 27.982 125.202 0 146.814C14.646 124.309 29.708 102.044 44.354 79.539Z"
              fill="#FFA726"
            />
          </motion.svg>
        </motion.div>
      </div>
      <ScreenSlide isPresent={isPresent} />
    </Box>
  );
}
