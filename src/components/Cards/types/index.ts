import { StaticImageData } from "next/image";

export interface ICards {
    id: number;
    logoSrc: StaticImageData;
    altText: string;
    text: string;
}

export interface ICardsProps {
    items: ICards[]
    showActions: boolean
}