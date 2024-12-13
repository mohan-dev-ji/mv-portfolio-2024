import CaseStudyCard from "../ui/CaseStudyCard";

import { projects } from "@/app/data/projectData";

const AccCard = () => {
  // Find the Coherent project data
  const AccCardProject = projects.find(project => project.title === "AAC");

  // If Coherent project is not found, return null or some fallback UI
  if (!AccCardProject) {
    return null; // or return <div>Coherent project not found</div>;
  }

  return (
    <div>
      <CaseStudyCard
        tag={AccCardProject.tag}
        title={AccCardProject.title}
        description={AccCardProject.description}
        buttonText={AccCardProject.buttonText}
        imageSrc={AccCardProject.imageSrcCard}
        link={`/${AccCardProject.title.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
};

export default AccCard;