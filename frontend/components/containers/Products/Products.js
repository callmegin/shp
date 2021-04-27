import { gql, useQuery } from '@apollo/client';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProducts($category: String) {
    getProducts(category: $category) {
      id
      price
      name
      category
      image {
        secure_url
        thumb_secure_url
      }
    }
  }
`;

const Products = ({ slug }) => {
  // const {
  //   loading,
  //   data: { getProducts },
  // } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
  //   variables: {
  //     category: slug,
  //   },
  // });

  return (
    <>
      <p>{slug}</p>
      <h2>This is products page</h2>
    </>
  );
};

export default Products;
