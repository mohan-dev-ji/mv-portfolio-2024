import React from 'react';

interface OpeningSentenceProps {
    text: string;
  }
  
  const OpeningSentence: React.FC<OpeningSentenceProps> = ({ text }) => {
    return (
      <div className="max-w-[910px] mx-auto">
        <h3 className="text-left text-h3 text-secondary">{text}</h3>
      </div>
    );
  };
  
  export default OpeningSentence;