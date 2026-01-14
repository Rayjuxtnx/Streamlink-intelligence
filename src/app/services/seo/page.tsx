
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Keyword Research (up to 20 keywords)',
  'On-Page SEO (Title tags, meta descriptions, headers)',
  'Technical SEO Audit (Site speed, mobile-friendliness)',
  'Google Analytics & Search Console Setup',
  'Local SEO (Google Business Profile optimization)',
  'Monthly Performance Report',
];

const standardPackage = [
  'Everything in Basic +',
  'Advanced Keyword Research & Mapping',
  'Content Gap Analysis',
  'On-Page Optimization for up to 20 pages',
  'Schema Markup Implementation',
  'Basic Link Building Campaign (Guest posts, directory submissions)',
  'Competitor Analysis',
  'Bi-weekly Performance Reports with Insights',
];

const premiumPackage = [
  'Everything in Standard +',
  'Comprehensive SEO Strategy & Roadmap',
  'Advanced Technical SEO (Crawling, indexing, site architecture)',
  'Content Marketing (2 blog posts per month)',
  'Advanced Link Building & Outreach',
  'Ongoing Competitor Monitoring',
  'Conversion Rate Optimization (CRO) recommendations',
  'Detailed Monthly Reports & Strategy Calls',
];


export default function SeoPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              SEO
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I implement comprehensive SEO strategies to improve your website's visibility on search engines like Google. By focusing on technical SEO, on-page optimization, and quality content, I help you attract more organic traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-green-500">🟢</span> Basic SEO Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 15,000 - 30,000/month</p>
                <p className="text-center text-sm text-muted-foreground">Small websites, local businesses, or blogs.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {basicPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-primary flex flex-col shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-yellow-500">🟡</span> Standard SEO Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 35,000 - 60,000/month</p>
                <p className="text-center text-sm text-muted-foreground">Growing businesses and e-commerce stores.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {standardPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-blue-500">🔵</span> Premium SEO Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 70,000+/month</p>
                <p className="text-center text-sm text-muted-foreground">Established brands and competitive industries.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {premiumPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">
            Ready to get started or have questions?
          </h2>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
