import { gql, useQuery, NetworkStatus } from '@apollo/client';
import Image from 'next/image';

export const GET_ALL_PRODUCTS = gql`
  query allProducts {
    getProducts {
      id
      price
      name
      category
      image {
        id
        url
      }
    }
  }
`;

const test = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  console.log(loading);
  console.log(data);
  return (
    <>
      {data.getProducts.map((product) => (
        <div key={product.key}>
          {product.name}
          <img src={product.image.url} />
        </div>
      ))}
    </>
  );
};

export default test;
