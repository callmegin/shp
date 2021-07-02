import { useEffect, useState } from 'react';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

import { SidebarToggleProvider } from 'lib/context/sidebar-context';

import Products from 'components/containers/Products/Products';
import ProductsTop from 'components/containers/Products/ProductsTop';

export const GET_CATEGORIES_WITH_TYPES = gql`
  query getCategories {
    getCategories {
      id
      category
      types {
        id
        type
        productsCount
      }
    }
  }
`;

const ProductsPage = ({ params, cloud, response, categoriesData }) => {
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
        <Products
          slug={params.slug}
          sortBy={sortBy}
          categoriesData={categoriesData}
        />
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
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES_WITH_TYPES,
  });
  const categoriesData = data.getCategories;

  // let paths = [];
  // response.data.getCategories.map((category) => {
  //   paths.push({ params: { slug: category.category } });
  //   category.types.map((type) => {
  //     paths.push({ params: { slug: `${category.category}/${type.type}` } });
  //   });
  // });

  // return addApolloState(apolloClient, {
  //   props: { params, cloud, response },
  // });
  if (params.slug === 'all') params.slug = '';
  return {
    props: { params, categoriesData },
  };
}

export default ProductsPage;
