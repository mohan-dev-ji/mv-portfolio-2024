import React from 'react';
import Image from 'next/image';

interface ImageTitleTextElementProps {

  title: string;
  description: string;

  imageSrc: string;
}

const ImageTitleTextElement: React.FC<ImageTitleTextElementProps> = ({

  title,
  description,

  imageSrc,
}) => {
  return (
    <div className="max-w-[910px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-[24px] border-4 border-hover">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src={imageSrc}
          alt={title}
          width={428}
          height={300}
          quality={100}
          unoptimized
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-h3-bold text-primary">{title}</h2>
        <div className="h-[4px] bg-hover mt-2 mb-4" /> {/* Underline */}
        <p className="text-p text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ImageTitleTextElement;