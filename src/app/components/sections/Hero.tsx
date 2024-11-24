import Image from 'next/image';
import { heroData } from '@/app/data/hero';

const Hero = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[80vh] lg:h-[100vh] top-3">
      <Image
        src={heroData.image}
        alt="Hero background"
        width={1440}
        height={698}
        style={{ objectFit: 'cover' }}
        // objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroData.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{heroData.subtitle}</p>
          <button className="bg-accent text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors">
            {heroData.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;