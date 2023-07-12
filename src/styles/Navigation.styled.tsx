import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
export const StyledMappedItemsButton = styled(Button)({
  color: "inherit",
});

export const StyledNavigationMonitorContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const StyledNavigationMobileContainer = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledMenuIcon = styled(MenuIcon)({
  color: "inherit",
});

export const StyledNavAppBar = styled(AppBar)({
  position: "static",
  background: "white",
  color: "black",
});

export const StyledNavIconButton = styled(IconButton)({
  color: "inherit",
});

export const StyledNavTypography = styled(Typography)({
  flexGrow: 1,
});

export const StyledMenuItems = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
