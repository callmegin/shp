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
import { GET_CATEGORIES } from 'components/Test';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor(
    $cursor: String
    $category: String # $sortBy: ProductsOrder
    $type: [String]
    $sortBy: SortBy
  ) {
    getProductsCursor(
      limit: 6
      cursor: $cursor
      category: $category # sortBy: { price: asc }
      type: $type
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

const Products = ({ slug, sortBy, categoriesData }) => {
  const {
    state: { show },
  } = useSidebarToggle();

  const [type, setType] = useState([]);

  const { loading, data, fetchMore, refetch } = useQuery(
    GET_PRODUCTS_BY_CATEGORY,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        category: slug,
        sortBy: sortBy,
        type: type,
      },
    }
  );

  const hasNextPage = data
    ? data.getProductsCursor.pageInfo.hasNextPage
    : false;

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

  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: data.getProductsCursor.pageInfo.endCursor,
        category: slug,
        sortBy: sortBy,
      },
    });
  };

  //TODO: make dynamic below
  const handleCheckBox = () => {
    setType((prev) => [...prev, 'Fake Rolex']);
  };
  useEffect(() => {
    if (Array.isArray(type) && type.length) {
      refetch({
        variables: {
          cursor: ``,
          category: slug,
          sortBy: sortBy,
          type: type,
        },
      });
    }
  }, [type]);

  return (
    <>
      <Styled.ProductsContainer row justifyCenter>
        <Sidebar slug={slug} categoriesData={categoriesData} />

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
