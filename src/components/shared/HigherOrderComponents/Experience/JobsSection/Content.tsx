import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

const jobs: IJob[] = [];

export default function Content() {
  const theme = useTheme();

  return (
    <Box sx={{}}>
      {[1].map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: `${theme.spacing(1)} ${theme.spacing(4)}`,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "grid",
              placeItems: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                height: "40px",
                width: "40px",
                background: theme.palette.primary.main,
                filter: "blur(18px)",
              }}
            ></span>
            <WorkOutlineRoundedIcon sx={{ fontSize: 40 }} />
          </Box>
          <Box
            sx={{
              gridArea: "1 / 2 / 1 / -1",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "left",
                wordBreak: "break-word",
                fontWeight: "bold",
                fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
              }}
            >
              PRM Fincon
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              1 yr 4 mos
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Kolkata, West Bengal, India · Hybrid
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {index !== 0 && (
              <Box sx={{ position: "relative", width: "4px", height: "100%", overflow: "hidden", borderRadius: 8, display: "grid", placeItems: "center" }}>
                <motion.div
                  initial={{ height: 0, background: "linear-gradient(transparent, #bd34fe, #41d1ff, transparent)" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.3, delay: 1 }}
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              gridArea: "2 / 2 / 3 / -1",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              py: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: (theme) => theme.palette.warning.main,
                  }}
                >
                  Junior Developer
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  Full-time · Mar 2023 - Present · 11mos
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 14,
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorum blanditiis itaque? Esse possimus in consectetur dignissimos molestiae,
                accusamus explicabo recusandae dolor, nihil itaque, rem ea quod nesciunt ipsum quibusdam?
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
