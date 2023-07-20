import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

export const StyledProjectsCardData = styled(Card)({
  display: "flex",
  flexDirection: "column",
  padding: 20,
  border: "2px solid black",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const StyledProjectsCardDataImage = styled(Box)({
  padding: "20px",
  position: "relative",
});

export const StyledProjectsCardDataActions = styled(CardActions)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textDecoration: "none",
  position: "absolute",
  top: 0,
  right: 0,
  padding: "22px",
});

export const StyledProjectsCardDataButtons = styled(IconButton)({
  padding: "4px",
  marginLeft: "4px",
  color: "cyan",
});

export const StyledProjectsCardDataText = styled(Typography)({});

export const StyledProjectsCardDataContent = styled(CardContent)({});
