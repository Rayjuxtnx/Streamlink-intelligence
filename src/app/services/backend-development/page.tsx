
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Database setup (MySQL / PostgreSQL / SQLite)',
  'Basic API endpoints (GET, POST, PUT, DELETE)',
  'User registration & login (basic auth)',
  'Email/contact form submission handling',
  'Server-side validation & security setup',
  'Hosting & deployment (Render, Railway, or Heroku)',
  'Basic admin or data management panel',
  'Documentation of endpoints (Postman collection)',
  '1-month free support',
];

const standardPackage = [
  'Everything in Basic +',
  'Advanced authentication (JWT, password hashing, sessions)',
  'Payment gateway integration (MPesa, PayPal, or Stripe)',
  'Role-based access control (Admin, User, Vendor)',
  'CRUD operations for multiple models (products, orders, users, etc.)',
  'Email verification & password recovery system',
  'Integration with third-party APIs (Google, Firebase, etc.)',
  'File uploads (images, documents) and storage management',
  'Backend performance optimization',
  'Logging & error tracking setup',
  '2-month support & maintenance',
];

const premiumPackage = [
  'Everything in Standard +',
  'Scalable microservices or modular architecture',
  'Real-time backend features (WebSockets, live chat, notifications)',
  'Advanced analytics & reporting system',
  'Cloud storage integration (AWS S3, Firebase Storage)',
  'Security hardening (encryption, HTTPS, rate limiting, CORS setup)',
  'API documentation (Swagger / OpenAPI)',
  'Continuous integration & deployment (CI/CD pipelines)',
  'Data backup & recovery automation',
  'Load balancing and caching setup (Redis, Cloudflare)',
  'Backend monitoring & alert system (UptimeRobot, Grafana, etc.)',
  '3-month premium support & performance updates',
];

const addons = [
  { name: 'AI integration (Chatbot, recommendations)', price: 'Ksh 20,000–50,000' },
  { name: 'Multi-tenant system setup', price: 'Ksh 15,000–40,000' },
  { name: 'API testing automation', price: 'Ksh 10,000–20,000' },
  { name: 'Full documentation (developer-level)', price: 'Ksh 5,000–15,000' },
];

export default function BackendDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Backend Development
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I develop secure and efficient backend systems that power your web applications. My focus is on creating scalable architectures, reliable APIs, and secure data handling to support your business logic.
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
                <p className="text-center text-xl font-bold">Ksh 40,000 – 80,000</p>
                <p className="text-center text-sm text-muted-foreground">Small websites, portfolios, or projects needing simple data handling.</p>
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
                <p className="text-center text-xl font-bold">Ksh 100,000 – 180,000</p>
                <p className="text-center text-sm text-muted-foreground">E-commerce platforms, company dashboards, and growing startups.</p>
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
                <p className="text-center text-xl font-bold">Ksh 200,000 – 350,000+</p>
                <p className="text-center text-sm text-muted-foreground">Large-scale systems, SaaS platforms, and enterprise-level applications.</p>
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

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Optional Add-ons
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {addons.map((addon) => (
                <li key={addon.name} className="flex justify-between items-center bg-background p-4 rounded-lg border">
                  <span className="font-semibold">{addon.name}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </li>
              ))}
            </ul>
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
