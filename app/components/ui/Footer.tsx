import Link from 'next/link';

const footerLinks = {
  'Font Info': [
    { name: 'Styles', href: '/style' },
    { name: 'Character Map', href: '/character-map' },
    { name: 'License', href: '/license' },
  ],
  'Tools & Guides': [
    { name: 'Preview Tool', href: '/preview' },
    { name: 'CSS Guide', href: '/css' },
    { name: 'Installation', href: '/install' },
  ],
  'Comparisons': [
    { name: 'Arial Narrow vs Arial', href: '/vs-arial' },
    { name: 'Arial Narrow vs Roboto Condensed', href: '/vs-roboto-condensed' },
    { name: 'Alternatives', href: '/alternatives' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-primary">
                Arial<span className="text-foreground">Narrow</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              The definitive resource hub for Arial Narrow — typography, 
              preview tools, comparisons, and implementation guides.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ArialNarrow.com
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Arial Narrow is a registered trademark of Monotype Imaging Inc. 
              This is an independent informational resource.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="/license" className="hover:text-foreground transition-colors">
                License
              </Link>
              <Link href="/" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}