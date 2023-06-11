import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10rem;
  margin-top: 1rem;
  align-items: flex-end;
  flex-direction: column;
`;

export const ArrangeAndFilterButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FiltersContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  div {
    flex-direction: column;
  }
`;

export const FilterButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  background-color: var(--primary-color);
  font-weight: ${({ fontWeight }: { fontWeight: string }) => fontWeight};
`;

export const ButtonOrderBy = styled.button`
  gap: 0.5rem;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: var(--primary-color);

  span {
    font-size: 0.875rem;
    color: var(--dark-grey);
  }
`;

export const Rectangle = styled.div`
  height: 0.25rem;
  background-color: var(--peach-color);
  width: ${({ width }: { width: number }) => `${width / 16}rem`};
`;
