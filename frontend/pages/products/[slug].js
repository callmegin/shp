import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';

import Products from 'components/containers/Products/Products';

const ProductsPage = ({ params, cloud, response }) => {
  return <Products slug={params.slug} />;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: `watches` } },
      { params: { slug: `shoes` } },
      { params: { slug: `blazers` } },
      { params: { slug: `all` } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const apolloClient = initializeApollo();
  // const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  // const response = await apolloClient.query({
  //   query: GET_CATEGORIES,
  // });

  // console.log(params);
  // return addApolloState(apolloClient, {
  //   props: { params, cloud, response },
  // });
  if (params.slug === 'all') params.slug = '';
  return {
    props: { params },
  };
}

export default ProductsPage;
