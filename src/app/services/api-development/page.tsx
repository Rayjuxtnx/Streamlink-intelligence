
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
    'Basic REST API setup',
    'CRUD endpoints (Create, Read, Update, Delete)',
    'Connection to a local or cloud database',
    'JSON response formatting',
    'Basic authentication (API key or token)',
    'API documentation (Postman or Swagger)',
];

const standardPackage = [
  'Everything in Basic, plus:',
  'JWT or OAuth2 authentication',
  'Integration with external APIs (e.g., payment, SMS, or email)',
  'User roles and permissions',
  'Data validation and error handling',
  'API versioning and optimization',
  'Hosting or cloud deployment setup',
  'Real-time data support (WebSockets or Firebase integration)',
];

const premiumPackage = [
  'Everything in Standard, plus:',
  'Complex multi-API integration (e.g., MPesa + Email + Analytics)',
  'Microservice or modular architecture',
  'GraphQL or advanced API gateway setup',
  'API performance monitoring and analytics dashboard',
  'Automated testing (Postman/Newman, CI/CD pipeline)',
  'Enterprise-level security & scalability setup',
  'Custom reporting and logs management',
];


export default function ApiDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              API Development & Integration
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                I build and integrate custom APIs to connect your applications with third-party services or to create a robust backend for your frontend. I focus on creating well-documented, secure, and easy-to-use APIs.
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
                  <span className="text-blue-500">🔵</span> Basic Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 8,000 – 20,000</p>
                <p className="text-center text-sm text-muted-foreground">Simple projects needing one or two basic APIs.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {basicPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
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
                <p className="text-center text-xl font-bold">Ksh 25,000 – 60,000</p>
                <p className="text-center text-sm text-muted-foreground">Businesses needing secure and well-structured APIs.</p>
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
                  <span className="text-purple-500">🟣</span> Premium Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 70,000 – 150,000+</p>
                <p className="text-center text-sm text-muted-foreground">Scalable apps, SaaS, or full e-commerce systems.</p>
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
