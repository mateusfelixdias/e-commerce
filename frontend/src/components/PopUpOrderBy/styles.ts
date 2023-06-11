import styled from 'styled-components';

export const Container = styled.div`
  width: 12rem;
  height: 9.25rem;
  offset: 0 0.25rem;
  position: absolute;
  border-radius: 0.25rem;
  background-color: var(--white);
  display: ${({ display }: { display: string }) => display};
  box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1) -0.125rem -0.125rem
    0.25rem rgba(0, 0, 0, 0.1);
`;

export const OptionsContainer = styled.div`
  margin: 0.75rem 1rem;
  flex-direction: column;
  background-color: var(--white);
`;

export const Button = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: var(--dark-grey);
  background-color: var(--white) !important;
  padding-bottom: ${({ paddingBottom }: { paddingBottom: string }) => paddingBottom};
`;
