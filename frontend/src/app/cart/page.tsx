'use client';

import styles from '../page.module.css';
import Text from '../../components/Text';
import CardProduct from './steps/CardProduct';
import Headers from '../../components/Headers';
import { useSearchParams } from 'next/navigation';
import ButtonToBack from '../../components/ButtonToBack';
import OrderSummary from '../../components/OrderSummary';
import currencyFormat from '../../shared/currencyFormat';
import useProductsContext from '../../context/ProductsContext';
import {
  Container,
  TotalPriceContainer,
  ProductCardWithOrderSummary,
} from './styles';

export default function Cart() {
  const { products } = useProductsContext();

  const searchParams = useSearchParams();

  const productId = searchParams.get('productId');
  const product = products.find(({ id }) => id === productId);

  if (!product) return null;

  const { description, image_url, name, price_in_cents } = product;

  return (
    <>
      <header className={styles.header}>
        <Headers />
      </header>

      <ButtonToBack />

      <Container>
        <Text color={'var(--anthracite-color)'} fontWeight={500} fontSize={'2rem'}>
          SEU CARRINHO
        </Text>

        <TotalPriceContainer>
          <Text fontSize="1rem" fontWeight={300} color="var(--anthracite-color)">
            Total (1 produtos)
          </Text>
          {'  '}
          <Text fontSize="1rem" fontWeight={600} color="var(--anthracite-color)">
            {currencyFormat(price_in_cents)}
          </Text>
        </TotalPriceContainer>

        <ProductCardWithOrderSummary>
          <CardProduct
            name={name}
            imageUrl={image_url}
            price={price_in_cents}
            description={description}
          />

          <OrderSummary price={price_in_cents} />
        </ProductCardWithOrderSummary>
      </Container>
    </>
  );
}
