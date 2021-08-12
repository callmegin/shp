import styled, { keyframes } from 'styled-components';
import {
  FlexDiv,
  transition,
  enterFromRight,
  cubicBezier,
  warningLeft,
} from 'shared/styles';

export const SubmitReviewContainer = styled.div`
  padding: 2rem 0;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ReviewTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
`;

export const RateWrapper = styled(FlexDiv)`
  padding: 0.5rem 0;
`;

export const RateText = styled(Text)`
  line-height: 1.7rem;
  font-weight: 400;
  padding-right: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 5.5rem;
  resize: none;
  border: 1px solid var(--grey);
  &:focus {
    outline: 1px solid var(--grey);
  }
`;

export const RatingErrorWrapper = styled(FlexDiv)`
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 1rem;
  background: var(--darkgrey);
  animation: ${warningLeft} 0.5s ${cubicBezier} both;
  &:hover {
    background: var(--dark);
    ${transition('background', 200)}
  }
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  color: var(--grey);
`;

// export const Close = styled.a`
//   position: absolute;
//   width: 18px;
//   height: 18px;
//   right: -9px;
//   top: -5px;
//   border-radius: 50%;
//   background: var(--grey);
//   &:before,
//   &:after {
//     position: absolute;
//     left: 9px;
//     top: 2px;
//     content: ' ';
//     height: 14px;
//     width: 2px;
//     background-color: var(--darkgrey);
//   }
//   &:before {
//     transform: rotate(45deg);
//   }
//   &:after {
//     transform: rotate(-45deg);
//   }
//   &:hover{

//   }
// `;
