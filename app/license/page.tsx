import { SEO } from '@/app/components/shared/SEO';
import { Container } from '@/app/components/ui/Container';

export default function LicensePage() {
  return (
    <>
      <SEO 
        title="Arial Narrow Licensing — What You Need to Know"
        description="Understand the licensing of Arial Narrow. Learn about desktop, web, and distribution licenses. Find legitimate sources for acquiring the font."
        keywords={['Arial Narrow license', 'Arial Narrow commercial license', 'web font license']}
      />
    <Container className="py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow Licensing</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Understanding the licensing of Arial Narrow is crucial for legal and compliant usage.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h2 className="text-xl font-bold mb-3">What is the License?</h2>
            <p className="text-muted-foreground text-sm">
              Arial Narrow is a proprietary typeface owned by Monotype Imaging Inc.
              It is distributed as part of the Microsoft Windows operating system
              and Microsoft Office suite.
            </p>
          </div>

          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h2 className="text-xl font-bold mb-3">Common Usage Scenarios</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <p className="font-medium">Desktop Use</p>
                  <p className="text-muted-foreground">You can use it for documents, presentations, and print materials.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <div>
                  <p className="font-medium">Web Use</p>
                  <p className="text-muted-foreground">Requires a separate web font license from Monotype.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <div>
                  <p className="font-medium">Redistribution</p>
                  <p className="text-muted-foreground">You cannot distribute Arial Narrow font files without permission.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Disclaimer</h2>
            <p className="text-sm text-amber-700">
              This information is provided for informational purposes only.
              For definitive legal advice, please consult Monotype Imaging Inc.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
