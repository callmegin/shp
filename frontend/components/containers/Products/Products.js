import { gql, useQuery } from '@apollo/client';
import { Image, Placeholder } from 'cloudinary-react';
import { useEffect, useState } from 'react';

import * as Styled from './styles';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProducts($category: String) {
    getProducts(category: $category) {
      id
      price
      name
      category
      image {
        public_id
        secure_url
        thumb_secure_url
      }
    }
  }
`;

const Products = ({ slug, cloud }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const {
    loading,
    data: { getProducts },
  } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: {
      category: slug,
    },
  });
  return (
    <>
      <p>{slug}</p>
      <h2>This is products page</h2>
      <Styled.ProductsGrid>
        {getProducts.map((item) => {
          return (
            <Styled.GridElement key={item.id}>
              <Image
                cloudName={cloud}
                publicId={item.image.public_id}
                loading="lazy"
              >
                <Placeholder type="pixelate" />
              </Image>
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </Styled.GridElement>
          );
        })}
      </Styled.ProductsGrid>
    </>
  );
};

export default Products;
