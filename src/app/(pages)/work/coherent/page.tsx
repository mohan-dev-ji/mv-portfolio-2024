import Image from 'next/image';
import { coherentData } from '@/app/data/coherent';
import SectionTitle from "@/app/components/ui/SectionTitle";
import OpeningSentence from "@/app/components/ui/OpeningSentence";
import DetailsSection from '@/app/components/ui/DetailsSection';
import OpeningParagraph from '@/app/components/ui/OpeningParagraph';

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
      <div className="max-w-[910px] mx-auto px-4 mb-0">
        <SectionTitle title={coherentData.title1} />
        <OpeningSentence text={coherentData.openingSentence} />
        <DetailsSection data={{
          CLIENT: coherentData.CLIENT,
          ROLE: coherentData.ROLE,
          Process: coherentData.Process
        }} />
        <OpeningParagraph 
        title={coherentData.openingParagraphTitle}
        description={coherentData.openingParagraph}
        />
        {/* Your page content here */}
      </div>
      <div className="relative w-full h-auto my-0 mt-16">
        <Image
          src={coherentData.image2}
          alt="Coherent Banner Image"
          width={1440}
          height={460}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto px-4">
        <SectionTitle title={coherentData.title2} />
    </div>
    </div>
  );
}