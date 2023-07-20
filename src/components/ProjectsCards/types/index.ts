import { StaticImageData } from "next/image";

export interface IProjectsCards {
    id: number;
    logoSrc: StaticImageData;
    altText: string;
    text: string;
    githubLink:string,
    liveSiteLink: string,
}

export interface IProjectsCardsProps {
    items: IProjectsCards[]
}