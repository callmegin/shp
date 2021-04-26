import styled from 'styled-components';
import { FlexDiv, screenSize, enterElement } from 'shared/styles';

export const GridElement = styled.a`
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
  animation: ${enterElement} 700ms;
  animation-delay: ${({ delay }) => delay}ms;
  &:hover {
    text-decoration: none;
  }
`;

export const Wrapper = styled(FlexDiv)`
  height: 100%;
  position: relative;
`;
export const H2 = styled.h2`
  ${screenSize.medium`
  font-size: 3.5rem;
`}
  padding: 0 2rem;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1.2;
  word-spacing: 100rem;
  text-align: center;
`;
export const Vertical = styled.p`
  ${screenSize.small`
  font-size: 0.9rem;
`}
  position: absolute;
  right: 0;
  font-size: 0.2rem;
  font-weight: 400;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
