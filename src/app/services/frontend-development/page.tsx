
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Up to 4 responsive pages (Home, About, Services, Contact)',
  'Clean, mobile-friendly layout (HTML, CSS, JS)',
  'Simple animations (hover, transitions)',
  'Navigation menu, header, and footer',
  'Contact form (basic validation)',
  'SEO-friendly HTML structure',
  'Deployment (Netlify or GitHub Pages)',
  '1-month free support',
];

const standardPackage = [
  'Everything in Basic +',
  'Dynamic content with JavaScript or React',
  'Product/service listing pages',
  'Custom CSS theme and branding',
  'Image gallery or slider section',
  'Blog or news layout page',
  'Form validation and API integration (contact/order forms)',
  'Page speed optimization',
  'Accessibility-friendly design (A11y)',
  'Light/dark mode toggle',
  '2 months of support & minor revisions',
];

const premiumPackage = [
  'Everything in Standard +',
  'Full Single Page Application (SPA) using React, Vue, or Next.js',
  'Advanced animations and transitions (GSAP, Framer Motion, etc.)',
  'Admin/dashboard interface (frontend side)',
  'Progressive Web App (PWA) frontend setup',
  'Real-time updates (API-driven data, live stats)',
  'SEO structure & analytics integration',
  'Frontend testing (Cypress/Jest)',
  'Continuous deployment setup (GitHub + Netlify/Vercel)',
  '3-month premium support & maintenance',
];

const addons = [
    { name: 'Custom animated hero section', price: 'Ksh 5,000–10,000' },
    { name: 'Chat widget or chatbot integration', price: 'Ksh 5,000–15,000' },
    { name: 'Multi-language support', price: 'Ksh 5,000–10,000' },
    { name: 'UI/UX design system or brand guideline', price: 'Ksh 8,000–20,000' },
];

export default function FrontendDevelopmentPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
            <Button variant="link" asChild className='mb-4'>
                <Link href="/services"> &larr; Back to Services</Link>
            </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Frontend Development
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I specialize in building modern, interactive, and high-performance
              user interfaces. From the initial design concept to the final
              deployment, I ensure your web application is not only visually
              stunning but also accessible, fast, and SEO-friendly.
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
                <p className='text-center text-sm text-muted-foreground'>Startups, small businesses, or personal portfolios.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {basicPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className='text-muted-foreground'>{item}</span>
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
                <p className='text-center text-sm text-muted-foreground'>Growing companies, small e-commerce, and service-based websites.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {standardPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className='text-muted-foreground'>{item}</span>
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
                <p className='text-center text-sm text-muted-foreground'>Large organizations, SaaS platforms, and interactive web applications.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {premiumPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className='text-muted-foreground'>{item}</span>
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
            <ul className='space-y-4'>
                {addons.map((addon) => (
                    <li key={addon.name} className='flex justify-between items-center bg-background p-4 rounded-lg border'>
                        <span className='font-semibold'>{addon.name}</span>
                        <span className='text-primary font-bold'>{addon.price}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
          <div className='container'>
            <h2 className="text-3xl font-bold font-headline">
                Ready to get started or have questions?
            </h2>
            <Button asChild size="lg" className='mt-8'>
                <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
      </section>
    </>
  );
}
