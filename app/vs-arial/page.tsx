import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

export default function VsArialPage() {
  return (
    <>
      <SEO
        title="Arial Narrow vs Arial — Which Font Should You Use?"
        description="Detailed comparison of Arial Narrow vs Arial. See side-by-side examples, width differences, and learn when to use each font."
        keywords={['Arial Narrow vs Arial', 'Arial Narrow comparison', 'Arial vs Arial Narrow']}
      />
      <Schema 
        type="Article" 
        data={{
          name: 'Arial Narrow vs Arial Comparison',
          description: 'Detailed comparison of Arial Narrow and Arial.',
          articleSection: 'Font Comparisons',
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Arial Narrow vs Arial', href: '/vs-arial', current: true },
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow vs Arial</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Both fonts share the same DNA, but Arial Narrow is approximately 
            20% narrower. Here's how they compare.
          </p>

          {/* Visual Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-lg border border-border bg-white">
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">Arial Narrow</h2>
              <div className="p-4 bg-secondary/20 rounded" style={{ fontFamily: '"Arial Narrow", Arial, sans-serif', fontSize: '28px' }}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-white">
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">Arial</h2>
              <div className="p-4 bg-secondary/20 rounded" style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px' }}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-3 border border-border font-semibold">Feature</th>
                  <th className="text-left p-3 border border-border font-semibold">Arial Narrow</th>
                  <th className="text-left p-3 border border-border font-semibold">Arial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-border font-medium">Width</td>
                  <td className="p-3 border border-border">Condensed (~20% narrower)</td>
                  <td className="p-3 border border-border">Standard</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Best Use</td>
                  <td className="p-3 border border-border">Headers, UI, dense layouts</td>
                  <td className="p-3 border border-border">Body text, general use</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Readability</td>
                  <td className="p-3 border border-border">Good at larger sizes</td>
                  <td className="p-3 border border-border">Excellent at all sizes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Web Font</td>
                  <td className="p-3 border border-border">Requires separate license</td>
                  <td className="p-3 border border-border">Usually pre-installed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h2 className="text-xl font-bold mb-3">Which Should You Choose?</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Choose Arial Narrow if:</strong> You need to fit more text into a limited horizontal space, or you want a modern, condensed look for headers and UI elements.</li>
              <li><strong className="text-foreground">Choose Arial if:</strong> You're writing long-form body text, or you need maximum legibility at small sizes.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/vs-roboto-condensed" className="text-primary hover:underline text-sm">
              Compare Arial Narrow vs Roboto Condensed →
            </Link>
            <Link href="/alternatives" className="text-primary hover:underline text-sm">
              See more alternatives →
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}