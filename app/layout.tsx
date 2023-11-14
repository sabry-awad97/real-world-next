import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import ReduxProvider from './state/redux/ReduxProvider';

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
        <ReduxProvider>
          <Navbar />
          <main className="w-9/12 m-auto pt-10">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
