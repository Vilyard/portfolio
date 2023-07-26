import { Box, Typography, styled } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
}));

export const FooterLinkContainer = styled(Box)({
  display: "flex",
});

export const FooterTyopgraphy = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledGithubIcon = styled(GitHub)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledLinkedInIcon = styled(LinkedIn)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
