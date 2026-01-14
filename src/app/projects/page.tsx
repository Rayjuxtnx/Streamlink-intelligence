
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    id: 'project-kawady',
    title: 'Kawady Mildsteel Company',
    description:
      'Web Developer & Digital Consultant. Developed a professional website for a leading mildsteel company offering welding and fabrication services in Kenya and the USA. The site showcases their portfolio, services, and facilitates customer inquiries.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Formspree'],
    link: '#',
  },
  {
    id: 'project-seo-scout',
    title: 'SEO Scout & Digital Skills Hub',
    description:
      'Creator & Full-Stack Developer. Developed a comprehensive platform combining a live SEO tracking tool with a digital skills educational hub. The tool provides real-time SEO analytics, while the educational section offers courses on digital marketing.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO APIs'],
    link: '#',
  },
  {
    id: 'project-drone-tracking',
    title: 'Drone Tracking System',
    description: 'Full-Stack Developer. Developed a real-time drone tracking system with a live map interface. The system monitors drone fleet status, flight paths, and telemetry data, providing a centralized dashboard for operators.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Mapbox', 'Vercel'],
    link: '#',
  },
  {
    id: 'project-rental-management',
    title: 'Rental Management System',
    description: 'Full-Stack Developer. Engineered a comprehensive rental management system from the ground up. The platform features tenant and property management, automated payment processing, and maintenance request tracking to streamline operations for landlords.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe API'],
    link: '#',
  },
  {
    id: 'project-school-management',
    title: 'School Management System',
    description: 'Full-Stack Developer. Designed and developed a comprehensive school management system to streamline administrative tasks. The platform includes modules for student information, grades, attendance, and parent-teacher communication.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 'project-network-monitoring',
    title: 'AI-Powered Network Monitoring',
    description:
      'A predictive analytics platform that uses machine learning to anticipate network failures and optimize performance in real-time for a major telecommunications client.',
    tags: ['Machine Learning', 'SDN', 'Big Data', 'Python'],
    link: '#',
  },
  {
    id: 'project-kubernetes',
    title: 'Multi-Cloud Kubernetes Platform',
    description:
      'Developed a unified container orchestration platform across AWS, Azure, and GCP, enabling seamless application deployment and scaling for a global enterprise.',
    tags: ['Kubernetes', 'Go', 'Multi-Cloud', 'DevOps'],
    link: '#',
  },
  {
    id: 'project-iot-agriculture',
    title: 'IoT Smart Agriculture System',
    description:
      'An end-to-end IoT solution with custom sensors and a data analytics dashboard to optimize crop yields and water usage for a large-scale agricultural business.',
    tags: ['IoT', 'React', 'Node.js', 'MQTT'],
    link: '#',
  },
  {
    id: 'project-quantum-encryption',
    title: 'Quantum-Resistant Encryption',
    description:
      'Implemented next-generation cryptographic protocols to secure sensitive data for a financial institution, preparing their systems for the quantum computing era.',
    tags: ['Cybersecurity', 'Cryptography', 'Go', 'Java'],
    link: '#',
  },
];

export default function ProjectsPage() {
  const projectImages = PlaceHolderImages.filter((img) =>
    projects.some((project) => project.id === img.id)
  );

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">Our Projects</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A showcase of our successful engineering feats and innovative
            solutions across various industries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const image = projectImages.find((img) => img.id === project.id);
              return (
                <Card
                  key={project.id}
                  className="flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                >
                  {image && (
                    <div className="relative h-60 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        className="object-cover rounded-t-lg"
                        fill
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="pt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className='text-primary'>
                        <Link href={project.link}>View Project &rarr;</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
