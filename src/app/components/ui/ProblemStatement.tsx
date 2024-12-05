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
    <div className="max-w-[910px] mx-auto bg-card flex flex-col md:flex-row rounded-[24px] border-4 border-hover">
    <div className="flex-1 p-8 md:w-1/2">
      <h2 className="text-h3-bold text-primary">{title}</h2>
      <div className="h-[4px] bg-hover mt-2" />
      <p className="text-p text-secondary mt-4">{description}</p>
    </div>
    <div className="flex-1 p-8 md:w-1/2">
      <h2 className="text-h3-bold text-primary">{hyp_title}</h2>
      <div className="h-[4px] bg-hover mt-2" />
      <p className="text-p text-secondary mt-4">{hyp_description}</p>
    </div>
  </div>
  );
};

export default ProblemStatement;