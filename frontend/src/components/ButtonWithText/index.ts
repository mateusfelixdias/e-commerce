import { Text } from '../Text/styles';
import styled from 'styled-components';

interface Props {
  gap?: string;
  color: string;
  width: string;
  height: string;
  marginTop?: string;
  backgroundColor: string;
}

const Button = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  gap: ${({ gap }: Props) => gap};
  width: ${({ width }: Props) => width};
  height: ${({ height }: Props) => height};
  margin-top: ${({ marginTop }: Props) => marginTop};
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
`;

export const ButtonWithText = styled(Button).attrs({ as: Text })`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ color }: Props) => color};
`;

export default ButtonWithText;
