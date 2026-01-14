
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Database setup (MySQL / PostgreSQL / SQLite)',
  'Table and schema design (users, contacts, products, etc.)',
  'Basic CRUD operations (Create, Read, Update, Delete)',
  'Simple API connection to frontend',
  'Form data storage (contact forms, leads, etc.)',
  'Secure database access (passwords, SSL, environment variables)',
  'Hosting configuration (Render, Railway, or Supabase)',
  '1-month support',
];

const standardPackage = [
  'Everything in Basic +',
  'Advanced database modeling (relationships, joins, indexing)',
  'User authentication & role-based access (Admin/User)',
  'Integration with payment or order systems',
  'API endpoints for dynamic data (REST or GraphQL)',
  'Cloud database setup (Firebase, Supabase, MongoDB Atlas, or Neon)',
  'Data validation and error handling',
  'Backup and restore configuration',
  'Database optimization for speed and security',
  '2-month support and minor updates',
];

const premiumPackage = [
  'Everything in Standard +',
  'Complex relational database architecture (multi-table joins, normalization)',
  'Scalable cloud database (AWS RDS, Google Cloud SQL, or MongoDB Atlas)',
  'Automated backups and replication setup',
  'Real-time database updates (Socket.IO, Firebase Realtime DB)',
  'Data analytics and reporting system',
  'Integration with multiple APIs or microservices',
  'High-security encryption and authentication (JWT, OAuth)',
  'Database monitoring and performance alerts',
  'Continuous deployment integration (CI/CD for DB migrations)',
  '3-month premium support & optimization',
];

const addons = [
  { name: 'Database documentation (ERD + schema diagrams)', price: 'Ksh 5,000–10,000' },
  { name: 'Data migration from old system', price: 'Ksh 10,000–25,000' },
  { name: 'AI-powered analytics or reports', price: 'Ksh 15,000–40,000' },
  { name: 'Multi-tenant (multi-client) database setup', price: 'Ksh 20,000–50,000' },
];

export default function DatabaseIntegrationPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Database Integration
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I design and integrate databases that are optimized for performance, scalability, and security. Whether you need a relational (SQL) or non-relational (NoSQL) database, I ensure your data is structured and managed effectively.
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
                <p className="text-center text-xl font-bold">Ksh 20,000 – 50,000</p>
                <p className="text-center text-sm text-muted-foreground">Small websites and simple data storage needs.</p>
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
                <p className="text-center text-xl font-bold">Ksh 60,000 – 120,000</p>
                <p className="text-center text-sm text-muted-foreground">Medium-scale apps, business dashboards, and e-commerce sites.</p>
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
                <p className="text-center text-xl font-bold">Ksh 150,000 – 300,000+</p>
                <p className="text-center text-sm text-muted-foreground">Enterprise-level systems, SaaS platforms, or multi-user applications.</p>
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
