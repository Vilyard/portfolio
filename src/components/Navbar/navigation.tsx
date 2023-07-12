import { Close, Menu as MenuIcon } from "@mui/icons-material";
import { Dialog, Toolbar, Slide, Menu } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { INavigationProps } from "./types";
import { navigationItems } from "./data";
import {
  StyledMappedItemsButton,
  StyledMenuIcon,
  StyledMenuItems,
  StyledNavAppBar,
  StyledNavIconButton,
  StyledNavTypography,
  StyledNavigationMobileContainer,
  StyledNavigationMonitorContainer,
} from "@/styles/Navigation.styled";

const Transition = Slide;

export const Navigation: FC<INavigationProps> = ({
  isSmall,
  open,
  onCloseHandler,
  onOpenHandler,
}) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (to: string) => {
    const scrollOffset = isSmall ? -56 : -64;
    const targetElement = document.getElementById(to);
    if (targetElement) {
      const targetOffset = targetElement.offsetTop + scrollOffset;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
    onCloseHandler();
  };

  const mappedItems = navigationItems.map(({ to, text }) => (
    <StyledMappedItemsButton
      key={to}
      size="large"
      fullWidth={isSmall}
      onClick={() => scrollToSection(to)}
      variant={router.asPath === `#${to}` ? "contained" : "text"}
    >
      {text}
    </StyledMappedItemsButton>
  ));

  return (
    <>
      <StyledNavigationMonitorContainer>
        {mappedItems}
      </StyledNavigationMonitorContainer>
      <StyledNavigationMobileContainer>
        <StyledMenuIcon onClick={onOpenHandler}>
          <Menu open={true} />
        </StyledMenuIcon>
        <Dialog
          open={open}
          fullScreen
          fullWidth
          TransitionComponent={Transition}
          ref={scrollContainerRef}
        >
          <StyledNavAppBar>
            <Toolbar>
              <StyledNavTypography variant="h5">Menu</StyledNavTypography>
              <StyledNavIconButton onClick={onCloseHandler}>
                <Close />
              </StyledNavIconButton>
            </Toolbar>
          </StyledNavAppBar>
          <StyledMenuItems py={3} ref={scrollContainerRef}>
            {mappedItems}
          </StyledMenuItems>
        </Dialog>
      </StyledNavigationMobileContainer>
    </>
  );
};
