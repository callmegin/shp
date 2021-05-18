import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';

import { useState } from 'react';
import Skeleton from 'components/ui/Skeleton/Skeleton';

import * as Styled from './styles';
import InfiniteScroll from 'lib/utility/InfiniteScroll';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor($cursor: ID, $category: String) {
    getProductsCursor(limit: 3, cursor: $cursor, category: $category) {
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
      <Styled.ProductsGrid>
        <InfiniteScroll
          hasNextPage={hasNextPage}
          reachedBot={loadMore}
          loading={loading}
        >
          {data &&
            data.getProductsCursor.edges.map((item) => {
              return (
                <Styled.GridElement key={item.node.id}>
                  <Styled.ImageWrapper imageUrl={item.node.image.secure_url} />

                  <div>
                    <h3>{item.node.name}</h3>
                    <p>{item.node.price}</p>
                  </div>
                </Styled.GridElement>
              );
            })}
          {loading && hasNextPage && <Skeleton number={3} />}
        </InfiniteScroll>
      </Styled.ProductsGrid>
    </>
  );
};

export default Products;
