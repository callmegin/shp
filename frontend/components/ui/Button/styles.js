import { transition } from 'shared/styles';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 1.3rem 0 1.3rem 0;
  width: 100%;
  font-weight: 600;
`;

export const StyledStandardButton = styled(Button)`
  border: 2px solid var(--darkgrey);
  background: var(--darkgrey);
  color: white;
  &:hover {
    background: white;
    color: var(--darkgrey);
    ${transition('all', 300)}
  }
  &:active {
    background: var(--grey);
    color: var(--darkgrey);
    ${transition('active', 200)}
  }
`;

export const StyledStandardHollowButton = styled(Button)`
  border: 2px solid var(--darkgrey);
  background: var(--light);
  color: var(--darkgrey);
  &:hover {
    background: var(--darkgrey);
    color: var(--light);
    ${transition('all', 300)}
  }
  &:active {
    background: var(--grey);
    color: var(--darkgrey);
    border-color: var(--grey);
    ${transition('active', 200)}
  }
  &:disabled {
    background: var(--grey);
    border: none;
  }
`;

export const StyledShowMore = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: var(--darkgrey);
`;

export const StyledRatingButton = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background: ${({ props }) =>
    `linear-gradient(90deg, ${
      props.on || props.halfOn ? `var(--darkgrey)` : `var(--grey)`
    } 50%, ${props.on ? `var(--darkgrey)` : `var(--grey)`} 50%)`};
`;

// export const AdContainer = styled(FlexDiv).attrs(({ background }) => ({
//   style: {
//     background: background,
//   },
// }))`
//   width: 336px;
//   height: 336px;
//   text-align: center;
//   word-spacing: 30rem;
// `;

// .attrs(({ props }) => ({
//   style: {
//     background: `linear-gradient(90deg, ${
//       (props.on || props.halfOn) && `var(--darkgrey)`
//     } 50%, ${props.on && `var(--darkgrey)`} 50%)`,
//   },
// }))
