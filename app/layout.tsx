import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/components/ui/Header';
import { Footer } from '@/app/components/ui/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Arial Narrow — The Definitive Resource Hub',
    template: '%s | ArialNarrow.com',
  },
  description: 'Arial Narrow font preview, generator, styles, alternatives, CSS guide, license information, and installation instructions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
