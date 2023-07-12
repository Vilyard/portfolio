import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

export const AboutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const StyledAboutHeading = styled(Typography)({});

export const StyledAboutParagraph = styled(Typography)({});

export const StyledAboutMappedData = styled(Card)({
  display: "flex",
  flexDirection: "column",
  whiteSpace: "nowrap",
  padding: 20,
});

export const StyledAboutMappedImage = styled(Box)({});

export const StyledAboutMappedText = styled(Typography)({
  backgroundColor: "cyan",
});

export const StyledAboutMappedContent = styled(CardContent)({});

export const StyledAboutMappedButtons = styled(Button)({});

export const StyledAboutMappedActions = styled(CardActions)({});
