'use client';

import HeaderMobile from '../HeaderMobile';
import { useEffect, useState } from 'react';
import { HeadersContainer } from './styles';
import HeaderDesktop from '../HeaderDesktop';
import useProductsContext from '../../context/ProductsContext';

export default function Headers() {
  const { products, setProductsFiltered } = useProductsContext();

  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (!keyword.length) return;

    const filterProducts = products.filter(({ name }) => {
      const newName = name.toLowerCase();
      const newKeyword = keyword.trim().toLowerCase();

      return newName.includes(newKeyword);
    });

    setProductsFiltered(filterProducts);
  };

  useEffect(() => {
    setProductsFiltered(products);
  }, [keyword.length === 0]);

  return (
    <HeadersContainer>
      <HeaderDesktop
        keyword={keyword}
        onKeyword={setKeyword}
        onSearch={handleSearch}
      />

      <HeaderMobile
        keyword={keyword}
        onKeyword={setKeyword}
        onSearch={handleSearch}
      />
    </HeadersContainer>
  );
}
