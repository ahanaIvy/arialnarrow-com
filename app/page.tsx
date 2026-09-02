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
    </main>
  );
}
