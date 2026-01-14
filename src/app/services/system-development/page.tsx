
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'User authentication (login/signup/reset)',
  'Admin dashboard with data overview',
  'CRUD operations (Create, Read, Update, Delete)',
  'Basic database integration (MySQL, PostgreSQL, or Firebase)',
  'Responsive user interface',
  'Simple reporting or data export (CSV, PDF)',
  'Deployment setup (Netlify, Render, or shared hosting)',
  'Basic documentation and user guide',
];

const standardPackage = [
  'Everything in Basic, plus:',
  'Multi-role access control (Admin, Staff, Users)',
  'API development & integration (MPesa, Email, SMS, etc.)',
  'Advanced reporting & analytics dashboards',
  'Notifications system (email or in-app alerts)',
  'File uploads and media management',
  'Modern UI/UX design (React, Next.js, or Vue)',
  'Database optimization and security setup',
  'Cloud hosting setup (AWS, Railway, Render)',
  'System testing and debugging',
];

const premiumPackage = [
  'Everything in Standard, plus:',
  'Full-stack architecture (frontend + backend + database)',
  'Advanced analytics & dashboards with charts',
  'Real-time data sync (WebSockets/Firebase)',
  'Payment integration (MPesa, PayPal, Stripe)',
  'Role-based and modular access system',
  'Mobile app integration (Android/iOS API support)',
  'Custom API gateway and microservice architecture',
  'Automated backups & scalability setup',
  'Comprehensive testing (unit, integration, and security)',
  'Long-term maintenance & technical support',
];

export default function SystemDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              System Development
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I architect and build complete software systems from the ground up, including custom business logic, data processing, and user management, to solve your unique challenges.
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
                <p className="text-center text-xl font-bold">Ksh 40,000 – 90,000</p>
                <p className="text-center text-sm text-muted-foreground">Small businesses or startups that need a simple management system. Example: Inventory tracker, student record system, booking system.</p>
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
                <p className="text-center text-xl font-bold">Ksh 100,000 – 250,000</p>
                <p className="text-center text-sm text-muted-foreground">Medium-sized organizations or SMEs needing a scalable, multi-user platform. Example: School management system, HR system, POS, or CRM.</p>
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
                <p className="text-center text-xl font-bold">Ksh 300,000 – 700,000+</p>
                <p className="text-center text-sm text-muted-foreground">Corporates, SaaS platforms, or enterprise-level solutions. Example: E-commerce platforms, ERP systems, hospital systems, or financial management systems.</p>
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
