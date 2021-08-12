import { useEffect, useState } from 'react';
import { initializeApollo, addApolloState } from 'lib/apollo/apolloClient';
import { gql, useQuery } from '@apollo/client';

import { SidebarToggleProvider } from 'lib/context/sidebarContext';

import Products from 'components/containers/Products/Products';
import ProductsTop from 'components/containers/Products/ProductsTop';
import test from 'components/Test';

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

const categories = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES_WITH_TYPES,
  });
  return data;
};

const getAllSlugs = async () => {
  const { getCategories } = await categories();
  return getCategories.map((category) => {
    return {
      params: {
        slug: category.category,
      },
    };
  });
};

export async function getStaticPaths() {
  const paths = await getAllSlugs();
  // paths.push({ params: { slug: 'all' } });
  return {
    // paths,
    // fallback: false,
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { getCategories: categoriesData } = await categories();
  if (params.slug === 'all') params.slug = '';
  return {
    props: { params, categoriesData },
  };
}

const ProductsPage = ({ params, cloud, response, categoriesData }) => {
  return (
    <>
      <SidebarToggleProvider>
        <ProductsTop />
        <Products slug={params.slug} categoriesData={categoriesData} />
      </SidebarToggleProvider>
    </>
  );
};

export default ProductsPage;
