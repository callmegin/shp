import styled, { createGlobalStyle } from 'styled-components';
import { FlexDiv, screenSize } from 'shared/styles';

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
