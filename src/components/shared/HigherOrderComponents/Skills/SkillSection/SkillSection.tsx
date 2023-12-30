import { Avatar, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  BitBucketIcon,
  CssIcon,
  FastApiIcon,
  FlaskIcon,
  GinIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JiraIcon,
  JsIcon,
  MaterialUiIcon,
  PandasIcon,
  PyIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
  TsIcon,
} from "../../../../global/Icons";
import { hexToRgba } from "../../../../../utils/methods";

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

const skills: {
  name: string;
  key: string;
  description: string;
  category: string;
  color: string;
  icon: JSX.Element;
}[] = [
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
    icon: <JsIcon />,
  },
  {
    name: "Python",
    key: "py",
    description: "",
    category: "languages",
    color: "#2673b4",
    icon: <PyIcon />,
  },
  {
    name: "TypeScript",
    key: "ts",
    description: "",
    category: "languages",
    color: "#007acc",
    icon: <TsIcon />,
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
];

export function SkillSection() {
  const [tab, setTab] = useState("all");

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
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          display: "flex",
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {skills.map((item, _) => (
          <Avatar
            key={item.key}
            sx={{
              background: hexToRgba(item.color, 0.125),
              width: 56,
              height: 56,
            }}
          >
            {React.cloneElement(item.icon, { sx: { fontSize: 24 } })}
          </Avatar>
        ))}
      </motion.div>
    </Box>
  );
}
