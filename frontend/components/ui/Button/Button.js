import * as Styled from './styles';

export const Button = ({ clicked, text }) => {
  return <Styled.Button onClick={clicked}>{text}</Styled.Button>;
};

export default Button;
