import * as Styled from './styles';

const BottomDiv = ({ hasNextPage, clicked }) => {
  return (
    <Styled.BottomDiv>
      <Styled.Arrow onClick={clicked}>&darr;</Styled.Arrow>
      {/* <span>more</span> */}
    </Styled.BottomDiv>
  );
};

export default BottomDiv;
