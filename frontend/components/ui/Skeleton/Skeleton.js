import * as Styled from './styles';

const Skeleton = ({ number }) => {
  for (let i = 0; i <= number; i++) {
    return <Styled.GirdElement />;
  }
};

export default Skeleton;
