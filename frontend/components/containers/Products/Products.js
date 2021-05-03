import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Image, Placeholder } from 'cloudinary-react';
import _ from 'lodash';

import { useRef, useEffect, useState } from 'react';

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

const isBrowser = typeof window !== 'undefined';

const Products = ({ slug, cloud }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const { loadProducts, loading, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: {
      category: slug,
    },
  });

  const [gridElem, setGridElem] = useState(null);
  const [winHeight, setWinHeight] = useState();

  const getWindowHeight = () => {
    console.log(`win height: ${window.innerHeight}`);
    return window.innerHeight;
  };

  const getScrollPosition = () => {
    console.log(window.scrollY);
  };

  const getGridElemHeight = () => {
    console.log(gridElem.clientHeight);
  };

  const getRef = () => {
    console.log('getref');
  };

  useEffect(() => {
    data && console.log(gridElem);
  }, [data]);

  useEffect(() => {
    setWinHeight(getWindowHeight);
  }, []);

  useEffect(() => {
    isBrowser &&
      window.addEventListener('resize', _.debounce(getWindowHeight, 100));
    return () => window.removeEventListener('resize', getWindowHeight);
  });

  useEffect(() => {
    isBrowser &&
      window.addEventListener('scroll', _.debounce(getScrollPosition, 100));

    return () => window.removeEventListener('scroll', getScrollPosition);
  });

  return (
    <>
      <p>{slug}</p>
      <h2>This is products page</h2>
      {/* <button onClick={() => loadProducts()}>solobolo</button> */}
      <Styled.ProductsGrid>
        {data &&
          data.getProducts.map((item) => {
            return (
              <Styled.GridElement key={item.id} ref={getRef}>
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
