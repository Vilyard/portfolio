import { SlideProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export type TNavbarProps = {
  children: ReactNode;
};

export type TTransitionProps = Omit<SlideProps, "children"> & {
  children?: ReactElement<any, any>;
};

export interface INavigationProps {
  isSmall: boolean;
  open: boolean;
  onCloseHandler: () => void;
  onOpenHandler: () => void;
}