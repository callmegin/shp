import Link from 'next/link';
import * as Styled from './styles';

const Header = () => {
  return (
    <Styled.HeaderContainer row justifyCenter>
      <Styled.HeaderWrapper row alignCenter>
        <Styled.SneakyLittleBugger />
        <Link href="/">
          <Styled.LogoTitle>
            <Styled.H1>SHP</Styled.H1>
          </Styled.LogoTitle>
        </Link>
        <Styled.BurgerWrapper>
          <Styled.Burger justifyAround alignCenter>
            <div></div>
            <div></div>
            <div></div>
          </Styled.Burger>
        </Styled.BurgerWrapper>
      </Styled.HeaderWrapper>
    </Styled.HeaderContainer>
  );
};

export default Header;
