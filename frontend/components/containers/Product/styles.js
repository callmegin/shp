import styled, { css } from 'styled-components';

import { FlexDiv, screenSize, transition } from 'shared/styles';

export const ProductContainer = styled(FlexDiv)`
  width: 100%;
  max-width: 1200px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 1rem;
  padding: 1rem;
  /* overflow: visible; */
  width: 100%;
  ${screenSize.small`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`;

export const GridElement = styled.a`
  /* grid-column: ${({ gridColumn }) => gridColumn};
  ${({ gridRow }) =>
    gridRow &&
    `
    grid-row: ${gridRow};
    `}; */
  /* grid-column: span 1 / span 1;
  grid-row: span 1 / span 1; */
  & > img {
    width: 100%;
  }
`;
export const PictureGridElement = styled.div`
  grid-column: 1;
  grid-row: span 1 / span 1;
  ${screenSize.small`
    grid-column: 1 / span 2;
  `}
`;
export const DetailsGridElement = styled.div`
  grid-column: 1;
  grid-row: span 1 / span 1;
  ${screenSize.small`
     grid-column: 3;
  `}
`;
export const CommentsElement = styled.div`
  grid-column: 1;
  grid-row: 2 / span 1;
  ${screenSize.small`
     grid-column: span 2 / span 2;
     grid-row: 1 / span 2
  `}
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const AdComponent = styled(FlexDiv)``;
