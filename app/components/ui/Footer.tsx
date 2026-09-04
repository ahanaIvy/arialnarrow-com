import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary block mb-3">
              Arial<span className="text-foreground">Narrow</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The definitive resource for Arial Narrow typography, live interactive previews, comparative analyses, and web implementation guides.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-3">
              Typography & Tools
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/style" className="hover:text-foreground transition-colors">
                  Styles & Weights
                </Link>
              </li>
              <li>
                <Link href="/preview" className="hover:text-foreground transition-colors">
                  Interactive Preview & Generator
                </Link>
              </li>
              <li>
                <Link href="/character-map" className="hover:text-foreground transition-colors">
                  Complete Character Map
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-3">
              Comparisons & Alternatives
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/vs-arial" className="hover:text-foreground transition-colors">
                  Arial Narrow vs Arial
                </Link>
              </li>
              <li>
                <Link href="/vs-roboto-condensed" className="hover:text-foreground transition-colors">
                  Arial Narrow vs Roboto Condensed
                </Link>
              </li>
              <li>
                <Link href="/alternatives" className="hover:text-foreground transition-colors">
                  Best Free & Paid Alternatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-3">
              Guides & Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/css" className="hover:text-foreground transition-colors">
                  CSS & @font-face Guide
                </Link>
              </li>
              <li>
                <Link href="/install" className="hover:text-foreground transition-colors">
                  Installation on Windows & Mac
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-foreground transition-colors">
                  Licensing & Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ArialNarrow.com — Independent informational resource.
          </p>
          <p>
            Arial Narrow is a trademark of Monotype Imaging Inc. Not affiliated with Monotype or Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
