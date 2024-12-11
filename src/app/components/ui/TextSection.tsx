import React from 'react';


interface TextSectionProps {
  text: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  text
}) => {
  return (
    <div className="max-w-[910px] mx-auto p-8 bg-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-hover">
      <div className="flex-1 md:mr-8">
        
        <p className="text-p text-secondary">{text}</p>
        
      </div>
    </div>
  );
};

export default TextSection;