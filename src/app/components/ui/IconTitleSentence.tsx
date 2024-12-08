import Image from 'next/image';
import React from 'react';

interface IconTitleSentenceProps {
    iconSrc: string;
    title: string;
    sentence: string;
  }


const IconTitleSentence: React.FC<IconTitleSentenceProps> = ({
    iconSrc,
    title,
    sentence
    }) => {
  return (
    <div className="flex items-start w-full mb-4">
      <div className="w-12 h-12 mr-4 flex-shrink-0">
        <Image 
            src={iconSrc} 
            alt={title} 
            width={24} 
            height={24}
            quality={100}
            unoptimized
        />
      </div>
      <div className="flex-grow">
        <span className="text-primary text-p-bold mr-2">{title}:</span>
        <span className="text-secondary text-p">{sentence}</span>
      </div>
    </div>
  );
};

interface GridContainerProps {
    items: IconTitleSentenceProps[];
  }

  const GridContainer: React.FC<GridContainerProps> = ({ items }) => {
    return (
    <div className="max-w-[910px] mx-auto">
      {items.map((item, index) => (
        <IconTitleSentence key={index} {...item} />
      ))}
    </div>
    );
  };
  
export default GridContainer;