import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Arial Narrow Character Map — Glyphs, Symbols & Unicode Copy',
  description: 'Complete Arial Narrow font character map. Copy uppercase, lowercase, numerals, punctuation, math signs, currency symbols, and explore full Unicode glyph ranges.',
  alternates: {
    canonical: '/character-map',
  },
  openGraph: {
    title: 'Arial Narrow Character Map — Glyphs, Symbols & Unicode Copy',
    description: 'Explore and copy all Arial Narrow glyphs: uppercase, lowercase, numbers, Unicode symbols, and punctuation marks.',
    url: 'https://arialnarrow.com/character-map',
  },
};

const characters = {
  Uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Lowercase: 'abcdefghijklmnopqrstuvwxyz',
  Numbers: '0123456789',
  Punctuation: '.,;:!?"\'()[]{}@#$%&*+-/=<>',
};

export default function CharacterMapPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow Character Map</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore the complete character set and glyph specimens of Arial Narrow.
        </p>

        <div className="space-y-8" style={{ fontFamily: '"Arial Narrow", "Nimbus Sans L", sans-serif-condensed, sans-serif' }}>
          {Object.entries(characters).map(([category, chars]) => (
            <section key={category} className="border border-border rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-xl font-bold mb-3">{category}</h2>
              <div className="flex flex-wrap gap-2 p-4 bg-secondary/20 rounded-lg">
                {chars.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center w-10 h-10 text-xl border border-border rounded bg-white shadow-sm hover:border-primary transition-colors cursor-default"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
