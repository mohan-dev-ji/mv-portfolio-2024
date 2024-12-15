import React from 'react';

interface OpeningParagraphProps {
    title: string;
    description: string;
  }
  
const OpeningParagraph: React.FC<OpeningParagraphProps> = ({ 
    title,
    description
}) => {
return (
    <div className="max-w-[910px] mx-auto mt-8">
    <h3 className="text-left text-h3-bold text-light-primary dark:text-dark-primary mb-4">{title}</h3>
    <p className="text-left text-h3 text-light-secondary dark:text-dark-secondary">{description}</p>
</div>
);
};
  
export default OpeningParagraph;