'use server';
/**
 * @fileOverview An AI assistant flow for the Streamlink website.
 *
 * - serviceAssistant - A function that handles the conversation about services.
 * - ServiceAssistantInput - The input type for the serviceAssistant function.
 * - ServiceAssistantOutput - The return type for the serviceAssistant function.
 */

import { z } from 'genkit';

// Simplified service data for the AI prompt.
const serviceSections = [
  {
    id: 'software-development',
    title: 'Software & Web Development',
    services: [
      {
        id: 'frontend-development',
        title: 'Frontend Development',
        description:
          'Creating beautiful, responsive, and user-friendly interfaces.',
        link: '/services/frontend-development',
      },
      {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Building robust and scalable server-side applications.',
        link: '/services/backend-development',
      },
      {
        id: 'full-stack-development',
        title: 'Full-Stack Development',
        description: 'End-to-end development for complete web solutions.',
        link: '/services/full-stack-development',
      },
      {
        id: 'database-integration',
        title: 'Database Integration',
        description: 'Efficient and secure database management.',
        link: '/services/database-integration',
      },
      {
        id: 'api-development',
        title: 'API Development & Integration',
        description: 'Connecting services and automating workflows.',
        link: '/services/api-development',
      },
      {
        id: 'system-development',
        title: 'System Development',
        description: 'Custom software systems tailored to business needs.',
        link: '/services/system-development',
      },
      {
        id: 'wifi-billing',
        title: 'WiFi Billing System',
        description: 'Automated billing and management for WiFi hotspots.',
        link: '/services/wifi-billing',
      },
    ],
  },
  {
    id: 'cloud-networking',
    title: 'Cloud & Networking Solutions',
    services: [
      {
        id: 'networking-solutions',
        title: 'Networking Solutions',
        description: 'Robust network infrastructures for seamless connectivity.',
        link: '/services/networking-solutions',
      },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    services: [
      {
        id: 'cyber-security-consulting',
        title: 'Cyber Security Consulting',
        description: 'Protecting digital assets from threats.',
        link: '/services/cyber-security-consulting',
      },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    services: [
      {
        id: 'ml-ai-solutions',
        title: 'ML & AI',
        description: 'Building smart applications with AI.',
        link: '/services/ml-ai',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    services: [
      {
        id: 'digital-marketing-campaigns',
        title: 'Digital Marketing',
        description: 'Driving brand growth through strategic online campaigns.',
        link: '/services/digital-marketing',
      },
      {
        id: 'seo',
        title: 'SEO',
        description: 'Optimizing your website to rank higher in search results.',
        link: '/services/seo',
      },
      {
        id: 'sem',
        title: 'Search Engine Marketing (SEM)',
        description: 'Driving targeted traffic with paid search campaigns.',
        link: '/services/sem',
      },
    ],
  },
  {
    id: 'event-services',
    title: 'Event Services',
    services: [
      {
        id: 'event-dj',
        title: 'Event DJ',
        description: 'Professional music selection for special occasions.',
        link: '/services/event-dj',
      },
      {
        id: 'event-decoration',
        title: 'Event Decoration',
        description: 'Creative venue decoration for memorable experiences.',
        link: '/contact?service=event-decoration',
      },
    ],
  },
];

const ServiceAssistantInputSchema = z.object({
  history: z.array(z.any()).describe('The conversation history.'),
});
export type ServiceAssistantInput = z.infer<
  typeof ServiceAssistantInputSchema
>;

const ServiceAssistantOutputSchema = z.string();
export type ServiceAssistantOutput = z.infer<
  typeof ServiceAssistantOutputSchema
>;

export async function serviceAssistant(
  input: ServiceAssistantInput
): Promise<ServiceAssistantOutput> {
  const userMessage = input.history[input.history.length - 1]?.parts[0]?.text.toLowerCase();

  if (!userMessage) {
    return "I'm sorry, I didn't get that. How can I help you with our services?";
  }
  
  if (userMessage.includes('hello') || userMessage.includes('hi')) {
    return "Hello! How can I help you learn about our services today?";
  }

  if (userMessage.includes('book') || userMessage.includes('price') || userMessage.includes('consultation') || userMessage.includes('contact')) {
    return 'To get a quote or book a service, please reach out to us through our contact page. You can request a consultation here: /contact';
  }

  for (const section of serviceSections) {
    for (const service of section.services) {
      if (userMessage.includes(service.title.toLowerCase())) {
        return `We offer ${service.title}. ${service.description} You can find more details here: ${service.link}`;
      }
    }
     if (userMessage.includes(section.title.toLowerCase())) {
        const serviceTitles = section.services.map(s => s.title).join(', ');
        return `Under ${section.title}, we offer the following services: ${serviceTitles}. You can see all of them here: /services#${section.id}`;
      }
  }

  return "I can only answer questions about Streamlink's services. Please ask me about one of our services, or visit our contact page to book a consultation.";
}
