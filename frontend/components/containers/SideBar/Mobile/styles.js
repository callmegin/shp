import styled from 'styled-components';
export { SidebarContainer } from '../styles';
import { transition, screenSize, FlexDiv } from 'shared/styles';

export const MobileSidebar = styled.div`
  transform: ${({ show }) => (show ? 'translateY(0vh)' : 'translateY(100vh)')};
  width: 100%;
  height: calc(100% - 90px);
  position: fixed;
  z-index: 15;
  ${transition('all', 300)}
  background: var(--light);
  ${screenSize.small`
  display: none;
  `}
`;

export const ButtonWrapper = styled(FlexDiv)`
  width: 100%;
  padding-top: 1rem;
  margin-top: auto;
`;

export const Button = styled.button`
  min-width: 220px;
  min-height: 60px;
  padding: 1.5rem 7rem;
  border: 2px solid var(--darkgrey);
  font-size: 2rem;
  background: white;
  color: var(--darkgrey);
  &:focus {
    background: var(--darkgrey);
    color: var(--light);
  }
`;
