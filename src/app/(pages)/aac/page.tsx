import DetailsSection from "@/app/components/ui/DetailsSection"
import ImageTitleTextElement from "@/app/components/ui/ImageTitleTextElement"
import OpeningParagraph from "@/app/components/ui/OpeningParagraph"
import OpeningSentence from "@/app/components/ui/OpeningSentence"
import ProblemStatement from "@/app/components/ui/ProblemStatement"
import SectionTitle from "@/app/components/ui/SectionTitle"
import TextSection from "@/app/components/ui/TextSection"
import TitleTextImageElement from "@/app/components/ui/TitleTextImageElement"
import { aacData } from "@/app/data/aac"
import Image from "next/image"
import GridContainer from "@/app/components/ui/IconTitleSentence"
import ElevateCard from "@/app/components/sections/ElevateCard"
import CoherentCard from "@/app/components/sections/CoherentCard"




export default function AccPage() {

  const features = [
    { iconSrc: aacData.feature1_icon, title: aacData.feature1_heading, sentence: aacData.feature1_text },
    { iconSrc: aacData.feature2_icon, title: aacData.feature2_heading, sentence: aacData.feature2_text },
    { iconSrc: aacData.feature3_icon, title: aacData.feature3_heading, sentence: aacData.feature3_text },
    { iconSrc: aacData.feature4_icon, title: aacData.feature4_heading, sentence: aacData.feature4_text },
    
  ];

  return (
    <div className="mt-6">
      {/* Full-width hero image */}
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] mb-8 flex items-center object-contain">
        <Image
          src={aacData.hero_image}
          alt="AAC Hero Image"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="mx-5">
        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.overview_title} />
          <OpeningSentence text={aacData.overview_sentence} />
          <DetailsSection data={{
            ROLE: aacData.ROLE,
            Process: aacData.Process
          }} />
          <OpeningParagraph
          title={aacData.overview_statement_title}
          description={aacData.overview_statement_text}
          />
        </div>
     

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.background_title} />
          <TitleTextImageElement
            title=""
            description={aacData.background_text1}
            imageSrc={aacData.background_image1}
          />
          <div className="mt-8">
            <ImageTitleTextElement
              title=""
              description={aacData.background_text2}
              imageSrc={aacData.background_image2}
            />
          </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.problem_title} />
          <ProblemStatement
          title={aacData.problem_title}
          description={aacData.problem_text}
          hyp_title={aacData.hypothesis_title}
          hyp_description={aacData.hypothesis_text}
          />
        </div>


        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.competitor_title} />
          <TitleTextImageElement
            title={aacData.competitor_heading}
            description={aacData.competitor_text}
            imageSrc={aacData.competitor_image}
          />
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.target_title} />
          <TextSection
            text={aacData.target_text}
          />
          <div className="relative w-full h-auto mb-8 mt-8">
            <Image
              src={aacData.target_image}
              alt="Target Audience Image"
              width={910}
              height={377}
              layout="responsive"
              className="object-cover object-center"
            />
            </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.solution_title} />
          <TextSection
            text={aacData.solution_text}
          />
          <div className="relative w-full h-auto mb-8 mt-8">
            <Image
              src={aacData.solution_image}
              alt="Target Audience Image"
              width={910}
              height={130}
              layout="responsive"
              className="object-cover object-center"
            />
            </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.features_title} />
          <GridContainer
            items={features}
          />
          <div className="relative w-full h-auto mb-8 mt-16">
            <Image
              src={aacData.features_image}
              alt="Target Audience Image"
              width={910}
              height={130}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.dev_title} />
          <TextSection
            text={aacData.dev_text}
          />
          <video className="w-full object-cover my-8" autoPlay loop muted>
              <source src="/videos/aac-mvp-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <div className="max-w-[910px] mx-auto mb-8">
          <SectionTitle title={aacData.next_title} />
          <TextSection
            text={aacData.next_text}
          />
          <div className="relative w-full h-auto mb-8 mt-16">
            <Image
              src={aacData.next_image}
              alt="Desktop Screens Image"
              width={910}
              height={609}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title="Other Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ElevateCard />
          <CoherentCard />
          {/* <AccCard /> */}
        </div>
      </div>

      </div>
    </div>
  )
};