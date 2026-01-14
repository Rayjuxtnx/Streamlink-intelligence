
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Custom Wi-Fi login page (HTML/CSS/JS)',
  '3 fixed packages (Bronze, Silver, Gold)',
  'Manual user creation or voucher system',
  'Simple MPesa STK Push payment',
  'Auto redirect after payment',
  'Basic admin panel (view users, payments)',
  'Local database (SQLite/MySQL)',
  'Single router integration (no API required, local blocking script)',
  '1-month free maintenance',
];

const standardPackage = [
  'Everything in Basic, plus:',
  'MPesa Daraja API (automated STK + callback verification)',
  'Dynamic user activation & expiry',
  'Bandwidth control per user (2–10 Mbps)',
  'Multi-router management (via Mikrotik or CoovaChilli)',
  'Voucher generation system (printable tickets)',
  'Admin dashboard with analytics (payments, users online, usage reports)',
  'MySQL database (online hosting)',
  'Domain & SSL certificate (1 year)',
  'Email & SMS receipts',
  '3-month support & updates',
];

const premiumPackage = [
  'All Standard features, plus:',
  'Centralized backend (FastAPI / Django / Node.js)',
  'Advanced RADIUS or MikroTik API integration',
  'Multiple routers, branches, or locations supported',
  'Real-time user tracking dashboard',
  'Auto disconnection & reconnection via backend',
  'Dynamic packages (time, data, speed)',
  'Admin roles & permissions',
  'Reports export (Excel / PDF)',
  'Advanced analytics (revenue, package trends, usage graphs)',
  'Custom domain & hosting (1 year VPS server)',
  '1-year premium maintenance & security monitoring',
];

const addons = [
  { name: 'SMS confirmation', price: '+KSh 10,000' },
  { name: 'Branding & logo design', price: '+KSh 5,000' },
  { name: 'Android admin app', price: '+KSh 60,000' },
  { name: 'Logo animation & branding video', price: '+KSh 10,000' },
  { name: 'Mobile app for users', price: '+KSh 100,000 – 180,000' },
  { name: 'AI-based usage prediction', price: '+KSh 70,000 – 150,000' },
];

export default function WifiBillingPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              WiFi Billing System
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I develop comprehensive WiFi billing systems that automate user management, voucher creation, and payment processing. Ideal for businesses offering public or private WiFi access, this system simplifies operations and enhances user experience.
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
                <p className="text-center text-xl font-bold">KSh 150,000 – 250,000</p>
                <p className="text-center text-sm text-muted-foreground">small shops, cyber cafés, or small estates (≤ 20 users)</p>
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
                <p className="text-center text-xl font-bold">KSh 300,000 – 500,000</p>
                <p className="text-center text-sm text-muted-foreground">estates, hotels, schools, or shared offices (20–100 users)</p>
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
                <p className="text-center text-xl font-bold">KSh 600,000 – 1,200,000</p>
                <p className="text-center text-sm text-muted-foreground">ISPs, large networks, universities, apartments (100–1000+ users)</p>
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
