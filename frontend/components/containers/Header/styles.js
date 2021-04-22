import styled from 'styled-components';
import { FlexDiv, screenSize } from '../../../shared/styles';

export const HeaderContainer = styled(FlexDiv)`
  flex: 0 0 auto;
  position: relative;
  height: 40px;
  width: 100%;
  box-shadow: 0 1px 5px rgba(57, 63, 72, 0.3);
  /* overflow-y: hidden; */
`;

export const HeaderWrapper = styled(FlexDiv)`
  max-width: 1920px;
  flex: 1 1 auto;
  height: 100%;
`;

export const LogoTitle = styled(FlexDiv)`
  ${screenSize.medium`
padding-left: 10px;
`}
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
  margin-left: auto;
`;

export const Burger = styled(FlexDiv)`
  height: 100%;
  & > div {
    width: 90%;
    height: 1px;
    background: black;
  }
`;
