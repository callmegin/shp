import styled from 'styled-components';
import {
  FlexDiv,
  screenSize,
  slideIn,
  cubicBezier,
} from '../../../shared/styles';

export const HeaderContainer = styled(FlexDiv)`
  flex: 0 0 auto;
  position: sticky;
  top: 0;
  /* padding-bottom: 1rem; */
  height: 40px;
  width: 100%;
  background: white;
  z-index: 4080;
  border-bottom: 1px solid var(--grey);
  /* overflow-y: hidden; */
`;

export const HeaderWrapper = styled(FlexDiv)`
  max-width: 1200px;
  flex: 1 1 auto;
  height: 100%;
`;

export const LogoTitle = styled.a`
  ${screenSize.medium`
padding-left: 10px;
`}
`;
export const H1 = styled.h1`
  &:hover {
    cursor: pointer;
  }
`;

export const SneakyLittleBugger = styled.div`
  ${screenSize.medium`
display: none;
`}
  width: 40px;
  margin-right: auto;
  visibility: hidden;
`;

export const BurgerWrapper = styled(FlexDiv)`
  width: 40px;
  height: 40px;
  padding: 5px 10px 5px 0;
  margin-left: 10px;
  /* margin-left: auto; */
`;

export const Burger = styled(FlexDiv)`
  height: 100%;
  & > div {
    width: 90%;
    height: 1px;
    background: black;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  /* margin-left: auto; */
  margin-right: 1.5rem;
  ${screenSize.small`
  margin-right: 13px;
  `}
`;

export const ItemCountContainer = styled.div`
  position: absolute;
  top: 0;
  right: -1rem;
`;

export const ItemCount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--darkgrey);
  color: var(--light);
`;

export const Notification = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  text-align: center;
  background-color: black;
  color: white;
  & > p {
    position: relative;
    line-height: 1.4;
    font-size: 1.2rem;
  }
  animation: ${slideIn} 0.4s ${cubicBezier} both;
`;
