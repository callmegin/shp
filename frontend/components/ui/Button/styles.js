import styled from 'styled-components';

export const Button = styled.button`
  min-width: 220px;
  min-height: 60px;
  padding: 1.5rem 7rem;
  border: 2px solid var(--darkgrey);
  font-size: 2rem;
  background: white;
  color: var(--darkgrey);
  &:focus {
    background: var(--darkgrey);
    color: var(--light);
  }
`;
