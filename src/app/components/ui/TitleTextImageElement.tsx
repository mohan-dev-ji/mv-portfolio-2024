import React from 'react';
import Image from 'next/image';

interface TitleTextImageElementProps {
  title: string;
  description: string;
  imageSrc: string;
}

const TitleTextImageElement: React.FC<TitleTextImageElementProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="max-w-[910px] mx-auto p-8 bg-light-card dark:bg-dark-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-light-hover dark:border-dark-hover">
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
    <div className="w-full md:w-1/2 md:mr-8 mb-8 md:mb-0">
      <h2 className="text-h3-bold text-light-primary dark:text-dark-primary">{title}</h2>
      <div className="h-[2px] bg-light-hover dark:bg-dark-hover mt-2 mb-4" /> {/* Underline */}
      <p className="text-p text-light-secondary dark:text-dark-secondary">{description}</p>
    </div>
    <div className="hidden md:block w-full md:w-1/2">
      <Image
        src={imageSrc}
        alt={title}
        width={428}
        height={300}
        quality={100}
        unoptimized
        className="w-full h-auto object-cover rounded-custom border-custom border-light-hover dark:border-dark-hover"
      />
    </div>
  </div>
  
  );
};

export default TitleTextImageElement;