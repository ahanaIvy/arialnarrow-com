import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Arial Narrow vs Roboto Condensed — Head-to-Head Font Comparison',
  description: 'Compare Arial Narrow and Roboto Condensed side-by-side. Inspect licensing differences, geometric structures, web font delivery, and optimal use cases.',
  alternates: {
    canonical: '/vs-roboto-condensed',
  },
  openGraph: {
    title: 'Arial Narrow vs Roboto Condensed — Head-to-Head Font Comparison',
    description: 'Compare Arial Narrow and Roboto Condensed side-by-side with specimens, open source vs proprietary breakdown.',
    url: 'https://arialnarrow.com/vs-roboto-condensed',
  },
};

export default function VsRobotoCondensedPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow vs Roboto Condensed</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare Arial Narrow and Roboto Condensed side-by-side in terms of licensing, metrics, and typographic design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg border border-border bg-white">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Arial Narrow (Monotype)</h2>
            <div className="p-4 bg-secondary/20 rounded" style={{ fontFamily: '"Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif', fontSize: '28px' }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-white">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Roboto Condensed (Google Fonts)</h2>
            <div className="p-4 bg-secondary/20 rounded" style={{ fontFamily: '"Roboto Condensed", sans-serif', fontSize: '28px' }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-3 border border-border font-semibold">Feature</th>
                <th className="text-left p-3 border border-border font-semibold">Arial Narrow</th>
                <th className="text-left p-3 border border-border font-semibold">Roboto Condensed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-border font-medium">License</td>
                <td className="p-3 border border-border">Proprietary (Monotype)</td>
                <td className="p-3 border border-border">Apache License 2.0 (Free &amp; Open Source)</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Design Style</td>
                <td className="p-3 border border-border">Neo-grotesque</td>
                <td className="p-3 border border-border">Humanist geometric</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Web Font Availability</td>
                <td className="p-3 border border-border">Requires commercial license for self-hosting</td>
                <td className="p-3 border border-border">Free on Google Fonts CDN</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-secondary/20 rounded-xl border border-border">
          <h2 className="text-xl font-bold mb-3">Which Should You Choose?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Choose Arial Narrow if:</strong> You&apos;re working in an enterprise Microsoft ecosystem, corporate PowerPoint/Word templates, or standard pre-installed Windows setups.</li>
            <li><strong className="text-foreground">Choose Roboto Condensed if:</strong> You&apos;re building modern web and mobile applications with 100% open-source licensing without web font fees.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
