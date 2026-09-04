
import type { Metadata } from 'next';
import { Container } from '@/app/components/ui/Container';
import { Breadcrumbs } from '@/app/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy — ArialNarrow.com',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data when you visit ArialNarrow.com.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — ArialNarrow.com',
    description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
    url: 'https://arialnarrow.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />
        <h1 className="heading-2 mt-2 mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective Date: March 2025</p>

        <div className="space-y-6 text-muted-foreground">
          
          {/* Introduction */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed">
              Welcome to ArialNarrow.com. We respect your privacy and are committed to 
              protecting your personal data. This privacy policy explains how we collect, 
              use, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="text-sm mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Usage Data:</strong> Anonymous metrics about pages viewed, referral URLs, and interactions.</li>
              <li><strong>Cookies:</strong> Small preference files used to remember cookie consent and font customization settings.</li>
              <li><strong>Technical Data:</strong> Browser type, approximate screen resolution, and anonymized IP address.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>To analyze website traffic and optimize tool performance</li>
              <li>To improve font preview utilities and user interface responsive layouts</li>
              <li>To maintain website reliability and security</li>
              <li>To comply with regulatory data protection guidelines</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies &amp; Tracking</h2>
            <p className="text-sm mb-3">
              We respect your choice regarding tracking. Google Analytics 4 is set up with consent mode (denied by default until accepted).
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Essential Cookies:</strong> Required to preserve your cookie preferences.</li>
              <li><strong>Analytics Cookies:</strong> Optional Google Analytics cookies enabled only upon your explicit opt-in.</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
            <p className="text-sm mb-3">We rely on trusted third-party providers:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Google Analytics:</strong> For traffic measurement (configured with IP anonymization).
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline ml-1">
                  Google Privacy Policy →
                </a>
              </li>
              <li>
                <strong>Hosting:</strong> High-reliability cloud web serving infrastructure.
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
            <p className="text-sm mb-3">Under GDPR and international privacy frameworks, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Access information stored about your browser sessions</li>
              <li>Withdraw analytics cookie consent at any time via your browser settings</li>
              <li>Request erasure of data or submit queries regarding site privacy practices</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="p-6 bg-white rounded-xl border border-border shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Contact Information</h2>
            <p className="text-sm">
              If you have any questions or data requests regarding this Privacy Policy, please contact us at:
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong> <a href="mailto:mysto9245@gmail.com" className="text-primary hover:underline">mysto9245@gmail.com</a>
            </p>
          </section>

          {/* Disclaimer */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Notice</h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              This privacy policy is provided for transparency and informational purposes. ArialNarrow.com is an independent educational and typography preview resource.
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}
