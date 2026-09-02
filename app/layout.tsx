import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/app/components/ui/Header';
import { Footer } from '@/app/components/ui/Footer';
import { CookieBanner } from '@/app/components/CookieBanner';

export const metadata: Metadata = {
  title: {
    default: 'Arial Narrow — The Definitive Resource Hub',
    template: '%s | ArialNarrow.com',
  },
  description: 'Arial Narrow font preview, generator, styles, alternatives, CSS guide, license information, and installation instructions.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        {/* Dynamic Canonical URL */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set canonical URL dynamically
              const canonicalLink = document.createElement('link');
              canonicalLink.rel = 'canonical';
              canonicalLink.href = window.location.href.split('?')[0];
              document.head.appendChild(canonicalLink);
            `,
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
