import styled from 'styled-components';

interface Props {
  cursor: string;
}

export const Container = styled.div`
  gap: 0.25rem;
  display: flex;
`;

export const ButtonContainer = styled.button`
  width: 2rem;
  border: none;
  height: 2rem;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--dark-grey);
  cursor: ${({ cursor }: Props) => cursor};
  background-color: var(--soft-background-color);
`;
