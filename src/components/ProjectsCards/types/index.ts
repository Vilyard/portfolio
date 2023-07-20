import { StaticImageData } from "next/image";

export interface IProjectsCards {
    id: number;
    logoSrc: StaticImageData;
    altText: string;
    text: string;
    link?:string,
}

export interface IProjectsCardsProps {
    items: IProjectsCards[]
}