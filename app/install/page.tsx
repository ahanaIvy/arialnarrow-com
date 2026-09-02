import { Container } from '@/app/components/ui/Container';

export default function InstallPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow Installation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Arial Narrow is usually pre-installed on Windows. Here's how to find or install it.
        </p>

        <div className="space-y-6">
          <div className="border border-border rounded-xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-3">Install on Windows</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li>Download the font file from a legitimate source.</li>
              <li>Extract the font file if it's in a ZIP archive.</li>
              <li>Right-click the <code>.ttf</code> or <code>.otf</code> file.</li>
              <li>Select <strong>"Install"</strong> from the context menu.</li>
            </ol>
          </div>

          <div className="border border-border rounded-xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-3">Install on Mac</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li>Download the font file from a legitimate source.</li>
              <li>Double-click the <code>.ttf</code> or <code>.otf</code> file.</li>
              <li>Click <strong>"Install Font"</strong> in the Font Book app.</li>
            </ol>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-amber-700">
              <strong>Note:</strong> Only download Arial Narrow from legitimate sources. Distributing proprietary font files without permission is illegal.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
