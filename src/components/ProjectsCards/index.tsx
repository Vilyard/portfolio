import { FC } from "react";
import { IProjectsCardsProps } from "./types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  StyledProjectsCardData,
  StyledProjectsCardDataImage,
  StyledProjectsCardDataContent,
  StyledProjectsCardDataText,
} from "@/styles";
import Image from "next/image";

export const ProjectCards: FC<IProjectsCardsProps> = ({ items }) => {
  return (
    <>
      {items.map(({ logoSrc, text, id, altText }) => (
        <StyledProjectsCardData key={id}>
          <StyledProjectsCardDataImage>
            <Image fill={true} src={logoSrc} alt={altText} />
          </StyledProjectsCardDataImage>
          <StyledProjectsCardDataContent>
            <StyledProjectsCardDataText>{text}</StyledProjectsCardDataText>
          </StyledProjectsCardDataContent>
        </StyledProjectsCardData>
      ))}
    </>
  );
};
