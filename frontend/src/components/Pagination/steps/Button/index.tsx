'use client';

import { Container } from './styles';

interface Props {
  currentPage: number;
  currentIndex: number;
  children: React.ReactNode;
  onGoToPage: () => void;
}

export default function Button(props: Props) {
  const { currentIndex, children, currentPage, onGoToPage } = props;

  const isFocus = currentIndex === currentPage;

  const fontWeight = isFocus ? 600 : 400;
  const borderStyle = isFocus ? 'solid' : 'none';
  const borderColor = isFocus ? 'var(--peach-color)' : '';
  const color = isFocus ? 'var(--peach-color)' : 'var(--dark-grey)';
  const backgroundColor = !isFocus
    ? 'var(--soft-background-color)'
    : 'var(--neutral-background-color)';

  return (
    <Container
      color={color}
      onClick={onGoToPage}
      fontWeight={fontWeight}
      borderStyle={borderStyle}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
}
