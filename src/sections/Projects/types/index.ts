import { StaticImageData } from "next/image"

export interface IProjectsItems {
    id: number
    altText: string
    logoSrc:StaticImageData
    text:string
    liveSiteLink: string
    githubLink:string
}
