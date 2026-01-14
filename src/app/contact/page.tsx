
import { EnterpriseContactForm } from '@/components/enterprise-contact-form';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Mail,
  Phone,
  MapPin,
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
        <div className="container grid md:grid-cols-2 gap-16 items-start">
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
      
      <section className="pb-16 md:pb-24">
        <div className="container">
           <h2 className="text-3xl font-bold font-headline text-center mb-12">
              Find Us On Google Maps
            </h2>
          <Card>
            <CardContent className="p-2">
              <div className="aspect-video w-full rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585374981!2d36.68257924610266!3d-1.303191763131754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
