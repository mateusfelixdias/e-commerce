import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-around;

  h1 {
    color: #5d5d6d;
    font-size: 2.5rem;
  }

  div {
    gap: 2rem;
    display: flex;
    align-items: center;

    div {
      width: 25rem;
      display: flex;
      height: 2.5rem;
      border-radius: 8px;
      align-items: center;
      background-color: #f3f5f6;
      justify-content: space-around;

      button {
        border: none;
        cursor: pointer;
        background-color: #f3f5f6;
      }

      input {
        border: 0;
        width: 70%;
        height: 100%;
        outline: none;
        color: #737380;
        font-size: 0.875rem;
        background-color: #f3f5f6;
      }

      @media (max-width: 760px) {
        width: 20rem;
      }
    }
  }

  button {
    border: none;
    cursor: pointer;
    background-color: #fff;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 651px) {
    display: none;
  }
`;
