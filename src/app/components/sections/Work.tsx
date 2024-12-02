import TextImageSection from "../ui/TextImageSection";
import { projects } from "@/app/data/projectData";

const WorkPage = () => {
  return (
    <div>
      

      {projects.map((project, index) => (
        <div key={index} className="mb-16">
        <TextImageSection
          key={index}
          tag={project.tag}
          title={project.title}
          description={project.description}
          buttonText={project.buttonText}
          imageSrc={project.imageSrc}
          link={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
        />
        </div>
      ))}
    </div>
  );
};

export default WorkPage;