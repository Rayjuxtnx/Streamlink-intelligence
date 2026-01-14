
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
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';

const enterpriseContactSchema = z.object({
  name: z.string().min(2, 'Your name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  overview: z.string().min(10, 'Please provide at least a brief overview.'),
});

type EnterpriseContactFormValues = z.infer<typeof enterpriseContactSchema>;

// Dummy server action
async function submitForm(data: EnterpriseContactFormValues) {
  console.log('New enterprise inquiry submission:', data);
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // In a real app, you would handle form submission here
}

export function EnterpriseContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<EnterpriseContactFormValues>({
    resolver: zodResolver(enterpriseContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      overview: '',
    },
  });

  const onSubmit = (data: EnterpriseContactFormValues) => {
    startTransition(async () => {
      try {
        await submitForm(data);
        toast({
          title: 'Inquiry Submitted!',
          description:
            'Thank you. Our executive team will review your inquiry and respond shortly.',
        });
        form.reset();
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description:
            'There was a problem with your request. Please try again or contact us directly.',
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
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
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="Your Email" type="email" {...field} />
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
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your Phone Number" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="overview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief overview of your needs</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Brief overview of your needs"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
