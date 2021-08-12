import styled from 'styled-components';
import { FlexDiv, screenSize, loadingStatus, transition } from 'shared/styles';

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

export const PlaceholderBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--grey);
  opacity: 0.4;
  z-index: 9999;
  ${transition('opacity', 2000)}
`;
export const Placeholder = styled.div`
  position: fixed;
  width: 5rem;
  height: 5rem;
  top: calc(50% - 3.5rem);
  left: calc(50% - 3.5rem);
  margin: 1.5rem 1.5rem 1.5rem 1.5rem;
  z-index: 10000;
  background: black;
  animation: ${loadingStatus} 500ms infinite;
`;
