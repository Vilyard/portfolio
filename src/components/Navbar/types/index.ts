import { SlideProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export type TNavbarProps = {
  children: ReactNode;
};

export type TransitionProps = Omit<SlideProps, "children"> & {
  children?: ReactElement<any, any>;
};

export interface NavigationProps {
  isSmall: boolean;
  open: boolean;
  onCloseHandler: () => void;
  onOpenHandler: () => void;
}