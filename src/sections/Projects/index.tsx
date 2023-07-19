import { Cards } from "@/components";
import {
  StyledProjectsCardContainer,
  StyledProjectsContainer,
  StyledProjectsText,
} from "@/styles";
import { FC } from "react";
import { projectsItems } from "./data";
import { LABELS } from "./utils";

export const ProjectsSection: FC = () => {
  return (
    <StyledProjectsContainer>
      <StyledProjectsText>{LABELS.intro}</StyledProjectsText>
      <StyledProjectsCardContainer>
        <Cards items={projectsItems} showActions={true} />
      </StyledProjectsCardContainer>
    </StyledProjectsContainer>
  );
};
