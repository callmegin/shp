import styled, { css } from 'styled-components';
import { FlexDiv, enterFromTop, cubicBezier, screenSize } from 'shared/styles';

export const CartPreviewContainer = styled(FlexDiv)`
  position: fixed;
  top: 39px;
  width: 100%;
  opacity: ${({ exit }) => (exit ? '0' : '1')};
  z-index: 1000;
  background: var(--light);
  animation: ${enterFromTop} 0.5s ${cubicBezier} both;
  transition: opacity 0.5s;
  box-shadow: 0px 10px 17px -3px var(--grey);
`;

export const SuccessWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  background: var(--grey);
`;

export const SuccessText = styled.p`
  font-size: 1.2rem;
`;

export const ContentContainer = styled(FlexDiv)`
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
  width: 250px;
  ${screenSize.small`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 500px;

  `}
`;

const Grid = styled.div`
  grid-column: 1;
  ${screenSize.small`
      grid-column: 1 / span 1;
  `}
`;

export const ProductDetails = styled(Grid)`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--grey);
  ${screenSize.small`
      grid-column: 1 / span 1;
      padding: 0 3rem 0 0;
      border-bottom: none;
      border-right: 1px solid var(--grey)
  `}
`;
export const ImageWrapper = styled(FlexDiv)``;

export const Image = styled.img`
  display: block;
  width: 50%;
  /* height: 100%; */
`;

export const CartDetails = styled(Grid)`
  padding-top: 1rem;
  width: 250px;
  ${screenSize.small`
      grid-column: 2 / span 1;
      padding: 0 0 0 3rem;
  `}
`;

const Text = styled.p`
  font-size: 1.1rem;
`;

export const CartInfo = styled(Text)`
  padding: 0.5rem 0;
  font-weight: 600;
`;

export const PriceInfo = styled(FlexDiv)`
  padding: 0.5rem 0 1rem;
`;

export const Subtotal = styled(Text)`
  color: var(--darkgrey);
`;

export const Price = styled(Text)``;
