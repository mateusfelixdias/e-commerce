import dayjs from 'dayjs';
import IProduct from '../../interfaces/product';

interface Params {
  orderBy: number;
  productsFiltered: IProduct[];
}

export default function handleOrderBy({ orderBy, productsFiltered }: Params) {
  const formattedDate = (date: Date) => {
    const formatted = dayjs(date).format('YYYY-MM-DD') as any;
    return formatted;
  };

  const sortDataByDate = () => {
    const sortedData = [...productsFiltered].sort((a, b) => {
      return formattedDate(b.created_at) - formattedDate(a.created_at);
    });
    return sortedData;
  };

  const sortDataByBestSellers = () => {
    const sortedData = [...productsFiltered].sort((a, b) => {
      return b.sales - a.sales;
    });
    return sortedData;
  };

  const sortDataByPriceAscending = () => {
    const sortedData = [...productsFiltered].sort((a, b) => {
      return a.price_in_cents - b.price_in_cents;
    });
    return sortedData;
  };

  const sortDataByPriceDescending = () => {
    const sortedData = [...productsFiltered].sort((a, b) => {
      return b.price_in_cents - a.price_in_cents;
    });
    return sortedData;
  };

  switch (orderBy) {
    case 1:
      return sortDataByDate();
    case 2:
      return sortDataByPriceDescending();
    case 3:
      return sortDataByPriceAscending();
    case 4:
      return sortDataByBestSellers();
    default:
      return null;
  }
}
