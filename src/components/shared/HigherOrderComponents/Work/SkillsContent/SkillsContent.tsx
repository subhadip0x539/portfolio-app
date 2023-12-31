import { Box, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  BashIcon,
  BitBucketIcon,
  CtfIcon,
  CssIcon,
  DockerIcon,
  FastApiIcon,
  FigmaIcon,
  FlaskIcon,
  FramerIcon,
  GinIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JenkinsIcon,
  JiraIcon,
  JavaScriptIcon,
  MaterialUiIcon,
  MongoDbIcon,
  MySqlIcon,
  PandasIcon,
  RabbitMqIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  SwaggerIcon,
  TypeScriptIcon,
  NginxIcon,
  PythonIcon,
  ElasticIcon,
} from "../../../../global/Icons";
import { Badge } from "../../../Badges";

const tabs: { name: string; key: string }[] = [
  {
    name: "All",
    key: "all",
  },
  {
    name: "Languages",
    key: "languages",
  },
  {
    name: "Frameworks",
    key: "frameworks",
  },
  {
    name: "Others",
    key: "others",
  },
];

const skills: { name: string; key: string; description: string; category: string; color: string; icon: JSX.Element }[] = [
  {
    name: "Go",
    key: "go",
    description: "",
    category: "languages",
    color: "#79d4fd",
    icon: <GoIcon />,
  },
  {
    name: "JavaScript",
    key: "js",
    description: "",
    category: "languages",
    color: "#f7df1e",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Python",
    key: "py",
    description: "",
    category: "languages",
    color: "#2673b4",
    icon: <PythonIcon />,
  },
  {
    name: "TypeScript",
    key: "ts",
    description: "",
    category: "languages",
    color: "#007acc",
    icon: <TypeScriptIcon />,
  },
  {
    name: "Bash",
    key: "sh",
    description: "",
    category: "languages",
    color: "#ffffff",
    icon: <BashIcon />,
  },
  {
    name: "HTML",
    key: "html",
    description: "",
    category: "languages",
    color: "#f16529",
    icon: <HtmlIcon />,
  },
  {
    name: "CSS",
    key: "css",
    description: "",
    category: "languages",
    color: "#1172b8",
    icon: <CssIcon />,
  },
  {
    name: "Gin",
    key: "gin",
    description: "",
    category: "frameworks",
    color: "#0090d1",
    icon: <GinIcon />,
  },
  {
    name: "React",
    key: "react",
    description: "",
    category: "frameworks",
    color: "#53c1de",
    icon: <ReactIcon />,
  },
  {
    name: "Redux",
    key: "redux",
    description: "",
    category: "frameworks",
    color: "#764abc",
    icon: <ReduxIcon />,
  },
  {
    name: "Matrial UI",
    key: "materialui",
    description: "",
    category: "frameworks",
    color: "#007fff",
    icon: <MaterialUiIcon />,
  },
  {
    name: "Framer",
    key: "framer",
    description: "",
    category: "frameworks",
    color: "#00aaff",
    icon: <FramerIcon />,
  },
  {
    name: "SCSS",
    key: "scss",
    description: "",
    category: "frameworks",
    color: "#cd6799",
    icon: <ScssIcon />,
  },
  {
    name: "FastAPI",
    key: "fastapi",
    description: "",
    category: "frameworks",
    color: "#009485",
    icon: <FastApiIcon />,
  },
  {
    name: "Flask",
    key: "flask",
    description: "",
    category: "frameworks",
    color: "#ffffff",
    icon: <FlaskIcon />,
  },
  {
    name: "Pandas",
    key: "pandas",
    description: "",
    category: "frameworks",
    color: "#ffffff",
    icon: <PandasIcon />,
  },
  {
    name: "Git",
    key: "git",
    description: "",
    category: "others",
    color: "#EE513B",
    icon: <GitIcon />,
  },
  {
    name: "GitHub",
    key: "github",
    description: "",
    category: "others",
    color: "#ffffff",
    icon: <GitHubIcon />,
  },
  {
    name: "Docker",
    key: "docker",
    description: "",
    category: "others",
    color: "#2396ed",
    icon: <DockerIcon />,
  },
  {
    name: "Swagger",
    key: "swagger",
    description: "",
    category: "others",
    color: "#49A32B",
    icon: <SwaggerIcon />,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    description: "",
    category: "others",
    color: "#13AA52",
    icon: <MongoDbIcon />,
  },
  {
    name: "MySQL",
    key: "mysql",
    description: "",
    category: "others",
    color: "#00758F",
    icon: <MySqlIcon />,
  },
  {
    name: "JIRA",
    key: "jira",
    description: "",
    category: "others",
    color: "#2684FF",
    icon: <JiraIcon />,
  },
  {
    name: "BitBucket",
    key: "bitbucket",
    description: "",
    category: "others",
    color: "#2684FF",
    icon: <BitBucketIcon />,
  },
  {
    name: "Figma",
    key: "figma",
    description: "",
    category: "others",
    color: "#ffffff",
    icon: <FigmaIcon />,
  },
  {
    name: "Jenkins",
    key: "jenkins",
    description: "",
    category: "others",
    color: "#D33833",
    icon: <JenkinsIcon />,
  },
  {
    name: "RabbitMQ",
    key: "rabbitmq",
    description: "",
    category: "others",
    color: "#FF6600",
    icon: <RabbitMqIcon />,
  },
  {
    name: "Nginx",
    key: "nginx",
    description: "",
    category: "others",
    color: "#009639",
    icon: <NginxIcon />,
  },
  {
    name: "ELK Stack",
    key: "elastic",
    description: "",
    category: "others",
    color: "#24BBB1",
    icon: <ElasticIcon />,
  },
  {
    name: "CTF",
    key: "ctf",
    description: "",
    category: "others",
    color: "#ffffff",
    icon: <CtfIcon />,
  },
];

export function SkillsContent() {
  const [tab, setTab] = useState("all");

  const filteredSkills = useMemo(() => (tab === "all" ? skills : skills.filter((item) => item.category === tab)), [tab]);

  const handleClick = (params: { key: string }) => {
    const { key } = params;
    setTab(key);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {tabs.map((item, _) => (
          <Button
            variant="outlined"
            key={item.key}
            sx={{
              borderRadius: 8,
              textTransform: "none",
              px: 3,
              fontSize: 12,
              fontFamily: ['"Roboto Mono"', "monoscape"].join(","),
              ...(item.key === tab && {
                background: (theme) => theme.palette.primary.main,
                color: "text.primary",
                ":hover": {
                  background: (theme) => theme.palette.primary.main,
                  color: "text.primary",
                },
              }),
            }}
            onClick={() => handleClick({ key: item.key })}
          >
            {item.name}
          </Button>
        ))}
      </motion.div>
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((item, _) => (
            <motion.div
              layout
              layoutId={item.key}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key={item.key}
            >
              <Badge title={item.name} height={56} width={56} color={item.color} fontSize={24} children={item.icon} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Box>
  );
}
