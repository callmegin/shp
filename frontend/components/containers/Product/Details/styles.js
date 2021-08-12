import styled, { css } from 'styled-components';

import { FlexDiv, screenSize, transition } from 'shared/styles';

export const DetailsParentContainer = styled.div`
  ${screenSize.small`
    padding: 0 2rem 0 2rem;
    top: 51px;
    position: sticky;
  `}
`;

export const CollapsibleContainer = styled.div`
  text-align: center;
`;
export const ShowMore = styled.button`
  font-size: 1rem;
  color: var(--darkGrey);
  text-decoration: underline;
`;

export const Collapsible = styled.div`
  display: block;
  overflow: hidden;
  text-align: left;
  ${({ showMore }) =>
    showMore
      ? css`
          max-height: 10rem;
        `
      : css`
          max-height: 1.4rem;
        `};
  ${transition('all', 500)}
`;

export const DetailsContainer = styled.div`
  font-size: 1.2rem;
  ${screenSize.small`
       font-size: 1.4rem;
  `}
`;

export const Name = styled.div`
  padding-bottom: 2rem;
`;

export const RatingContainer = styled(FlexDiv)`
  padding-top: 0.5rem;
`;

export const TotalRatings = styled.p`
  font-size: 1.2rem;
  line-height: 1rem;
`;

export const Price = styled.div`
  padding: 2rem 0 2rem 0;
  & p {
    font-size: 1.5rem;
  }
`;
