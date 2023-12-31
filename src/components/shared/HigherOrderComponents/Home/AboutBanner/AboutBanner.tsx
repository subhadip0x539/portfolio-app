import { Box, Button, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Resume from "../../../../../assets/resume.pdf";

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

export function AboutBanner() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 30,
        maxWidth: 700,
      }}
    >
      <Typography
        variant="h6"
        sx={{
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
            fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
          }}
        >
          Subhadip Biswas
        </Typography>
        <Typography
          className="text-clip"
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
          }}
        >
          Building stuffs on the web.
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 100,
          fontSize: 14,
        }}
      >
        I am a <span style={{ color: theme?.palette?.warning?.main }}>Full Stack Developer</span> and <span style={{ color: theme?.palette?.warning?.main }}>Cybersecurity Enthusiast</span>, I combine technical expertise with a
        security-focused mindset to deliver innovative solutions. With proficiency in various programming languages and frameworks, I'm always seeking out new technologies to improve my skills.
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
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
            fontSize: 14,
            fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
          }}
        >
          Resume
        </Button>
        {/* <Button
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: 8,
            textTransform: "none",
            px: 3,
            fontSize: 12,
            fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
          }}
        >
          💡 Book Meeting
        </Button> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {socialLinks.map((item, index) => (
            <IconButton key={index} href={item.link} size="medium" sx={{ border: 0.5, borderColor: "divider" }}>
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}
