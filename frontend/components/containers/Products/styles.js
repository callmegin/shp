import Image from 'next/image';
import styled from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const ProductsGrid = styled.div`
  ${screenSize.medium`  
  height: 1200px
`}
  ${screenSize.small`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: 1000px;
`}
  width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  /* grid-auto-rows: 500px; */
  display: grid;
  grid-gap: 1%;
  padding: 1rem;
`;

export const GridElement = styled.div`
  /* grid-column: ${({ gridColumn }) => gridColumn};
  ${({ gridRow }) =>
    gridRow &&
    `
    grid-row: ${gridRow};
    `}; */
  ${({ imageUrl }) =>
    imageUrl &&
    `
  background-image: url(${imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  `}
  &  > img {
    width: 100%;
  }
`;
