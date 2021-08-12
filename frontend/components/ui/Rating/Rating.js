import React, { useEffect, useState } from 'react';
import { RatingButton } from '../Button';

import * as Styled from './styles';

const Rating = ({ rating, interactive = false, clicked }) => {
  const [hoverIndex, setHoverIndex] = useState(rating);

  useEffect(() => {
    setHoverIndex(rating);
  }, [rating]);

  const handleRating = (index) => {
    setHoverIndex(index + 1);
  };
  const cancelRating = (index) => {
    setHoverIndex(rating);
  };

  //TODO: ALL OF THIS IS ACTUALLY BULLPOOOOOOPP!!!!!!!!!!!

  return (
    <Styled.Rating row>
      {[...Array(5)].map((_, index) => {
        return (
          <Styled.ButtonWrapper
            key={index}
            onMouseEnter={interactive ? () => handleRating(index) : null}
            onMouseLeave={interactive ? () => cancelRating(index) : null}
            onClick={interactive ? () => clicked(index + 1) : null}
          >
            <RatingButton
              on={interactive ? hoverIndex > index : rating >= index + 1}
              halfOn={!interactive ? index + 0.5 === rating : false}
            />
          </Styled.ButtonWrapper>
        );
      })}
    </Styled.Rating>
  );
};

export default Rating;
