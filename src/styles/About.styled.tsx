import { Box, Typography, styled } from "@mui/material";

export const AboutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const StyledAboutHeading = styled(Typography)({});

export const StyledAboutParagraph = styled(Typography)({});

export const StyledAboutMappedData = styled(Box)({
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
  padding: 20,
  backgroundColor: "red",
});

export const StyledAboutMappedImage = styled(Typography)({
  backgroundColor: "blue",
});

export const StyledAboutMappedText = styled(Typography)({
  backgroundColor: "cyan",
});
