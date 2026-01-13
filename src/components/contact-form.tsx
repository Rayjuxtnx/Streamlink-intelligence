'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Dummy server action
async function submitForm(data: ContactFormValues) {
  console.log('New contact form submission:', data);
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // In a real app, you would handle form submission here, e.g., send an email or save to a database.
  // For example:
  // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  // if (!response.ok) throw new Error('Failed to send message.');
}

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: undefined,
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      try {
        await submitForm(data);
        toast({
          title: 'Success!',
          description:
            "Your message has been sent successfully. We'll get back to you soon.",
        });
        form.reset();
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description:
            'There was a problem with your request. Please try again.',
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.doe@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+1 (234) 567-890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interested In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="isp-network">
                    ISP & Network Solutions
                  </SelectItem>
                  <SelectItem value="cloud-computing">
                    Cloud Computing & Hosting
                  </SelectItem>
                  <SelectItem value="cybersecurity">
                    Cybersecurity Services
                  </SelectItem>
                  <SelectItem value="web-development">
                    Web & System Development
                  </SelectItem>
                  <SelectItem value="it-consulting">
                    IT Consulting & Support
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your project..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
