import { css } from 'styled-components';

const breakpoints = { small: 740, medium: 1100, big: 1320 };

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
