import { AppBar, Box, Button, styled } from "@mui/material";
import NavLogo from "../assets/logo.png";
export const StyledNavBox = styled(Box)({
  height: "100vh",
});

export const StyledAppBar = styled(AppBar)({
  background: "black",
  position: "fixed",
});

export const StyledNavNameContainer = styled(Box)({
  flexGrow: 1,
});

export const StyledNavigationButton = styled(Button)({
  color: "inherit",
});

export const StyledNavLogo = styled(Box)({
  backgroundImage: `url${NavLogo}`,
});
