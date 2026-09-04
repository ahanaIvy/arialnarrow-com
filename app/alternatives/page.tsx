import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Free Fonts Similar to Arial Narrow — Best 100% Free Alternatives',
  description: 'Looking for free downloadable fonts similar to Arial Narrow? Download top Google Fonts alternatives like Roboto Condensed and Open Sans Condensed (100% Free/OFL).',
  alternates: {
    canonical: '/alternatives',
  },
  openGraph: {
    title: 'Free Fonts Similar to Arial Narrow — Best 100% Free Alternatives',
    description: 'Looking for free fonts like Arial Narrow? Discover top free Google Fonts alternatives with commercial licenses.',
    url: 'https://arialnarrow.com/alternatives',
  },
};

const alternatives = [
  {
    name: 'Roboto Condensed',
    license: 'Apache 2.0 (Free)',
    description: 'A modern, geometric condensed sans-serif with excellent web support and multilingual coverage.',
    link: 'https://fonts.google.com/specimen/Roboto+Condensed',
  },
  {
    name: 'Open Sans Condensed',
    license: 'Apache 2.0 (Free)',
    description: 'A highly legible condensed variant of Open Sans optimized for print, web, and mobile interfaces.',
    link: 'https://dafontstyle.io/download/open-sans-font.html',
  },
  {
    name: 'Helvetica Condensed',
    license: 'Commercial',
    description: 'The condensed version of the iconic Helvetica typeface with neutral letterforms.',
    link: 'https://www.myfonts.com/collections/helvetica-condensed-font-linotype',
  },
  {
    name: 'Fira Sans Condensed',
    license: 'OFL (Free)',
    description: 'A modern, legible condensed sans-serif originally designed for Firefox OS.',
    link: 'https://fonts.google.com/specimen/Fira+Sans+Condensed',
  },
];

export default function AlternativesPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow Alternatives</h1>
        <p className="text-lg text-muted-foreground mb-8">
          If Arial Narrow isn&apos;t the right fit or licensing limits your deployment, here are the best free and commercial alternatives.
        </p>

        <div className="space-y-6">
          {alternatives.map((alt, index) => (
            <div key={index} className="border border-border rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold">{alt.name}</h2>
                <span className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground font-medium">
                  {alt.license}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3">{alt.description}</p>

              <a
                href={alt.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
