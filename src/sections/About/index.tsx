import {
  AboutContainer,
  StyledAboutHeading,
  StyledAboutParagraph,
  StyledAboutMapped,
  StyledAboutText,
} from "@/styles";
import { FC } from "react";
import { aboutItems } from "./data";
import { LABELS, aboutSectionText } from "./utils";
import { useTheme } from "@mui/material";
import { AboutCards } from "@/components";

export const AboutSection: FC = () => {
  const theme = useTheme();

  return (
    <AboutContainer theme={theme}>
      <StyledAboutText>
        <StyledAboutHeading>{LABELS.overview}</StyledAboutHeading>
        <StyledAboutParagraph>{aboutSectionText}</StyledAboutParagraph>
      </StyledAboutText>
      <StyledAboutMapped>
        <AboutCards items={aboutItems} />
      </StyledAboutMapped>
    </AboutContainer>
  );
};
