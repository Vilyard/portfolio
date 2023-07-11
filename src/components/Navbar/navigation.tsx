import { Close, Menu as MenuIcon } from "@mui/icons-material";
import {
  Button,
  Box,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide,
  Menu,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { NavigationProps } from "./types";
import { navigationItems } from "./data";

const Transition = Slide;

export const Navigation: FC<NavigationProps> = ({
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
    <Button
      key={to}
      sx={{ color: "inherit" }}
      size="large"
      fullWidth={isSmall}
      onClick={() => scrollToSection(to)}
      variant={router.asPath === `#${to}` ? "contained" : "text"}
    >
      {text}
    </Button>
  ));

  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>{mappedItems}</Box>
      <Box display={{ xs: "block", sm: "none" }}>
        <MenuIcon color="inherit" onClick={onOpenHandler}>
          <Menu open={true} />
        </MenuIcon>
        <Dialog
          open={open}
          fullScreen
          fullWidth
          TransitionComponent={Transition}
          ref={scrollContainerRef}
        >
          <AppBar
            position="static"
            sx={{ background: "white", color: "text.primary" }}
          >
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            display="flex"
            flexDirection="column"
            py={3}
            width="100%"
            ref={scrollContainerRef}
          >
            {mappedItems}
          </Box>
        </Dialog>
      </Box>
    </>
  );
};
