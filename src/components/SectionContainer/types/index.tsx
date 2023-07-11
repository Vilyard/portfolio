import { SectionIdEnum } from "@/types";
import { ReactNode } from "react";

export type SectionContainerProps = {
  children: ReactNode;
  sectionId: SectionIdEnum;
};
