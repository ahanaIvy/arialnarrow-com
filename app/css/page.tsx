import { Container } from '@/app/components/ui/Container';

export default function CSSPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow CSS Guide</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Complete guide to using Arial Narrow on the web with CSS.
        </p>

        <div className="space-y-6">
          <div className="border border-border rounded-xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-3">Basic CSS Usage</h2>
            <pre className="bg-secondary/30 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`.text-arial-narrow {
  font-family: 'Arial Narrow', Arial, sans-serif;
}

.text-arial-narrow-bold {
  font-family: 'Arial Narrow Bold', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
}`}</code>
            </pre>
          </div>

          <div className="border border-border rounded-xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-3">@font-face Implementation</h2>
            <pre className="bg-secondary/30 p-4 rounded-lg overflow-x-auto text-sm">
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
            <h2 className="text-xl font-bold text-amber-800 mb-2">Important</h2>
            <p className="text-sm text-amber-700">
              Ensure you have a proper web font license from Monotype before using Arial Narrow on the web.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
