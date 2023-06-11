'use client';

import { Text } from './styles';
import { ReactNode } from 'react';

interface Props {
  color: string;
  fontSize: string;
  fontWeight: number;
  children: ReactNode;
}

export default function ({ children, color, fontSize, fontWeight }: Props) {
  return (
    <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}
