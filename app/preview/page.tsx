import { Container } from '@/app/components/ui/Container';
import { FontPreview } from '@/app/components/preview/FontPreview';

export default function PreviewPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow Preview</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Test Arial Narrow with your own text and customize the size and style.
        </p>
        <div className="bg-white rounded-xl border border-border shadow-lg p-6 md:p-8">
          <FontPreview defaultText="Arial Narrow — Custom Preview" />
        </div>
      </div>
    </Container>
  );
}
