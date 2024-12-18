import React, { ReactNode } from 'react';

interface TitleChildrentSectionProps {
  title: string;
  children: ReactNode;
}

const TitleChildrentSection: React.FC<TitleChildrentSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="max-w-[910px] mx-auto bg-light-card dark:bg-dark-card rounded-custom border-custom border-light-hover dark:border-dark-hover">
      <div className="p-8 py-8">
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary">{title}</h2>
        <div className="h-[2px] bg-light-hover dark:bg-dark-hover mt-2 mb-4" /> {/* Underline */}
        {children}
      </div>
    </div>

  );
};

export default TitleChildrentSection;