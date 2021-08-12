import Rating from 'components/ui/Rating';
import * as Styled from './styles';

const Comment = ({ review }) => {
  return (
    <Styled.CommentWrapper>
      <Styled.UserDiv>
        <Styled.UsernameText>{review.createdBy.userName}</Styled.UsernameText>
        <Styled.Date>{review.createdAt.substring(0, 10)}</Styled.Date>
      </Styled.UserDiv>
      <Styled.RatingContainer>
        <Rating rating={review.rating} />
      </Styled.RatingContainer>

      <Styled.Comment>{review.comment}</Styled.Comment>
    </Styled.CommentWrapper>
  );
};

export default Comment;
