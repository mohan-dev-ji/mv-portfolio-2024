import Image from 'next/image';
import { elevateData } from '@/app/data/elevate';
import SectionTitle from '@/app/components/ui/SectionTitle';
import OpeningSentence from '@/app/components/ui/OpeningSentence';
import DetailsSection from '@/app/components/ui/DetailsSection';
import OpeningParagraph from '@/app/components/ui/OpeningParagraph';
import IconTitleSentence from '@/app/components/ui/IconTitleSentence';
import GridContainer from '@/app/components/ui/IconTitleSentence';
import TitleTextImageElement from '@/app/components/ui/TitleTextImageElement';
import ImageTitleTextElement from '@/app/components/ui/ImageTitleTextElement';
import ValuesElement from '@/app/components/ui/ValuesElement';
import TitleChildrentSection from '@/app/components/ui/TitleChildrenSection';
import TextSection from '@/app/components/ui/TextSection';
import PersonaSection from '@/app/components/ui/PersonaSection';
import ProblemStatement from '@/app/components/ui/ProblemStatement';
import TitleTextVideoSection from '@/app/components/ui/TitleTextVideoSection';
import CoherentCard from '@/app/components/sections/CoherentCard';
import AccCard from '@/app/components/sections/AacCard';

export default function ElevatePage() {
  const items = [
    { iconSrc: elevateData.stakeholder_row1_icon, title: elevateData.stakeholder_row1_title, sentence: elevateData.stakeholder_row1_text },
    { iconSrc: elevateData.stakeholder_row2_icon, title: elevateData.stakeholder_row2_title, sentence: elevateData.stakeholder_row2_text },
    { iconSrc: elevateData.stakeholder_row3_icon, title: elevateData.stakeholder_row3_title, sentence: elevateData.stakeholder_row3_text },
    { iconSrc: elevateData.stakeholder_row4_icon, title: elevateData.stakeholder_row4_title, sentence: elevateData.stakeholder_row4_text },
    { iconSrc: elevateData.stakeholder_row5_icon, title: elevateData.stakeholder_row5_title, sentence: elevateData.stakeholder_row5_text },
  ];

  const positive = [
    { iconSrc: elevateData.arrow, title: "Managing People", sentence: elevateData.research_positive_text1 },
    { iconSrc: elevateData.arrow, title: "The importance of Colleagues", sentence: elevateData.research_positive_text2 },
  ]

  const negative = [
    { iconSrc: elevateData.arrow, title: "No Diversity", sentence: elevateData.research_negative_text1 },
    { iconSrc: elevateData.arrow, title: "Distrust", sentence: elevateData.research_negative_text2 },
    { iconSrc: elevateData.arrow, title: "AI at Work", sentence: elevateData.research_negative_text3 },
    { iconSrc: elevateData.arrow, title: "Lack of Connection", sentence: elevateData.research_negative_text4 },
    { iconSrc: elevateData.arrow, title: "Personal Development", sentence: elevateData.research_negative_text5 },
  ]

  const usability = [
    { iconSrc: elevateData.arrow, title: "Streamlined Onboarding", sentence: elevateData.usability_text1 },
    { iconSrc: elevateData.arrow, title: "Enhanced Chatbot Interaction", sentence: elevateData.usability_text2 },
    { iconSrc: elevateData.arrow, title: "Improved Home Page Navigation", sentence: elevateData.usability_text3 },
    { iconSrc: elevateData.arrow, title: "Team Insights Visualisation", sentence: elevateData.usability_text4 },
  ]


    return (
      <div className="mt-4">
        <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] mb-8 flex items-center object-contain">
          <Image
            src={elevateData.hero_image}
            alt="Elevate Hero Image"
            fill
            
            className="object-cover object-center"
          />
        </div>

        <div className="mx-5">
          <div className="max-w-[910px] mx-auto mb-0">
            <SectionTitle title={elevateData.overview_title} />
            <OpeningSentence text={elevateData.overview_sentence} />
            <DetailsSection data={{
              CLIENT: elevateData.CLIENT,
              ROLE: elevateData.ROLE,
              Process: elevateData.Process
            }} />
            <OpeningParagraph
            title={elevateData.overview_statement_title}
            description={elevateData.overview_statement_text}
            />
          </div>

        <div className="relative w-full h-auto mb-8 mt-16">
          <Image
            src={elevateData.banner}
            alt="Elevate Banner Image"
            width={1440}
            height={460}
            layout="responsive"
            quality={100}
          unoptimized
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-[910px] mx-auto mb-0">
          <SectionTitle title={elevateData.process_title} />
            <div className="relative max-w-[910px] mx-auto h-auto mb-8">
              <Image
                src={elevateData.process_image}
                alt="User Stories Image"
                width={910}
                height={348}
                quality={100}
                unoptimized
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-0">
          <SectionTitle title={elevateData.stakeholder_title} />
          <GridContainer items={items} />
        </div>
        
        <div className="max-w-[910px] mx-auto">
          <SectionTitle title={elevateData.competitor_title} />
          <TitleTextImageElement
          title={elevateData.competitor_unmind_title}
          description={elevateData.competitor_unmind_text}
          imageSrc={elevateData.competitor_unmind_image}
          />
          <div className="mt-8">
            <ImageTitleTextElement
            title={elevateData.competitor_better_title}
            description={elevateData.competitor_better_text}
            imageSrc={elevateData.competitor_better_image}
            />
          </div>
          <div className="mt-8 mb-8">
            <TitleTextImageElement
            title={elevateData.competitor_reflection_title}
            description={elevateData.competitor_reflection_text}
            imageSrc={elevateData.competitor_reflection_image}
            />
          </div>
        </div>
        
        <div className="max-w-[910px] mx-auto">
          <SectionTitle title={elevateData.research_title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValuesElement
              tag=""
              title={elevateData.research_survey_title}
              description={elevateData.research_survey_text}
            />
            <ValuesElement
              tag=""
              title={elevateData.research_interviews_title}
              description={elevateData.research_interviews_text}
            />
          </div>
          <div className="mt-8">
            <TitleChildrentSection
              title={elevateData.research_positive_title}>
              <IconTitleSentence
                items={positive}
              />
              </TitleChildrentSection>
          </div>
          <div className="mt-8">
            <TitleChildrentSection
              title={elevateData.research_negative_title}>
              <IconTitleSentence
                items={negative}
              />
            </TitleChildrentSection>
          </div>
        </div>

        <div className="max-w-[910px] mx-auto mb-0">
          <SectionTitle title={elevateData.experience_map_title} />
          <TextSection
          text={elevateData.experience_map_text}
          />
          <div className="relative w-full h-auto mb-8 mt-16">
            <Image
              src={elevateData.experience_map_image}
              alt="Experience Map Image"
              width={910}
              height={673}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-[910px] mx-auto">
          <SectionTitle title={elevateData.persona_title} />
          <PersonaSection
            name={elevateData.persona_name}
            job={elevateData.persona_job}
            quote={elevateData.persona_quote}
            goals_title={elevateData.persona_goals_title}
            goals_text={elevateData.persona_goals_text}
            pain_title={elevateData.persona_pain_title}
            pain_text={elevateData.persona_pain_text}
            imageSrc={elevateData.persona_image} />
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
          <SectionTitle title={elevateData.problem_title} />
          <ProblemStatement
          title={elevateData.problem_title} 
          description={elevateData.problem_title_text}
          hyp_title={elevateData.problem_hypothesis_title}
          hyp_description={elevateData.problem_hypothesis_text}
          />
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
          <SectionTitle title={elevateData.story_title} />
          <div className="relative max-w-[910px] mx-auto h-auto mb-8">
              <Image
                src={elevateData.storyboard_image}
                alt="User Stories Image"
                width={910}
                height={594}
                quality={100}
                unoptimized
                layout="responsive"
                className="object-cover object-center"
              />
            </div>
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
          <SectionTitle title={elevateData.ideation_title} />
          <TitleTextImageElement      
          title="Visual Ideas"
          description={elevateData.ideation_text}
          imageSrc={elevateData.ideation_image}
          />
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
          <SectionTitle title={elevateData.userflows_title} />
          <div className="relative max-w-[910px] mx-auto h-auto">
              <Image
                src={elevateData.userflows1_image}
                alt="User Flow 1 Image"
                width={910}
                height={588}
                quality={100}
                unoptimized
                layout="responsive"
                className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
              />
              <div className="mt-8 mx-auto h-auto">
                <Image
                  src={elevateData.userflows2_image}
                  alt="User Flow 2 Image"
                  width={910}
                  height={480}
                  quality={100}
                  unoptimized
                  layout="responsive"
                  className="object-cover object-center rounded-custom border-custom border-light-hover dark:border-dark-hover"
                />
              </div>
            </div>
        </div>

        <div className="max-w-[910px] mx-auto">
          <SectionTitle title={elevateData.paper_wireframes_titles} />
          <TextSection
            text={elevateData.paper_wireframes_text}
          />
          <div className="mt-8">
            <Image
              src={elevateData.paper_wireframes_image}
              alt="Paper Wireframes Image"
              width={910}
              height={174}
              quality={100}
              unoptimized
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-[910px] mx-auto mt-8">
          <SectionTitle title={elevateData.digital_wireframes_titles} />
          <TextSection
            text={elevateData.digital_wireframes_text}
          />
          <div className="mt-8">
            <Image
              src={elevateData.digital_wireframes_image}
              alt="Digital Wireframes Image"
              width={910}
              height={508}
              quality={100}
              unoptimized
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
          <div className="mt-8">
            <TitleChildrentSection
              title={elevateData.usability_titles}>
              <IconTitleSentence
                items={usability}
              />
            </TitleChildrentSection>
          </div>
        </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={elevateData.midfidelity_title} />
        <TextSection text={elevateData.midfidelity_text} />
        <div className="mt-8">
          <TitleTextVideoSection
            title={elevateData.onboarding_title}
            description={elevateData.onboarding_text}
            videoSrc={elevateData.onboarding_video}
            />
        </div>
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={elevateData.highfidelity_title} />
        <div>
          <Image
            src={elevateData.highfidelity_image1}
            alt="High Fidelity Image"
            width={910}
            height={400}
            quality={100}
            unoptimized
            layout="responsive"
            className="object-cover object-center rounded-custom border-custom border-hover"
          />
        </div>
        <div className="mt-8">
          <TitleTextImageElement
            title=''
            description={elevateData.highfidelity_text}
            imageSrc={elevateData.highfidelity_image2}
          />
        </div>
        <div className="mt-8">
          <Image
            src={elevateData.highfidelity_image3}
            alt="High Fidelity Image"
            width={910}
            height={400}
            quality={100}
            unoptimized
            layout="responsive"
            className="object-cover object-center rounded-custom border-custom border-hover"
          />
        </div>
        <div className="mt-8">
          <ImageTitleTextElement
            title=''
            description={elevateData.highfidelity_image4_text}
            imageSrc={elevateData.highfidelity_image4}
          />
        </div>
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title={elevateData.next_title} />
        <TextSection text={elevateData.next_text} />
      </div>

      <div className="max-w-[910px] mx-auto mt-8">
        <SectionTitle title="Other Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <CoherentCard />
          {/* <ElevateCard /> */}
          <AccCard />
        </div>
      </div>

        </div>
      </div>
    )
  }