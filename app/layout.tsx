import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

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
        <div className="flex flex-col h-full">
          <Navbar />
          <main className="flex-1 bg-gray-100 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
