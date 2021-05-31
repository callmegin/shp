import SectionTitle from '../SectionTitle/SectionTitle';
import * as Styled from './styles';

const Section = ({ gridColumn, gridRow, imageUrl, categoryTitle, clicked }) => {
  const content = imageUrl ? (
    <Styled.GridElement
      gridColumn={gridColumn}
      gridRow={gridRow}
      onClick={clicked}
    >
      <SectionTitle categoryTitle={categoryTitle} />
      <Styled.Background imageUrl={imageUrl} />
    </Styled.GridElement>
  ) : (
    <Styled.Wrapper justifyCenter>
      <SectionTitle titleBlank={categoryTitle} />
      <Styled.Vertical>
        * Literally not trying to steal anything here
      </Styled.Vertical>
    </Styled.Wrapper>
  );

  return content;
};

export default Section;
