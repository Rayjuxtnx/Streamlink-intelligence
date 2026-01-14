
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Responsive website design (mobile + desktop)',
  '3–5 pages (Home, About, Services, Contact, etc.)',
  'Interactive UI (buttons, forms, animations)',
  'Basic backend setup (user data, contact form storage)',
  'Simple database (MySQL / PostgreSQL)',
  'Email or form submission integration',
  'SEO-friendly structure',
  'Basic deployment (Netlify, Render, or Vercel)',
  'Free 1-month support after delivery',
];

const standardPackage = [
  'Everything in Basic +',
  'Dynamic content with API integration',
  'User authentication (login/register)',
  'Product or service listing pages',
  'Admin dashboard (basic CRUD system)',
  'Payment integration (MPesa, PayPal, or Stripe)',
  'Role-based access (Admin/User)',
  'Custom CSS theme and branding',
  'Blog or news section',
  'Page speed & performance optimization',
  'Deployment + version control (GitHub setup)',
  '2-month support after delivery',
];

const premiumPackage = [
  'Everything in Standard +',
  'Full e-commerce backend (cart, checkout, orders)',
  'Real-time features (chat, notifications, sockets)',
  'Progressive Web App (PWA) capabilities',
  'Cloud storage (AWS/Firebase)',
  'Security hardening (JWT, HTTPS, encryption)',
  'Advanced analytics dashboard',
  'API documentation (Swagger/Postman)',
  'Automated backups & monitoring',
  'Performance optimization & scalability setup',
  'Continuous Deployment (CI/CD) configuration',
  'Up to 3 months premium support & maintenance',
];

const addons = [
  { name: 'Custom animation or UI design', price: 'Ksh 5,000–15,000' },
  { name: 'Multi-language support', price: 'Ksh 5,000–10,000' },
  { name: 'SEO content optimization', price: 'Ksh 5,000–20,000' },
  { name: 'Advanced reporting or analytics', price: 'Ksh 10,000–25,000' },
];

export default function FullStackDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Full-Stack Development
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              From database to user interface, I offer comprehensive packages to bring your entire project to life. These bundles cover system architecture, database design, backend logic, and frontend development to deliver a cohesive and complete product.
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
                <p className="text-center text-xl font-bold">Ksh 60,000 – 100,000</p>
                <p className="text-center text-sm text-muted-foreground">Small businesses, startups, or personal portfolios.</p>
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
                <p className="text-center text-xl font-bold">Ksh 120,000 – 200,000</p>
                <p className="text-center text-sm text-muted-foreground">Growing businesses, e-commerce startups, and dynamic web apps.</p>
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
                <p className="text-center text-xl font-bold">Ksh 250,000 – 400,000+</p>
                <p className="text-center text-sm text-muted-foreground">Established companies, SaaS platforms, or advanced e-commerce systems.</p>
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
