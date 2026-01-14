'use server';
/**
 * @fileOverview An AI assistant flow for the Streamlink website.
 *
 * - serviceAssistant - A function that handles the conversation about services.
 * - ServiceAssistantInput - The input type for the serviceAssistant function.
 * - ServiceAssistantOutput - The return type for the serviceAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Megaphone,
  Music,
  Network,
  Palette,
  Search,
  Server,
  Shield,
  Target,
  Webhook,
} from 'lucide-react';

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
  return serviceAssistantFlow(input);
}

const servicesJson = JSON.stringify(serviceSections, null, 2);

const prompt = ai.definePrompt({
  name: 'serviceAssistantPrompt',
  input: { schema: ServiceAssistantInputSchema },
  output: { schema: ServiceAssistantOutputSchema },
  system: `You are a friendly and helpful AI assistant for Streamlink Technologies Operations. Your goal is to answer user questions about the company's services and guide them to book a consultation.

- Your name is 'Link'.
- Be concise and clear in your answers.
- Use the provided JSON data to answer questions about services. Do not make up services.
- When a user wants to book a service or asks for a price, guide them to the contact page. You can tell them to "request a consultation" or "contact us for pricing details".
- You can provide the link to the contact page: /contact
- For specific service pages, you can provide the link from the JSON data.
- Keep your responses conversational and professional.
- Your responses must be in plain text, not markdown.
- ONLY answer questions based on the information provided in this prompt. If the user asks about anything else, politely decline to answer and steer the conversation back to Streamlink's services.

Here is the list of services offered:
${servicesJson}`,
});

const serviceAssistantFlow = ai.defineFlow(
  {
    name: 'serviceAssistantFlow',
    inputSchema: ServiceAssistantInputSchema,
    outputSchema: ServiceAssistantOutputSchema,
  },
  async ({ history }) => {
    const { response } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: history,
      system: prompt.system,
    });
    return response.text;
  }
);
