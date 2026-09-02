import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import { FontPreview } from '@/app/components/preview/FontPreview';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SEO
        title="Arial Narrow — Font Preview, Styles, Alternatives & Guide"
        description="The definitive resource hub for Arial Narrow. Preview the font, compare styles, explore alternatives, get CSS code, and understand licensing."
        keywords={['Arial Narrow', 'Arial Narrow font', 'font preview', 'Arial Narrow download', 'typography']}
      />
      <Schema type="WebSite" />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/30 to-white">
          <Container>
            <Breadcrumbs />
            <div className="max-w-4xl mx-auto">
              <h1 className="heading-1 text-center mb-4">
                Arial Narrow
                <span className="block text-2xl sm:text-3xl font-normal text-muted-foreground mt-2">
                  The Definitive Resource &amp; Preview Tool
                </span>
              </h1>
              <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                A condensed sans-serif typeface ideal for space-efficient 
                headers, UI elements, and impactful typography.
              </p>
              
              {/* Preview Tool */}
              <div className="bg-white rounded-xl shadow-lg border border-border p-6 md:p-8">
                <FontPreview defaultText="Arial Narrow — Bold, Clean, Condensed" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/style"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Explore Styles →
                </Link>
                <Link
                  href="/preview"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium"
                >
                  Open Full Preview
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Quick Info Grid */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border border-border bg-secondary/20">
                <h3 className="font-semibold text-foreground">What is Arial Narrow?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  A condensed sans-serif typeface in the Arial family, designed 
                  by Robin Nicholas and Patricia Saunders for Monotype.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-secondary/20">
                <h3 className="font-semibold text-foreground">Styles Available</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Regular, Bold, Italic, and Bold Italic — each optimized for 
                  display and body text applications.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-secondary/20">
                <h3 className="font-semibold text-foreground">Legitimate Licensing</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Arial Narrow is proprietary to Monotype. Understand your 
                  rights and get licensed for commercial use.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-secondary/20">
                <h3 className="font-semibold text-foreground">Web Usage</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Use Arial Narrow on the web with proper <code className="text-xs bg-secondary px-1 py-0.5 rounded">@font-face</code> 
                  implementation and licensing.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Typography Context */}
        <section className="py-16 bg-secondary/20 border-y border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-3 text-center mb-6">When to Use Arial Narrow</h2>
              <div className="prose prose-slate max-w-none">
                <p>
                  Arial Narrow is a condensed sans-serif typeface that excels in 
                  space-constrained environments where legibility at smaller sizes 
                  is critical.
                </p>
                <ul>
                  <li><strong>Headers &amp; Titles:</strong> Its narrow width allows for longer headlines without wrapping.</li>
                  <li><strong>UI &amp; Navigation:</strong> Efficient for sidebar menus, navigation bars, and compact interfaces.</li>
                  <li><strong>Data Dense Layouts:</strong> Ideal for tables, charts, and reports where horizontal space is limited.</li>
                  <li><strong>Branding &amp; Logos:</strong> Provides a clean, modern, and efficient look for corporate identities.</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>When to avoid:</strong> For extended body text in print or long-form articles, as the condensed 
                  nature can fatigue readers. Consider a standard-width sans-serif for better readability.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-3 text-center mb-10">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is Arial Narrow?",
                    a: "Arial Narrow is a condensed version of the Arial typeface, designed by Robin Nicholas and Patricia Saunders for Monotype. It is a sans-serif font that is approximately 20% narrower than standard Arial."
                  },
                  {
                    q: "Is Arial Narrow free to use?",
                    a: "Arial Narrow is included with Windows and Microsoft Office licenses for personal and business use on those platforms. For web fonts, commercial distribution, or use outside of Microsoft products, a separate license from Monotype is required."
                  },
                  {
                    q: "How do I install Arial Narrow on Windows?",
                    a: "Arial Narrow is typically pre-installed with Windows. If missing, it can be obtained through Microsoft Office installation or legitimate font providers like Fonts.com."
                  },
                  {
                    q: "How do I use Arial Narrow in CSS?",
                    a: "You can reference Arial Narrow in CSS using `font-family: 'Arial Narrow', Arial, sans-serif;`. For web use, you'll need to properly license and self-host the font files or use a licensed web font service."
                  },
                  {
                    q: "What are the best alternatives to Arial Narrow?",
                    a: "Popular alternatives include Roboto Condensed (free on Google Fonts), Helvetica Condensed, and Open Sans Condensed. Each offers similar condensed characteristics with different stylistic approaches."
                  },
                ].map((faq, index) => (
                  <details key={index} className="group border border-border rounded-lg p-4 open:shadow-sm transition-all">
                    <summary className="flex justify-between items-center cursor-pointer font-medium hover:text-primary transition-colors">
                      {faq.q}
                      <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground text-sm">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}