import styled from 'styled-components';

export const Ancora = styled.a`
  text-decoration-color: var(--dark-grey);
`;

export const Line = styled.div`
  width: 18rem;
  height: 0.0625rem;
  background-color: var(--soft-blue-color);
`;

export const Container = styled.div`
  width: 22rem;
  height: 43.75rem;
  margin-top: 1.5rem;
  margin-bottom: 5.5625rem;
  background-color: var(--white);
`;

export const SubContainer = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`;

export const OrderSummaryContainer = styled.div`
  margin-top: 2rem;
  align-items: center;
`;

export const CheckoutSummary = styled.div`
  gap: 0.75rem;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalSection = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Footer = styled.div`
  gap: 0.75rem;
  display: flex;
  margin-top: 16.5rem;
  flex-direction: column;
  align-items: flex-start;
`;
