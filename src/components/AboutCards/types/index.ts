import { StaticImageData } from "next/image";

export interface IAboutCards {
    id: number;
    logoSrc: StaticImageData;
    altText: string;
    text: string;
    link?:string,
}

export interface IAboutCardsProps {
    items: IAboutCards[]
}