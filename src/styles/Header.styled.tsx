import { Box, Button, styled } from "@mui/material";

export const StyledNavbar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",

  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

export const AnimatedHello = styled(Box)({});

export const NavbarButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 25,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
}));

export const StyledNavButton = styled(Button)(({ theme }) => ({
  fontSize: "10px",
  width: 140,
  height: 30,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    width: "50%",
    margin: "0 auto",
  },
}));

export const MenuButton = styled(Button)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export const MenuContainer = styled(Box)<{ open: boolean }>(
  ({ theme, open }) => ({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "70%",
    background: "#fff",
    transform: `translateX(${open ? "0%" : "100%"})`,
    transition: "transform 0.3s ease-in-out",
    zIndex: 999,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  })
);
