"use client"

import Image from 'next/image';
import { heroData } from '@/app/data/homeHero';
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <div className='relative flex flex-col mt-8 md:mt-4'>
    <div className="relative w-full min-h-[100vh] flex items-center object-contain">
      <div className='absolute inset-0 hidden md:block'>
      <Image
        src={heroData.image}
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
            {/* <h3 className="md:text-h3-bold text-h1 text-secondary">{heroData.top}</h3> */}
            <h2 className="text-caption-s text-primary mb-8">{heroData.name}</h2>
            <h2 className="text-h3 text-secondary mb-8">{heroData.title}</h2>
           
              <div className=''>
              <Button
                variant="outline"
                asChild
              >
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