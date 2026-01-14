
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Briefcase,
  Cloud,
  Code2,
  Globe,
  Shield,
  CheckCircle,
  Cpu,
  Palette,
  Megaphone,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software & Web Development',
    description: 'Custom solutions from frontend to full-stack.',
    link: '/services#software-development',
  },
  {
    icon: Cloud,
    title: 'Cloud & Networking',
    description: 'Robust infrastructure and connectivity solutions.',
    link: '/services#cloud-networking',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting your systems and digital assets.',
    link: '/services#cybersecurity',
  },
  {
    icon: Cpu,
    title: 'ML & AI',
    description: 'Intelligent applications and data-driven decisions.',
    link: '/services#ml-ai',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Driving brand growth through strategic campaigns.',
    link: '/services#digital-marketing',
  },
  {
    icon: Palette,
    title: 'Event Services',
    description: 'Professional DJ and decoration for special occasions.',
    link: '/services#event-services',
  },
];

const whyChooseUs = [
  {
    title: 'Enterprise-Grade Solutions',
    description:
      'Delivering robust and scalable technologies that meet corporate standards.',
  },
  {
    title: 'Security-First Approach',
    description:
      'Integrating comprehensive security measures at every level of our services.',
  },
  {
    title: 'Scalable & Future-Ready',
    description:
      'Building solutions that grow with your business and adapt to new technologies.',
  },
  {
    title: 'Dedicated Technical Expertise',
    description:
      'Access to a team of seasoned professionals committed to your success.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline animate-glow">
            STREAMLINK TECHNOLOGIES OPERATIONS
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80 animate-glow-subtle">
            Delivering ISP, Cloud Computing, Cybersecurity, and Advanced IT
            Solutions for Modern Businesses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">
              Powering Connectivity, Cloud & Cyber Solutions
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer a comprehensive suite of technology services to empower your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="link" asChild className="mt-2 text-primary">
                    <Link href={service.link}>Learn More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Why Choose Streamlink
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-full mt-1">
                   <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold font-headline">
            Ready to transform your technology infrastructure?
          </h2>
          <p className="mt-2 mb-8 max-w-xl mx-auto text-muted-foreground">
            Let’s discuss how Streamlink can support your business and propel
            you into the future of technology.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
