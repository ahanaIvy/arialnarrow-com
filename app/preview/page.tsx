import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import { FontGenerator } from '@/app/components/preview/FontGenerator';

export default function PreviewPage() {
  return (
    <>
      <SEO
        title="Arial Narrow Generator & Preview Tool"
        description="Create custom Arial Narrow text previews. Adjust font size, weight, style, letter spacing, color, and more. Generate CSS and download images."
        keywords={['Arial Narrow generator', 'Arial Narrow preview', 'font generator', 'text generator']}
      />
      <Schema 
        type="WebPage" 
        data={{
          name: 'Arial Narrow Generator',
          description: 'Create custom Arial Narrow text previews.',
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-5xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow Generator</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Create custom previews of Arial Narrow with complete control over 
            size, spacing, color, alignment, and more. Perfect for mockups, 
            design exploration, and web previews.
          </p>

          <div className="bg-white rounded-xl border border-border shadow-lg p-6 md:p-8">
            <FontGenerator />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border border-border bg-secondary/10">
              <h3 className="font-semibold text-sm mb-1">Customize Everything</h3>
              <p className="text-xs text-muted-foreground">Adjust size, spacing, color, alignment, and more.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-secondary/10">
              <h3 className="font-semibold text-sm mb-1">Copy CSS</h3>
              <p className="text-xs text-muted-foreground">Get ready-to-use CSS code for your design projects.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-secondary/10">
              <h3 className="font-semibold text-sm mb-1">Download Images</h3>
              <p className="text-xs text-muted-foreground">Save your preview as a PNG for presentations or mockups.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}