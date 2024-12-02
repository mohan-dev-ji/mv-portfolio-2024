import Image from 'next/image';
import { coherentData } from '@/app/data/coherent';
import SectionTitle from "@/app/components/ui/SectionTitle";
import OpeningSentence from "@/app/components/ui/OpeningSentence";

export default function CoherentPage() {
  return (
    <div>
      {/* Full-width hero image */}
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] flex items-center object-contain">
        <Image
          src={coherentData.image}
          alt="Coherent Hero Image"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Rest of your page content */}
      <div className="max-w-[910px] mx-auto px-4">
        <SectionTitle title={coherentData.title1} />
        <OpeningSentence text={coherentData.openingSentence} />
        {/* Your page content here */}
      </div>
    </div>
  );
}