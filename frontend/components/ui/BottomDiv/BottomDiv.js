import * as Styled from './styles';

const BottomDiv = ({ hasNextPage }) => {
  return (
    <Styled.BottomDiv>
      <Styled.Arrow>&darr;</Styled.Arrow>
      {/* <span>more</span> */}
    </Styled.BottomDiv>
  );
};

export default BottomDiv;
