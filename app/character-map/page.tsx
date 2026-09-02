import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

const characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  punctuation: '.,;:!?"\'()[]{}@#$%&*+-/=<>',
  symbols: '©®™€£¥¢§¶',
};

export default function CharacterMapPage() {
  return (
    <>
      <SEO
        title="Arial Narrow Character Map — Full Glyph Set"
        description="Explore the complete character map of Arial Narrow including uppercase, lowercase, numbers, punctuation, and special symbols."
        keywords={['Arial Narrow character map', 'Arial Narrow glyphs', 'Arial Narrow characters']}
      />
      <Schema 
        type="WebPage" 
        data={{
          name: 'Arial Narrow Character Map',
          description: 'Explore the complete character map of Arial Narrow.',
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow Character Map</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore the complete character set of Arial Narrow across all styles.
          </p>

          <div className="space-y-8" style={{ fontFamily: '"Arial Narrow", Arial, sans-serif' }}>
            {Object.entries(characters).map(([category, chars]) => (
              <section key={category} className="border border-border rounded-xl p-6 bg-white">
                <h2 className="text-xl font-bold mb-3 capitalize">{category}</h2>
                <div className="flex flex-wrap gap-2 p-4 bg-secondary/20 rounded-lg">
                  {chars.split('').map((char, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center justify-center w-10 h-10 text-xl border border-border rounded bg-white shadow-sm"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary/20 rounded-xl border border-border text-center">
            <p className="text-sm text-muted-foreground">
              Want to test these characters with different styles?
              {' '}
              <a href="/preview" className="text-primary hover:underline font-medium">
                Try the preview tool →
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}