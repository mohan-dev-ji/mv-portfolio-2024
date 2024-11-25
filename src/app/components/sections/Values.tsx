import SectionTitle from "../ui/SectionTitle";
import { values } from "@/app/data/valuesData";
import ValuesElement from "../ui/ValuesElement";

const ValuesSection = () => {
  return (
    <div className="max-w-[910px] mx-auto px-5 sm:px-0">
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
    </div>
  );
};

export default ValuesSection;