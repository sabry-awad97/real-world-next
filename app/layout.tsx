import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { ColorModeScript, extendTheme } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real World Next',
  description: 'Real World Next',
};

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
