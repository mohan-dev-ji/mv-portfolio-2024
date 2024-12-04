import Image from 'next/image';
import { coherentData } from '@/app/data/coherent';
import SectionTitle from "@/app/components/ui/SectionTitle";
import OpeningSentence from "@/app/components/ui/OpeningSentence";
import DetailsSection from '@/app/components/ui/DetailsSection';
import OpeningParagraph from '@/app/components/ui/OpeningParagraph';
import TextSection from '@/app/components/ui/TextSection';
import TitleTextImageElement from '@/app/components/ui/TitleTextImageElement';

export default function CoherentPage() {
  return (
    <div className="mt-6">
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
      <div className="max-w-[910px] mx-auto mb-0">
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
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title2} />
        <TextSection text={coherentData.text} />
    </div>
    <div className="relative w-full h-auto my-16">
        <Image
          src={coherentData.image3}
          alt="Double Diamond Image"
          width={1440}
          height={455}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title3} />
        <TextSection text={coherentData.text2} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-16 rounded-[24px] border-4 border-hover">
        <Image
          src={coherentData.image4}
          alt="Goals Image"
          width={910}
          height={371}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title4} />
        <TitleTextImageElement
        title={coherentData.competitor1}
        description={coherentData.competitor1Text}
        imageSrc={coherentData.image5}
        />
        <div className="mt-8">
        <TitleTextImageElement
        title={coherentData.competitor2}
        description={coherentData.competitor2Text}
        imageSrc={coherentData.image6}
        />
        </div>
        
    </div>
    </div>
  );
}