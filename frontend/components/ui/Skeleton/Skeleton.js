import { ST } from 'next/dist/next-server/lib/utils';
import * as Styled from './styles';

const Skeleton = ({ number }) => {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(<Styled.GridElement key={i} />);
  }

  return <>{arr}</>;
};
export default Skeleton;
