import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arial Narrow in CSS — @font-face Code & Fallback font-family Stack',
  description: 'How to use Arial Narrow font in CSS. Copy production-ready @font-face code snippets, cross-browser font-family fallback stacks, and web font licensing rules.',
  alternates: {
    canonical: '/css',
  },
  openGraph: {
    title: 'Arial Narrow in CSS — @font-face Code & Fallback font-family Stack',
    description: 'Copy production-ready Arial Narrow @font-face rules, cross-browser font-family stacks, and web font specs.',
    url: 'https://arialnarrow.com/css',
  },
};

export default function CSSPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow CSS Guide</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Complete implementation guide for using Arial Narrow on the modern web with CSS.
        </p>

        <div className="space-y-6">
          <div className="border border-border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-3">Basic CSS Font-Family Usage</h2>
            <pre className="bg-secondary/40 p-4 rounded-lg overflow-x-auto text-sm font-mono">
              <code>{`.text-arial-narrow {
  font-family: 'Arial Narrow', 'Nimbus Sans L', sans-serif-condensed, sans-serif;
}

.text-arial-narrow-bold {
  font-family: 'Arial Narrow', 'Nimbus Sans L', sans-serif-condensed, sans-serif;
  font-weight: 700;
}`}</code>
            </pre>
          </div>

          <div className="border border-border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-3">@font-face Implementation</h2>
            <pre className="bg-secondary/40 p-4 rounded-lg overflow-x-auto text-sm font-mono">
              <code>{`@font-face {
  font-family: 'Arial Narrow';
  src: url('/fonts/ArialNarrow.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Arial Narrow';
  src: url('/fonts/ArialNarrow-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}`}</code>
            </pre>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Important Licensing Note</h2>
            <p className="text-sm text-amber-800">
              Ensure you have a proper web font license from Monotype before hosting and serving Arial Narrow web font files on public domains.
              <Link href="/license" className="text-primary hover:underline ml-1 font-medium">
                Learn more about licensing →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
