import { Container } from '@/app/components/ui/Container';

export default function VsRobotoCondensedPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow vs Roboto Condensed</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare Arial Narrow and Roboto Condensed side-by-side.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-lg border border-border bg-white">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Arial Narrow</h2>
            <div className="p-4 bg-secondary/20 rounded" style={{ fontFamily: '"Arial Narrow", Arial, sans-serif', fontSize: '28px' }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-white">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Roboto Condensed</h2>
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
                <td className="p-3 border border-border">Apache License 2.0 (Free)</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Design Style</td>
                <td className="p-3 border border-border">Neo-grotesque</td>
                <td className="p-3 border border-border">Humanist geometric</td>
              </tr>
              <tr>
                <td className="p-3 border border-border font-medium">Web Font</td>
                <td className="p-3 border border-border">Requires purchase</td>
                <td className="p-3 border border-border">Free on Google Fonts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-secondary/20 rounded-xl border border-border">
          <h2 className="text-xl font-bold mb-3">Which Should You Choose?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Choose Arial Narrow if:</strong> You're working in a Microsoft environment or need a classic corporate look.</li>
            <li><strong className="text-foreground">Choose Roboto Condensed if:</strong> You're building a website and want a free, open-source option.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
