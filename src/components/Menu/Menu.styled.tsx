import { NavbarButtons } from "@/styles";
import { Menu, Popover, styled } from "@mui/material";

export const StyledPopover = styled(Menu)({
  "& .MuiMenu-paper": {
    width: "60%",
    maxWidth: "300px",
    borderRadius: "0",
    boxShadow: "none",
    backgroundColor: "blue",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  },
  "&.MuiMenu-open": {
    "& .MuiMenu-paper": {
      transform: "translateX(0)",
    },
  },
});

export const StyledMenuContainer = styled(NavbarButtons)({
  padding: "16px",
});
