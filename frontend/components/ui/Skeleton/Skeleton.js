import { ST } from 'next/dist/next-server/lib/utils';
import * as Styled from './styles';

const Skeleton = ({ number }) => {
  let skeleton = [];
  for (let i = 0; i < number; i++) {
    skeleton.push(<Styled.GridElement key={i} />);
  }

  return <>{skeleton}</>;
};
export default Skeleton;
