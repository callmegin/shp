import styled from 'styled-components';
import { transition, screenSize } from 'shared/styles';

export const DesktopSidebar = styled.div`
  display: none;
  ${screenSize.small`
  display: block;
  width: ${({ show }) => (show ? '200px' : '0px')};
  flex: ${({ show }) => (show ? '0 0 200px' : '0 0 0px')};
  position: relative;
  z-index: 1;
  transform: translateX(0);
  ${transition('all', 300)}
`}
`;
