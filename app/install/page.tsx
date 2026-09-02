import { SEO } from '@/app/components/shared/SEO';
import { Schema } from '@/app/components/shared/Schema';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export default function InstallPage() {
  return (
    <>
      <SEO
        title="Arial Narrow Installation — Windows & Mac Guide"
        description="Step-by-step guide to install Arial Narrow on Windows and Mac. Learn where to find the font and how to install it correctly."
        keywords={['Arial Narrow installation', 'install Arial Narrow', 'Arial Narrow Windows', 'Arial Narrow Mac']}
      />
      <Schema 
        type="HowTo"
        data={{
          name: 'How to Install Arial Narrow',
          description: 'Step-by-step guide to install Arial Narrow on Windows and Mac.',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Get the font files' },
            { '@type': 'HowToStep', position: 2, name: 'Install on Windows' },
            { '@type': 'HowToStep', position: 3, name: 'Install on Mac' },
          ],
        }}
      />

      <Container className="py-8 md:py-12">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-4">Arial Narrow Installation</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Arial Narrow is usually pre-installed on Windows. Here's how to 
            find it or install it on your system.
          </p>

          <div className="space-y-8">
            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Arial Narrow is Already Installed</h2>
              <p className="text-sm text-muted-foreground">
                On most Windows systems, Arial Narrow is installed by default 
                as part of the operating system. You can find it in any application's 
                font selector under "Arial Narrow".
              </p>
            </section>

            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Install on Windows</h2>
              <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
                <li>Download the font file from a legitimate source (e.g., Microsoft Office installation, Fonts.com).</li>
                <li>Extract the font file if it's in a ZIP archive.</li>
                <li>Right-click the <code>.ttf</code> or <code>.otf</code> file.</li>
                <li>Select <strong>"Install"</strong> from the context menu.</li>
                <li>The font will be installed and available in all applications.</li>
              </ol>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> If you can't find Arial Narrow on your system, 
                  it may be available through the "Optional Features" section in Windows Settings.
                </p>
              </div>
            </section>

            <section className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">Install on Mac</h2>
              <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
                <li>Download the font file from a legitimate source.</li>
                <li>Double-click the <code>.ttf</code> or <code>.otf</code> file.</li>
                <li>Click <strong>"Install Font"</strong> in the Font Book app.</li>
                <li>The font will be validated and installed.</li>
              </ol>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-700">
                  <strong>Note:</strong> Arial Narrow may not be pre-installed on 
                  Mac unless you have Microsoft Office installed.
                </p>
              </div>
            </section>

            <div className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-2">Important</h2>
              <p className="text-sm text-muted-foreground">
                Only download Arial Narrow from legitimate sources. 
                Distributing proprietary font files without permission is illegal.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}