"use client"

import { Button } from '@/components/ui/button';
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  ({
    mode: 'onBlur' // This will trigger validation on blur
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title="Get in Touch" />
      </div>

      <div className="max-w-[910px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-[24px] border-4 border-hover">
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