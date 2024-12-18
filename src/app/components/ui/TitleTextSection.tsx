import React from 'react';


interface TitleTextSectionProps {
  title: string;
  description: string;
}

const TitleTextSection: React.FC<TitleTextSectionProps> = ({
    title,
    description,
  }) => {
    return (
      <div className="max-w-[910px] mx-auto bg-light-card dark:bg-dark-card rounded-custom border-custom border-light-hover dark:border-dark-hover">
      <div className="p-8 py-8"> {/* Changed padding here */}
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary">{title}</h2>
        <div className="h-[2px] bg-light-hover dark:bg-dark-hover mt-2" /> {/* Underline */}
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4">{description}</p>
      </div>
    </div>
    
    );
  };

export default TitleTextSection;