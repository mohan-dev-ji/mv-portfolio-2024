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
      <div className="max-w-[910px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-hover">
        <div className="md:hidden w-full mb-8">
        <Image
          src={imageSrc}
          alt={title}
          width={428}
          height={300}
          quality={100}
          unoptimized
          className="w-full h-auto rounded-custom border-custom border-hover"
        />
      </div>
        <div className="w-full md:w-1/2 md:mr-8 mb-8 md:mb-0">
          <h2 className="text-h3-bold text-primary">{title}</h2>
          <div className="h-[4px] bg-hover mt-2 mb-4" /> {/* Underline */}
          <p className="text-p text-secondary">{description}</p>
        </div>
        <div className="hidden md:block w-full md:w-1/2">
          <Image
            src={imageSrc}
            alt={title}
            width={428}
            height={300}
            quality={100}
            unoptimized
            className="w-full h-auto object-cover rounded-custom border-custom border-hover"
          />
        </div>
      </div>
  );
};

export default TitleTextImageElement;