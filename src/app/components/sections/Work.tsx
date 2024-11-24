// Example usage in a page or another component
import SectionTitle from "../ui/SectionTitle";
import TextImageSection from "../ui/TextImageSection";


const WorkPage = () => {
  return (
    <div>
      <SectionTitle title="Work" />

      <TextImageSection
        tag="Case Study"
        title="Coherent"
        description="A multi-channel inbox for communications on Gmail, Watsapp and Messenger for healthcare reception teams."
        buttonText="View Case Study"
        imageSrc="/images/coherent-thumb.png"
      />
    </div>
  );
};

export default WorkPage;