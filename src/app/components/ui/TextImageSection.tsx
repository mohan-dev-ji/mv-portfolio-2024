// TextImageSection.tsx
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from "@/components/ui/button"

interface TextImageSectionProps {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  tag,
  title,
  description,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="max-w-[910px] h-[364px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-[24px] border-4 border-hover min-h-[550px] md:min-h-[364px]">
      <div className="flex-1 md:mr-8">
        <span className="text-s text-secondary">{tag}</span>
        <h2 className="text-h3-bold text-primary md:mt-12">{title}</h2>
        <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
        <p className="text-p text-secondary mt-4">{description}</p>
        <div className="h-[4px] bg-hover my-4" /> {/* Second Underline */}
        <Link href="/work" className={`${buttonVariants({ variant: "default" })} mr-8 md:mt-10`}>
        View Case Study
        </Link> 
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TextImageSection;