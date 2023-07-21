import { ProjectCards } from "@/components";
import {
  StyledProjectsCardContainer,
  StyledProjectsContainer,
  StyledProjectsText,
} from "@/styles";
import { FC } from "react";
import { projectsItems } from "./data";
import { LABELS } from "./utils";
import { useTheme } from "@mui/material";

export const ProjectsSection: FC = () => {
  const theme = useTheme();
  return (
    <StyledProjectsContainer theme={theme}>
      <StyledProjectsText>{LABELS.intro}</StyledProjectsText>
      <StyledProjectsCardContainer>
        <ProjectCards items={projectsItems} />
      </StyledProjectsCardContainer>
    </StyledProjectsContainer>
  );
};
