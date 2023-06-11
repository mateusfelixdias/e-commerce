import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 16rem;
  margin-top: 1.4375rem;
`;

export const TotalPriceContainer = styled.div`
  margin-top: 0.375rem;
`;

export const ProductImage = styled.img`
  width: 16rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

export const DetailsProduct = styled.div`
  width: 30rem;
  height: 100%;
  min-height: 14.5rem;
  background-color: var(--white);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 1rem 1rem 0.21875rem 1.9375rem;
`;

export const CardWithTrash = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0.75rem 0;
  justify-content: space-between;
`;

export const PriceWithTotal = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625rem 0 2rem 0;
  justify-content: space-between;
`;

export const SelectProductsTotal = styled.select`
  outline: none;
  border: solid;
  height: 2.5rem;
  width: 4.0625rem;
  border-radius: 0.5rem;
  color: var(--dark-grey);
  border-width: 0.0625rem;
  border-color: var(--serene-blue);
  background-color: var(--color-white-ice);
`;

export const Trash = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--white);
`;
