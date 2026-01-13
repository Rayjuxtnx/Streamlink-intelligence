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

const projects = [
  {
    id: 'project-network-monitoring',
    title: 'AI-Powered Network Monitoring',
    description:
      'A predictive analytics platform that uses machine learning to anticipate network failures and optimize performance in real-time for a major telecommunications client.',
    tags: ['Machine Learning', 'SDN', 'Big Data', 'Python'],
  },
  {
    id: 'project-kubernetes',
    title: 'Multi-Cloud Kubernetes Platform',
    description:
      'Developed a unified container orchestration platform across AWS, Azure, and GCP, enabling seamless application deployment and scaling for a global enterprise.',
    tags: ['Kubernetes', 'Go', 'Multi-Cloud', 'DevOps'],
  },
  {
    id: 'project-iot-agriculture',
    title: 'IoT Smart Agriculture System',
    description:
      'An end-to-end IoT solution with custom sensors and a data analytics dashboard to optimize crop yields and water usage for a large-scale agricultural business.',
    tags: ['IoT', 'React', 'Node.js', 'MQTT'],
  },
  {
    id: 'project-quantum-encryption',
    title: 'Quantum-Resistant Encryption',
    description:
      'Implemented next-generation cryptographic protocols to secure sensitive data for a financial institution, preparing their systems for the quantum computing era.',
    tags: ['Cybersecurity', 'Cryptography', 'Go', 'Java'],
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
                  <CardContent className="flex-grow"></CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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