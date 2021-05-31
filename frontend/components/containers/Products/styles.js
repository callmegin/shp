import styled, { css } from 'styled-components';
import { FlexDiv, screenSize } from 'shared/styles';

export const ProductsContainer = styled(FlexDiv)`
  width: 100%;
`;

export const ProductsGrid = styled.div`
  ${screenSize.medium`  
  // height: 1200px
`}
  ${screenSize.small`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  // height: 1000px;
`}
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 1rem;
  padding: 1rem;
  width: 100%;
  ${({ hasNextPage }) =>
    !hasNextPage &&
    css`
      border-bottom: 1px solid var(--grey);
    `};
`;

export const ProductsWrapper = styled.div`
  width: 100%;
`;
