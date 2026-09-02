import Link from 'next/link';
import { FontPreview } from '@/app/components/preview/FontPreview';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 text-center mb-4">
              Arial Narrow
              <span className="block text-2xl sm:text-3xl font-normal text-muted-foreground mt-2">
                The Definitive Resource & Preview Tool
              </span>
            </h1>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              A condensed sans-serif typeface ideal for space-efficient
              headers, UI elements, and impactful typography.
            </p>

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
              <a
                href="https://dafontstyle.io/download/arial-narrow-font.html"
                target="_blank"
                rel="nofollow"
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Font
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">What is Arial Narrow?</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A condensed sans-serif typeface in the Arial family.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">Styles Available</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Regular, Bold, Italic, and Bold Italic.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">Licensing</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Arial Narrow is proprietary to Monotype.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">Web Usage</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Use with proper @font-face implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Context */}
      <section className="py-16 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-3 text-center mb-6">When to Use Arial Narrow</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Arial Narrow is a condensed sans-serif typeface that excels in 
                space-constrained environments where legibility at smaller sizes 
                is critical.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </main>
  );
}
