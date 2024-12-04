import Image from 'next/image';
import { coherentData } from '@/app/data/coherent';
import SectionTitle from "@/app/components/ui/SectionTitle";
import OpeningSentence from "@/app/components/ui/OpeningSentence";
import DetailsSection from '@/app/components/ui/DetailsSection';
import OpeningParagraph from '@/app/components/ui/OpeningParagraph';
import TextSection from '@/app/components/ui/TextSection';
import TitleTextImageElement from '@/app/components/ui/TitleTextImageElement';
import PersonaSection from '@/app/components/ui/PersonaSection';

export default function CoherentPage() {
  return (
    <div className="mt-6">
      {/* Full-width hero image */}
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] mb-8 flex items-center object-contain">
        <Image
          src={coherentData.image}
          alt="Coherent Hero Image"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="mx-5">
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
      <div className="relative w-full h-auto mb-8 mt-16">
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
    <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8 rounded-[24px] border-4 border-hover">
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
        <div className="mt-8 mb-8">
        <TitleTextImageElement
        title={coherentData.competitor3}
        description={coherentData.competitor3Text}
        imageSrc={coherentData.image7}
        />
        </div>
    </div>
    <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title5} />
        <TextSection text={coherentData.text3} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8 rounded-[24px] border-4 border-hover">
        <Image
          src={coherentData.image8}
          alt="User Survey Stats image"
          width={910}
          height={331}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title6} />
        <TextSection text={coherentData.text4} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8 mb-8 rounded-[24px] border-4 border-hover">
        <Image
          src={coherentData.image9}
          alt="Goals Image"
          width={910}
          height={478}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.affinity_title} />
        <TextSection text={coherentData.affinity_text} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8 mb-8 rounded-[24px] border-4 border-hover">
        <Image
          src={coherentData.affinity_image}
          alt="Goals Image"
          width={910}
          height={376}
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.persona_title} />
        <TextSection text={coherentData.persona_text} />
        <PersonaSection 
          name={coherentData.persona_name}
          job={coherentData.persona_job}
          quote={coherentData.persona_quote}
          goals_title={coherentData.persona_goals_title}
          goals_text={coherentData.persona_goals_text}
          pain_title={coherentData.persona_pain_title}
          pain_text={coherentData.persona_pain_text}
          imageSrc={coherentData.persona_image} />
        </div>




      </div>
    </div>
  );
}