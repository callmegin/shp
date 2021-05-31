import Link from 'next/link';
import * as Styled from './styles';

const ProductCard = ({ product }) => {
  return (
    <>
      <Link as={`/product/${product.node.id}`} href="/product/[slug]" passHref>
        <Styled.GridElement>
          <Styled.ImageWrapper imageUrl={product.node.image.secure_url} />
          <Styled.CardInfo>
            <p>{product.node.name}</p>
            <Styled.Price>{product.node.price}</Styled.Price>
          </Styled.CardInfo>
        </Styled.GridElement>
      </Link>
    </>
  );
};

export default ProductCard;
