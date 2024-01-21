import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { IJob } from "../../../../../types/components/shared/HigherOrderComponents/Experience/JobsSection/constants";
import dayjs from "dayjs";
import { dateDelta } from "../../../../../utils/methods";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

const jobs: IJob[] = [
  {
    organization: "PRM Fincon",
    address: "Kolkata, West Bengal, India · Hybrid",
    tenure: {
      start: dayjs("2022-10-01"),
      end: dayjs(),
    },
    positions: [
      {
        name: "Junior Developer",
        tenure: {
          start: dayjs("2023-03-01"),
          end: dayjs(),
        },
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cumque beatae impedit sapiente assumenda laudantium aliquam ut eligendi perferendis necessitatibus repellendus doloremque voluptas recusandae, culpa rerum alias voluptates dignissimos illo!",
        type: "Full-time",
      },
      {
        name: "Python Developer",
        tenure: {
          start: dayjs("2022-10-01"),
          end: dayjs("2023-03-01"),
        },
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt cumque beatae impedit sapiente assumenda laudantium aliquam ut eligendi perferendis necessitatibus repellendus doloremque voluptas recusandae, culpa rerum alias voluptates dignissimos illo!",
        type: "Internship",
      },
    ],
  },
];

export default function Content() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {jobs.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: `${theme.spacing(1)} ${theme.spacing(4)}`,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            style={{
              position: "relative",
              display: "grid",
              placeItems: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                height: theme.spacing(4),
                width: theme.spacing(4),
                background: theme.palette.primary.main,
                filter: "blur(18px)",
              }}
            ></span>
            <WorkOutlineRoundedIcon sx={{ fontSize: 32 }} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 0.5,
            }}
            style={{
              gridArea: "1 / 2 / 1 / -1",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: (theme) => theme.palette.primary.main,
                textAlign: "left",
                wordBreak: "break-word",
                fontWeight: "bold",
                fontFamily: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', "-apple-system", "system-ui", "sans-serif"].join(","),
              }}
            >
              {item.organization}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {dateDelta(item.tenure.start, item.tenure.end)}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {item.address}
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {true && (
              <Box sx={{ position: "relative", width: "4px", height: "100%", overflow: "hidden", borderRadius: 8, display: "grid", placeItems: "center" }}>
                <motion.div
                  initial={{ height: 0, background: "linear-gradient(transparent, #bd34fe, #41d1ff, transparent)" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.5, delay: 2 }}
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
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 2.5,
              duration: 0.5,
            }}
            style={{
              gridArea: "2 / 2 / 3 / -1",
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(4),
              margin: `${theme.spacing(4)} 0`,
              background: theme.palette.background.paper,
              borderRadius: theme.spacing(0.5),
              padding: theme.spacing(4),
            }}
          >
            {item.positions.map((position, index) => (
              <Box
                key={index}
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
                    {position.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: (theme) => theme.palette.text.primary,
                    }}
                  >
                    {position.type} · {position.tenure.start.format("MMM YYYY")} -{" "}
                    {position.tenure.end.isSame(dayjs(), "day") ? "Present" : position.tenure.end.format("MMM YYYY")} ·{" "}
                    {dateDelta(position.tenure.start, position.tenure.end)}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  {position.description}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>
      ))}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: `${theme.spacing(1)} ${theme.spacing(4)}`,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
          style={{
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
          <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 32 }} />
        </motion.div>
      </Box>
    </Box>
  );
}
