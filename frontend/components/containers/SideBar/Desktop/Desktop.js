import { useSidebarToggle } from 'lib/context/sidebar-context';
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
  return <Styled.DesktopSidebar show={show}>{children}</Styled.DesktopSidebar>;
};

export default Desktop;
