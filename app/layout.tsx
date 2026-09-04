import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/app/components/ui/Header';
import { Footer } from '@/app/components/ui/Footer';
import { CookieBanner } from '@/app/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://arialnarrow.com'),
  title: {
    default: 'Arial Narrow Font — Download, Live Preview & SVG Generator',
    template: '%s | ArialNarrow.com',
  },
  description: 'Download Arial Narrow font, preview custom text live, and export vector SVG specimens or CSS @font-face code. Complete typography specs, style weights, and install guide.',
  keywords: [
    'Arial Narrow',
    'Arial Narrow font',
    'download Arial Narrow font',
    'Arial Narrow font free download',
    'Arial Narrow preview',
    'Arial Narrow SVG generator',
    'Arial Narrow Bold',
    'Arial Narrow Italic',
    'condensed font',
    'typography',
    'CSS font-family',
    'Roboto Condensed',
  ],
  authors: [{ name: 'ArialNarrow.com' }],
  creator: 'ArialNarrow.com',
  publisher: 'ArialNarrow.com',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arialnarrow.com',
    siteName: 'ArialNarrow.com',
    title: 'Arial Narrow Font — Download, Live Preview & SVG Generator',
    description: 'Download Arial Narrow font, preview custom text live, and export vector SVG specimens or CSS @font-face code. Complete typography specs and install guide.',
    images: [
      {
        url: '/images/social.png',
        width: 1200,
        height: 630,
        alt: 'Arial Narrow Font Preview & Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arial Narrow Font — Download, Live Preview & SVG Generator',
    description: 'Download Arial Narrow font, preview custom text live, and export vector SVG specimens or CSS code.',
    images: ['/images/social.png'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ArialNarrow.com',
              url: 'https://arialnarrow.com',
              description: 'The definitive resource hub for Arial Narrow — typography, preview tools, comparisons, and implementation guides.',
              about: {
                '@type': 'Thing',
                name: 'Arial Narrow Font',
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJTCP037GJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJTCP037GJ');
          `}
        </Script>

        <CookieBanner />
      </body>
    </html>
  );
}
