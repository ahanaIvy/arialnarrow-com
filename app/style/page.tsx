import { Container } from '@/app/components/ui/Container';

const styles = [
  {
    name: 'Regular',
    weight: 400,
    style: 'normal',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'The standard weight. Ideal for body text and UI labels.',
  },
  {
    name: 'Bold',
    weight: 700,
    style: 'normal',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'Heavier and more prominent. Great for headers and emphasis.',
  },
  {
    name: 'Italic',
    weight: 400,
    style: 'italic',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'Slanted version of the regular weight. Adds a dynamic feel.',
  },
  {
    name: 'Bold Italic',
    weight: 700,
    style: 'italic',
    preview: 'AaBbCcDdEeFfGg 1234567890',
    description: 'The heaviest, slanted weight. Maximum impact and emphasis.',
  },
];

export default function StylesPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow Styles</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Explore all available styles of Arial Narrow.
        </p>

        <div className="space-y-10">
          {styles.map((style) => (
            <section key={style.name} className="border border-border rounded-xl p-6 md:p-8 bg-white shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-4">{style.name}</h2>
              <div
                className="p-6 rounded-lg bg-secondary/20 border border-border mb-4"
                style={{
                  fontFamily: `"Arial Narrow ${style.name}", "Arial Narrow", Arial, sans-serif`,
                  fontWeight: style.weight,
                  fontStyle: style.style,
                  fontSize: '32px',
                }}
              >
                <p className="break-words">{style.preview}</p>
              </div>
              <p className="text-muted-foreground text-sm">{style.description}</p>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
