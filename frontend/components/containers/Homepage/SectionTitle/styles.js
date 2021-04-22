import styled from 'styled-components';
import { FlexDiv, screenSize } from 'shared/styles';

export const TitleWrapper = styled(FlexDiv)`
  height: 100%;
  background-color: ${(props) => props.categoryTitle && 'rgba(0, 0, 0, 0.3)'};
`;
export const SectionTitle = styled.h2`
  ${screenSize.small`
  font-size: 3.5rem;
`}
  font-size: 2.6rem;
  color: var(--grey);
`;
export const SectionTitleBlank = styled.h2`
  ${screenSize.small`
  font-size: 3.5rem;
`}
  padding: 0 2rem;
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1.2;
  word-spacing: 100rem;
  text-align: center;
`;
