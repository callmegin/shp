import styled from 'styled-components';
import { transition, screenSize } from 'shared/styles';

export const SvgButtonContainer = styled.div`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  & svg {
    height: ${({ height }) => (height ? `${height}px` : '100%')};
    width: ${({ width }) => (width ? `${width}px` : '100%')};
    transform: ${({ openState }) =>
      openState ? 'rotate(90deg)' : 'rotate(0deg)'};
    ${transition('all', 300)}
  }
  ${screenSize.small`
    transform: rotate(0deg)
  `}
`;
