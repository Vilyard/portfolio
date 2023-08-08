import { StyledSkillContainer, StyledSkillOverview } from "@/styles";
import { FC } from "react";
import { LABELS, TEXT } from "./utils/labels";
import { TimelineComponent } from "@/components";
import { useTheme } from "@mui/material";

export const SkillsSection: FC = () => {
  const theme = useTheme();
  return (
    <StyledSkillContainer theme={theme}>
      <StyledSkillOverview>{LABELS.overview}</StyledSkillOverview>
      <TimelineComponent items={[...TEXT]} />
    </StyledSkillContainer>
  );
};
