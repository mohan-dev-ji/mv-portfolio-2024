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
    <div className="max-w-[910px] h-[364px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-[24px] border-4 border-hover min-h-[620px] md:min-h-[400px]">
      <div className="flex-1 md:mr-8">

        <h2 className="text-h3-bold text-primary md:mt-0">{title}</h2>
        <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
        <p className="text-p text-secondary mt-4 mb-2">{description}</p>
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={428}
        height={300}
      />
    </div>
  );
};

export default TitleTextImageElement;