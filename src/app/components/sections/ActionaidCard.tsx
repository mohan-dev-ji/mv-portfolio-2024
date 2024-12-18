import CaseStudyCard from "../ui/CaseStudyCard";

import { projects } from "@/app/data/projectData";

const ActionaidCard = () => {
  // Find the Coherent project data
  const ActionaidCardProject = projects.find(project => project.title === "ActionAid");

  // If Coherent project is not found, return null or some fallback UI
  if (!ActionaidCardProject) {
    return null; // or return <div>Coherent project not found</div>;
  }

  return (
    <div>
      <CaseStudyCard
        tag={ActionaidCardProject.tag}
        title={ActionaidCardProject.title}
        description={ActionaidCardProject.description}
        buttonText={ActionaidCardProject.buttonText}
        imageSrc={ActionaidCardProject.imageSrcCard}
        link={`/${ActionaidCardProject.title.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
};

export default ActionaidCard;