import styled, { keyframes } from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const gradienAnimation = keyframes`
 0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
`;

export const GirdElement = styled.div`
  display: block;
  width: 100%;
  height: calc((1000px - 3rem) / 2);
  background: linear-gradient(0deg, #ffffff, #ededed);
  animation: ${gradienAnimation} 1500ms eas infinite;
`;
