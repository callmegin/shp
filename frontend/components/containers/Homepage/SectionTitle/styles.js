import styled from 'styled-components';
import { FlexDiv, screenSize, transition, enterElement } from 'shared/styles';

export const TitleWrapper = styled(FlexDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.categoryTitle && 'rgba(0, 0, 0, 0.3)'};
  z-index: 9;
  &:hover {
    /* background-color: ${(props) =>
      props.categoryTitle && 'rgba(0, 0, 0, 0.6)'};
    ${transition('all', 250)} */
  }
`;
export const SectionTitle = styled.h2`
  ${screenSize.small`
  font-size: 3.5rem;
`}
  font-size: 2.6rem;
  text-transform: capitalize;
  color: var(--grey);
  &:hover {
    cursor: pointer;
  }
  animation: ${enterElement} 400ms;
`;
export const SectionTitleBlank = styled.h2`
  ${screenSize.small`
  font-size: 3.5rem;
`}
  padding: 0 2rem;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1.2;
  word-spacing: 100rem;
  text-align: center;
  animation: ${enterElement} 200ms;
`;
