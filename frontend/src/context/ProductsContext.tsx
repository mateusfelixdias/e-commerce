'use client';

import { products } from '../../../api/db';
import IProduct from '../interfaces/product';
import IChildren from '../interfaces/children';
import { createContext, useContext, useEffect, useState } from 'react';

const data = products;

interface Props {
  currentPage: number;
  products: IProduct[];
  productsFiltered: IProduct[];
  itemsCurrentPage: IProduct[];
  setProducts: (products: IProduct[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setProductsFiltered: (products: IProduct[]) => void;
  setItemsCurrentPage: (itemsCurrentPage: IProduct[]) => void;
}

const ProductsContext = createContext({} as Props);

export const ProductsProvider = ({ children }: IChildren) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([] as IProduct[]);
  const [productsFiltered, setProductsFiltered] = useState([] as IProduct[]);
  const [itemsCurrentPage, setItemsCurrentPage] = useState([] as IProduct[]);

  useEffect(() => {
    setProducts([...data]);
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        currentPage,
        itemsCurrentPage,
        productsFiltered,
        setProducts,
        setCurrentPage,
        setProductsFiltered,
        setItemsCurrentPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export default useProductsContext;
