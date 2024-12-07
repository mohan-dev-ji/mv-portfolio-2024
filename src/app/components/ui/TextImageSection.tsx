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
    <div className="max-w-[910px] h-[364px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-[24px] border-4 border-hover min-h-[550px] md:min-h-[364px]">
      <div className="flex-1 md:mr-8">
        <span className="text-s text-secondary">{tag}</span>
        <h2 className="text-h3-bold text-primary md:mt-8">{title}</h2>
        <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
        <p className="text-p text-secondary mt-4">{description}</p>
        <div className="h-[4px] bg-hover my-4" /> {/* Second Underline */}
        <Link href={link} className={`${buttonVariants({ variant: "default" })} mr-8 md:mt-4`}>
        {buttonText}
        </Link> 
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={426}
        height={300}
        quality={100}
        unoptimized
      />
    </div>
  );
};

export default TextImageSection;