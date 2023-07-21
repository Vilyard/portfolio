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
  position: "relative",
});

export const StyledProjectsCardDataImage = styled(Box)({
  padding: "20px",
  position: "relative",
});

export const StyledProjectsCardDataActions = styled(CardActions)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  position: "absolute",
  top: 0,
  right: 0,
});

export const StyledProjectsCardDataButtons = styled(IconButton)({
  padding: 0,
  margin: "0 auto",
});

export const StyledProjectsCardDataText = styled(Typography)({});

export const StyledProjectsCardDataContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
