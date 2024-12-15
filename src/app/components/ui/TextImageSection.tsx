// TextImageSection.tsx
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';

interface TextImageSectionProps {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  link: string;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  tag,
  title,
  description,
  buttonText,
  imageSrc,
  link,
}) => {
  return (
    <div className="max-w-[910px] h-auto mx-auto p-8 bg-light-card dark:bg-dark-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-light-hover dark:border-dark-hover min-h-[550px] md:min-h-[364px]">
      <div className="md:hidden w-full mb-8">
        <Image
          src={imageSrc}
          alt={title}
          width={428}
          height={300}
          quality={100}
          unoptimized
          className="w-full h-auto rounded-custom border-custom border-light-hover dark:border-dark-hover"
        />
      </div>
      <div className="flex-1 md:mr-8">
        <span className="text-s text-light-secondary dark:text-dark-secondary">{tag}</span>
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary mt-8">{title}</h2>
        <div className="h-[4px] bg-light-hover dark:bg-dark-hover mt-2" /> {/* Underline */}
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4">{description}</p>
        <div className="h-[4px] bg-light-hover dark:bg-dark-hover my-4" /> {/* Second Underline */}
        <div className="mt-8">
          <Link href={link} className={`${buttonVariants({ variant: "default" })} mr-8 md:mt-4`}>
          {buttonText}
          </Link> 
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2">
      <Image
        src={imageSrc}
        alt={title}
        width={426}
        height={300}
        quality={100}
        unoptimized
        className="rounded-custom border-custom border-light-hover dark:border-dark-hover"
      />
    </div>
    </div>
  );
};

export default TextImageSection;
