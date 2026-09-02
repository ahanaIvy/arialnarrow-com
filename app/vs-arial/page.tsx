import { Container } from '@/app/components/ui/Container';

export default function VsArialPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow vs Arial</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Arial Narrow is approximately 20% narrower than standard Arial.
        </p>

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
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-secondary/20 rounded-xl border border-border">
          <h2 className="text-xl font-bold mb-3">Which Should You Choose?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Choose Arial Narrow if:</strong> You need to fit more text into limited horizontal space.</li>
            <li><strong className="text-foreground">Choose Arial if:</strong> You're writing long-form body text for maximum legibility.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
