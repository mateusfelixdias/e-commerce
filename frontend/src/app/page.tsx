'use client';

import styles from './page.module.css';
import Headers from '../components/Headers';
import Pagination from '../components/Pagination';
import CardProduct from '../components/CardProduct';
import useProductsContext from '../context/ProductsContext';
import ProductFiltersAndPagination from '../components/ProductFiltersAndPagination';

export default function Home() {
  const { itemsCurrentPage } = useProductsContext();

  const renderItemsCurrentPage = () => {
    const items = itemsCurrentPage.map((item) => {
      const { id, image_url, name, price_in_cents } = item;

      return (
        <CardProduct
          id={id}
          key={id}
          name={name}
          imageUrl={image_url}
          price={price_in_cents}
        />
      );
    });

    return items;
  };

  return (
    <>
      <header className={styles.header}>
        <Headers />
      </header>

      <main className={styles.main}>
        <ProductFiltersAndPagination />

        <div>
          <div className={styles.cardProductsContainer}>
            {renderItemsCurrentPage()}
          </div>

          <div className={styles.pagination}>
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
