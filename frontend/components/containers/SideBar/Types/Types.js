import * as Styled from '../styles';

const Types = ({ typesData }) => {
  return (
    <Styled.Sidebar>
      <Styled.List>
        {typesData?.getCategory.types.map((type) => (
          <Styled.ListItem key={type.id}>
            <Styled.ListTextWrapper row justifyBetween>
              <span>{type.type}</span>
              <span>{type.productsCount}</span>
            </Styled.ListTextWrapper>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Sidebar>
  );
};

export default Types;
