import Image from 'next/image';
import styled from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const ProductsGrid = styled.div`
  ${screenSize.medium`  
  // height: 1200px
`}
  ${screenSize.small`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  // height: 1000px;
`}
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  grid-template-rows: auto auto;

  grid-gap: 1rem;
  padding: 1rem;
  width: 100%;
  /* height: 100vh; */
  /* grid-auto-rows: 500px; */
`;

export const GridElement = styled.div`
  /* grid-column: ${({ gridColumn }) => gridColumn};
  ${({ gridRow }) =>
    gridRow &&
    `
    grid-row: ${gridRow};
    `}; */
  grid-column: span 1 / span 1;
  grid-row: span 1 / span 1;
  & > img {
    width: 100%;
  }
`;

export const ImageWrapper = styled.a`
  display: block;
  width: 100%;
  height: calc((1000px - 3rem) / 2);
  ${({ imageUrl }) =>
    imageUrl &&
    `
  background-image: url(${imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  `}
  animation: ${enterElement} 700ms;
`;
