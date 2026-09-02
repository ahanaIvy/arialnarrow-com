import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            Arial<span className="text-foreground">Narrow</span>
          </Link>
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} ArialNarrow.com — Independent informational resource.
            Arial Narrow is a trademark of Monotype Imaging Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
