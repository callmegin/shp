import { gql, useQuery } from '@apollo/client';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProducts($category: String) {
    getProducts(category: $category) {
      id
      price
      name
      category
      image {
        url
        thumb_secure_url
      }
    }
  }
`;

const Products = ({ category, slug, pageLoading }) => {
  const { data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: {
      category: slug,
    },
  });
  console.log(data);
  return (
    <>
      <p>{category}</p>
      <h2>This is products page</h2>
    </>
  );
};

export default Products;
