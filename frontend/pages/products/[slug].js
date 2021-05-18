import { GET_PRODUCTS_BY_CATEGORY } from 'components/containers/Products/Products';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';

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
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const apolloClient = initializeApollo();
  // const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  // const response = await apolloClient.query({
  //   query: GET_PRODUCTS_BY_CATEGORY,
  //   variables: { category: params.slug },
  // });
  // console.log(params);
  // return addApolloState(apolloClient, {
  //   props: { params, cloud, response },
  // });
  return {
    props: { params },
  };
}

export default ProductsPage;
