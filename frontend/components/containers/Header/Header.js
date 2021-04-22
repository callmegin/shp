import * as Styled from './styles';

const Header = () => {
  return (
    <Styled.HeaderContainer row justifyCenter>
      <Styled.HeaderWrapper row alignCenter>
        <Styled.SneakyLittleBugger />
        <Styled.LogoTitle>
          <h1>SHP</h1>
        </Styled.LogoTitle>
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
