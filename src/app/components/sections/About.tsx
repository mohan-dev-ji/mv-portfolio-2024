// Example usage in a page or another component
import SectionTitle from "../ui/SectionTitle";
import TitleTextImageElement from "../ui/TitleTextImageElement";
import { abouts } from "@/app/data/aboutData";

const AboutPage = () => {
  return (
    <div>
      <SectionTitle title="About" />

      {abouts.map((about, index) => (
        <div key={index} className="mb-16">
        <TitleTextImageElement
          key={index}

          title={about.title}
          description={about.description}

          imageSrc={about.imageSrc}
        />
        </div>
      ))}
    </div>
  );
};

export default AboutPage;