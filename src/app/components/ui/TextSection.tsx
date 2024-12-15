import React from 'react';


interface TextSectionProps {
  text: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  text
}) => {
  return (
    <div className="max-w-[910px] mx-auto p-8 bg-light-card dark:bg-dark-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-light-hover dark:border-dark-hover">
  <div className="flex-1 md:mr-8">
    <p className="text-p text-light-secondary dark:text-dark-secondary">{text}</p>
  </div>
</div>

  );
};

export default TextSection;