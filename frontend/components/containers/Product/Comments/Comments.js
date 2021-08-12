import AddComment from './AddComment';
import Comment from './Comment';
import InfiniteScroll from 'lib/utility/InfiniteScroll';
import Loading from 'components/ui/Loading';

import * as Styled from './styles';

const Comments = ({ id, productReviews, reachedBot, refetchReviews }) => {
  let comments = (
    <InfiniteScroll
      reachedBot={reachedBot}
      isInfinite={false}
      loadOnMount={true}
    >
      <Loading />
    </InfiniteScroll>
  );
  if (productReviews && productReviews.length === 0)
    comments = <Styled.NoComments>no reviews...</Styled.NoComments>;
  else if (productReviews)
    comments = productReviews.map((review, index) => (
      <Comment key={`${review.createdBy.id}ix${index}`} review={review} />
    ));

  return (
    <Styled.CommentsParent>
      <AddComment productId={id} refetchReviews={refetchReviews} />
      <Styled.CommentsContainer>{comments}</Styled.CommentsContainer>
    </Styled.CommentsParent>
  );
};

export default Comments;
