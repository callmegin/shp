import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { useSidebarToggle } from 'lib/context/sidebarContext';
import Skeleton from 'components/ui/Skeleton/Skeleton';

import InfiniteScroll from 'lib/utility/InfiniteScroll';
import ProductCard from 'components/ui/ProductCard';
import BottomDiv from 'components/ui/BottomDiv';
import Sidebar from 'components/containers/SideBar';

import { typesFromQuery } from 'lib/utility/helpers';
import { resolveSorting } from 'lib/utility/resolveRouter';

import * as Styled from './styles';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsCursor(
    $cursor: String
    $category: String # $sortBy: ProductsOrder
    $type: [String]
    $sortBy: SortBy
  ) {
    getProductsCursor(
      limit: 9
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
          averageRating
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

const Products = ({ slug, categoriesData }) => {
  const router = useRouter();
  const { query } = router;
  const { sort, type } = query;
  const qType = type && typesFromQuery(type);
  const {
    state: { show },
  } = useSidebarToggle();
  const sortBy = resolveSorting(sort);

  const { loading, data, fetchMore, error } = useQuery(
    GET_PRODUCTS_BY_CATEGORY,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
      variables: {
        category: slug,
        sortBy: sortBy,
        type: qType,
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

  return (
    <>
      <Styled.ProductsContainer row justifyCenter>
        <Sidebar
          slug={slug}
          categoriesData={categoriesData}
          loading={loading}
        />

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
              {loading && <Skeleton number={9} />}
            </Styled.ProductsGrid>
            {hasNextPage ? <BottomDiv clicked={loadMore} /> : ''}
          </InfiniteScroll>
        </Styled.ProductsWrapper>
      </Styled.ProductsContainer>
    </>
  );
};

export default Products;
