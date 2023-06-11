import { MutableRefObject } from 'react';
import IProduct from '../../interfaces/product';
import handleOrderBy from '../../shared/handleOrderBy';
import optionsOrderBy from '../../shared/optionsOrderBy';
import { Button, Container, OptionsContainer } from './styles';

interface Props {
  visible: boolean;
  productsFiltered: IProduct[];
  popupRef: MutableRefObject<any>;
  close: () => void;
  setOrderBy: (orderBy: number) => void;
  setProductsFiltered: (products: IProduct[]) => void;
}

export default function PopUpOrderBy(props: Props) {
  const { visible, popupRef, productsFiltered } = props;
  const { close, setOrderBy, setProductsFiltered } = props;

  if (!popupRef.current) return null;

  const { current } = popupRef;
  const buttonRect = current.getBoundingClientRect();

  const buttonLeft = buttonRect.left - 60;
  const buttonTop = buttonRect.top + buttonRect.height + 5;

  const handleSelectedOption = (value: number) => {
    setOrderBy(value);

    const sortedData = handleOrderBy({ orderBy: value, productsFiltered });
    setProductsFiltered(sortedData ?? [...productsFiltered]);

    close();
  };

  const renderOptionsOrderBy = () => {
    const buttons = optionsOrderBy.map(({ label, value }, index) => {
      const length = optionsOrderBy.length;
      const paddingBottom = ++index === length ? '0' : '0.75rem';

      return (
        <Button
          key={value}
          paddingBottom={paddingBottom}
          onClick={() => handleSelectedOption(value)}
        >
          {label}
        </Button>
      );
    });

    return buttons;
  };

  return (
    <Container
      display={visible ? 'flex' : 'none'}
      style={{ top: buttonTop, left: buttonLeft }}
    >
      <OptionsContainer>{renderOptionsOrderBy()}</OptionsContainer>
    </Container>
  );
}
