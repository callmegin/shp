import Link from 'next/link';
import * as Styled from './styles';

const SectionTitle = ({ categoryTitle, titleBlank }) => {
  return (
    <Styled.TitleWrapper
      justifyCenter
      alignCenter
      categoryTitle={categoryTitle}
    >
      {categoryTitle ? (
        <Styled.SectionTitle>{categoryTitle}</Styled.SectionTitle>
      ) : (
        <Styled.SectionTitleBlank>{titleBlank}</Styled.SectionTitleBlank>
      )}
    </Styled.TitleWrapper>
  );
};
export default SectionTitle;
