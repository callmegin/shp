import React from 'react';
import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'components/containers/Homepage/Homepage';

import { useWindowResize } from 'lib/hooks/useWindowResize';

import Categories from './Categories';
import Types from './Types';
import * as Styled from './styles';

const Mobile = dynamic(() => import('./Mobile'), { ssr: false });
const Desktop = dynamic(() => import('./Desktop'), { ssr: false });

export const GET_CATEGORIES_WITH_TYPES = gql`
  query getCategory($category: String) {
    getCategory(category: $category) {
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

const Sidebar = ({ slug }) => {
  const [width] = useWindowResize();
  const breakpoint = 740;

  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: typesData, error } = useQuery(GET_CATEGORIES_WITH_TYPES, {
    variables: {
      category: slug ? slug : '',
    },
  });

  const sidebar = (
    <Styled.SidebarContainer>
      <Categories data={categoriesData?.getCategories} slug={slug} />
      <Types typesData={typesData} />
    </Styled.SidebarContainer>
  );
  return (
    <>
      {width > breakpoint ? (
        <Desktop>{sidebar}</Desktop>
      ) : (
        <Mobile>{sidebar}</Mobile>
      )}
    </>
  );
};

export default React.memo(Sidebar);
