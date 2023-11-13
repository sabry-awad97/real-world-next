import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import ThemedLayout from './components/ThemedLayout';

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
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <ThemeProvider>
          <ThemedLayout>{children}</ThemedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
