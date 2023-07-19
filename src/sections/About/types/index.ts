import { StaticImageData } from "next/image";

export interface IAboutItems {
    id: number;
    altText: string,
    logoSrc: StaticImageData;
    text: string;
  }