import { Box, Card, CardContent, Typography, styled } from "@mui/material";

export const StyledAboutCardData = styled(Card)(({ theme }) => ({
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

export const StyledAboutCardDataImage = styled(Box)({
  padding: "20px",
  position: "relative",
});

export const StyledAboutCardDataText = styled(Typography)({});

export const StyledAboutCardDataContent = styled(CardContent)({});
