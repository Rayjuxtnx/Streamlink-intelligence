
'use server';
/**
 * @fileOverview An AI assistant flow for the Streamlink website.
 *
 * - serviceAssistant - A function that handles the conversation about services.
 * - ServiceAssistantInput - The input type for the serviceAssistant function.
 * - ServiceAssistantOutput - The return type for the serviceAssistant function.
 */

import { z } from 'genkit';

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
        packages: [
            { name: 'Basic', price: 'Ksh 20,000 – 50,000' },
            { name: 'Standard', price: 'Ksh 60,000 – 120,000' },
            { name: 'Premium', price: 'Ksh 150,000 – 300,000+' }
        ]
      },
      {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Building robust and scalable server-side applications.',
        link: '/services/backend-development',
        packages: [
            { name: 'Basic', price: 'Ksh 40,000 – 80,000' },
            { name: 'Standard', price: 'Ksh 100,000 – 180,000' },
            { name: 'Premium', price: 'Ksh 200,000 – 350,000+' }
        ]
      },
      {
        id: 'full-stack-development',
        title: 'Full-Stack Development',
        description: 'End-to-end development for complete web solutions.',
        link: '/services/full-stack-development',
        packages: [
            { name: 'Basic', price: 'Ksh 60,000 – 100,000' },
            { name: 'Standard', price: 'Ksh 120,000 – 200,000' },
            { name: 'Premium', price: 'Ksh 250,000 – 400,000+' }
        ]
      },
      {
        id: 'database-integration',
        title: 'Database Integration',
        description: 'Efficient and secure database management.',
        link: '/services/database-integration',
         packages: [
            { name: 'Basic', price: 'Ksh 20,000 – 50,000' },
            { name: 'Standard', price: 'Ksh 60,000 – 120,000' },
            { name: 'Premium', price: 'Ksh 150,000 – 300,000+' }
        ]
      },
      {
        id: 'api-development',
        title: 'API Development & Integration',
        description: 'Connecting services and automating workflows.',
        link: '/services/api-development',
         packages: [
            { name: 'Basic', price: 'Ksh 8,000 – 20,000' },
            { name: 'Standard', price: 'Ksh 25,000 – 60,000' },
            { name: 'Premium', price: 'Ksh 70,000 – 150,000+' }
        ]
      },
      {
        id: 'system-development',
        title: 'System Development',
        description: 'Custom software systems tailored to business needs.',
        link: '/services/system-development',
         packages: [
            { name: 'Basic', price: 'Ksh 40,000 – 90,000' },
            { name: 'Standard', price: 'Ksh 100,000 – 250,000' },
            { name: 'Premium', price: 'Ksh 300,000 – 700,000+' }
        ]
      },
      {
        id: 'wifi-billing',
        title: 'WiFi Billing System',
        description: 'Automated billing and management for WiFi hotspots.',
        link: '/services/wifi-billing',
         packages: [
            { name: 'Basic', price: 'KSh 150,000 – 250,000' },
            { name: 'Standard', price: 'KSh 300,000 – 500,000' },
            { name: 'Premium', price: 'KSh 600,000 – 1,200,000' }
        ]
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
        packages: [
            { name: 'Network Design & Setup', price: 'Contact for Quote' },
            { name: 'Router & Switch Config', price: 'Contact for Quote' },
            { name: 'Wi-Fi Optimization', price: 'Contact for Quote' },
            { name: 'Network Security', price: 'Contact for Quote' }
        ]
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
        packages: [
            { name: 'Vulnerability Assessments', price: 'Contact for Quote' },
            { name: 'Penetration Testing', price: 'Contact for Quote' },
            { name: 'Security Audits', price: 'Contact for Quote' },
            { name: 'Incident Response', price: 'Contact for Quote' }
        ]
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
        packages: [
            { name: 'Basic', price: 'Ksh 40,000 – 100,000' },
            { name: 'Standard', price: 'Ksh 120,000 – 300,000' },
            { name: 'Premium', price: 'Ksh 350,000 – 900,000+' }
        ]
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
         packages: [
            { name: 'Basic', price: 'Ksh 10,000 – 25,000/month' },
            { name: 'Standard', price: 'Ksh 30,000 – 70,000/month' },
            { name: 'Premium', price: 'Ksh 80,000 – 200,000+/month' }
        ]
      },
      {
        id: 'seo',
        title: 'SEO',
        description: 'Optimizing your website to rank higher in search results.',
        link: '/services/seo',
         packages: [
            { name: 'Basic', price: 'Ksh 15,000 - 30,000/month' },
            { name: 'Standard', price: 'Ksh 35,000 - 60,000/month' },
            { name: 'Premium', price: 'Ksh 70,000+/month' }
        ]
      },
      {
        id: 'sem',
        title: 'Search Engine Marketing (SEM)',
        description: 'Driving targeted traffic with paid search campaigns.',
        link: '/services/sem',
         packages: [
            { name: 'Basic', price: 'Ksh 10,000 – 25,000/month' },
            { name: 'Standard', price: 'Ksh 30,000 – 60,000/month' },
            { name: 'Premium', price: 'Ksh 70,000 – 150,000+/month' }
        ]
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
        packages: [
            { name: 'Weddings & Receptions', price: 'Contact for Quote' },
            { name: 'Corporate Events', price: 'Contact for Quote' },
            { name: 'Private Parties', price: 'Contact for Quote' }
        ]
      },
      {
        id: 'event-decoration',
        title: 'Event Decoration',
        description: 'Creative venue decoration for memorable experiences.',
        link: '/contact?service=event-decoration',
        packages: [
            { name: 'Event Decoration', price: 'Contact for Quote' }
        ]
      },
    ],
  },
];

const OptionSchema = z.object({
  id: z.string(),
  display: z.string(),
});
export type Option = z.infer<typeof OptionSchema>;

const ServiceAssistantInputSchema = z.object({
  selection: z.string().optional().describe("The user's menu selection."),
});
export type ServiceAssistantInput = z.infer<typeof ServiceAssistantInputSchema>;

const ServiceAssistantOutputSchema = z.object({
  message: z.string().describe('The response message from the assistant.'),
  options: z.array(OptionSchema).optional().describe('The menu of options for the user.'),
  link: z.string().optional().describe('A URL link for the user to follow.'),
  linkText: z.string().optional().describe('The text for the URL link.'),
  map: z.boolean().optional().describe('Whether to display a map.'),
});
export type ServiceAssistantOutput = z.infer<typeof ServiceAssistantOutputSchema>;

const mainMenuOptions: Option[] = [
  { id: 'all_services', display: 'Explore Our Services' },
  { id: 'contact_info', display: 'Contact Information' },
  { id: 'find_us', display: 'Find Us on Map' },
];

export async function serviceAssistant(
  input: ServiceAssistantInput
): Promise<ServiceAssistantOutput> {
  const selection = input.selection;

  if (!selection || selection === 'main_menu') {
    return {
      message: "Hello! I'm Link, your AI assistant. How can I help you today?",
      options: mainMenuOptions,
    };
  }
  
  if (selection === 'find_us') {
    return {
      message: 'You can find us at CPA Centre (ICPAK), Room 16A, on Thika Road. Here is our location on Google Maps.',
      map: true,
      options: [{ id: 'main_menu', display: 'Back to Main Menu' }],
    };
  }

  if (selection === 'contact_info') {
    return {
      message:
        'To get a quote, book a service, or for any other inquiries, please reach out to us through our contact page.\n\n- Phone: +254 700 167 972\n- Email: enterprise@streamlink-intel.com\n- Location: CPA Centre (ICPAK), Thika Road, Room 16A, Nairobi',
      link: '/contact',
      linkText: 'Go to Contact Page',
      options: [{ id: 'main_menu', display: 'Back to Main Menu' }],
    };
  }
  
  if (selection === 'all_services') {
    const serviceCategoryOptions: Option[] = serviceSections.map(section => ({
      id: `category_${section.id}`,
      display: section.title,
    }));
    return {
      message: "Here are our main service categories. Please select one to see more details.",
      options: [...serviceCategoryOptions, { id: 'main_menu', display: 'Back to Main Menu' }],
    };
  }

  if (selection.startsWith('category_')) {
    const categoryId = selection.replace('category_', '');
    const category = serviceSections.find(s => s.id === categoryId);

    if (category) {
      const serviceOptions: Option[] = category.services.map(service => ({
        id: `service_${service.id}`,
        display: service.title,
      }));
       return {
        message: `Here are the services under ${category.title}. Select one for more information.`,
        options: [...serviceOptions, {id: 'all_services', display: 'Back to Categories'}],
      };
    }
  }
  
  if (selection.startsWith('service_')) {
    const serviceId = selection.replace('service_', '');
    for (const section of serviceSections) {
        const service = section.services.find(s => s.id === serviceId);
        if (service) {
            const packagePrices = service.packages?.map(p => `- ${p.name}: ${p.price}`).join('\n') || 'Pricing is available upon request. Please contact us for more details.';
            const message = `${service.title}\n\n${service.description}\n\nHere are the available packages:\n${packagePrices}`;
            
            return {
                message: message,
                link: service.link,
                linkText: 'View More Details',
                options: [{ id: `category_${section.id}`, display: `Back to ${section.title}` }]
            };
        }
    }
  }

  return {
    message: "I'm sorry, I didn't understand that selection. Let's start over.",
    options: mainMenuOptions,
  };
}
