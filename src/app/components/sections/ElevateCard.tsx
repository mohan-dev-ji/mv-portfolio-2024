import CaseStudyCard from "../ui/CaseStudyCard";

import { projects } from "@/app/data/projectData";

const ElevateCard = () => {
  // Find the Coherent project data
  const Elevate4Project = projects.find(project => project.title === "Elevate4");

  // If Coherent project is not found, return null or some fallback UI
  if (!Elevate4Project) {
    return null; // or return <div>Coherent project not found</div>;
  }

  return (
    <div>
      <CaseStudyCard
        tag={Elevate4Project.tag}
        title={Elevate4Project.title}
        description={Elevate4Project.description}
        buttonText={Elevate4Project.buttonText}
        imageSrc={Elevate4Project.imageSrcCard}
        link={`/${Elevate4Project.title.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
};

export default ElevateCard;