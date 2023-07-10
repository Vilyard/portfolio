import { NavbarButtons, StyledNavButton } from "@/styles";
import { Menu, MenuItem } from "@mui/material";
import { FC, ReactNode } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <Menu
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
    >
      <NavbarButtons>
        <MenuItem onClick={onClose}>
          <StyledNavButton
            disableElevation={true}
            disableRipple={true}
            variant="contained"
          >
            About
          </StyledNavButton>
        </MenuItem>
        <MenuItem onClick={onClose}>
          <StyledNavButton
            disableElevation={true}
            disableRipple={true}
            variant="contained"
          >
            Projects
          </StyledNavButton>
        </MenuItem>
        <MenuItem onClick={onClose}>
          <StyledNavButton
            disableElevation={true}
            disableRipple={true}
            variant="contained"
          >
            Contact
          </StyledNavButton>
        </MenuItem>
      </NavbarButtons>
    </Menu>
  );
};
