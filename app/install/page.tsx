import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Download & Install Arial Narrow Font (Windows & Mac)',
  description: 'Download and install Arial Narrow font (TTF/OTF) on Windows 11, 10, and macOS. Learn how to restore missing font files, MS Office setup, and free downloads.',
  alternates: {
    canonical: '/install',
  },
  openGraph: {
    title: 'How to Download & Install Arial Narrow Font (Windows & Mac)',
    description: 'Download and install Arial Narrow font (TTF/OTF) on Windows and macOS.',
    url: 'https://arialnarrow.com/install',
  },
};

export default function InstallPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-4">How to Download &amp; Install Arial Narrow Font</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Need Arial Narrow on your computer? Here is how to legally download, verify, and install Arial Narrow font files (TTF / OTF) on Windows 11, Windows 10, and macOS.
        </p>

        <div className="space-y-6">
          {/* Download Channels */}
          <div className="border border-border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-3">1. Where to Download Arial Narrow Font</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Arial Narrow is a commercial typeface designed for Monotype and licensed to Microsoft. You can acquire it legally through the following channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <h3 className="font-semibold text-foreground mb-1">Microsoft Office / 365 Bundle</h3>
                <p className="text-muted-foreground mb-3">Pre-installed with standard Microsoft Office suites (Word, Excel, PowerPoint) on Windows.</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Pre-Licensed on Windows</span>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <h3 className="font-semibold text-foreground mb-1">Commercial Monotype / MyFonts</h3>
                <p className="text-muted-foreground mb-3">Official standalone desktop, app, and webfont licensing from the type foundry.</p>
                <a 
                  href="https://www.myfonts.com/collections/arial-font-monotype-imaging" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="text-primary hover:underline font-medium text-xs inline-flex items-center gap-1"
                >
                  Visit Monotype / MyFonts →
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3 items-center">
              <a
                href="https://dafontstyle.io/download/arial-narrow-font.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="px-5 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Font File (TTF/OTF)
              </a>
              <Link
                href="/alternatives"
                className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium text-sm inline-flex items-center gap-2"
              >
                Download 100% Free Alternatives (Google Fonts) →
              </Link>
            </div>
          </div>

          {/* Windows Installation */}
          <div className="border border-border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-3">2. Install on Windows 11 &amp; Windows 10</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li>Acquire your licensed font files (<code>ARIALN.TTF</code>, <code>ARIALNB.TTF</code>, <code>ARIALNI.TTF</code>, <code>ARIALNBI.TTF</code>).</li>
              <li>Extract the font archive if downloaded in a <code>.zip</code> file.</li>
              <li>Right-click the font file and select <strong>&quot;Install for all users&quot;</strong> (or <strong>&quot;Install&quot;</strong>).</li>
              <li>Alternatively, drag and drop the files directly into <code>C:\Windows\Fonts</code> or the Windows 11 Font Settings menu.</li>
              <li>Restart active software (Photoshop, Word, Illustrator) to update font lists.</li>
            </ol>
          </div>

          {/* macOS Installation */}
          <div className="border border-border rounded-xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold mb-3">3. Install on macOS (Font Book)</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li>Download or locate your font files (<code>.ttf</code> or <code>.otf</code>).</li>
              <li>Double-click the font file to open it automatically in the <strong>Font Book</strong> app.</li>
              <li>Click the blue <strong>&quot;Install Font&quot;</strong> button at the bottom of the preview dialog.</li>
              <li>Font Book will validate and activate Arial Narrow across macOS applications.</li>
            </ol>
          </div>

          {/* Legal Notice */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Notice:</strong> Arial Narrow is proprietary Monotype intellectual property. Always license fonts through legitimate vendors (such as Microsoft Office packages or Monotype / MyFonts). If you require a completely free, open-source font for commercial web projects, consider <Link href="/alternatives" className="underline font-semibold">Roboto Condensed</Link> which is licensed under the Apache 2.0 open-source license.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
