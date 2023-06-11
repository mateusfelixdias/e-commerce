'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import Text from '../../components/Text';
import Headers from '../../components/Headers';
import handbagWhite from '/public/handbagWhite.svg';
import ButtonToBack from '../../components/ButtonToBack';
import currencyFormat from '../../shared/currencyFormat';
import { useRouter, useSearchParams } from 'next/navigation';
import ButtonWithText from '../../components/ButtonWithText';
import useProductsContext from '../../context/ProductsContext';
import {
  Container,
  NameProduct,
  ProductImage,
  PriceContainer,
  DetailsContainer,
  DescriptionContainer,
  ProductDetailsContainer,
} from './styles';

export default function Product() {
  const { products } = useProductsContext();

  const router = useRouter();
  const searchParams = useSearchParams();

  const navigation = (route: string) => router.push(route);

  const productId = searchParams.get('productId');
  const product = products.find(({ id }) => id === productId);

  if (!product) return null;

  const { description, image_url, name, price_in_cents } = product;

  const price = price_in_cents;
  const [firstName] = name.split(' ');

  const handleAddCart = () => {
    navigation(`/cart?productId=${productId}`);
  };

  return (
    <>
      <header className={styles.header}>
        <Headers />
      </header>

      <Container>
        <div>
          <ButtonToBack />

          <ProductImage src={image_url} alt="Imagem do produto." />
        </div>

        <DetailsContainer>
          <ProductDetailsContainer>
            <NameProduct>
              <Text
                fontWeight={400}
                fontSize={'1rem'}
                color={'var(--anthracite-color)'}
              >
                {firstName}
              </Text>

              <Text
                fontWeight={300}
                fontSize={'2rem'}
                color={'var(--anthracite-color)'}
              >
                {name}
              </Text>
            </NameProduct>

            <PriceContainer>
              <Text
                fontWeight={600}
                fontSize={'1.25rem'}
                color={'var(--color-dark-gray)'}
              >
                {currencyFormat(price)}
              </Text>

              <Text
                fontWeight={400}
                fontSize={'0.75rem'}
                color={'var(--anthracite-color)'}
              >
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
                R$900,00.
              </Text>
            </PriceContainer>
          </ProductDetailsContainer>

          <DescriptionContainer>
            <Text fontSize={'1rem'} fontWeight={500} color={'var(--dark-grey)'}>
              Descrição
            </Text>

            <Text
              fontWeight={400}
              fontSize={'0.875rem'}
              color={'var(--anthracite-color)'}
            >
              {description}
            </Text>
          </DescriptionContainer>

          <ButtonWithText
            gap={'1rem'}
            width="28rem"
            height={'2.5rem'}
            onClick={handleAddCart}
            color={'var(--neutral-background-color)'}
            backgroundColor={'var(--color-blue-navy)'}
          >
            <Image src={handbagWhite} alt="Bolsa" />
            Adicionar ao carrinho
          </ButtonWithText>
        </DetailsContainer>
      </Container>
    </>
  );
}
