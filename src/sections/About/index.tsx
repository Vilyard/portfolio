import {
  AboutContainer,
  StyledAboutHeading,
  StyledAboutMappedActions,
  StyledAboutMappedButtons,
  StyledAboutMappedContent,
  StyledAboutMappedData,
  StyledAboutMappedText,
  StyledAboutParagraph,
  StyledAboutMappedImage,
  StyledAboutMapped,
  StyledAboutText,
} from "@/styles";
import { FC } from "react";
import { aboutItems } from "./data";
import Image from "next/image";
import { LABELS, aboutSectionText } from "./utils";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@mui/material";

export const AboutSection: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleFirstButton = () => {
    router.push("");
  };

  const handleSecondButton = () => {
    router.push("");
  };

  const mappedData = aboutItems.map(({ logoSrc, text, id, altText }) => (
    <StyledAboutMappedData key={id}>
      <StyledAboutMappedImage>
        <Image height={40} width={40} src={logoSrc} alt={altText} />
      </StyledAboutMappedImage>
      <StyledAboutMappedContent>
        <StyledAboutMappedText>{text}</StyledAboutMappedText>
      </StyledAboutMappedContent>
      {/* <StyledAboutMappedActions>
        <StyledAboutMappedButtons
          disableRipple={true}
          onClick={handleFirstButton}
        >
          <GitHubIcon />
        </StyledAboutMappedButtons>
        <StyledAboutMappedButtons
          disableRipple={true}
          onClick={handleSecondButton}
        >
          <LaunchIcon />
        </StyledAboutMappedButtons>
      </StyledAboutMappedActions> */}
    </StyledAboutMappedData>
  ));
  return (
    <AboutContainer theme={theme}>
      <StyledAboutText>
        <StyledAboutHeading>{LABELS.overview}</StyledAboutHeading>
        <StyledAboutParagraph>{aboutSectionText}</StyledAboutParagraph>
      </StyledAboutText>
      <StyledAboutMapped>{mappedData}</StyledAboutMapped>
    </AboutContainer>
  );
};
