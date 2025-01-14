"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { heroData } from '@/app/data/homeHero';
import { Button } from "@/components/ui/button";
import { useDarkMode } from '@/contexts/DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to true after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render nothing until mounted to avoid hydration issues
  if (!isMounted) {
    return null; // You can also return a loading spinner or placeholder if desired
  }

  return (
    <div className='relative flex flex-col mt-8 md:mt-4 bg-light-background dark:bg-dark-background'>
      <div className="relative w-full min-h-[100vh] flex items-center object-contain">
        <div className='absolute inset-0 hidden md:block'>
          <Image
            src={isDarkMode ? heroData.image_dark : heroData.image_light}
            alt="Hero background"
            quality={100}
            unoptimized
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
          />
        </div>
        <div className="relative z-10 w-full max-w-[910px] mx-auto px-8">
          <div className="w-auto md:w-[700px] h-fit">
            <div className="text-center md:text-left">
              <h2 className="text-caption-s text-light-accent dark:text-dark-accent">{heroData.name}</h2>
              <h2 className="text-h1-bold text-light-primary dark:text-dark-primary">{heroData.job}</h2>
              <h2 className="text-h1-bold text-light-primary dark:text-dark-primary mb-6">{heroData.from}</h2>
              <h2 className="text-h3 text-light-secondary dark:text-dark-secondary mb-8">{heroData.text}</h2>
              <div className='text-light-primary dark:text-dark-primary'>
                <Button variant="outline" asChild>
                  <a 
                    href="/assets/Mohan Veraitch - CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mohan Veraitch - CV.pdf"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className='md:hidden h-[50vh] relative mt-8'>
              <Image
                src={heroData.mobile_image}
                alt="Hero background"
                quality={100}
                unoptimized
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
