import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: none;
  align-items: center;
  background-color: var(--white);
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: var(--slate-color);
  }

  div {
    gap: 1rem;
    display: flex;
    align-items: center;

    div {
      width: 20rem;
      display: flex;
      height: 2.5rem;
      border-radius: 8px;
      align-items: center;
      justify-content: space-around;
      background-color: var(--color-white-ice);

      button {
        border: none;
        cursor: pointer;
        background-color: var(--color-white-ice);
      }

      input {
        border: 0;
        width: 70%;
        height: 100%;
        outline: none;
        font-size: 0.875rem;
        color: var(--dark-grey);
        background-color: var(--color-white-ice);
      }

      @media (max-width: 400px) {
        width: 15rem;
      }
    }
  }

  button {
    border: none;
    cursor: pointer;
    background-color: var(--white);
  }

  @media (max-width: 651px) {
    display: flex;
  }
`;
