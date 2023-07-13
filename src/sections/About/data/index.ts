import { IAboutItems } from '../types';
import WebDev from '../../../assets/webdev.png'
import Frontend from '../../../assets/frontend.png'
import Backend from '../../../assets/backend.png'
import Fullstack from '../../../assets/fullstack.png'


export const aboutItems: IAboutItems[] = [
  {
    id: 1,
    logoSrc: WebDev,
    altText: 'Web Dev Logo',    
    text: 'Web Developer',
  },
  {
    id: 2,
    logoSrc: Frontend,
    altText: 'React Dev Logo',
    text: 'ReactJS Developer',
  },
  {
    id: 3,
    logoSrc: Backend,
    altText: 'Node Dev Logo',
    text: 'NodeJS Developer',
  },
  {
    id: 4,
    logoSrc: Fullstack,
    altText: 'Typescript Dev Logo',
    text: 'Typescript Developer',
  },
]