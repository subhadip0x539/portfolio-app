import { Card, CardContent, Typography } from "@mui/material";
import { SkillCardProps } from "../../../../types/props/components/shared/Cards/SkillCard";

export function SkillCard(props: SkillCardProps) {
  const { content } = props;

  return (
    <Card>
      <CardContent>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
}
