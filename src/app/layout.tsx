import React from 'react';
import '../index.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';

export const metadata = {
  title: 'JR Hospital',
  description: 'Quality Healthcare. Trusted Care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col bg-white font-sans text-jr-ink">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
