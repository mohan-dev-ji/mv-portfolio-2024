import TitleTextImageElement from "../ui/TitleTextImageElement";
import ImageTitleTextElement from "../ui/ImageTitleTextElement";
import { abouts } from "@/app/data/aboutData";

const AboutPage = () => {
  return (
    <div>
      {abouts.map((about, index) => (
        <div key={index} className="mb-8">
          {index % 2 === 0 ? (
            <TitleTextImageElement
              title={about.title}
              description={about.description}
              imageSrc={about.imageSrc}
            />
          ) : (
            <ImageTitleTextElement
              title={about.title}
              description={about.description}
              imageSrc={about.imageSrc}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutPage;