import { useEffect, useState } from 'react';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

import { SidebarToggleProvider } from 'lib/context/sidebar-context';

import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';

import Products from 'components/containers/Products/Products';
import ProductsTop from 'components/containers/Products/ProductsTop';

const ProductsPage = ({ params, cloud, response }) => {
  const [sortBy, setSortBy] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value) {
      return setSortBy({});
    }
    const [field, order] = value.split('-');
    setSortBy({ field: field, order: order });
  };

  return (
    <>
      <SidebarToggleProvider>
        <ProductsTop handleSubmit={handleSubmit} />
        <Products slug={params.slug} sortBy={sortBy} />
      </SidebarToggleProvider>
    </>
  );
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
