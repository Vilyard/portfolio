import { FC } from "react";
import { IProjectsCardsProps } from "./types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  StyledProjectsCardData,
  StyledProjectsCardDataImage,
  StyledProjectsCardDataContent,
  StyledProjectsCardDataText,
  StyledProjectsCardDataActions,
  StyledProjectsCardDataButtons,
} from "@/styles";
import Image from "next/image";
import { useRouter } from "next/router";

export const ProjectCards: FC<IProjectsCardsProps> = ({ items }) => {
  const router = useRouter();

  const handleFirstButton = (githubLink: string) => {
    router.push(githubLink);
  };

  const handleSecondButton = (liveSiteLink: string) => {
    router.push(liveSiteLink);
  };
  return (
    <>
      {items.map(({ logoSrc, text, id, altText, githubLink, liveSiteLink }) => (
        <StyledProjectsCardData key={id}>
          <StyledProjectsCardDataImage>
            <Image fill={true} src={logoSrc} alt={altText} />
          </StyledProjectsCardDataImage>
          <StyledProjectsCardDataContent>
            <StyledProjectsCardDataActions>
              <StyledProjectsCardDataButtons
                disableRipple={true}
                onClick={() => handleFirstButton(githubLink)}
              >
                <GitHubIcon />
              </StyledProjectsCardDataButtons>
              <StyledProjectsCardDataButtons
                disableRipple={true}
                onClick={() => handleSecondButton(liveSiteLink)}
              >
                <LaunchIcon />
              </StyledProjectsCardDataButtons>
            </StyledProjectsCardDataActions>
            <StyledProjectsCardDataText>{text}</StyledProjectsCardDataText>
          </StyledProjectsCardDataContent>
        </StyledProjectsCardData>
      ))}
    </>
  );
};
