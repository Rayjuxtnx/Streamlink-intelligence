
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const offerings = [
  {
    title: 'Weddings & Receptions',
    description: 'Creating the perfect musical backdrop for your special day.',
  },
  {
    title: 'Corporate Events',
    description: 'Professional DJ services for company parties, conferences, and functions.',
  },
  {
    title: 'Private Parties',
    description: 'Bringing the energy to birthdays, anniversaries, and private gatherings.',
  },
];

export default function EventDjPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              Event DJ
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              With a passion for music and a professional setup, I provide the perfect soundtrack for your event. I work closely with you to understand your musical tastes and the desired atmosphere, ensuring a memorable experience for you and your guests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {offerings.map((offering) => (
                <Card key={offering.title} className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-center">{offering.title}</CardTitle>
                         <p className="text-center text-xl font-bold">Contact for Quote</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center text-muted-foreground">{offering.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">
            Ready to get started or have questions?
          </h2>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
