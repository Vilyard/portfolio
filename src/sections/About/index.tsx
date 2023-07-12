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
} from "@/styles";
import { Box } from "@mui/material";
import { FC } from "react";
import { aboutItems } from "./data";
import Image from "next/image";
import { LABELS, aboutSectionText } from "./utils";

export const AboutSection: FC = () => {
  const mappedData = aboutItems.map(({ logoSrc, text, id, altText }) => (
    <StyledAboutMappedData key={id}>
      <StyledAboutMappedImage>
        <Image src={logoSrc} alt={altText} />
      </StyledAboutMappedImage>
      <StyledAboutMappedContent>
        <StyledAboutMappedText>{text}</StyledAboutMappedText>
      </StyledAboutMappedContent>
      <StyledAboutMappedActions>
        <StyledAboutMappedButtons>
          {LABELS.FirstMappedButton}
        </StyledAboutMappedButtons>
        <StyledAboutMappedButtons>
          {LABELS.SecondMappedBbutton}
        </StyledAboutMappedButtons>
      </StyledAboutMappedActions>
    </StyledAboutMappedData>
  ));
  return (
    <AboutContainer>
      <Box>
        <StyledAboutHeading>{LABELS.overview}</StyledAboutHeading>
        <StyledAboutParagraph>{aboutSectionText}</StyledAboutParagraph>
      </Box>
      <Box>{mappedData}</Box>
    </AboutContainer>
  );
};
