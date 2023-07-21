import { Box, Typography, styled } from "@mui/material";

export const StyledProjectsContainer = styled(Box)({});

export const StyledProjectsText = styled(Typography)({});

export const StyledProjectsCardContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 40,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));
