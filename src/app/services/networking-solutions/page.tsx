
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const offerings = [
  {
    title: 'Network Design & Setup',
    description: 'Designing and implementing secure and scalable network infrastructures.',
  },
  {
    title: 'Router & Switch Config',
    description: 'Configuring network hardware for optimal performance and security.',
  },
  {
    title: 'Wi-Fi Optimization',
    description: 'Troubleshooting and optimizing your wireless network for better coverage.',
  },
  {
    title: 'Network Security',
    description: 'Implementing firewalls and other measures to secure your network.',
  },
];

export default function NetworkingSolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Networking Solutions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I offer professional networking services to design, implement, and manage secure and high-performance networks for homes and businesses. I ensure your network is reliable, scalable, and optimized for your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offerings.map((offering) => (
                <Card key={offering.title} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-center">{offering.title}</CardTitle>
                         <p className="text-center text-xl font-bold">Contact for Quote</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center text-muted-foreground">{offering.description}</p>
                    </CardContent>
                </Card>
            ))}
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
