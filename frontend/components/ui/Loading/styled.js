import { FlexDiv, loadingStatus } from 'shared/styles';
import styled from 'styled-components';

export const LoadingWrapper = styled(FlexDiv)`
  width: 100%;
`;
export const LoadingCube = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 1.5rem 1.5rem 1.5rem 1.5rem;
  z-index: 10000;
  background: black;
  animation: ${loadingStatus} 500ms infinite;
`;
