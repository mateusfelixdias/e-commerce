'use client';

import Button from './steps/Button';
import { useEffect, useState } from 'react';
import BackAndNextButton from './steps/BackAndNextButton';
import useProductsContext from '../../context/ProductsContext';
import { ButtonsContainer, Container, PoteDots } from './styles';

export default function Pagination() {
  const { setCurrentPage, setItemsCurrentPage } = useProductsContext();
  const { products, currentPage, productsFiltered } = useProductsContext();

  const data = productsFiltered.length ? productsFiltered : products;

  const [items, setItems] = useState([...data]);

  const itemsByPage = 12;
  const LimitSampleButtons = 5;
  const totalItems = items.length;

  const totalPages = Math.ceil(totalItems / itemsByPage);

  let startInterval = Math.max(1, currentPage - Math.floor(LimitSampleButtons / 2));
  let endInterval = Math.min(startInterval + LimitSampleButtons - 1, totalPages);

  startInterval = Math.max(1, endInterval - LimitSampleButtons + 1);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const calculateItemsCurrentPage = () => {
    const initialIndex = (currentPage - 1) * itemsByPage;
    const endIndex = initialIndex + itemsByPage;

    return items.slice(initialIndex, endIndex);
  };

  const renderButtonsPagination = () => {
    const buttons = [];

    const PoteDotsOne = () => <PoteDots key="pote-dots-one">...</PoteDots>;
    const FirstButton = () => (
      <Button
        key={1}
        currentIndex={1}
        currentPage={currentPage}
        onGoToPage={() => goToPage(1)}
      >
        1
      </Button>
    );

    if (startInterval > 1) buttons.push(<FirstButton />);
    if (startInterval > 2) buttons.push(<PoteDotsOne />);

    for (let pageNumber = startInterval; pageNumber <= endInterval; pageNumber++) {
      buttons.push(
        <Button
          key={pageNumber}
          currentPage={currentPage}
          currentIndex={pageNumber}
          onGoToPage={() => goToPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      );
    }

    const PoteDotsTwo = () => <PoteDots key="pote-dots-two">...</PoteDots>;
    const LastButton = () => (
      <Button
        key={totalPages}
        currentIndex={totalPages}
        currentPage={currentPage}
        onGoToPage={() => goToPage(totalPages)}
      >
        {totalPages}
      </Button>
    );

    if (endInterval < totalPages) buttons.push(<LastButton />);
    if (endInterval < totalPages - 1) buttons.push(<PoteDotsTwo />);

    return buttons;
  };

  useEffect(() => {
    setItems([...data]);
  }, [data]);

  useEffect(() => {
    const items = calculateItemsCurrentPage();
    setItemsCurrentPage(items);
  }, [currentPage, items]);

  return (
    <Container>
      <ButtonsContainer>{renderButtonsPagination()}</ButtonsContainer>

      <BackAndNextButton
        onGoToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Container>
  );
}
