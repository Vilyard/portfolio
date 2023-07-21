import { FC } from "react";
import { IAboutCardsProps } from "./types";
import Image from "next/image";
import {
  StyledAboutCardData,
  StyledAboutCardDataImage,
  StyledAboutCardDataContent,
  StyledAboutCardDataText,
} from "@/styles";

export const AboutCards: FC<IAboutCardsProps> = ({ items }) => {
  return (
    <>
      {items.map(({ logoSrc, text, id, altText }) => (
        <StyledAboutCardData key={id}>
          <StyledAboutCardDataImage>
            <Image fill={true} src={logoSrc} alt={altText} />
          </StyledAboutCardDataImage>
          <StyledAboutCardDataContent>
            <StyledAboutCardDataText>{text}</StyledAboutCardDataText>
          </StyledAboutCardDataContent>
        </StyledAboutCardData>
      ))}
    </>
  );
};
