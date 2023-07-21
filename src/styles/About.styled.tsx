import { Box, Typography, styled } from "@mui/material";

export const AboutContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 100,
});

export const StyledAboutHeading = styled(Typography)({});

export const StyledAboutParagraph = styled(Typography)({});

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
