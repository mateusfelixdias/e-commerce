import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 40rem;
  height: 36.25rem;
  border-radius: 0.375rem;
  margin: 1.46875rem 0 5.5625rem 10rem;
`;

export const Container = styled.div`
  gap: 2rem;
  display: flex;
  margin-right: 10rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const DescriptionContainer = styled.div`
  min-height: 19rem;
`;

export const DetailsContainer = styled.div`
  gap: 2rem;
  margin-top: 4.4375rem;
`;

export const ProductDetailsContainer = styled.div`
  gap: 0.25rem;
`;

export const NameProduct = styled.div`
  gap: 0.75rem;
`;

export const PriceContainer = styled.div`
  gap: 1.5rem;
`;
