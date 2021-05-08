import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';

import { useRef, useEffect, useState } from 'react';
import { useRouterScroll } from '@moxy/next-router-scroll';
import Skeleton from 'components/ui/Skeleton/Skeleton';

import * as Styled from './styles';

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

const isBrowser = typeof window !== 'undefined';

const Products = ({ slug, cloud }) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [endCursor, setEndCursor] = useState();
  const { error, loading, data, fetchMore } = useQuery(
    GET_PRODUCTS_BY_CATEGORY,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        category: slug,
      },
      onCompleted({ getProductsCursor }) {
        const innerData = getProductsCursor.pageInfo;

        setHasNextPage(innerData.hasNextPage);
        setEndCursor(innerData.endCursor);
      },
    }
  );

  const loadMore = (e) => {
    e.preventDefault();
    fetchMore({
      variables: {
        cursor: endCursor,
        category: slug,
      },
    });
  };

  return (
    <div>
      <h2>This is products page</h2>

      <Styled.ProductsGrid>
        {data && !loading ? (
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
          })
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </Styled.ProductsGrid>
      <button onClick={loadMore} disabled={!hasNextPage}>
        solobolo
      </button>
    </div>
  );
};

export default Products;
