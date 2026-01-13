import { EnterpriseContactForm } from '@/components/enterprise-contact-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Handshake,
  ShieldCheck,
  TrendingUp,
  Link,
  Mail,
  Phone,
} from 'lucide-react';

const industries = [
  {
    icon: '🏫',
    title: 'Education',
    description:
      'Network infrastructure, learning platforms, and secure data systems for schools and universities.',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    description:
      'HIPAA-compliant systems, telemedicine platforms, and secure patient data management.',
  },
  {
    icon: '🏢',
    title: 'Corporate & Enterprises',
    description:
      'Scalable infrastructure, cloud migration, and digital workplace solutions for global operations.',
  },
  {
    icon: '🚀',
    title: 'SMEs & Startups',
    description:
      'Cost-effective technology solutions designed for growth-stage companies and emerging businesses.',
  },
];

const whyChooseUs = [
  {
    icon: Link,
    title: 'End-to-End Ownership',
    description:
      'We manage the entire technology lifecycle—from design and implementation to ongoing support.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First Design',
    description:
      'Every solution is built with security as a foundational principle, not an afterthought.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description:
      'Future-ready systems designed to grow with your organization and adapt to emerging technologies.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnership',
    description:
      'Long-term collaboration focused on your success, with dedicated support and continuous optimization.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tailored solutions for sector-specific challenges and opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <Card
                key={industry.title}
                className="text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit text-3xl">
                    {industry.icon}
                  </div>
                  <CardTitle className="mt-4">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Why Choose Streamlink
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            The enterprise advantages that define our partnership approach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                  <item.icon className="h-6 w-6" />
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

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline">
              Begin Your Transformation
            </h2>
            <p className="text-muted-foreground">
              Contact our executive team to discuss your infrastructure and
              digital intelligence needs.
            </p>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Enterprise Inquiry</h3>
                <p className="text-muted-foreground mt-2">
                  For institutions, corporations, and organizations requiring
                  mission-critical infrastructure solutions, our executive team
                  is available for confidential consultation.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">Executive Office:</p>
                      <a
                        href="tel:+254700167972"
                        className="text-muted-foreground hover:text-primary"
                      >
                        +254 700 167 972
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">Email:</p>
                      <a
                        href="mailto:enterprise@streamlink-intel.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        enterprise@streamlink-intel.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-semibold">Response Time:</p>
                  <p className="text-sm text-muted-foreground">
                    All enterprise inquiries receive a response within 2
                    business hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <EnterpriseContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
