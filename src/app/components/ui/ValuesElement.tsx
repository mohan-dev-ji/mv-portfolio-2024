import React from 'react';


interface ValuesElementProps {
  tag: string;
  title: string;
  description: string;
}

const ValuesElement: React.FC<ValuesElementProps> = ({
  tag,
  title,
  description,
}) => {
  return (
    <div className="max-w-[910px] h-auto mx-auto p-8 bg-card flex flex-col md:flex-row items-top justify-between rounded-custom border-custom border-hover min-h-[250px] md:min-h-[250px]">
      <div className="flex-1">
        <span className="text-s-bold text-secondary">{tag}</span>
        <h2 className="text-h3-bold text-primary md:mt-4">{title}</h2>
        <div className="h-[4px] bg-hover mt-2" /> {/* Underline */}
        <p className="text-p text-secondary mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ValuesElement;