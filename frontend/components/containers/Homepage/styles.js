import styled, { css } from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

//TODO: me no like below
export const RootContainer = styled(FlexDiv)`
  ${screenSize.medium`  
  height: 1200px
`}
  ${screenSize.small`
  height: 1000px;
`}
  width: 100%;
  height: 100%;
`;

export const GridRoot = styled.div`
  ${screenSize.medium`  
  height: 1200px
`}
  ${screenSize.small`
  height: 1000px;
`}
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  display: grid;
  grid-gap: 0;
  gap: 0;

  /* height: calc(100% - 40px); */
  /* height: calc(${(props) => props.calculatedHeight}px - 40px - 1rem); */
  height: 600px;
`;

export const GridElement = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  ${({ gridRow }) =>
    gridRow &&
    `
    grid-row: ${gridRow};
    `};
  ${({ imageUrl }) =>
    imageUrl &&
    `
  background-image: url(${imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  `};
  animation: ${enterElement} 200ms;
  animation-delay: ${({ delay }) => delay}ms;
`;

export const SomeContent = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 1rem;
  background-color: var(--dark);
`;
