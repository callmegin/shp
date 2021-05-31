import styled from 'styled-components';
import { rotateDown } from 'shared/styles';

export const BottomDiv = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Arrow = styled.span`
  display: block;
  width: 100%;
  padding-bottom: 1rem;
  animation: 2s ${rotateDown} infinite;
`;
