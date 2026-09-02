import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

export default function CSSPage() {
  return (
    <>
      <SEO
        title="Arial Narrow CSS — @font-face & Webfont Guide"
        description="Complete guide to using Arial Narrow on the web with CSS. Learn @font-face implementation, font-family syntax, and web font licensing."
        keywords={['Arial Narrow CSS', 'Arial Narrow webfont', 'Arial Narrow @font-face', 'Arial Narrow web']}
      />
      <Schema 
        type="WebPage" 
        data={{
          name: 'Arial Narrow CSS Guide',
          description: 'Complete guide to using Arial Narrow on the web with CSS.',
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow CSS & Webfont Guide</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A complete guide to using Arial Narrow on the web with CSS.
          </p>

          <div className="space-y-8">
            <section className="p-6 bg-red-50 border border-red-200 rounded-xl">
              <h2 className="text-xl font-bold text-red-800 mb-2">Important: Licensing</h2>
              <p className="text-sm text-red-700">
                Before using Arial Narrow on the web, ensure you have a proper 
                web font license from Monotype. Using the font without a license 
                is a copyright violation.
                {' '}
                <Link href="/license" className="underline font-medium">
                  Learn more about licensing →
                </Link>
              </p>
            </section>

            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Basic CSS Usage</h2>
              <p className="text-sm text-muted-foreground mb-3">
                If Arial Narrow is installed on the user's system (which it is 
                on most Windows machines), you can use this simple CSS:
              </p>
              <pre className="bg-secondary/30 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`/* Basic font-family */
.text-arial-narrow {
  font-family: 'Arial Narrow', Arial, sans-serif;
}

/* With specific weight */
.text-arial-narrow-bold {
  font-family: 'Arial Narrow Bold', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
}`}</code>
              </pre>
            </section>

            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Webfont Implementation</h2>
              <p className="text-sm text-muted-foreground mb-3">
                For self-hosting (with a proper license), use the <code>@font-face</code> rule:
              </p>
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
}

@font-face {
  font-family: 'Arial Narrow';
  src: url('/fonts/ArialNarrow-Italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Arial Narrow';
  src: url('/fonts/ArialNarrow-BoldItalic.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}`}</code>
              </pre>
            </section>

            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Performance Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Preload:</strong> Add <code>&lt;link rel="preload" href="/fonts/ArialNarrow.woff2" as="font" type="font/woff2" crossorigin&gt;</code> to your HTML.</li>
                <li><strong>font-display:</strong> Always use <code>font-display: swap;</code> to prevent invisible text.</li>
                <li><strong>Subset fonts:</strong> Consider subsetting to reduce file size if you only need Latin characters.</li>
                <li><strong>Self-host:</strong> Self-host fonts rather than using external CDNs for better control and performance.</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/preview" className="text-primary hover:underline text-sm">
              Test the font in the preview tool →
            </Link>
            <Link href="/license" className="text-primary hover:underline text-sm">
              Understand the license requirements →
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}