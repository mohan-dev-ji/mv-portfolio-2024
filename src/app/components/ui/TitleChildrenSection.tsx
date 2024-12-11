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
    <div className="max-w-[910px] mx-auto bg-card rounded-custom border-custom border-hover">
      <div className="p-8 py-8">
        <h2 className="text-h3-bold text-primary">{title}</h2>
        <div className="h-[4px] bg-hover mt-2 mb-4" /> {/* Underline */}
        {children}
      </div>
    </div>
  );
};

export default TitleChildrentSection;