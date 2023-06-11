'use client';

import { useRouter } from 'next/navigation';
import currencyFormat from '../../shared/currencyFormat';
import { Name, Line, Price, Details, Container, ProductImage } from './styles';

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function CardProduct(props: Props) {
  const { id, name, imageUrl, price } = props;

  const router = useRouter();
  const navigation = () => router.push(`/product?productId=${id}`);

  return (
    <Container onClick={navigation}>
      <ProductImage src={imageUrl} alt={`Imagem ${name}`} />

      <Details>
        <Name>{name}</Name>
        <Line />
        <Price>{currencyFormat(price)}</Price>
      </Details>
    </Container>
  );
}
