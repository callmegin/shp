import styled from 'styled-components';
import { FlexDiv } from 'shared/styles';

export const FormContainer = styled(FlexDiv)`
  padding: 1rem;
`;

export const ListContainer = styled.div`
  /* width: 300px; */
  position: relative;
  display: inline-block;
  margin-left: ${({ margin }) => (margin === 'auto' ? 'auto' : `${margin}px`)};
  text-align: right;
`;

export const Span = styled.span`
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--dark);
`;

export const Select = styled.select`
  /* position: absolute; */
  /* display: ${({ clicked }) => (clicked ? 'block' : 'none')}; */
  /* background: var(--grey); */
  /* padding: 1rem; */
  border: none;
  outline: none;
  background: white;
  &:focus {
  }
  &:hover {
  }
`;

export const Option = styled.option`
  /* list-style-type: none; */
  /* padding-right: 20px; */
`;

export const ListText = styled.a`
  line-height: 5rem;
  color: var(--darkgrey);
`;
