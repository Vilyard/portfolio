import { IAboutItems } from '../types';
import ImageExample from '../../../assets/logo.png'

export const aboutItems: IAboutItems[] = [
  {
    id: 1,
    logoSrc: ImageExample,
    altText: 'Web Dev Logo',    
    text: 'Web Developer',
  },
  {
    id: 2,
    logoSrc: ImageExample,
    altText: 'React Dev Logo',
    text: 'ReactJS Developer',
  },
  {
    id: 3,
    logoSrc: ImageExample,
    altText: 'Node Dev Logo',
    text: 'NodeJS Developer',
  },
  {
    id: 4,
    logoSrc: ImageExample,
    altText: 'Typescript Dev Logo',
    text: 'Typescript Developer',
  },
]