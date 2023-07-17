import { StyledSkillContainer, StyledSkillOverview } from "@/styles";
import { FC } from "react";
import { LABELS, TEXT } from "./utils/labels";
import { TimelineComponent } from "@/components";

export const SkillsSection: FC = () => {
  return (
    <StyledSkillContainer>
      <StyledSkillOverview>{LABELS.overview}</StyledSkillOverview>
      <TimelineComponent items={[...TEXT]} />
    </StyledSkillContainer>
  );
};
