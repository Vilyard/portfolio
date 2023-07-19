import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

export const StyledCardMappedData = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 20,
  border: "2px solid black",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

export const StyledCardMappedDataImage = styled(Box)({
  padding: "20px",
  position: "relative",
});

export const StyledCardMappedDataText = styled(Typography)({});

export const StyledCardMappedDataContent = styled(CardContent)({});

export const StyledCardMappedDataButtons = styled(IconButton)({
  padding: "4px",
  marginLeft: "4px",
  color: "cyan",
});

export const StyledCardMappedDataActions = styled(CardActions)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textDecoration: "none",
  position: "absolute",
  top: 0,
  right: 0,
  padding: "22px",
});
