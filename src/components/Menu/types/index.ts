import { ReactNode } from "react";

export interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
  }