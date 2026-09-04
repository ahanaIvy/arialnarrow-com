import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Is Arial Narrow Free? Font License, Commercial & Web Usage Rights',
  description: 'Is Arial Narrow free for commercial use? Learn desktop publishing rights, Microsoft Office bundle rules, web font embedding (@font-face), and Monotype licenses.',
  alternates: {
    canonical: '/license',
  },
  openGraph: {
    title: 'Is Arial Narrow Free? Font License, Commercial & Web Usage Rights',
    description: 'Understand the licensing rules, commercial rights, and web font restrictions of Arial Narrow.',
    url: 'https://arialnarrow.com/license',
  },
};

export default function LicensePage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">Arial Narrow Licensing</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Understanding the licensing of Arial Narrow is crucial for legal and compliant usage across print, web, and software products.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h2 className="text-xl font-bold mb-3">Ownership &amp; Intellectual Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Arial Narrow is a proprietary typeface owned by Monotype Imaging Inc.
              It is licensed to Microsoft Corporation and distributed as part of the Microsoft Windows operating system
              and Microsoft Office suite for desktop applications.
            </p>
          </div>

          <div className="p-6 bg-secondary/20 rounded-xl border border-border">
            <h2 className="text-xl font-bold mb-3">Common Usage Scenarios</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg leading-none">✓</span>
                <div>
                  <p className="font-semibold text-foreground">Desktop &amp; Document Use</p>
                  <p className="text-muted-foreground">You can use it for internal office documents, Word/Excel files, PowerPoint presentations, and print collateral on licensed Windows machines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none">✗</span>
                <div>
                  <p className="font-semibold text-foreground">Self-Hosted Web Font (@font-face)</p>
                  <p className="text-muted-foreground">Requires a separate commercial web font license from Monotype. The Windows desktop license does not grant website embedding rights.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none">✗</span>
                <div>
                  <p className="font-semibold text-foreground">Public Redistribution</p>
                  <p className="text-muted-foreground">You cannot distribute raw Arial Narrow font binary files (.ttf, .otf, .woff) on repositories, file-sharing sites, or application packages without explicit authorization.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Legal Disclaimer</h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              This summary is provided for informational purposes only and does not constitute formal legal counsel.
              For definitive licensing terms, purchase options, or enterprise licensing, consult Monotype Imaging Inc. directly.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
