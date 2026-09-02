
import { SEO } from '@/app/components/shared/SEO';
import { Container } from '@/app/components/ui/Container';

export default function PrivacyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy — ArialNarrow.com"
        description="Read our privacy policy to understand how we collect, use, and protect your data when you visit ArialNarrow.com."
        keywords={['privacy policy', 'data protection', 'cookie policy']}
      />
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-2 mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-6 text-muted-foreground">
          
          {/* Introduction */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-sm">
              Welcome to ArialNarrow.com. We respect your privacy and are committed to 
              protecting your personal data. This privacy policy explains how we collect, 
              use, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="text-sm mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Usage Data:</strong> We use Google Analytics to collect anonymous information about how you interact with our website.</li>
              <li><strong>Cookies:</strong> Small text files stored on your device to enhance your browsing experience.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and IP address (anonymized).</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>To analyze website traffic and improve user experience</li>
              <li>To understand how visitors interact with our content</li>
              <li>To maintain and secure our website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
            <p className="text-sm mb-3">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics).</li>
            </ul>
            <p className="text-sm mt-3">
              You can control cookie preferences through our cookie banner or your browser settings.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
            <p className="text-sm mb-3">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Google Analytics:</strong> For website analytics. 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline ml-1">
                  Google Privacy Policy →
                </a>
              </li>
              <li>
                <strong>Vercel:</strong> For website hosting.
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline ml-1">
                  Vercel Privacy Policy →
                </a>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Data Security</h2>
            <p className="text-sm">
              We implement appropriate technical and organizational measures to protect 
              your personal data against unauthorized access, alteration, disclosure, 
              or destruction.
            </p>
          </section>

          {/* Your Rights */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
            <p className="text-sm mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of analytics tracking</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong> privacy@arialnarrow.com
            </p>
          </section>

          {/* Changes */}
          <section className="p-6 bg-white rounded-xl border border-border">
            <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. We will notify you 
              of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Disclaimer</h2>
            <p className="text-sm text-amber-700">
              This privacy policy is provided for informational purposes only and 
              does not constitute legal advice. For specific legal guidance, please 
              consult a qualified legal professional.
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
}
