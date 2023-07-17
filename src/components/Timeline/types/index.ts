import { StaticImageData } from "next/image";

export interface ITimeline {
    readonly name: string;
    readonly description: readonly string[];
    readonly logoSrc: StaticImageData;
    readonly altText: string;
}

export interface ITimelineComponentProps {
    items: ITimeline[];
  }