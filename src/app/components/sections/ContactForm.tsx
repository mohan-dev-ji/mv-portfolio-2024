"use client"

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const { register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    mode: 'onBlur' // This will trigger validation on blur
  });

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   console.log('Form submitted:', data);
  //   reset(); // This should now work without a red underline
  // };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmissionStatus('submitting');
    
    try {
      const result = await emailjs.send(
        serviceId!,
        templateId!,
        {
          from_name: `${data.name} ${data.lastName}`,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey!
      );

      console.log(result.text);
      reset();
      setSubmissionStatus('success');
      setTimeout(() => setSubmissionStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmissionStatus('error');
      setTimeout(() => setSubmissionStatus('idle'), 3000);
    }
  };

  

  // const onSubmit = (data: FormData) => {
  //   console.log('Form submitted:', data);
  // };

  return (
    
    <div>
      <div>
        {submissionStatus === 'success' && <p>Form submitted successfully!</p>}
        {submissionStatus === 'error' && <p>Error submitting form. Please try again.</p>}
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title="Contact Me" />
      </div>

      <div className="max-w-[910px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-custom border-4 border-hover">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="flex space-x-8">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2 text-p-bold text-secondary">First name</label>
              <input
                {...register("name", { required: "First name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters long" },
                  maxLength: { value: 50, message: "Name must not exceed 50 characters" }
                })}
               
                
                className="w-full px-3 py-2 border rounded-md text-background text-p"
                placeholder="Enter your first name"
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>

            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2 text-p-bold text-secondary">Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters long" },
                  maxLength: { value: 50, message: "Name must not exceed 50 characters" }
                })}

                className="w-full px-3 py-2 border rounded-md text-background text-p"
                placeholder="Enter your last name"
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="flex space-x-8">
            <div className="flex-1">
              <label htmlFor="email" className="block mt-4 mb-2 text-p-bold text-secondary">Email</label>
              <input
                {...register("email", { 
                  required: "Email is required",

                  maxLength: { value: 50, message: "Email must not exceed 50 characters" },
           
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full px-3 py-2 border rounded-md text-background text-p"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="flex-1">
              <label htmlFor="subject" className="block mt-4 mb-2 text-p-bold text-secondary">Subject</label>
              <input
                {...register("subject", { required: "Subject is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters long" },
                  maxLength: { value: 50, message: "Name must not exceed 50 characters" }

                 })}
                className="w-full px-3 py-2 border rounded-md text-background text-p"
                placeholder="Enter the subject"
              />
              {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mt-8 mb-2 text-p-bold text-secondary">Message</label>
            <textarea
              {...register("message", { required: "Message is required",
                minLength: { value: 2, message: "Name must be at least 2 characters long" },
                maxLength: { value: 500, message: "Name must not exceed 500 characters" }

               })}
              className="w-full px-3 py-2 border rounded-md text-background text-p"
              placeholder="Enter your message"
              rows={5}
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <div className="flex justify-center">
            <Button type="submit" variant="default" className="w-1/2 mt-4">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;