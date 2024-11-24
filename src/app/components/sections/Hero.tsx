"use client"

import Image from 'next/image';
import { heroData } from '@/app/data/homeHero';
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='relative flex flex-col'>
    <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] flex items-center object-contain">
      <div className='absolute inset-0 '>
      <Image
        src={heroData.image}
        alt="Hero background"
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
      <div className="w-[250px] md:w-[350px] h-fit">
        <div className="text-left">
          <h3 className="md:text-h3-bold text-p-bold text-secondary">{heroData.top}</h3>
          <h2 className="md:text-h2-bold text-h3-bold text-primary">{heroData.name}</h2>
          <h2 className="md:text-h2 text-h3 text-secondary mb-6">{heroData.title}</h2>

          <h3 className="md:text-h3-bold text-p-bold  text-primary mb-6">{heroData.tag}</h3>

          <p className="md:text-p text-s text-secondary mb-6">{heroData.intro}</p>

          {/* <button className="bg-accent text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors">
            {heroData.primary}
          </button> */}
          {/* <Button variant="default">Get in Touch</Button> */}
          <div className=''>
          <Link href="/contact" className={`${buttonVariants({ variant: "default" })} mr-8 mb-4`}>
            Get in Touch
          </Link>

          <Button variant="outline">Download CV</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;