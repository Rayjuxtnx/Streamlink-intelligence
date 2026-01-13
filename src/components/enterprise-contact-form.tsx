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
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  businessEmail: z.string().email('Invalid email address.'),
  projectDetails: z
    .string()
    .min(10, 'Details must be at least 10 characters.'),
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
      fullName: '',
      businessEmail: '',
      projectDetails: '',
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., jane.doe@company.com"
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
          name="projectDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details or Inquiry</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide a brief overview of your needs..."
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
