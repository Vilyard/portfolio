import { FC } from "react";
import { ICardsProps } from "./types";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  StyledCardMappedData,
  StyledCardMappedDataActions,
  StyledCardMappedDataButtons,
  StyledCardMappedDataContent,
  StyledCardMappedDataImage,
  StyledCardMappedDataText,
} from "@/styles";
import { useRouter } from "next/router";

export const Cards: FC<ICardsProps> = ({ items, showActions }) => {
  const router = useRouter();

  const handleFirstButton = () => {
    router.push("");
  };

  const handleSecondButton = () => {
    router.push("");
  };
  return (
    <>
      {items.map(({ logoSrc, text, id, altText }) => (
        <StyledCardMappedData key={id}>
          <StyledCardMappedDataImage>
            <Image fill={true} src={logoSrc} alt={altText} />
          </StyledCardMappedDataImage>
          <StyledCardMappedDataContent>
            <StyledCardMappedDataText>{text}</StyledCardMappedDataText>
          </StyledCardMappedDataContent>
          {showActions && (
            <StyledCardMappedDataActions>
              <StyledCardMappedDataButtons
                disableRipple={true}
                onClick={handleFirstButton}
              >
                <GitHubIcon />
              </StyledCardMappedDataButtons>
              <StyledCardMappedDataButtons
                disableRipple={true}
                onClick={handleSecondButton}
              >
                <LaunchIcon />
              </StyledCardMappedDataButtons>
            </StyledCardMappedDataActions>
          )}
        </StyledCardMappedData>
      ))}
    </>
  );
};
