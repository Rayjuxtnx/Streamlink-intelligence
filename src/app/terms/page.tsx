
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TermsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcome to STREAMLINK TECHNOLOGIES OPERATIONS. These Terms and
                Conditions govern your use of our website and services. By
                accessing or using our service, you agree to be bound by these
                Terms. If you disagree with any part of the terms, you may not
                access the service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                STREAMLINK TECHNOLOGIES OPERATIONS and its licensors. The
                Service is protected by copyright, trademark, and other laws of
                both Kenya and foreign countries. Our trademarks and trade dress
                may not be used in connection with any product or service
                without the prior written consent of STREAMLINK TECHNOLOGIES
                OPERATIONS.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Links To Other Web Sites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by STREAMLINK
                TECHNOLOGIES OPERATIONS. We have no control over, and assume no
                responsibility for, the content, privacy policies, or practices
                of any third-party web sites or services.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>4. Limitation Of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                In no event shall STREAMLINK TECHNOLOGIES OPERATIONS, nor its
                directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special,
                consequential or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible
                losses, resulting from your access to or use of or inability to
                access or use the Service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>5. Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with
                the laws of Kenya, without regard to its conflict of law
                provisions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>6. Changes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>7. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at enterprise@streamlink-intel.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
