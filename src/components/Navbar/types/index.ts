import { SlideProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export type TNavbarProps = {
  children: ReactNode;
};

export type TTransitionProps = Omit<SlideProps, "children"> & {
  children?: ReactElement<any, any>;
};

