import { StandardButton, ShowMore } from 'components/ui/Button';

import { useState } from 'react';
import Rating from 'components/ui/Rating';
import Loading from 'components/ui/Loading';

import * as Styled from './styles';

const Details = ({
  data,
  productRating,
  reviewsCount,
  loadingRatings,
  clicked,
}) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  let rating = <Loading />;
  if (!loadingRatings)
    rating = (
      <>
        <Rating rating={productRating} />
        <Styled.TotalRatings>{`${reviewsCount} reviews`}</Styled.TotalRatings>
      </>
    );

  return (
    <>
      <Styled.DetailsParentContainer>
        <Styled.Name>
          <h2>{data.name}</h2>
          <Styled.RatingContainer row justifyBetween>
            {rating}
          </Styled.RatingContainer>
        </Styled.Name>

        <Styled.DetailsContainer>
          <Styled.CollapsibleContainer>
            <Styled.Collapsible showMore={showMore}>
              <p>{data.description}</p>
            </Styled.Collapsible>
            <ShowMore clicked={handleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </ShowMore>
          </Styled.CollapsibleContainer>

          <Styled.Price>
            <p>{data.price}$</p>
          </Styled.Price>

          <div>
            <StandardButton clicked={clicked}>Add to Cart</StandardButton>
          </div>
        </Styled.DetailsContainer>
      </Styled.DetailsParentContainer>
    </>
  );
};

export default Details;
