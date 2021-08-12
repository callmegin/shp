import { FlexDiv } from 'shared/styles';
import styled from 'styled-components';

export const CommentWrapper = styled.div`
  /* margin: 1rem 0; */
  padding: 1rem 1rem;
  border: 1px solid var(--grey);
  margin: 1rem 0;
`;

export const UserDiv = styled.div``;

export const UsernameText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  display: inline-block;
  padding: 0.5rem 0;
`;

export const EmailText = styled.p`
  display: inline-block;
  padding: 0 1rem;
  border-radius: 0.5rem;
  background: var(--grey);
`;

export const Date = styled.p`
  font-size: 1rem;
`;

export const RatingContainer = styled.div`
  padding: 0 0 0.5rem;
`;

export const Comment = styled.div`
  font-size: 1.2rem;
`;
