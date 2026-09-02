import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export default function LicensePage() {
  return (
    <>
      <SEO
        title="Arial Narrow Licensing — What You Need to Know"
        description="Understand the licensing of Arial Narrow. Learn about desktop, web, and distribution licenses. Find legitimate sources for acquiring the font."
        keywords={['Arial Narrow license', 'Arial Narrow commercial license', 'Arial Narrow web font license']}
      />
      <Schema 
        type="WebPage" 
        data={{
          name: 'Arial Narrow Licensing',
          description: 'Understand the licensing of Arial Narrow.',
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow Licensing</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understanding the licensing of Arial Narrow is crucial for legal 
            and compliant usage. This guide explains what you can and cannot do.
          </p>

          <div className="space-y-8">
            <section className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-3">What is the License?</h2>
              <p className="text-muted-foreground text-sm">
                Arial Narrow is a proprietary typeface owned by Monotype Imaging Inc. 
                It is distributed as part of the Microsoft Windows operating system 
                and Microsoft Office suite. The license is tied to the software 
                license and does not grant rights for redistribution or web use.
              </p>
            </section>

            <section className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-3">Common Usage Scenarios</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <div>
                    <p className="font-medium">Desktop Use (Personal/Business)</p>
                    <p className="text-muted-foreground">
                      If Arial Narrow came with your Windows or Mac (via Office), 
                      you can use it for documents, presentations, and print materials 
                      without additional licensing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <div>
                    <p className="font-medium">Web Use (Font Embedding)</p>
                    <p className="text-muted-foreground">
                      Using Arial Narrow on a website requires a separate web font 
                      license from Monotype or an authorized distributor. Self-hosting 
                      without a license is a copyright violation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <div>
                    <p className="font-medium">Redistribution</p>
                    <p className="text-muted-foreground">
                      You cannot distribute Arial Narrow font files to others, 
                      include them in software, or share them on font websites 
                      without explicit permission.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-3">Legitimate Sources</h2>
              <p className="text-sm text-muted-foreground mb-3">
                To acquire Arial Narrow legitimately, use these official channels:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Microsoft Windows / Microsoft Office (bundled)</li>
                <li>
                  <a href="https://www.fonts.com/font/monotype/arial-narrow" className="text-primary hover:underline" target="_blank" rel="nofollow noopener noreferrer">
                    Fonts.com (Monotype)
                  </a>
                </li>
                <li>
                  <a href="https://www.myfonts.com/collections/arial-narrow-font-monotype-imaging" className="text-primary hover:underline" target="_blank" rel="nofollow noopener noreferrer">
                    MyFonts (Monotype)
                  </a>
                </li>
              </ul>
            </section>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h2 className="text-xl font-bold text-amber-800 mb-2">Disclaimer</h2>
              <p className="text-sm text-amber-700">
                This information is provided for educational and informational purposes 
                only. We are not legal experts. For definitive legal advice regarding 
                font licensing, please consult Monotype Imaging Inc. or a qualified 
                legal professional.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}