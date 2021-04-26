import { GET_PRODUCTS_BY_CATEGORY } from 'components/containers/Products/Products';
import { initializeApollo, addApolloState } from 'lib/apolloClient';

import Products from 'components/containers/Products/Products';

const ProductsPage = ({ params }) => {
  return <Products slug={params.slug} />;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: `watches` } },
      { params: { slug: `shoes` } },
      { params: { slug: `blazers` } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS_BY_CATEGORY,
    variables: { category: params.slug },
  });
  return addApolloState(apolloClient, {
    props: { params },
  });
}

export default ProductsPage;
