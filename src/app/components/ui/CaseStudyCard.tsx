// TextImageSection.tsx
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  tag,
  title,
  description,
  buttonText,
  imageSrc,
  link,
}) => {
  return (
    <div className="max-w-[397px] h-[610px] mx-auto p-8 bg-light-card dark:bg-dark-card flex flex-col items-center justify-center rounded-custom border-custom border-light-hover dark:border-dark-hover min-h-[550px] md:min-h-[364px]">
      <div className="flex-1">
        <Image
            src={imageSrc}
            alt={title}
            width={333}
            height={300}
            quality={100}
            unoptimized
            className="rounded-custom border-custom border-light-hover dark:border-dark-hover"
        />
        <div className="mt-2">
        <span className="text-s text-light-secondary dark:text-dark-secondary">{tag}</span>
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary mt-2">{title}</h2>
        <div className="h-[2px] bg-light-hover dark:bg-dark-hover mt-2" /> {/* Underline */}
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4">{description}</p>

        <Link href={link} className={`${buttonVariants({ variant: "default" })} mr-8 mt-4`}>
        {buttonText}
        </Link> 
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
