import { css, keyframes } from 'styled-components';

export const cubicBezier = `cubic-bezier(0.7, 0, 0.3, 1)`;

export const enterFromRight = keyframes`
  0% {
    -webkit-transform: scaleX(0.2);
            transform: scaleX(0.2);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
`;

export const transition = (property, duration) => css`
  transition: ${property} ${duration}ms ${cubicBezier} 0ms;
`;

export const rotateDown = keyframes` 
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
    /* filter: blur(1rem); */
  }  
   40%, 80% {
    transform: translate3d(0,0, 0);
    opacity: 1;
    /* filter: blur(0); */
  }  
  100% {
    transform: translate3d(0, 10px, 0);
    opacity: 0;
    /* filter: blur(1rem); */
  }
`;

export const opacity = keyframes`
  from {
    opacity: 0;
    transform: scale(1.5);
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
`;

export const enterElement = keyframes`
  from {
    opacity: 0;
    filter: blur(0.2rem);
    transform: translateZ(0);
  }
  to {
    opacity: 1;
    filter: blur();
    transform: translateZ(0);
  }
`;

export const enterFromTop = keyframes`
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const slideIn = keyframes`
0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    translateZ(0);
    opacity: 1;
  }
`;

export const loadingPage = keyframes`
`;

export const loadingStatus = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg) ;
    opacity: 1;
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) ;
    opacity: 1;
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg) ;
    opacity: 1;

  }
`;

export const warningLeft = keyframes`
  0% {
    transform: translateX(48px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(26px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(13px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(6.5px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(4px);
    animation-timing-function: ease-in;
  }
  25%, 55%, 75%, 87%, 98% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`;
