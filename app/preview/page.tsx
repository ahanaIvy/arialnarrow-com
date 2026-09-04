import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import { FontPreview } from '@/app/components/preview/FontPreview';
import { FontGenerator } from '@/app/components/preview/FontGenerator';

export const metadata: Metadata = {
  title: 'Arial Narrow Font Preview & SVG Generator — Download Vector Specimen',
  description: 'Preview Arial Narrow online with custom text, size, line-height, and letter spacing. Download your text specimen as vector SVG, PNG, or copy ready-to-use CSS.',
  alternates: {
    canonical: '/preview',
  },
  openGraph: {
    title: 'Arial Narrow Font Preview & SVG Generator — Download Vector Specimen',
    description: 'Test Arial Narrow with custom text, adjust weights, spacing, colors, and download vector SVG or CSS code.',
    url: 'https://arialnarrow.com/preview',
  },
};

export default function PreviewPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow Font Preview &amp; SVG Generator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Test Arial Narrow in real time with custom text, adjust sizing and spacing, and download your typography specimen as a vector SVG file, PNG image, or CSS code.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Live Font Preview &amp; Weights</h2>
            <div className="bg-white rounded-xl border border-border shadow-lg p-6 md:p-8">
              <FontPreview defaultText="Arial Narrow — Custom Preview" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Interactive Generator — Download SVG &amp; Copy CSS</h2>
            <div className="bg-white rounded-xl border border-border shadow-lg p-6 md:p-8">
              <FontGenerator />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
