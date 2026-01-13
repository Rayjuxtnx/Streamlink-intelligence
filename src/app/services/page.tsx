import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Briefcase,
  Cloud,
  Code2,
  Globe,
  Shield,
  Database,
} from 'lucide-react';

const services = [
  {
    id: 'isp',
    icon: Globe,
    title: 'ISP & Network Services',
    description:
      'We provide enterprise-grade internet services and network infrastructure design, implementation, and management to ensure your business stays connected and performs optimally.',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Computing Solutions',
    description:
      'Our scalable cloud services include IaaS, PaaS, and SaaS solutions, offering flexible, secure, and cost-effective hosting for your applications and data.',
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity & Risk Management',
    description:
      'Protect your digital assets with our comprehensive cybersecurity services, including threat analysis, vulnerability assessments, and proactive defense strategies.',
  },
  {
    id: 'web-development',
    icon: Code2,
    title: 'Web Development',
    description:
      'From corporate websites to complex e-commerce platforms, we build responsive, fast, and secure web solutions tailored to your brand and business goals.',
  },
  {
    id: 'system-development',
    icon: Database,
    title: 'System & Software Development',
    description:
      'We develop custom software and enterprise systems that streamline your operations, improve efficiency, and provide a competitive advantage.',
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'IT Consulting & Support',
    description:
      'Our expert consultants provide strategic IT guidance, from infrastructure planning to digital transformation, backed by reliable 24/7 technical support.',
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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md flex-shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
