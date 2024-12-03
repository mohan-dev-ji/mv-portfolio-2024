import React from 'react';

interface OpeningSentenceProps {
    text: string;
  }
  
  const OpeningSentence: React.FC<OpeningSentenceProps> = ({ text }) => {
    return (
      <div className="max-w-[910px] mx-auto">
        <p className="text-left text-h3 text-secondary">{text}</p>
      </div>
    );
  };
  
  export default OpeningSentence;