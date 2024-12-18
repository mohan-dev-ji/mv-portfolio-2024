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
    <div className="grid grid-cols-[48px_1fr_3fr] gap-4 items-start w-full mb-4">
      <div className="w-12 h-12 flex-shrink-0">
        <Image 
          src={iconSrc} 
          alt={title} 
          width={24} 
          height={24}
          quality={100}
          unoptimized
        />
      </div>
      <div className="text-light-primary dark:text-dark-primary text-p-bold">{title}:</div>
      <div className="text-light-secondary dark:text-dark-primary text-p">{sentence}</div>
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
