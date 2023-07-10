import {
  AnimatedHello,
  NavbarButtons,
  StyledNavbar,
  StyledNavButton,
} from "@/styles";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { MobileMenu } from "../Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <StyledNavbar>
        <AnimatedHello>Placeholder</AnimatedHello>
        {isMobile ? (
          <>
            <IconButton onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <MobileMenu open={isMenuOpen} onClose={handleMenuClose}>
              <StyledNavButton
                disableElevation={true}
                disableRipple={true}
                variant="contained"
              >
                About
              </StyledNavButton>
              <StyledNavButton
                disableElevation={true}
                disableRipple={true}
                variant="contained"
              >
                Projects
              </StyledNavButton>
              <StyledNavButton
                disableElevation={true}
                disableRipple={true}
                variant="contained"
              >
                Contact
              </StyledNavButton>
            </MobileMenu>
          </>
        ) : (
          <NavbarButtons>
            <StyledNavButton
              disableElevation={true}
              disableRipple={true}
              variant="contained"
            >
              About
            </StyledNavButton>
            <StyledNavButton
              disableElevation={true}
              disableRipple={true}
              variant="contained"
            >
              Projects
            </StyledNavButton>
            <StyledNavButton
              disableElevation={true}
              disableRipple={true}
              variant="contained"
            >
              Contact
            </StyledNavButton>
          </NavbarButtons>
        )}
      </StyledNavbar>
    </nav>
  );
};
