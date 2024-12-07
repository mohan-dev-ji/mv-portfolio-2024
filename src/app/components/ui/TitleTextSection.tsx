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
      <div className="max-w-[910px] mx-auto bg-card rounded-[24px] border-4 border-hover">
        <div className="p-8 py-8"> {/* Changed padding here */}
          <h2 className="text-h3-bold text-primary">{title}</h2>
          <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
          <p className="text-p text-secondary mt-4">{description}</p>
        </div>
      </div>
    );
  };

export default TitleTextSection;