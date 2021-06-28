import styled, { css } from 'styled-components';
import { FlexDiv, screenSize, transition } from 'shared/styles';

export const ProductsContainer = styled(FlexDiv)`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  /* overflow-y: auto; */
`;

export const ProductsWrapper = styled(FlexDiv)`
  /* flex: 0 0 100%; */
  ${screenSize.small`
      flex-grow: 1;
      ${transition('all', 300)}
  `}
  width: 100%;
  z-index: 10;
  background: white;
  ${transition('all', 300)}
  overflow-y: auto;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 1rem;
  padding: 1rem;
  /* overflow: visible; */
  width: 100%;
  ${({ hasNextPage }) =>
    !hasNextPage &&
    css`
      border-bottom: 1px solid var(--grey);
    `};

  ${screenSize.small`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  // height: 1000px;
`}
  ${screenSize.medium`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  // height: 1200px
`}
`;
