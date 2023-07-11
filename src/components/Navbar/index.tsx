import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { Navigation } from "./navigation";
import { TNavbarProps } from "./types";
import Link from "next/link";

export const Navbar: FC<TNavbarProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: "black" }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Button color="inherit">
              <Link href="#" passHref>
                <Typography>Darko S.</Typography>
              </Link>
            </Button>
          </Box>
          <Box>
            <Navigation
              isSmall={isSmall}
              open={open}
              onOpenHandler={onOpenHandler}
              onCloseHandler={onCloseHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
    </Box>
  );
};
