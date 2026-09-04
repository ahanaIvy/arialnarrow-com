import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arial Narrow Font Styles — Regular, Bold, Italic & Bold Italic',
  description: 'Preview and compare all 4 official Arial Narrow font styles: Regular (400), Bold (700), Italic, and Bold Italic. Typography specimens, CSS values, and glyphs.',
  alternates: {
    canonical: '/style',
  },
  openGraph: {
    title: 'Arial Narrow Font Styles — Regular, Bold, Italic & Bold Italic',
    description: 'Compare all 4 official Arial Narrow font styles: Regular, Bold, Italic, and Bold Italic with CSS values and live specimens.',
    url: 'https://arialnarrow.com/style',
  },
};

const styles = [
  {
    name: 'Regular',
    weight: 400,
    style: 'normal',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'The standard weight. Ideal for body text and UI labels.',
    useCase: 'Body text, UI elements, and general applications.'
  },
  {
    name: 'Bold',
    weight: 700,
    style: 'normal',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'Heavier and more prominent. Great for headers and emphasis.',
    useCase: 'Headers, sub-headers, emphasis, and branding.'
  },
  {
    name: 'Italic',
    weight: 400,
    style: 'italic',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'Slanted version of the regular weight. Adds a dynamic feel.',
    useCase: 'Quotes, emphasis, and stylistic variation in body text.'
  },
  {
    name: 'Bold Italic',
    weight: 700,
    style: 'italic',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'The heaviest, slanted weight. Maximum impact and emphasis.',
    useCase: 'Standout headers, quotes, and high-impact typography.'
  },
];

export default function StylesPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow Styles</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Explore all available styles of Arial Narrow with typographic specimens and usage recommendations.
        </p>

        <div className="space-y-10">
          {styles.map((style) => (
            <section key={style.name} className="border border-border rounded-xl p-6 md:p-8 bg-white shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  {style.name}
                </h2>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {style.weight} • {style.style}
                </span>
              </div>
              
              <div
                className="p-6 rounded-lg bg-secondary/20 border border-border mb-4"
                style={{
                  fontFamily: '"Arial Narrow", "Helvetica Neue Condensed", "Nimbus Sans L", sans-serif-condensed, sans-serif',
                  fontWeight: style.weight,
                  fontStyle: style.style,
                  fontSize: '32px',
                  letterSpacing: '1px',
                }}
              >
                <p className="break-words">{style.preview}</p>
                <p className="text-sm text-muted-foreground mt-2" style={{ fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              <p className="text-muted-foreground text-sm mb-2">
                {style.description}
              </p>
              <p className="text-sm">
                <span className="font-medium">Best use case:</span> {style.useCase}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary/20 rounded-xl border border-border text-center">
          <p className="text-sm text-muted-foreground">
            Want to test these styles with your own text?
            {' '}
            <Link href="/preview" className="text-primary hover:underline font-medium">
              Try the full preview tool →
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
