
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Social media setup (Facebook, Instagram, X, LinkedIn)',
  '3–4 weekly posts (images or captions provided by client)',
  'Basic content calendar',
  'Page optimization (bio, hashtags, SEO titles)',
  'Engagement management (reply to comments & DMs)',
  'Basic analytics report (reach, likes, followers)',
  'Boosting setup guidance (client pays ad budget)',
];

const standardPackage = [
  'Everything in Basic, plus:',
  '12–16 custom graphic posts per month',
  '2 short video reels (social media ads or highlights)',
  'Copywriting & content planning',
  'Social media ads setup & management (Facebook, Instagram, or Google Ads)',
  'Target audience research & A/B testing',
  'Email marketing campaign setup (Mailchimp, Brevo, etc.)',
  'Monthly analytics report with strategy insights',
  'SEO optimization for website/blog',
];

const premiumPackage = [
  'Everything in Standard, plus:',
  'Full social media management (content creation, posting, engagement)',
  '4–6 video reels or ad creatives monthly',
  'Google Ads, Meta Ads, and YouTube Ads management',
  'Influencer marketing coordination',
  'Advanced SEO (on-page + off-page)',
  'Blog/article writing (2–4 per month)',
  'Competitor analysis & marketing automation',
  'Conversion tracking (Pixel, Analytics, Tag Manager)',
  'Detailed performance reports + monthly strategy meeting',
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Digital Marketing
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I create and execute data-driven digital marketing strategies to increase your online presence, generate leads, and drive sales. From social media to email, I cover all aspects of your digital footprint.
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
                <p className="text-center text-sm text-muted-foreground">Startups, small businesses, or individuals building online presence.</p>
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
                  <span className="text-yellow-500">🟡</span> Standard Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 30,000 – 70,000/month</p>
                <p className="text-center text-sm text-muted-foreground">Growing brands that need consistent, high-quality engagement.</p>
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
                  <span className="text-blue-500">🔵</span> Premium Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 80,000 – 200,000+/month</p>
                <p className="text-center text-sm text-muted-foreground">Established brands, e-commerce businesses, or campaigns needing full digital strategy.</p>
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
