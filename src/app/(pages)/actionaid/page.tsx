"use client"

import DetailsSection from "@/app/components/ui/DetailsSection"
import GridContainer from "@/app/components/ui/IconTitleSentence"
import OpeningParagraph from "@/app/components/ui/OpeningParagraph"
import OpeningSentence from "@/app/components/ui/OpeningSentence"
import PersonaSection from "@/app/components/ui/PersonaSection"
import SectionTitle from "@/app/components/ui/SectionTitle"
import TextSection from "@/app/components/ui/TextSection"
import { actionaidData } from "@/app/data/actionaid"
import { useDarkMode } from "@/contexts/DarkModeContext"
import Image from "next/image"
import { useEffect, useState } from "react"



export default function actionaidPage() {

    const items = [
        { iconSrc: actionaidData.stakeholder_row1_icon, title: actionaidData.stakeholder_row1_title, sentence: actionaidData.stakeholder_row1_text },
        { iconSrc: actionaidData.stakeholder_row2_icon, title: actionaidData.stakeholder_row2_title, sentence: actionaidData.stakeholder_row2_text },
        { iconSrc: actionaidData.stakeholder_row3_icon, title: actionaidData.stakeholder_row3_title, sentence: actionaidData.stakeholder_row3_text },
        { iconSrc: actionaidData.stakeholder_row4_icon, title: actionaidData.stakeholder_row4_title, sentence: actionaidData.stakeholder_row4_text },
        { iconSrc: actionaidData.stakeholder_row5_icon, title: actionaidData.stakeholder_row5_title, sentence: actionaidData.stakeholder_row5_text },
      ];

    const { isDarkMode } = useDarkMode();
      const [isMounted, setIsMounted] = useState(false);
        
          // Set mounted state to true after component mounts
          useEffect(() => {
            setIsMounted(true);
          }, []);
        
          // Render nothing until mounted to avoid hydration issues
          if (!isMounted) {
            return null; // You can also return a loading spinner or placeholder if desired
          }


    return (
        <div className="mt-4">
            <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh] mb-8 flex items-center object-contain">
                <Image
                src={actionaidData.hero_image}
                alt="Elevate Hero Image"
                fill
                
                className="object-cover object-center"
                />
            </div>

            <div className="mx-5">
                <div className="max-w-[910px] mx-auto mb-0">
                    <SectionTitle title={actionaidData.overview_title} />
                    <OpeningSentence text={actionaidData.overview_sentence} />
                    <DetailsSection data={{
                    CLIENT: actionaidData.CLIENT,
                    ROLE: actionaidData.ROLE,
                    Process: actionaidData.Process
                    }} />
                    <OpeningParagraph
                    title={actionaidData.openingParagraphTitle}
                    description={actionaidData.openingParagraph}
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto">
                <SectionTitle title={actionaidData.process_title} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={isDarkMode ? actionaidData.process_image_dark : actionaidData.process_image_light}
                        alt="User Flow 1 Image"
                        width={910}
                        height={331}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.stakeholder_title} />
                <GridContainer items={items} />
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.competitor_title} />
                <TextSection text={actionaidData.competitor_text} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={actionaidData.competitor_image}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center rounded-custom"
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.survey_title} />
                <TextSection text={actionaidData.survey_text} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={actionaidData.survey_image}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center rounded-custom"
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.interviews_title} />
                <TextSection text={actionaidData.interviews_text} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={isDarkMode ? actionaidData.interviews_image_dark : actionaidData.interviews_image_light}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.affinity_title} />
                <TextSection text={actionaidData.affinity_text} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={actionaidData.affinity_image}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center rounded-custom"
                    />
                </div>
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={isDarkMode ? actionaidData.affinity_insights_image_dark : actionaidData.affinity_insights_image_light}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            <div className="max-w-[910px] mx-auto">
            <SectionTitle title={actionaidData.persona_title} />
            <PersonaSection
                name={actionaidData.persona_name}
                job={actionaidData.persona_job}
                quote={actionaidData.persona_quote}
                goals_title={actionaidData.persona_goals_title}
                goals_text={actionaidData.persona_goals_text}
                pain_title={actionaidData.persona_pain_title}
                pain_text={actionaidData.persona_pain_text}
                imageSrc={actionaidData.persona_image} />
            </div>

            <div className="max-w-[910px] mx-auto mb-0">
                <SectionTitle title={actionaidData.hmw_title} />
                <TextSection text={actionaidData.hmw_text} />
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={actionaidData.hmw_image1}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative max-w-[910px] mx-auto h-auto mt-8 mb-8">
                    <Image
                        src={actionaidData.hmw_image2}
                        alt="User Flow 1 Image"
                        width={910}
                        height={280}
                        quality={100}
                        unoptimized
                        layout="responsive"
                        className="object-cover object-center rounded-custom"
                    />
                </div>
            </div>

        </div>
    )

}