'use client';

import Text from '../Text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toGoBack from '/public/toGoBack.svg';
import { ContainerToGoBack } from './styles';

export default function ButtonToBack() {
  const { back } = useRouter();

  return (
    <ContainerToGoBack onClick={back}>
      <Image src={toGoBack} alt="toGoBack" />

      <Text color={'var(--color-blue-steel)'} fontSize={'1rem'} fontWeight={500}>
        Voltar
      </Text>
    </ContainerToGoBack>
  );
}
