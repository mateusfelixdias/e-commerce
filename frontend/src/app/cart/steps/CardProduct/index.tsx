'use client';

import Image from 'next/image';
import trash from '/public/trash.svg';
import Text from '../../../../components/Text';
import currencyFormat from '../../../../shared/currencyFormat';
import {
  Trash,
  Container,
  ProductImage,
  CardWithTrash,
  PriceWithTotal,
  DetailsProduct,
  SelectProductsTotal,
} from './styles';

interface Props {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export default function CardProduct(props: Props) {
  const optionsTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { imageUrl, name, description, price } = props;

  return (
    <Container>
      <ProductImage src={imageUrl} alt={`${name}`} />

      <DetailsProduct>
        <CardWithTrash>
          <Text
            fontWeight={300}
            fontSize={'1.25rem'}
            color="var(--anthracite-color)"
          >
            {name}
          </Text>

          <Trash>
            <Image src={trash} alt="trash" />
          </Trash>
        </CardWithTrash>

        <Text color="var(--anthracite-color)" fontSize={'0.75rem'} fontWeight={400}>
          {description}
        </Text>

        <PriceWithTotal>
          <SelectProductsTotal>
            {optionsTotal.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </SelectProductsTotal>

          <Text color="var(--anthracite-color)" fontSize={'1rem'} fontWeight={600}>
            {currencyFormat(price)}
          </Text>
        </PriceWithTotal>
      </DetailsProduct>
    </Container>
  );
}
