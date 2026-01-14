
import { EnterpriseContactForm } from '@/components/enterprise-contact-form';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Mail,
  Phone,
} from 'lucide-react';


export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get in touch with our team to discuss your needs.
          </p>
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
