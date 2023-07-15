import {
  StyledSkillContainer,
  StyledSkillMappedData,
  StyledSkillMappedDescription,
  StyledSkillMappedName,
  StyledSkillMappedText,
  StyledSkillOverview,
} from "@/styles";
import { FC } from "react";
import { LABELS, TEXT } from "./utils/labels";

export const SkillsSection: FC = () => {
  const mappedText = TEXT.map(({ name, description }) => (
    <StyledSkillMappedData key={name}>
      <StyledSkillMappedName>{name}</StyledSkillMappedName>
      <StyledSkillMappedDescription>
        <ol>
          {description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
      </StyledSkillMappedDescription>
    </StyledSkillMappedData>
  ));
  return (
    <StyledSkillContainer>
      <StyledSkillOverview>{LABELS.overview}</StyledSkillOverview>
      <StyledSkillMappedText>{mappedText}</StyledSkillMappedText>
    </StyledSkillContainer>
  );
};
