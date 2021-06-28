import styled from 'styled-components';
import { transition, screenSize } from 'shared/styles';

export const MobileSidebar = styled.div`
  transform: ${({ show }) => (show ? 'translateY(0vh)' : 'translateY(100vh)')};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 15;
  ${transition('all', 300)}
  background: var(--light);
  ${screenSize.small`
  display: none;
  `}
`;
