import * as Styled from './styles';

const Skeleton = ({ number }) => {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(<Styled.GridElement key={i} />);
  }
  // console.log('SKELETON');
  return <>{arr}</>;
};
export default Skeleton;
