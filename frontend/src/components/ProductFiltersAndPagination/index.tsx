'use client';

import Image from 'next/image';
import arrow from '/public/arrow.svg';
import Pagination from '../Pagination';
import PopUpOrderBy from '../PopUpOrderBy';
import { useEffect, useRef, useState } from 'react';
import handleOrderBy from '../../shared/handleOrderBy';
import optionsOrderBy from '../../shared/optionsOrderBy';
import options from '../../shared/optionsForProductsFilter';
import useProductsContext from '../../context/ProductsContext';
import {
  Rectangle,
  Container,
  FilterButton,
  ButtonOrderBy,
  FiltersContainer,
  ArrangeAndFilterButtonContainer,
} from './styles';

export default function ProductFiltersAndPagination() {
  const { products, productsFiltered, setProductsFiltered } = useProductsContext();

  const popupRef = useRef(null);
  const buttonRefs = useRef([]);

  const [option, setOption] = useState('');
  const [orderBy, setOrderBy] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(0);
  const [rectangleWidth, setRectangleWidth] = useState(0);
  const [isOpenPopUpOrderBy, setIsOpenPopUpOrderBy] = useState(false);

  const close = () => {
    setIsOpenPopUpOrderBy(!isOpenPopUpOrderBy);
  };

  const open = () => {
    setIsOpenPopUpOrderBy(!isOpenPopUpOrderBy);
  };

  const handleClickOption = (index: number, option: string) => {
    setOption(option);
    setButtonClicked(index);
  };

  const getRectangleWidthFromButton = () => {
    const currentButton = buttonRefs.current[buttonClicked];
    const buttonRef = currentButton as { offsetWidth: number };

    if (buttonRef) setRectangleWidth(buttonRef.offsetWidth);
  };

  const setupOutsideClickHandler = () => {
    const handleOutsideClick = (event: Event) => {
      const current = popupRef.current as any;
      if (current && !current.contains(event.target)) setIsOpenPopUpOrderBy(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  };

  const filterAndSortProducts = () => {
    const sortedData = handleOrderBy({ orderBy, productsFiltered: [...products] });
    const data = sortedData ?? [...products];

    if (!option.length) return setProductsFiltered([...data]);

    const filterByOption = [...data].filter(({ category }) => {
      return category === option;
    });

    setProductsFiltered(filterByOption);
  };

  const renderFilters = () => {
    const buttons = options.map(({ label, value }, index) => {
      const isClicked = index === buttonClicked;

      const fontWeight = isClicked ? '600' : '';
      const color = isClicked ? '#41414D' : 'var(--dark-grey)';

      return (
        <div key={label}>
          <FilterButton
            style={{ color }}
            fontWeight={fontWeight}
            onClick={() => handleClickOption(index, value)}
            ref={(el) => (buttonRefs.current[index] = el as never)}
          >
            {label}
          </FilterButton>

          {isClicked && <Rectangle width={rectangleWidth} />}
        </div>
      );
    });

    return buttons;
  };

  useEffect(() => {
    setupOutsideClickHandler();
  }, []);

  useEffect(() => {
    getRectangleWidthFromButton();
  }, [buttonClicked]);

  useEffect(() => {
    filterAndSortProducts();
  }, [option, orderBy]);

  const label = optionsOrderBy[orderBy - 1]?.label;
  const labelOrderBy = orderBy === 0 ? 'Organizar por' : label;

  return (
    <Container>
      <ArrangeAndFilterButtonContainer>
        <FiltersContainer>{renderFilters()}</FiltersContainer>

        <ButtonOrderBy onClick={open} ref={popupRef}>
          <span>{labelOrderBy}</span>
          <Image src={arrow} alt="Arrow" />
        </ButtonOrderBy>
      </ArrangeAndFilterButtonContainer>

      <Pagination />

      <PopUpOrderBy
        close={close}
        popupRef={popupRef}
        setOrderBy={setOrderBy}
        visible={isOpenPopUpOrderBy}
        productsFiltered={productsFiltered}
        setProductsFiltered={setProductsFiltered}
      />
    </Container>
  );
}
