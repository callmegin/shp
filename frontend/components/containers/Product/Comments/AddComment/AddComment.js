import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { GET_PRODUCT } from '../../Product';
import Rating from 'components/ui/Rating';
import { StandardButton, StandardHollowButton } from 'components/ui/Button';
import * as Styled from './styles';

const ADD_REVIEW = gql`
  mutation addRating(
    $rating: Int
    $comment: String
    $createdBy: ID!
    $product: ID!
  ) {
    addReview(
      rating: $rating
      comment: $comment
      createdBy: $createdBy
      product: $product
    ) {
      id
      rating
      createdBy {
        id
        userName
        email
      }
      product {
        id
      }
    }
  }
`;

const AddComment = ({ productId, refetchReviews }) => {
  const [textValue, setTextvalue] = useState();
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState(false);

  const [addReview, { data, loading, error, client }] = useMutation(
    ADD_REVIEW,
    {
      onCompleted() {
        refetchReviews();
      },
      awaitRefetchQueries: true,
    }
  );

  const handleRating = (e) => {
    ratingError && setRatingError(false);
    setRating(e);
  };

  const handleClick = () => {
    rating === 0 && setRatingError(true);
    rating !== 0 &&
      !ratingError &&
      addReview({
        variables: {
          rating: rating,
          comment: textValue,
          createdBy: '610d368ea2688c1de08f0c1c',
          product: productId,
        },
      });
    setTextvalue('');
    setRating(0);
  };

  const handleChange = (e) => {
    setTextvalue(e.target.value);
  };

  const errorNotification = (
    <Styled.RatingErrorWrapper
      onClick={() => setRatingError(false)}
      row
      alignCenter
    >
      <Styled.ErrorText>You have to rate it as well!</Styled.ErrorText>
    </Styled.RatingErrorWrapper>
  );

  return (
    <Styled.SubmitReviewContainer>
      <Styled.ReviewTitle>Leave a review</Styled.ReviewTitle>

      <Styled.RateWrapper row>
        <Styled.RateText>Rate it: </Styled.RateText>
        <Rating rating={rating} interactive clicked={(e) => handleRating(e)} />
        {ratingError && errorNotification}
      </Styled.RateWrapper>

      <Styled.TextArea
        placeholder={'Type your comment here...'}
        value={textValue}
        onChange={handleChange}
      />
      <StandardHollowButton clicked={handleClick} disabled={loading}>
        Submit
      </StandardHollowButton>
    </Styled.SubmitReviewContainer>
  );
};

export default AddComment;
