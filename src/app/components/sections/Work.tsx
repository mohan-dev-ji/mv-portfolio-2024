// Example usage in a page or another component
import SectionTitle from "../ui/SectionTitle";
import TextImageSection from "../ui/TextImageSection";
import { projects } from "@/app/data/projectData";

const WorkPage = () => {
  return (
    <div>
      <SectionTitle title="Work" />

      {projects.map((project, index) => (
        <div key={index} className="mb-16">
        <TextImageSection
          key={index}
          tag={project.tag}
          title={project.title}
          description={project.description}
          buttonText={project.buttonText}
          imageSrc={project.imageSrc}
        />
        </div>
      ))}
    </div>
  );
};

export default WorkPage;