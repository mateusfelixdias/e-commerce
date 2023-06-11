import styled from 'styled-components';

interface Props {
  color: string;
  fontWeight: number;
  borderStyle: string;
  borderColor: string;
  backgroundColor: string;
}

export const Container = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 400;
  align-items: center;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  color: ${({ color }: Props) => color};
  font-weight: ${({ fontWeight }: Props) => fontWeight};
  border-style: ${({ borderStyle }: Props) => borderStyle};
  border-color: ${({ borderColor }: Props) => borderColor};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
`;
