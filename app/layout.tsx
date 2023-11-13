import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ShoppingCartProvider } from './components/context/cartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real World Next',
  description: 'Real World Next',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </main>
      </body>
    </html>
  );
}
