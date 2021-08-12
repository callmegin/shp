import {
  StyledStandardButton,
  StyledShowMore,
  StyledRatingButton,
  StyledStandardHollowButton,
} from './styles';

const reusableButton = (Component, props) => {
  const {
    clicked,
    children,
    mouseOver,
    mouseEnter,
    mouseLeave,
    mouseOut,
    disabled,
    ...rest
  } = props;
  return (
    <Component onClick={clicked} props={rest} disabled={disabled}>
      {children}
    </Component>
  );
};

export const StandardButton = (props) =>
  reusableButton(StyledStandardButton, props);

export const StandardHollowButton = (props) =>
  reusableButton(StyledStandardHollowButton, props);

export const ShowMore = (props) => reusableButton(StyledShowMore, props);

export const RatingButton = (props) =>
  reusableButton(StyledRatingButton, props);
