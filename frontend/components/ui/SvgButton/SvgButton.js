import * as Styled from './styles';
const SvgButton = ({ Icon, width, height, clicked, openState }) => {
  return (
    <Styled.SvgButtonContainer
      onClick={clicked}
      width={width}
      height={height}
      openState={openState}
    >
      <Icon />
    </Styled.SvgButtonContainer>
  );
};

export default SvgButton;
