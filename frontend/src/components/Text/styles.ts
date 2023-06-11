import styled from 'styled-components';

interface Props {
  color: string;
  fontSize: string;
  fontWeight: number;
}

export const Text = styled.span`
  color: ${({ color }: Props) => color};
  font-size: ${({ fontSize }: Props) => fontSize};
  font-weight: ${({ fontWeight }: Props) => fontWeight};
`;
