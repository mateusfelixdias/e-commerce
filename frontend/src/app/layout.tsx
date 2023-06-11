import { Saira } from 'next/font/google';
import { ProductsProvider } from '../context/ProductsContext';

import './globals.css';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin-ext'],
});

export const metadata = {
  title: 'Capputeeno',
  description: 'E-commerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={saira.className}>
      <ProductsProvider>
        <body>{children}</body>
      </ProductsProvider>
    </html>
  );
}
