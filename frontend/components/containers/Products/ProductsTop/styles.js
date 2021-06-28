import styled from 'styled-components';
import { FlexDiv, screenSize, transition } from 'shared/styles';

export const TopContainer = styled(FlexDiv)`
  position: sticky;
  top: 40px;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  background: white;
  z-index: 4079;
  border-bottom: 1px solid var(--grey);
  /* box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3); */
`;

export const TopWrapper = styled(FlexDiv)`
  width: 100%;
  max-width: 1200px;
  /* padding: 0 1rem 0 0; */
  ${screenSize.big`
    // margin-right: 1rem;
    padding: 0 1rem;
`}
`;

export const EmptySpace = styled(FlexDiv)`
  ${transition('all', 300)}
  ${screenSize.small`
  flex: ${({ show }) => (show ? '0 1 200px' : '0 0 0')};
  `}
`;
