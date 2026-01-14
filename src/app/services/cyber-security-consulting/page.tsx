
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const offerings = [
  {
    title: 'Vulnerability Assessments',
    description: 'Identifying and analyzing security weaknesses in your systems.',
  },
  {
    title: 'Penetration Testing',
    description: 'Simulating cyber attacks to test the strength of your defenses.',
  },
  {
    title: 'Security Audits',
    description: 'Comprehensive reviews of your security policies and infrastructure.',
  },
  {
    title: 'Incident Response',
    description: 'Planning and executing a response to security breaches.',
  },
];

export default function CyberSecurityConsultingPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Cyber Security Consulting
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I provide expert cybersecurity consulting to help you identify vulnerabilities, protect against threats, and secure your digital infrastructure. My goal is to give you peace of mind by safeguarding your valuable data and systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            What&apos;s Included
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
