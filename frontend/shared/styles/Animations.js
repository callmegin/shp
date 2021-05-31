import { css, keyframes } from 'styled-components';

export const transition = (property, duration) => css`
  transition: ${property} ${duration}ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
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

export const loadingPage = keyframes`
`;
