import SectionTitle from "../ui/SectionTitle";
import { values } from "@/app/data/valuesData";
import ValuesElement from "../ui/ValuesElement";

const ValuesSection = () => {
  return (
    <div className="max-w-[910px] mx-auto">
      <SectionTitle title="Values" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <ValuesElement
            key={index}
            tag={value.tag}
            title={value.title}
            description={value.description}
          />
        ))}
        </div>
      
      {/* <div className="aspect-w-16 aspect-h-9 my-8 rounded-custom border-4 border-hover"> */}
        <video className="max-w-[910px] object-cover p-4 my-8" autoPlay loop muted>
            <source src="/videos/Home-910.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      {/* </div> */}




      
    </div>
  );
};

export default ValuesSection;