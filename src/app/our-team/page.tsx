'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Briefcase, CheckCircle, Cpu, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const leadershipTeam = [
  {
    name: 'JOSEPH MULI',
    role: 'Founder & Director',
    description:
      '15+ years in enterprise infrastructure and digital transformation. Former CTO at GlobalNet Solutions.',
    imageId: 'joseph-muli',
  },
  {
    name: 'Mr Mark',
    role: 'Lead Network Engineer',
    description:
      'Specialized in high-capacity fiber networks, SD-WAN, and IoT infrastructure with 12 years of field experience.',
    imageId: 'mr-mark',
  },
  {
    name: 'Philip',
    role: 'Lead Software Engineer & Cloud Security Specialist',
    description:
      'A full-stack developer and cloud security expert, specializing in microservices, AI-driven solutions, multi-cloud architecture, and cybersecurity frameworks.',
    imageId: 'mr-philip',
  },
];

const technicalTeams = [
  {
    title: 'Network & Infrastructure',
    description:
      'Design, implementation, and optimization of enterprise-grade network solutions.',
    skills: ['Cisco/Juniper', 'SD-WAN', 'Fiber Optics', '5G'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Multi-cloud deployments, containerization, CI/CD pipelines, and infrastructure as code.',
    skills: [
      'Bash',
      'Systemd',
      'Cron',
      'MySQL/MariaDB',
      'QEMU',
      'libvirt',
      'Paramiko',
    ],
  },
  {
    title: 'Cybersecurity',
    description:
      'Threat intelligence, penetration testing, security audits, and compliance management.',
    skills: [
      'Wireshark',
      'pfSense',
      'AWS',
      'ScoutSuite',
      'nmap',
      'OWASP ZAP',
      'SonarQube',
      'SELinux',
    ],
  },
  {
    title: 'Software Engineering',
    description:
      'Custom enterprise applications, API development, data analytics, and system integration.',
    skills: ['Python/Java', 'React/Angular', 'Node.js', 'SQL/NoSQL'],
  },
];

const expertise = [
  { name: 'Network Infrastructure', value: 98 },
  { name: 'Cloud Systems', value: 95 },
  { name: 'Cybersecurity', value: 96 },
  { name: 'Software Engineering', value: 94 },
];

const certifications = [
  { name: 'AWS Solutions Architect', level: 'Professional Level', icon: Cpu },
  { name: 'CISSP', level: 'Security Certification', icon: ShieldCheck },
  { name: 'CCIE Enterprise', level: 'Cisco Certified', icon: Briefcase },
  { name: 'Azure Expert', level: 'Microsoft Certified', icon: Award },
];

export default function OurTeamPage() {
  const leadershipImages = PlaceHolderImages.filter((img) =>
    leadershipTeam.some((person) => person.imageId === img.id)
  );

  const [progressValues, setProgressValues] = useState(expertise.map(() => 0));

  useEffect(() => {
    const timers = expertise.map((skill, index) =>
      setTimeout(() => {
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = skill.value;
          return newValues;
        });
      }, 100 * (index + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold font-headline">
            The Architects Behind Intelligent Infrastructure
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are the engineers, innovators, and problem-solvers dedicated to
            building the future of network infrastructure, cloud systems, and
            cybersecurity. Our expertise transforms complex challenges into
            reliable, scalable solutions for enterprise clients worldwide.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Leadership Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visionary leaders driving technological innovation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((person) => {
              const image = leadershipImages.find(
                (img) => img.id === person.imageId
              );
              return (
                <Card
                  key={person.name}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Portrait of ${person.name}`}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4 border-4 border-primary/20"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-primary font-semibold">{person.role}</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {person.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Technical Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialists across all technology domains
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalTeams.map((team) => (
              <Card key={team.title}>
                <CardHeader>
                  <CardTitle>{team.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {team.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Expertise & Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Validated skills and industry recognition
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold">{skill.name}</h4>
                    <span className="text-primary font-semibold">
                      {progressValues[index]}%
                    </span>
                  </div>
                  <Progress
                    value={progressValues[index]}
                    aria-label={`${skill.name} expertise level`}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-md mt-1">
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
