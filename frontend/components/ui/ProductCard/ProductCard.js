import Link from 'next/link';
import Rating from 'components/ui/Rating';
import { overallRating } from 'lib/utility/helpers';
import * as Styled from './styles';

const ProductCard = ({ product }) => {
  const productRating = product.node.averageRating;
  const reviewsCount = product.node.reviewsCount;

  return (
    <>
      <Link
        as={`/product/${product.node.id}`}
        href={'/product/[slug]'}
        passHref
      >
        <Styled.GridElement>
          <Styled.ImageWrapper imageUrl={product.node.image.secure_url} />
          <Styled.CardInfo>
            <p>{product.node.name}</p>
            <Rating rating={productRating} />
            <Styled.Price>{product.node.price}</Styled.Price>
          </Styled.CardInfo>
        </Styled.GridElement>
      </Link>
    </>
  );
};

export default ProductCard;
