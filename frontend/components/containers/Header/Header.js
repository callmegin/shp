import Link from 'next/link';

import SvgCart from 'assets/Cart';
import SvgButton from 'components/ui/SvgButton';

import * as Styled from './styles';

const Header = () => {
  const handleSidebarClick = () => {
    console.log('placeholder');
  };

  return (
    <Styled.HeaderContainer row justifyCenter>
      <Styled.HeaderWrapper row alignCenter justifyBetween>
        {/* <Styled.SneakyLittleBugger /> */}

        <Styled.BurgerWrapper>
          <Styled.Burger justifyAround alignCenter>
            <div></div>
            <div></div>
            <div></div>
          </Styled.Burger>
        </Styled.BurgerWrapper>

        <Link href="/">
          <Styled.LogoTitle>
            <Styled.H1>SHP</Styled.H1>
          </Styled.LogoTitle>
        </Link>
        <Styled.CartContainer>
          <SvgButton
            Icon={SvgCart}
            width={25}
            height={25}
            clicked={handleSidebarClick}
          />
          <Styled.ItemCountContainer>
            <Styled.Notification>
              <p>3</p>
            </Styled.Notification>
          </Styled.ItemCountContainer>
        </Styled.CartContainer>
      </Styled.HeaderWrapper>
    </Styled.HeaderContainer>
  );
};

export default Header;
