import React from 'react';
import Image from 'next/image';
interface PersonaSectionProps {
  name: string;
  job: string;
  quote: string;
  goals_title: string;
  goals_text: string;
  pain_title: string;
  pain_text: string;
  imageSrc: string;
}

const PersonaSection: React.FC<PersonaSectionProps> = ({
  name,
  job,
  quote,
  goals_title,
  goals_text,
  pain_title,
  pain_text,
  imageSrc,

}) => {
  return (
    <div className="max-w-[910px] h-[765] mx-auto p-8 mt-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-hover min-h-[550px] md:min-h-[364px]">
      <div className="flex-1 md:mr-8">
        <span className="text-h1-bold text-primary">{name}</span>
        <h2 className="text-h3-bold text-secondary md:mt-8">{job}</h2>
        <p className="text-h2 text-turquoise mt-16">{quote}</p>
        <p className="text-h3-bold text-primary mt-8">{goals_title}</p>
        <div className="h-[4px] bg-hover my-4" /> {/* Second Underline */}
        <p className="text-p text-secondary mt-2">{goals_text}</p>
        <p className="text-h3-bold text-primary mt-8">{pain_title}</p>
        <div className="h-[4px] bg-hover my-4" /> {/* Second Underline */}
        <p className="text-p text-secondary mt-2">{pain_text}</p>
      </div>
      <Image
        src={imageSrc}
        alt={name}
        quality={100}
        unoptimized
        width={337}
        height={765}
      />
    </div>
  );
};

export default PersonaSection;