import CaseStudyCard from "../ui/CaseStudyCard";

import { projects } from "@/app/data/projectData";

const CoherentCard = () => {
  // Find the Coherent project data
  const coherentProject = projects.find(project => project.title === "Coherent");

  // If Coherent project is not found, return null or some fallback UI
  if (!coherentProject) {
    return null; // or return <div>Coherent project not found</div>;
  }

  return (
    <div>
      <CaseStudyCard
        tag={coherentProject.tag}
        title={coherentProject.title}
        description={coherentProject.description}
        buttonText={coherentProject.buttonText}
        imageSrc={coherentProject.imageSrcCard}
        link={`/${coherentProject.title.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
};

export default CoherentCard;