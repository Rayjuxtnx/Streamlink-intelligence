
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
  Briefcase,
  Cloud,
  Code2,
  Globe,
  Shield,
  Database,
  CheckCircle,
  Star,
} from 'lucide-react';

const services = [
  {
    id: 'isp',
    icon: Globe,
    title: 'ISP & Network Services',
    description:
      'We provide enterprise-grade internet services and network infrastructure design, implementation, and management to ensure your business stays connected and performs optimally.',
    details: [
      'High-speed fiber optic and wireless connectivity.',
      'Software-Defined Networking (SD-WAN) for optimized performance.',
      '24/7 network monitoring and proactive maintenance.',
      'Custom network design for scalability and security.',
    ],
    packages: [
      {
        name: 'Basic',
        price: '$499/mo',
        features: [
          'Up to 500 Mbps Shared Bandwidth',
          'Standard SLA',
          'Business Hours Support',
          'Basic Firewall Setup',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Contact Us',
        features: [
          '1 Gbps+ Dedicated Fiber',
          'Enhanced SLA with 99.99% Uptime',
          '24/7 Priority Support',
          'Advanced SD-WAN & QoS',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
      },
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Computing Solutions',
    description:
      'Our scalable cloud services include IaaS, PaaS, and SaaS solutions, offering flexible, secure, and cost-effective hosting for your applications and data.',
    details: [
      'Multi-cloud strategy and implementation (AWS, Azure, GCP).',
      'Serverless architecture for cost-efficient scaling.',
      'Containerization with Docker and Kubernetes.',
      'Automated backup and disaster recovery solutions.',
    ],
    packages: [
      {
        name: 'Basic',
        price: '$299/mo',
        features: [
          'Single-Cloud Setup',
          'Managed VM / Basic K8s',
          'Daily Backups',
          'Community Support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Contact Us',
        features: [
          'Multi-Cloud or Hybrid Setup',
          'Advanced Kubernetes Orchestration',
          'Real-time Disaster Recovery',
          'Dedicated Cloud Architect',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
      },
    ],
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity & Risk Management',
    description:
      'Protect your digital assets with our comprehensive cybersecurity services, including threat analysis, vulnerability assessments, and proactive defense strategies.',
    details: [
      'Managed Security Operations Center (SOC) as a Service.',
      'Advanced threat detection and response (EDR/XDR).',
      'Penetration testing and vulnerability management.',
      'Compliance and regulatory adherence (e.g., GDPR, HIPAA).',
    ],
    packages: [
      {
        name: 'Basic',
        price: '$999/mo',
        features: [
          'Monthly Vulnerability Scans',
          'Managed Firewall',
          'Endpoint Detection & Response (EDR)',
          'Security Awareness Training',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Contact Us',
        features: [
          '24/7 Managed SOC',
          'Proactive Threat Hunting (XDR)',
          'Regular Penetration Testing',
          'Virtual CISO (vCISO) Services',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
      },
    ],
  },
  {
    id: 'web-development',
    icon: Code2,
    title: 'Web Development',
    description:
      'From corporate websites to complex e-commerce platforms, we build responsive, fast, and secure web solutions tailored to your brand and business goals.',
    details: [
      'Custom front-end and back-end development.',
      'Progressive Web App (PWA) and mobile-first design.',
      'Content Management System (CMS) implementation and customization.',
      'API design and integration for seamless connectivity.',
    ],
    packages: [
      {
        name: 'Basic',
        price: 'From $5,000',
        features: [
          'Up to 10 Pages',
          'CMS Integration',
          'Responsive Design',
          'Basic SEO Setup',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Contact Us',
        features: [
          'Custom Web Application',
          'E-commerce & Payments',
          'API Integrations',
          'Ongoing Maintenance & Support',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
      },
    ],
  },
  {
    id: 'system-development',
    icon: Database,
    title: 'System & Software Development',
    description:
      'We develop custom software and enterprise systems that streamline your operations, improve efficiency, and provide a competitive advantage.',
    details: [
      'Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems.',
      'AI and Machine Learning model integration.',
      'Agile development methodologies for rapid delivery.',
      'Legacy system modernization and migration.',
    ],
    packages: [
      {
        name: 'Basic',
        price: 'Project-based',
        features: [
          'Internal Tool Development',
          'Process Automation Scripts',
          'Database Design',
          'Technical Specification Document',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Contact Us',
        features: [
          'Full ERP/CRM System',
          'AI Model Integration',
          'Legacy System Migration',
          'Dedicated Project Manager',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
      },
    ],
  },
  {
    id: 'consulting',
    icon: Briefcase,
    title: 'IT Consulting & Support',
    description:
      'Our expert consultants provide strategic IT guidance, from infrastructure planning to digital transformation, backed by reliable 24/7 technical support.',
    details: [
      'IT roadmap and technology strategy development.',
      'Digital transformation and change management.',
      'Project management and delivery oversight.',
      'Dedicated helpdesk and on-site support.',
    ],
    packages: [
      {
        name: 'Basic',
        price: '$150/hour',
        features: [
          'On-demand IT Advice',
          'Technology Assessments',
          'Vendor Selection Assistance',
          'Remote Support',
        ],
        cta: 'Get Started',
      },
      {
        name: 'Premium',
        price: 'Retainer',
        features: [
          'Strategic IT Roadmap',
          'Digital Transformation Strategy',
          'Project Management',
          'Dedicated vCIO',
        ],
        cta: 'Request a Quote',
        isFeatured: true,
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
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-20"
            >
              <div
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-md flex-shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="bg-secondary/50 border-primary/20">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <service.icon className="h-24 w-24 text-muted-foreground/30" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-center mb-10 font-headline">Pricing Tiers</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {service.packages.map((pkg) => (
                    <Card key={pkg.name} className={`flex flex-col ${pkg.isFeatured ? 'border-primary shadow-lg' : ''}`}>
                       {pkg.isFeatured && (
                        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">
                          Most Popular
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                        <CardDescription>{pkg.price}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full" variant={pkg.isFeatured ? 'default' : 'outline'}>
                          <Link href="/contact">{pkg.cta}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
