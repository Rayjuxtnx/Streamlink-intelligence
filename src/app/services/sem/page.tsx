
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Google Ads account setup',
  '1–2 ad campaigns (Search or Display)',
  'Keyword research & targeting',
  'Ad copywriting (2–3 variations)',
  'Budget guidance (client funds ads separately)',
  'Conversion tracking setup (Google Analytics or Pixel)',
  'Monthly performance report',
];

const standardPackage = [
  'Everything in Basic, plus:',
  'Up to 5 active campaigns (Search, Display, YouTube, or Shopping)',
  'Competitor analysis & negative keyword setup',
  'A/B testing for ad creatives and landing pages',
  'Custom audience targeting (age, location, interests)',
  'Retargeting ads setup',
  'Campaign optimization (CTR, CPC, and conversions)',
  'Weekly monitoring & performance updates',
];

const premiumPackage = [
  'Everything in Standard, plus:',
  'Unlimited campaign management (Search, Display, YouTube, Discovery)',
  'Full funnel strategy (awareness → conversion → remarketing)',
  'Advanced conversion tracking with Google Tag Manager',
  'Dynamic search ads & shopping feeds integration',
  'Competitor ad intelligence & bidding optimization',
  'Monthly ROI and growth strategy report',
  'Dedicated SEM manager & priority support',
];


export default function SemPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Search Engine Marketing (SEM)
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I specialize in creating, managing, and optimizing paid advertising campaigns on platforms like Google Ads to maximize your return on investment and reach the right audience.
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
                  <span className="text-green-500">🟢</span> Basic Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 10,000 – 25,000/month</p>
                <p className="text-center text-sm text-muted-foreground">Small businesses starting out with Google Ads.</p>
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
                  <span className="text-blue-500">🔵</span> Standard Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 30,000 – 60,000/month</p>
                <p className="text-center text-sm text-muted-foreground">Growing brands that want consistent leads and visibility.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {standardPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-purple-500">🟣</span> Premium Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 70,000 – 150,000+/month</p>
                <p className="text-center text-sm text-muted-foreground">Established businesses or e-commerce brands running large-scale ad campaigns.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {premiumPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
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
