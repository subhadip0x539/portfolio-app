import { Avatar, Tooltip, Typography } from "@mui/material";
import { cloneElement } from "react";
import { BadgeProps } from "../../../types/components/feature/Badge/props";
import { hexToRgba } from "../../../utils/methods";

export function Badge(props: BadgeProps) {
  const { title, height, width, color, fontSize, children } = props;

  return (
    <Tooltip
      title={
        <>
          <Typography sx={{ color: "text.primary", fontSize: 12, p: 0.5 }}>{title}</Typography>
        </>
      }
    >
      <Avatar
        sx={{
          background: hexToRgba(color, 0.125),
          width,
          height,
          cursor: "pointer",
          ":hover": {
            boxShadow: 1,
          },
        }}
      >
        {cloneElement(children, { sx: { fontSize } })}
      </Avatar>
    </Tooltip>
  );
}
