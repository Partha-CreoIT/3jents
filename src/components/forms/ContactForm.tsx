'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        reset();
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            {...register('firstName', { required: 'First name is required' })}
            placeholder="First Name"
            className="bg-white/10 border-gold/30 text-white placeholder:text-grey-light focus:border-gold"
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Last Name"
            className="bg-white/10 border-gold/30 text-white placeholder:text-grey-light focus:border-gold"
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          placeholder="Email"
          className="bg-white/10 border-gold/30 text-white placeholder:text-grey-light focus:border-gold"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Message"
          rows={4}
          className="bg-white/10 border-gold/30 text-white placeholder:text-grey-light focus:border-gold resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-2"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </div>

      {submitMessage && (
        <p className={`text-center text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
}
