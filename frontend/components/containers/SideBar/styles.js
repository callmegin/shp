import styled, { css } from 'styled-components';
import { FlexDiv, screenSize, transition } from 'shared/styles';

export const SidebarContainer = styled(FlexDiv)`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  ${screenSize.small`
  position: sticky;
  top: 101px;
  width: 200px;
  height: auto;
  padding: 1rem 1rem;
  `}
`;

export const List = styled.ul`
  border-bottom: 1px solid var(--grey);
  padding-bottom: 1rem;
`;
export const CatList = styled(List)``;

export const TypesList = styled(List)`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ListWrapper = styled(FlexDiv)`
  ${({ customFlex }) =>
    customFlex &&
    css`
      flex: 0 1 auto;
      min-height: 0;
      padding-top: 1rem;
    `}
`;

export const ListItem = styled.li`
  font-size: 2rem;
  line-height: 3rem;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: ${({ isActive }) => isActive && `underline`};
  ${({ noHover }) =>
    !noHover &&
    css`
      &:hover {
        transform: scale(1.05);
        ${transition('transform', 100)}
      }
    `}
  ${screenSize.small`
  font-size: 1.3rem;
  line-height: 2.2rem;
  `}
`;
export const ListTextWrapper = styled(FlexDiv)`
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  /* &:hover {
    background: grey;
    ${transition('background', 500)}
  } */
  ${screenSize.small`
  font-size: 1.2rem;
  line-height: 1.8rem;
  `}
`;
export const SubItem = styled.span``;
export const ListItemMain = styled(ListItem)`
  font-weight: 600;
`;
