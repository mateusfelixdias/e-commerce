import Text from '../Text';
import ButtonWithText from '../ButtonWithText';
import currencyFormat from '../../shared/currencyFormat';
import {
  Line,
  Ancora,
  Footer,
  Container,
  SubContainer,
  TotalSection,
  CheckoutSummary,
  OrderSummaryContainer,
} from './styles';

interface Props {
  price: number;
}

export default function OrderSummary({ price }: Props) {
  const delivery = price >= 900 ? 0 : 40;
  const total = price + delivery;

  return (
    <Container>
      <SubContainer>
        <Text color="var(--anthracite-color)" fontSize={'1.25rem'} fontWeight={600}>
          RESUMO DO PEDIDO
        </Text>

        <OrderSummaryContainer>
          <CheckoutSummary>
            <div>
              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={400}>
                Subtotal de produtos
              </Text>

              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={400}>
                {currencyFormat(price)}
              </Text>
            </div>

            <div>
              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={400}>
                Entrega
              </Text>

              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={400}>
                {currencyFormat(delivery)}
              </Text>
            </div>
          </CheckoutSummary>

          <TotalSection>
            <Line />

            <div>
              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={600}>
                Total
              </Text>

              <Text color="var(--anthracite-color)" fontSize="1rem" fontWeight={600}>
                {currencyFormat(total)}
              </Text>
            </div>
          </TotalSection>
        </OrderSummaryContainer>

        <ButtonWithText
          width={'18.1rem'}
          height={'2.75rem'}
          marginTop={'2.5rem'}
          color={'var(--white)'}
          backgroundColor={'var(--color-green-bright)'}
        >
          FINALIZAR A COMPRA
        </ButtonWithText>

        <Footer>
          <Ancora href="#">
            <Text color="var(--dark-grey)" fontWeight={500} fontSize="0.875rem">
              Ajuda
            </Text>
          </Ancora>

          <Ancora href="#">
            <Text color="var(--dark-grey)" fontWeight={500} fontSize="0.875rem">
              reembolsos
            </Text>
          </Ancora>

          <Ancora href="#">
            <Text color="var(--dark-grey)" fontWeight={500} fontSize="0.875rem">
              Entregas e frete
            </Text>
          </Ancora>

          <Ancora href="#">
            <Text color="var(--dark-grey)" fontWeight={500} fontSize="0.875rem">
              Trocas e devoluções
            </Text>
          </Ancora>
        </Footer>
      </SubContainer>
    </Container>
  );
}
