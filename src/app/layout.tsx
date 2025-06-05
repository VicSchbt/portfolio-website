import type { Metadata } from 'next';
import './styles/globals.scss';
import Footer from '@/app/components/Footer/Footer';
import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Victoire Schubert – Creative Developer',
  description:
    'A creative frontend portfolio built with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
