import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import Skeleton from 'components/ui/Skeleton/Skeleton';

import InfiniteScroll from 'lib/utility/InfiniteScroll';
import ProductCard from 'components/ui/ProductCard';
import BottomDiv from 'components/ui/BottomDiv';
import Sidebar from 'components/ui/SideBar';

import * as Styled from './styles';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor($cursor: ID, $category: String) {
    getProductsCursor(limit: 9, cursor: $cursor, category: $category) {
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

const Products = ({ slug }) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState();

  const { loading, data, fetchMore } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      category: slug,
    },
    onCompleted({ getProductsCursor }) {
      const innerData = getProductsCursor.pageInfo;
      setHasNextPage(innerData.hasNextPage);
      setEndCursor(innerData.endCursor);
    },
  });
  console.log(data);
  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: endCursor,
        category: slug,
      },
    });
  };

  return (
    <>
      <Styled.ProductsContainer row>
        <Sidebar />
        <Styled.ProductsWrapper>
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
              {loading && hasNextPage && <Skeleton number={9} />}
            </Styled.ProductsGrid>
            {hasNextPage ? <BottomDiv /> : ''}
          </InfiniteScroll>
        </Styled.ProductsWrapper>
      </Styled.ProductsContainer>
    </>
  );
};

export default Products;
