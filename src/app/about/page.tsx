import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Rocket, ShieldCheck } from 'lucide-react';

const coreValues = [
  {
    icon: Rocket,
    title: 'Innovation',
    description:
      'We constantly explore new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description:
      'Your digital assets are protected with the highest standards of security.',
  },
  {
    icon: Eye,
    title: 'Reliability',
    description: 'We provide dependable services that you can count on, 24/7.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">About Streamlink</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            STREAMLINK TECHNOLOGIES OPERATIONS is a technology-driven company
            focused on delivering reliable connectivity, secure systems, and
            innovative digital solutions for businesses and organizations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To empower businesses by providing seamless, secure, and scalable
              technology solutions that drive growth and efficiency. We are
              committed to bridging the gap between our clients' needs and the
              ever-evolving world of technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be a leading technology partner, recognized for our innovative
              solutions, unwavering reliability, and commitment to our clients'
              success. We envision a future where technology is an accessible
              and powerful tool for every business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
