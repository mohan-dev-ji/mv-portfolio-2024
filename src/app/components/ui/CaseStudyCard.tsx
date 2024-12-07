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
    <div className="max-w-[397px] h-[610px] mx-auto p-8 bg-card flex flex-col items-center justify-center rounded-[24px] border-4 border-hover min-h-[550px] md:min-h-[364px]">
      <div className="flex-1">
        <Image
            src={imageSrc}
            alt={title}
            width={333}
            height={300}
            quality={100}
            unoptimized
        />
        <div className="mt-2">
        <span className="text-s text-secondary">{tag}</span>
        <h2 className="text-h3-bold text-primary mt-2">{title}</h2>
        <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
        <p className="text-p text-secondary mt-4">{description}</p>

        <Link href={link} className={`${buttonVariants({ variant: "default" })} mr-8 mt-4`}>
        {buttonText}
        </Link> 
        </div>
      </div>
      
    </div>
  );
};

export default CaseStudyCard;