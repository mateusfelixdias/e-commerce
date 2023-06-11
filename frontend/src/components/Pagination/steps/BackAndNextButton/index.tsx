'use client';

import Image from 'next/image';
import buttonNext from '/public/buttonNext.svg';
import buttonBack from '/public/buttonBack.svg';
import { ButtonContainer, Container } from './styles';

interface Props {
  totalPages: number;
  currentPage: number;
  onGoToPage: (pageNumber: number) => void;
}

export default function BackAndNextButton(props: Props) {
  const { totalPages, currentPage, onGoToPage } = props;

  const isDisabledButtonBack = currentPage === 1;
  const isDisabledButtonNext = currentPage === totalPages;

  return (
    <Container>
      <ButtonContainer
        disabled={isDisabledButtonBack}
        onClick={() => onGoToPage(currentPage - 1)}
        cursor={isDisabledButtonBack ? 'not-allowed' : 'pointer'}
      >
        <Image src={buttonBack} alt="Icon back!" />
      </ButtonContainer>

      <ButtonContainer
        disabled={isDisabledButtonNext}
        onClick={() => onGoToPage(currentPage + 1)}
        cursor={isDisabledButtonNext ? 'not-allowed' : 'pointer'}
      >
        <Image src={buttonNext} alt="Icon next!" />
      </ButtonContainer>
    </Container>
  );
}
