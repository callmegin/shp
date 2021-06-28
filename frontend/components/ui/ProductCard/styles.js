import styled from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const GridElement = styled.a`
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
  margin-bottom: 3rem;
  ${screenSize.medium`
    margin-bottom: 6rem;
`}
`;

export const CardInfo = styled.div`
  & p {
    padding-top: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const Price = styled.p`
  font-weight: 400;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 100%;
  height: calc((1000px - 3rem) / 3);
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
