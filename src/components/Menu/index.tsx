import { NavbarButtons, StyledNavButton } from "@/styles";
import { MenuItem } from "@mui/material";
import { FC } from "react";
import { MobileMenuProps } from "./types";
import { StyledMenuContainer, StyledPopover } from "./Menu.styled";

export const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <StyledPopover
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
      disableRestoreFocus
    >
      <StyledMenuContainer>
        <MenuItem disableRipple>
          <StyledNavButton variant="contained">About</StyledNavButton>
        </MenuItem>
        <MenuItem disableRipple>
          <StyledNavButton variant="contained">Projects</StyledNavButton>
        </MenuItem>
        <MenuItem disableRipple>
          <StyledNavButton variant="contained">Contact</StyledNavButton>
        </MenuItem>
      </StyledMenuContainer>
    </StyledPopover>
  );
};
