import React from 'react';

interface ProblemStatementProps {
  title: string;
  description: string;
  hyp_title: string;
  hyp_description: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({
  title,
  description,
  hyp_title,
  hyp_description,
}) => {
  return (
    <div className="max-w-[910px] mx-auto bg-light-card dark:bg-dark-card flex flex-col md:flex-row rounded-custom border-custom border-light-hover dark:border-dark-hover">
      <div className="flex-1 p-8 md:w-1/2">
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary">{title}</h2>
        <div className="h-[4px] bg-light-hover dark:bg-dark-hover mt-2" />
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4">{description}</p>
      </div>
      <div className="flex-1 p-8 md:w-1/2">
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary">{hyp_title}</h2>
        <div className="h-[4px] bg-light-hover dark:bg-dark-hover mt-2" />
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4">{hyp_description}</p>
      </div>
    </div>
  );
};

export default ProblemStatement;
