import styled from 'styled-components';
import { FlexDiv, rotateTextUp, screenSize } from 'shared/styles';

export const Parent = styled(FlexDiv)`
  height: 100%;
`;

export const ParentContainer = styled.div`
  ${screenSize.medium`
  padding: 0;
  margin: 1rem;
`}
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
`;

export const Placeholder = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  bottom: 0;
  left: 0;
  margin: 1.5rem 1.5rem 1.5rem 1.5rem;
  background: black;
  animation: ${rotateTextUp} 500ms infinite;
`;
