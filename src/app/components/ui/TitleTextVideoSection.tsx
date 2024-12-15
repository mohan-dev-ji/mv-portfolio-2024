import React from 'react';

interface TitleTextVideoSectionProps {

  title: string;
  description: string;

  videoSrc: string;
}

const TitleTextVideoSection: React.FC<TitleTextVideoSectionProps> = ({

  title,
  description,

  videoSrc,
}) => {
  return (
    <div className="max-w-[910px] h-auto mx-auto p-8 bg-light-card dark:bg-dark-card flex flex-col md:flex-row items-center justify-between rounded-custom border-custom border-light-hover dark:border-dark-hover min-h-[620px] md:min-h-[400px]">
      <div className="flex-1 md:mr-8">
        <h2 className="text-h3-bold text-light-primary dark:text-dark-primary md:mt-0">{title}</h2>
        <div className="h-[4px] bg-light-hover dark:bg-dark-hover mt-2" /> {/* Underline */}
        <p className="text-p text-light-secondary dark:text-dark-secondary mt-4 mb-2">{description}</p>
      </div>

      <video autoPlay loop muted width="428" height="300">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  );
};

export default TitleTextVideoSection;