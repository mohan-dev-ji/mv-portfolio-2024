"use client"

import Image from 'next/image';
import { heroData } from '@/app/data/homeHero';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-32 lg:px-32 flex flex-col">
        <div className="w-auto md:w-[400px] h-fit">
          <div className="text-center md:text-left">
            <h3 className="md:text-h3-bold text-h1 text-secondary">{heroData.top}</h3>
            <h2 className="text-h1-bold text-primary">{heroData.name}</h2>
            <h2 className="text-h2 text-secondary mb-6">{heroData.title}</h2>
            <h3 className="md:text-h3-bold text-h2-bold  text-primary mb-6">{heroData.tag}</h3>
            <p className="text-p text-secondary mb-6">{heroData.intro}</p>
              <div className=''>
                <Link href="/contact" className={`${buttonVariants({ variant: "default" })} mr-8 mb-4`}>
                  Get in Touch
                </Link>
                <Button variant="outline">Download CV</Button>
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