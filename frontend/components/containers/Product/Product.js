import React, { useEffect, useState } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

import { connect, useDispatch, useSelector } from 'react-redux';
import * as actions from 'lib/store/actions';

import Details from './Details';
import Comments from './Comments';
import FakeAd from 'components/ui/FakeAd';

import CartPreview from '../CartPreview';

import * as Styled from './styles';

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      category
      type
      image {
        secure_url
      }
      reviewsCount
      averageRating
    }
  }
`;

export const GET_OVERAL_RATING = gql`
  query getOveralRating($id: ID!) {
    getProduct(id: $id) {
      averageRating
      reviewsCount
    }
  }
`;

export const GET_PRODUCT_REVIEWS = gql`
  query getProductReviews($product: String) {
    getReviews(product: $product) {
      id
      rating
      comment
      createdAt
      createdBy {
        id
        userName
      }
    }
  }
`;

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [productRating, setProductRating] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [showCartPreview, setShowCartPreview] = useState(false);

  const { loading: loadingRatings, data: ratingData } = useQuery(
    GET_OVERAL_RATING,
    {
      variables: {
        id: data.id,
      },
    }
  );
  const [loadReviews, { loading, data: reviewsData, refetch, error }] =
    useLazyQuery(GET_PRODUCT_REVIEWS, {
      variables: {
        product: data.id,
      },
    });

  useEffect(() => {
    if (ratingData) {
      setProductRating(ratingData.getProduct.averageRating);
      setReviewsCount(ratingData.getProduct.reviewsCount);
    }
  }, [ratingData]);

  const productReviews = reviewsData?.getReviews;

  const reachedBot = () => {
    !reviewsData && !loading && loadReviews();
  };

  const refetchReviews = () => {
    refetch();
  };

  const handleAddToCart = () => {
    setShowCartPreview(true);
    dispatch(actions.addToCart(data));
  };

  return (
    <>
      {showCartPreview && (
        <CartPreview
          data={data}
          showCartPreview={showCartPreview}
          unmount={() => setShowCartPreview(false)}
        />
      )}
      <Styled.ProductContainer>
        <Styled.Grid>
          <Styled.PictureGridElement>
            <Styled.Image src={data.image.secure_url} />
          </Styled.PictureGridElement>

          <Styled.DetailsGridElement>
            <Details
              data={data}
              reviewsCount={reviewsCount}
              productRating={productRating}
              loadingRatings={loadingRatings}
              clicked={handleAddToCart}
            />
          </Styled.DetailsGridElement>
        </Styled.Grid>
        <Styled.Grid>
          <Styled.CommentsElement>
            <Comments
              id={data.id}
              productReviews={productReviews}
              reachedBot={reachedBot}
              refetchReviews={refetchReviews}
            />
          </Styled.CommentsElement>
          <Styled.AdComponent row justifyCenter>
            <FakeAd text={'Buy It|Use It|Wrap It|Gift It'} />
          </Styled.AdComponent>
        </Styled.Grid>
      </Styled.ProductContainer>
    </>
  );
};

export default Product;
