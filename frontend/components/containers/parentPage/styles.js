import styled from 'styled-components';
import { FlexDiv, rotateDown, screenSize } from 'shared/styles';

export const Parent = styled(FlexDiv)`
  height: 100%;
  /* overflow: hidden; */
`;

export const ParentContainer = styled(FlexDiv)`
  ${screenSize.medium`

`}
  padding:  0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

export const Placeholder = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: calc(50% - 3.5rem);
  left: calc(50% - 3.5rem);
  /* bottom: 0;
  left: 0; */
  margin: 1.5rem 1.5rem 1.5rem 1.5rem;
  z-index: 10000;
  background: black;
  animation: ${rotateDown} 500ms infinite;
`;
