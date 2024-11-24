// SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="py-16 flex flex-col items-center">
      <h2 className="text-h2-bold text-center">{title}</h2>
      <div className="w-[910px] h-[4px] bg-accent mt-2" /> {/* Underline */}
      <div className="py-2" /> {/* Bottom padding */}
    </div>
  );
};

export default SectionTitle;