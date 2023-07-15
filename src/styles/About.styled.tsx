import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

export const AboutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 100,
});

export const StyledAboutHeading = styled(Typography)({});

export const StyledAboutParagraph = styled(Typography)({});

export const StyledAboutMappedData = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  whiteSpace: "nowrap",
  padding: 20,
  border: "2px solid black",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

export const StyledAboutMappedImage = styled(Box)({
  padding: "20px",
  position: "relative",
});

export const StyledAboutMappedText = styled(Typography)({});

export const StyledAboutMappedContent = styled(CardContent)({});

export const StyledAboutMappedButtons = styled(IconButton)({
  padding: "4px",
  marginLeft: "4px",
  color: "cyan",
});

export const StyledAboutMappedActions = styled(CardActions)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textDecoration: "none",
  position: "absolute",
  top: 0,
  right: 0,
  padding: "22px",
});

export const StyledAboutMapped = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 25,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

export const StyledAboutText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 50,
});
