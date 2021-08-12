import { useSidebarToggle } from 'lib/context/sidebarContext';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

import { StandardButton } from 'components/ui/Button';

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

  useEffect(() => {
    if (show && !initializing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  const handleClick = () => {
    dispatch({ show: false });
  };

  //TODO: maybe add some sort of "scroll down arrow" in the types list if its height isn't enough to fit the content or smth ???

  return (
    !initializing && (
      <Styled.MobileSidebar show={show}>
        <Styled.SidebarContainer>
          {children}
          <Styled.ButtonWrapper alignCenter justifyEnd>
            <StandardButton clicked={handleClick}>Close</StandardButton>
          </Styled.ButtonWrapper>
        </Styled.SidebarContainer>
      </Styled.MobileSidebar>
    )
  );
};

export default Mobile;
