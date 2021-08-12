import styled, { keyframes } from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const gradienAnimation = keyframes`
    0%{background-position:50% 0%}
    50%{background-position:50% 100%}
    100%{background-position:50% 0%}
`;

export const GridElement = styled.div`
  display: block;
  width: 100%;
  height: calc((1000px - 3rem) / 2);
  background: linear-gradient(0deg, #ffffff, #ededed);
  background-size: 200% 200%;
  animation: ${gradienAnimation} 1s ease infinite;
`;
