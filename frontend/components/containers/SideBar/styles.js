import styled from 'styled-components';
import { FlexDiv, screenSize, transition } from 'shared/styles';

//!------------------------------------------------------------
//TODO: some properties below are not required on mobile right now
//!------------------------------------------------------------
//looking at that website it seems that the whole page might be chaning its structure
//as in maybe instead of flex row it's flex col. maybe...

export const SidebarContainer = styled.div`
  /* flex: 0 1 200px; */
  //width is set to properly display sidber when animatin open/close
  width: 200px;

  padding: 1rem 1rem 0 1rem;
  ${screenSize.small`
  position: sticky;
  top: 101px;
  `}
`;

export const Sidebar = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--grey);
  /* background: grey; */
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
  line-height: 2rem;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: ${(props) => props.isActive && `underline`};
  &:hover {
    transform: scale(1.05);
    ${transition('transform', 100)}
  }
`;
export const ListItemMain = styled(ListItem)`
  font-weight: 600;
`;

export const ListTextWrapper = styled(FlexDiv)`
  cursor: pointer;
  span:nth-child(2) {
    /* color: var(--grey); */
    font-weight: 400;
  }
`;
