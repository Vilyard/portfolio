import {
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { TNavbarProps } from "./types";
import Link from "next/link";
import { StyledNavBox, StyledAppBar, StyledNavNameContainer } from "@/styles";
import { Navigation } from "../NavigationMenu";

import NavLogo from "../../assets/logo.png";
import Image from "next/image";

export const Navbar: FC<TNavbarProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  return (
    <StyledNavBox>
      <StyledAppBar>
        <Toolbar>
          <StyledNavNameContainer>
            <Link href="#" passHref>
              <Image src={NavLogo} alt="Logo" width={80} height={80} />
            </Link>
          </StyledNavNameContainer>
          <Box>
            <Navigation
              isSmall={isSmall}
              open={open}
              onOpenHandler={onOpenHandler}
              onCloseHandler={onCloseHandler}
            />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Toolbar />
      {children}
    </StyledNavBox>
  );
};
