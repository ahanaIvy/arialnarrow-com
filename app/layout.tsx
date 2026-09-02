import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Header } from '@/app/components/ui/Header';
import { Footer } from '@/app/components/ui/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://arialnarrow.com'),
  title: {
    default: 'Arial Narrow — The Definitive Resource Hub',
    template: '%s | ArialNarrow.com',
  },
  description: 'Arial Narrow font preview, generator, styles, alternatives, CSS guide, license information, and installation instructions.',
  keywords: ['Arial Narrow', 'Arial Narrow font', 'Arial Narrow download', 'font preview', 'typography'],
  authors: [{ name: 'ArialNarrow.com' }],
  creator: 'ArialNarrow.com',
  publisher: 'ArialNarrow.com',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arialnarrow.com',
    siteName: 'ArialNarrow.com',
    title: 'Arial Narrow — The Definitive Resource Hub',
    description: 'Arial Narrow font preview, generator, styles, alternatives, CSS guide, license information, and installation instructions.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Arial Narrow Font Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arial Narrow — The Definitive Resource Hub',
    description: 'Arial Narrow font preview, generator, styles, alternatives, CSS guide, license information, and installation instructions.',
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://arialnarrow.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}