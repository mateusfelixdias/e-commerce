import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  outline: none;
  display: flex;
  width: 14.6rem;
  cursor: pointer;
  flex-direction: column;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: (--primary-color);
`;

export const ProductImage = styled.img`
  width: 14.6rem;
  height: 17.15rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const Details = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  flex-grow: 1;
  align-items: stretch;
  flex-direction: column;
  background-color: var(--white);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  margin-left: 0.75rem;
  color: var(--anthracite-color);
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
  margin-left: 0.75rem;
`;

export const Line = styled.div`
  width: 13rem;
  height: 0.0625rem;
  margin-left: 0.75rem;
  background-color: var(--soft-blue-color);
`;
