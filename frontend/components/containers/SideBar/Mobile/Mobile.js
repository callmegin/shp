import { useSidebarToggle } from 'lib/context/sidebar-context';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

const Mobile = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const {
    state: { show },
    dispatch,
  } = useSidebarToggle();

  useEffect(() => {
    setInitializing((prev) => !prev);
    dispatch({ show: false });
  }, []);

  return (
    !initializing && (
      <Styled.MobileSidebar show={show}>{children}</Styled.MobileSidebar>
    )
  );
};

export default Mobile;
