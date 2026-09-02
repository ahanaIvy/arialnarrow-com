import { Container } from '@/app/components/ui/Container';

const characters = {
  Uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Lowercase: 'abcdefghijklmnopqrstuvwxyz',
  Numbers: '0123456789',
  Punctuation: '.,;:!?"\'()[]{}@#$%&*+-/=<>',
};

export default function CharacterMapPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-4">Arial Narrow Character Map</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore the complete character set of Arial Narrow.
        </p>

        <div className="space-y-8" style={{ fontFamily: '"Arial Narrow", Arial, sans-serif' }}>
          {Object.entries(characters).map(([category, chars]) => (
            <section key={category} className="border border-border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-bold mb-3">{category}</h2>
              <div className="flex flex-wrap gap-2 p-4 bg-secondary/20 rounded-lg">
                {chars.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center w-10 h-10 text-xl border border-border rounded bg-white shadow-sm"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
