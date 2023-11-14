import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TopBar from './components/TopBar';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

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
        <Providers>
          <TopBar />
          <Box maxW="container.xl" margin="auto">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
