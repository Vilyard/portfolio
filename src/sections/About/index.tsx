import {
  AboutContainer,
  StyledAboutHeading,
  StyledAboutMappedData,
  StyledAboutMappedImage,
  StyledAboutMappedText,
  StyledAboutParagraph,
} from "@/styles";
import { Box } from "@mui/material";
import { FC } from "react";
import { aboutItems } from "./data";

export const AboutSection: FC = () => {
  const mappedData = aboutItems.map(({ image, text, id }) => (
    <StyledAboutMappedData key={id}>
      <StyledAboutMappedImage>{image}</StyledAboutMappedImage>
      <StyledAboutMappedText>{text}</StyledAboutMappedText>
    </StyledAboutMappedData>
  ));
  return (
    <AboutContainer>
      <Box>
        <StyledAboutHeading>A Brief Overview</StyledAboutHeading>
        <StyledAboutParagraph>
          As a skilled junior software developer, I bring a wealth of experience
          in JavaScript, React, and Node.js, and my thirst for knowledge is
          insatiable. I&apos;m currently diving into the dynamic world of
          Typescript, further elevating my skill set. I find immense joy in
          collaborating closely with clients to tackle real-world challenges and
          create delightful user experiences. Let&apos;s embark on an exciting
          journey together, transforming your vision into a reality. Join me as
          we unlock new possibilities and take my development skills to new
          heights!
        </StyledAboutParagraph>
      </Box>
      <Box>{mappedData}</Box>
    </AboutContainer>
  );
};
