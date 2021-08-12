import { useSidebarToggle } from 'lib/context/sidebarContext';
import { useEffect } from 'react';
import * as Styled from './styles';

const Desktop = ({ children, showSidebar }) => {
  const {
    state: { show },
    dispatch,
  } = useSidebarToggle();

  useEffect(() => {
    dispatch({ show: true });
  }, []);
  return (
    <Styled.DesktopSidebar show={show}>
      <Styled.SidebarContainer>{children}</Styled.SidebarContainer>
    </Styled.DesktopSidebar>
  );
};

export default Desktop;
