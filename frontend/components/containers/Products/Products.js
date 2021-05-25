import Link from 'next/link';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';

import Skeleton from 'components/ui/Skeleton/Skeleton';

import * as Styled from './styles';
import InfiniteScroll from 'lib/utility/InfiniteScroll';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor($cursor: ID, $category: String) {
    getProductsCursor(limit: 4, cursor: $cursor, category: $category) {
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
      <InfiniteScroll
        hasNextPage={hasNextPage}
        reachedBot={loadMore}
        loading={loading}
      >
        <Styled.ProductsGrid>
          {data &&
            data.getProductsCursor.edges.map((item) => {
              return (
                <Styled.GridElement key={item.node.id}>
                  <Link
                    as={`/product/${item.node.id}`}
                    href="/product/[slug]"
                    passHref
                  >
                    <Styled.ImageWrapper
                      imageUrl={item.node.image.secure_url}
                    />
                  </Link>
                  <div>
                    <p>{item.node.name}</p>
                    <p>{item.node.price}</p>
                  </div>
                </Styled.GridElement>
              );
            })}
          {loading && hasNextPage && <Skeleton number={4} />}
        </Styled.ProductsGrid>
        <Styled.RefDiv>{hasNextPage ? 'more' : ''}</Styled.RefDiv>
      </InfiniteScroll>
    </>
  );
};

export default Products;
