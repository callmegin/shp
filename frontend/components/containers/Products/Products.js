import { useEffect, useState } from 'react';
import { gql, useQuery, useApolloClient } from '@apollo/client';

import { useSidebarToggle } from 'lib/context/sidebar-context';
import Skeleton from 'components/ui/Skeleton/Skeleton';

import InfiniteScroll from 'lib/utility/InfiniteScroll';
import ProductCard from 'components/ui/ProductCard';
import BottomDiv from 'components/ui/BottomDiv';
import Sidebar from 'components/containers/SideBar';
import { isObjEmpty } from 'lib/utility/helpers';

import * as Styled from './styles';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor(
    $cursor: String
    $category: String # $sortBy: ProductsOrder
    $sortBy: SortBy
  ) {
    getProductsCursor(
      limit: 6
      cursor: $cursor
      category: $category # sortBy: { price: asc }
      sortBy: $sortBy
    ) {
      edges {
        node {
          id
          name
          price
          category
          type
          image {
            public_id
            secure_url
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const Products = ({ children, slug, sortBy, showSidebar }) => {
  const {
    state: { show },
  } = useSidebarToggle();
  const { loading, data, fetchMore, refetch } = useQuery(
    GET_PRODUCTS_BY_CATEGORY,
    {
      notifyOnNetworkStatusChange: true,

      variables: {
        category: slug,
        sortBy: sortBy,
      },
    }
  );

  const hasNextPage = data
    ? data.getProductsCursor.pageInfo.hasNextPage
    : false;

  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: data.getProductsCursor.pageInfo.endCursor,
        category: slug,
        sortBy: sortBy,
      },
    });
  };

  useEffect(() => {
    if (!isObjEmpty(sortBy)) {
      refetch({
        variables: {
          cursor: '',
          category: slug,
          sortBy: sortBy,
        },
      });
    }
  }, [sortBy]);

  return (
    <>
      <Styled.ProductsContainer row justifyCenter>
        <Sidebar slug={slug} />

        <Styled.ProductsWrapper show={show}>
          <InfiniteScroll
            hasNextPage={hasNextPage}
            reachedBot={loadMore}
            loading={loading}
          >
            <Styled.ProductsGrid hasNextPage={hasNextPage}>
              {data &&
                data.getProductsCursor.edges.map((product) => (
                  <ProductCard product={product} key={product.node.id} />
                ))}
              {loading && hasNextPage && <Skeleton number={6} />}
            </Styled.ProductsGrid>
            {hasNextPage ? <BottomDiv /> : ''}
          </InfiniteScroll>
        </Styled.ProductsWrapper>
      </Styled.ProductsContainer>
    </>
  );
};

export default Products;
