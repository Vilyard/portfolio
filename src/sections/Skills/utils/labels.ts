import JavaScriptLogo from '../../../assets/javascript-logo.png'
import ReactJSLogo from '../../../assets/react-logo.png'
import NodejsLogo from '../../../assets/nodejs-logo.png'
import TypescriptLogo from '../../../assets/typescript-logo.png'

export const TEXT = [
{
        name:'JavaScript',
        logoSrc:JavaScriptLogo,
        altText: 'JavaScriptLogo',
        description: [
            'Universal language for web development, running on all modern browsers.',
            'Versatile for both frontend and backend development.',
            'Vast ecosystem of libraries and frameworks like React, Angular, and Vue.js.',
            'Efficient handling of asynchronous operations for responsive applications.',
            'Large developer community for ongoing innovation and support.',
        ] ,
    },
{
        name:'ReactJS',
        logoSrc:ReactJSLogo,
        altText: 'ReactJSLogo',
        description: [
            'Component-based architecture for reusable UI components.',
            'Virtual DOM for optimized performance and smoother user experience.',
            'Declarative syntax for abstracting complexities of manipulating the DOM.',
            'Promotes code reusability and development efficiency.',
            'Vibrant ecosystem with extensive resources and options.',
    ] ,
    },
    {
        name:'NodeJS',
        logoSrc:NodejsLogo,
        altText: 'NodejsLogo',
        description: [
            'JavaScript on the server-side for full-stack development.',
            'Efficient and scalable with event-driven, non-blocking I/O model.',
            'Extensive module ecosystem through npm for code integration and reuse.',
            'Ideal for server-side applications, APIs, and real-time applications.',
            'Active community and support with thriving ecosystem of tools and modules.',
    ] ,
    },
  {
        name: "Typescript",
        logoSrc:TypescriptLogo,
        altText: 'TypescriptLogo',
        description: [
            'Static type checking for catching potential errors during development.',
            'Enhanced tooling support for efficient IDE integration.',
            'Improved code readability and maintainability with explicit types and interfaces.',
            'Large ecosystem and community with dedicated TypeScript libraries and tools.',
            'Seamless integration with existing JavaScript projects for gradual adoption.',
    ] ,
    },
  
 ] as const

export const LABELS = {
    overview: 'Lets dive into the technologies that I use:  '
} as const