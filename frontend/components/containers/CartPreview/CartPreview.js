import { useEffect, useState } from 'react';

import { StandardButton } from 'components/ui/Button';

import * as Styled from './styles';

const CartPreview = ({ data, showCartPreview, unmount }) => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let timer;
    if (showCartPreview)
      timer = setTimeout(() => {
        setTimedOut(true);
      }, 2000);

    return () => clearTimeout(timer);
  }, [showCartPreview]);

  useEffect(() => {
    let timer;
    if (timedOut)
      timer = setTimeout(() => {
        unmount();
      }, 1000);

    return () => clearTimeout(timer);
  }, [timedOut]);

  return (
    <Styled.CartPreviewContainer column alignCenter exit={timedOut}>
      <Styled.SuccessWrapper>
        <Styled.SuccessText>
          Item successfully added to your Cart:
        </Styled.SuccessText>
      </Styled.SuccessWrapper>

      <Styled.ContentContainer alignCenter>
        <Styled.ContentGrid>
          <Styled.ProductDetails>
            <Styled.ImageWrapper alignCenter>
              <Styled.Image src={data.image.secure_url} />
            </Styled.ImageWrapper>
          </Styled.ProductDetails>

          <Styled.CartDetails>
            <Styled.CartInfo>Your Cart (X - items)</Styled.CartInfo>
            <Styled.PriceInfo row justifyBetween>
              <Styled.Subtotal>Subtotal: </Styled.Subtotal>
              <Styled.Price>99$</Styled.Price>
            </Styled.PriceInfo>
            <StandardButton>View Cart</StandardButton>
          </Styled.CartDetails>
        </Styled.ContentGrid>
      </Styled.ContentContainer>
    </Styled.CartPreviewContainer>
  );
};

export default CartPreview;
