import styled from 'styled-components';
import { FlexDiv } from 'shared/styles';

export const AdContainer = styled(FlexDiv).attrs(({ background }) => ({
  style: {
    background: background,
  },
}))`
  width: 336px;
  height: 336px;
  text-align: center;
  word-spacing: 30rem;
`;

export const AdText = styled.h2`
  font-size: ${({ index }) => (index == 0 ? '8rem' : '5rem')};
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  text-transform: uppercase;
  color: white;
`;
