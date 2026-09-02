import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

const alternatives = [
  {
    name: 'Roboto Condensed',
    foundry: 'Google Fonts',
    license: 'Apache 2.0 (Free)',
    preview: 'The quick brown fox',
    description: 'A modern, geometric condensed sans-serif with excellent web support and extended character sets.',
    useCase: 'Web design, UI, and modern branding.',
    link: 'https://fonts.google.com/specimen/Roboto+Condensed',
  },
  {
    name: 'Open Sans Condensed',
    foundry: 'Google Fonts',
    license: 'Apache 2.0 (Free)',
    preview: 'The quick brown fox',
    description: 'A highly legible condensed variant of Open Sans with a friendly, open appearance.',
    useCase: 'Web content, blogs, and user interfaces.',
    link: 'https://fonts.google.com/specimen/Open+Sans+Condensed',
  },
  {
    name: 'Helvetica Condensed',
    foundry: 'Monotype',
    license: 'Commercial',
    preview: 'The quick brown fox',
    description: 'The condensed version of the iconic Helvetica typeface, offering a crisp and neutral appearance.',
    useCase: 'Corporate branding, editorial design, and advertising.',
    link: 'https://www.myfonts.com/collections/helvetica-condensed-font-linotype',
  },
  {
    name: 'Univers Condensed',
    foundry: 'Linotype',
    license: 'Commercial',
    preview: 'The quick brown fox',
    description: 'A classic sans-serif with a rational, precise design. Univers Condensed is elegant and functional.',
    useCase: 'Corporate communications, wayfinding, and editorial design.',
    link: 'https://www.myfonts.com/collections/univers-condensed-font-linotype',
  },
  {
    name: 'Fira Sans Condensed',
    foundry: 'Mozilla',
    license: 'OFL (Free)',
    preview: 'The quick brown fox',
    description: 'A modern, legible condensed sans-serif designed for the Firefox OS. Excellent readability.',
    useCase: 'Web apps, UI design, and digital publications.',
    link: 'https://fonts.google.com/specimen/Fira+Sans+Condensed',
  },
];

export default function AlternativesPage() {
  return (
    <>
      <SEO
        title="Arial Narrow Alternatives — Best Similar Fonts"
        description="Discover the best alternatives to Arial Narrow including free and commercial options. Compare Roboto Condensed, Helvetica Condensed, and more."
        keywords={['Arial Narrow alternatives', 'fonts like Arial Narrow', 'Arial Narrow similar fonts']}
      />
      <Schema 
        type="ItemList"
        data={{
          name: 'Arial Narrow Alternatives',
          description: 'Best alternatives to Arial Narrow.',
          itemListElement: alternatives.map((alt, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: alt.name,
            description: alt.description,
          })),
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow Alternatives</h1>
          <p className="text-lg text-muted-foreground mb-8">
            If Arial Narrow isn't the right fit for your project — or you need 
            a free or open-source alternative — here are some excellent options.
          </p>

          <div className="space-y-6">
            {alternatives.map((alt, index) => (
              <div key={index} className="border border-border rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <h2 className="text-xl font-bold">{alt.name}</h2>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                    {alt.license}
                  </span>
                </div>
                
                <div className="p-4 bg-secondary/20 rounded border border-border mb-3" 
                  style={{ fontFamily: `"${alt.name}", "Arial Narrow", Arial, sans-serif`, fontSize: '24px' }}>
                  {alt.preview}
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{alt.description}</p>
                <p className="text-sm"><span className="font-medium">Best for:</span> {alt.useCase}</p>
                
                <div className="mt-3">
                  <a 
                    href={alt.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary/20 rounded-xl border border-border text-center">
            <p className="text-sm text-muted-foreground">
              Want to compare Arial Narrow side-by-side with alternatives?
              {' '}
              <Link href="/preview" className="text-primary hover:underline font-medium">
                Try the preview tool →
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}