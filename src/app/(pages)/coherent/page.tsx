import Image from 'next/image';
import { coherentData } from '@/app/data/coherent';
import SectionTitle from "@/app/components/ui/SectionTitle";
import OpeningSentence from "@/app/components/ui/OpeningSentence";
import DetailsSection from '@/app/components/ui/DetailsSection';
import OpeningParagraph from '@/app/components/ui/OpeningParagraph';
import TextSection from '@/app/components/ui/TextSection';
import TitleTextImageElement from '@/app/components/ui/TitleTextImageElement';
import PersonaSection from '@/app/components/ui/PersonaSection';
import ProblemStatement from '@/app/components/ui/ProblemStatement';
import Storyboard from '@/app/components/ui/Storyboard';
import TitleTextSection from '@/app/components/ui/TitleTextSection';
import TitleTextVideoSection from '@/app/components/ui/TitleTextVideoSection';
import ElevateCard from '@/app/components/sections/ElevateCard';
import AccCard from '@/app/components/sections/AacCard';


export default function CoherentPage() {
  return (
    <div className="mt-4">
      {/* Full-width hero image */}
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] mb-8 flex items-center object-contain">
        <Image
          src={coherentData.image}
          alt="Coherent Hero Image"
          fill
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
      </div>

      <div className="mx-5">
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
      </div>
      <div className="relative w-full h-auto mb-8 mt-16">
        <Image
          src={coherentData.image2}
          alt="Coherent Banner Image"
          width={1440}
          height={460}
          layout="responsive"
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title2} />
        <TextSection text={coherentData.text} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto mt-16 mb-8">
        <Image
          src={coherentData.image3}
          alt="Double Diamond Image"
          width={910}
          height={441}
          layout="responsive"
          quality={100}
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title3} />
        <TextSection text={coherentData.text2} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.image4}
          alt="Goals Image"
          width={910}
          height={371}
          layout="responsive"
          quality={100}
          unoptimized
          className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
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
    {/* <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title5} />
        <TextSection text={coherentData.text3} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8">
        <Image
          src={coherentData.image8}
          alt="User Survey Stats image"
          width={910}
          height={331}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center rounded-custom border-custom border-hover"
        />
      </div> */}
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.title6} />
        <TextSection text={coherentData.text4} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8 mb-8">
        <Image
          src={coherentData.image9}
          alt="Interview Image"
          width={910}
          height={478}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
        />
      </div>
      <div className="max-w-[910px] mx-auto">
        <SectionTitle title={coherentData.affinity_title} />
        <TextSection text={coherentData.affinity_text} />
    </div>
    <div className="relative max-w-[910px] mx-auto h-auto my-8 mb-8">
        <Image
          src={coherentData.affinity_image}
          alt="Affinity Map Image"
          width={910}
          height={376}
          layout="responsive"
          quality={100}
          unoptimized
          className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
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
        <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.problem_title} />
        <ProblemStatement 
        title={coherentData.ps1_title} 
        description={coherentData.ps1_text}
        hyp_title={coherentData.ps1_hypothesis_title}
        hyp_description={coherentData.ps1_hypothesis_text}
        />
        <div className='mt-8'>
        <ProblemStatement 
        title={coherentData.ps2_title} 
        description={coherentData.ps2_text}
        hyp_title={coherentData.ps2_hypothesis_title}
        hyp_description={coherentData.ps2_hypothesis_text}
        />
        </div>
        </div>
        <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.stories_title} />
        </div>
        <div className="relative max-w-[910px] mx-auto h-auto mb-8">
        <Image
          src={coherentData.stories_image}
          alt="User Stories Image"
          width={910}
          height={654}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
        />
      </div>
      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.storyboard_title} />
        <Storyboard frames={[
          { image: coherentData.storyboard1_image, caption: coherentData.storyboard1 },
          { image: coherentData.storyboard2_image, caption: coherentData.storyboard2 },
          { image: coherentData.storyboard3_image, caption: coherentData.storyboard3 },
          { image: coherentData.storyboard4_image, caption: coherentData.storyboard4 },
          { image: coherentData.storyboard5_image, caption: coherentData.storyboard5 },
          { image: coherentData.storyboard6_image, caption: coherentData.storyboard6 }
        ]} />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.userflows_title} />
        <TitleTextSection
        title={coherentData.userflow1_title}
        description={coherentData.userflow1_text}
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.userflow1_image}
          alt="User Flow 1 Image"
          width={910}
          height={266}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        
        <TitleTextSection
        title={coherentData.userflow2_title}
        description={coherentData.userflow2_text}
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.userflow2_image}
          alt="User Flow 2 Image"
          width={910}
          height={266}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.ideation_title} />
        <TitleTextImageElement      
        title="Visual Ideas"
        description={coherentData.ideation_text}
        imageSrc={coherentData.ideation_image}
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.wireframes_title} />
        <TextSection text={coherentData.wireframes_text} />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.wireframes_image}
          alt="User Stories Image"
          width={910}
          height={432}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.digital_wireframes_title} />
        <TextSection text={coherentData.digital_wireframes_text} />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.digital_wireframes_image}
          alt="User Stories Image"
          width={910}
          height={599}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.mid_title} />
        <TextSection text={coherentData.mid_text} />
        <div className="mt-8">
          <TitleTextVideoSection
            title={coherentData.mid_video_title}
            description={coherentData.mid_video_text}
            videoSrc={coherentData.mid_video}
            />
        </div>
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.high_title} />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.high_image1}
          alt="High fidelity components Image"
          width={910}
          height={401}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center rounded-custom border-custom border-hover"
        />
      </div>
      <div>
        <TitleTextImageElement
        title="Precise monitoring"
        description={coherentData.high_text}
        imageSrc={coherentData.high_image2}
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.high_image3}
          alt="High fidelity components Image"
          width={910}
          height={346}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.final_image1}
          alt="High fidelity components Image"
          width={910}
          height={585}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.final_image2}
          alt="High fidelity components Image"
          width={910}
          height={585}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.final_image3}
          alt="High fidelity components Image"
          width={910}
          height={585}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.final_image4}
          alt="High fidelity components Image"
          width={910}
          height={585}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>
      <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
        <Image
          src={coherentData.final_image5}
          alt="High fidelity components Image"
          width={910}
          height={585}
          quality={100}
          unoptimized
          layout="responsive"
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={coherentData.next_title} />
        <TextSection text={coherentData.next_text} />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title="Other Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <CoherentCard /> */}
          <ElevateCard />
          <AccCard />
        </div>
      </div>


      </div>
    </div>
  );
}