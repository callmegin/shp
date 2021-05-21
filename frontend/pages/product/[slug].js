import Product from 'components/containers/Product/Product';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

import { GET_PRODUCT } from 'components/containers/Product/Product';

const GET_ALL_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      category
    }
  }
`;

const ProductPage = ({ params, data }) => {
  return <Product slug={params.slug} data={data.getProduct} />;
};

const apolloClient = initializeApollo();

export async function getStaticPaths({ query }) {
  console.log('getStaticPaths: ');
  console.log(query);
  const response = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
  });

  const paths = response.data.getProducts.map((product) => ({
    params: { slug: product.id, id: [product.id] },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, query }) {
  console.log('getStaticProps:');

  console.log(params);
  console.log(query);
  //   const regex = /\=(.*)/;
  //   const slugId = params.slug.match(regex)[1];
  console.log(params.slug);
  //   console.log(slugId);

  const { data } = await apolloClient.query({
    query: GET_PRODUCT,
    variables: { id: params.slug },
  });
  console.log(data);
  return {
    props: { params, data },
  };
}

export default ProductPage;
