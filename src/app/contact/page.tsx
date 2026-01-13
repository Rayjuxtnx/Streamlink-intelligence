import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let’s discuss how Streamlink can support your business. We're here
            to answer your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  General Inquiries & Support
                </p>
                <a
                  href="mailto:contact@streamlink.tech"
                  className="text-primary hover:underline"
                >
                  contact@streamlink.tech
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">
                  Mon-Fri from 9am to 5pm
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Office Address</h3>
                <p className="text-muted-foreground">
                  123 Tech Avenue, Innovation City, 12345
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
