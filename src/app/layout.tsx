import { Saira } from 'next/font/google';

import './globals.css';

const saira = Saira({ weight: ['300', '400', '500', '600'], subsets: ['latin'] });

export const metadata = {
  title: 'Capputeeno',
  description: 'E-commerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
