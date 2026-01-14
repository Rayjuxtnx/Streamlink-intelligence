
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Paintbrush,
  Briefcase,
  Cloud,
  Code2,
  Globe,
  Shield,
  Database,
  CheckCircle,
  Star,
  Cpu,
  Music,
  Palette,
  Megaphone,
  Search,
  Target,
  Network,
  Server,
  Layers,
  Webhook,
} from 'lucide-react';

const serviceSections = [
  {
    id: 'software-development',
    title: 'Software & Web Development',
    services: [
      {
        id: 'frontend-development',
        icon: Code2,
        title: 'Frontend Development',
        description:
          'Creating beautiful, responsive, and user-friendly interfaces that provide a seamless user experience across all devices.',
        link: '/services/frontend-development',
      },
      {
        id: 'backend-development',
        icon: Server,
        title: 'Backend Development',
        description:
          'Building robust and scalable server-side applications, ensuring high performance and data security.',
        link: '/services/backend-development',
      },
      {
        id: 'full-stack-development',
        icon: Layers,
        title: 'Full-Stack Development',
        description:
          'End-to-end packages covering frontend, backend, and deployment for complete web solutions.',
        link: '/services/full-stack-development',
      },
      {
        id: 'database-integration',
        icon: Database,
        title: 'Database Integration',
        description:
          'Integrating and managing databases to ensure data is stored efficiently, securely, and is easily accessible.',
        link: '/services/database-integration',
      },
      {
        id: 'api-development',
        icon: Webhook,
        title: 'API Development & Integration',
        description:
          'Designing and integrating APIs to connect services, automate workflows, and extend application functionality.',
        link: '/services/api-development',
      },
      {
        id: 'system-development',
        icon: Briefcase,
        title: 'System Development',
        description:
          'End-to-end design and development of custom software systems tailored to your business needs.',
        link: '/services/system-development',
      },
      {
        id: 'wifi-billing',
        icon: Globe,
        title: 'WiFi Billing System',
        description:
          'Automated billing and management for WiFi hotspot providers, including voucher generation and payment integration.',
        link: '/contact?service=wifi-billing',
      },
    ],
  },
  {
    id: 'cloud-networking',
    title: 'Cloud & Networking Solutions',
    services: [
      {
        id: 'networking-solutions',
        icon: Network,
        title: 'Networking Solutions',
        description:
          'Building and maintaining robust and reliable network infrastructures to ensure seamless connectivity and performance.',
        link: '/contact?service=networking-solutions',
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    services: [
      {
        id: 'cyber-security-consulting',
        icon: Shield,
        title: 'Cyber Security Consulting',
        description:
          'Protecting your digital assets with comprehensive security services, from identifying weaknesses to responding to threats.',
        link: '/contact?service=cyber-security-consulting',
      },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    services: [
      {
        id: 'ml-ai-solutions',
        icon: Cpu,
        title: 'ML & AI',
        description:
          'Leveraging machine learning and artificial intelligence to build smart applications and drive data-driven decisions.',
        link: '/contact?service=ml-ai-solutions',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    services: [
      {
        id: 'digital-marketing-campaigns',
        icon: Megaphone,
        title: 'Digital Marketing',
        description:
          'Driving brand growth through strategic online marketing campaigns and engaging content tailored to your target audience.',
        link: '/contact?service=digital-marketing-campaigns',
      },
      {
        id: 'seo',
        icon: Search,
        title: 'SEO',
        description:
          'Optimizing your website to rank higher in search engine results, increasing organic traffic and online visibility.',
        link: '/contact?service=seo',
      },
      {
        id: 'sem',
        icon: Target,
        title: 'Search Engine Marketing (SEM)',
        description:
          'Driving targeted traffic and generating leads through paid search engine advertising campaigns.',
        link: '/contact?service=sem',
      },
    ],
  },
  {
    id: 'event-services',
    title: 'Event Services',
    services: [
      {
        id: 'event-dj',
        icon: Music,
        title: 'Event DJ',
        description:
          'Bringing the right vibe to your special occasions with a professional and versatile music selection.',
        link: '/contact?service=event-dj',
      },
      {
        id: 'event-decoration',
        icon: Palette,
        title: 'Event Decoration',
        description:
          'Transforming venues into unforgettable experiences with creative and elegant decoration solutions.',
        link: '/contact?service=event-decoration',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive technology solutions designed to meet the demands of
            modern business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-20">
          {serviceSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-20"
            >
              <h2 className="text-3xl font-bold font-headline text-center mb-12">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service) => (
                    <Card key={service.id} className="flex flex-col text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                      <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="mt-4">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                      <CardFooter>
                         <Button variant="link" asChild className="w-full text-primary">
                            <Link href={service.link || `/contact?service=${service.id}`}>View Details</Link>
                          </Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
