// Storyboard.tsx
import Image from "next/image";

interface StoryboardProps {
    frames: Array<{ image: string; caption: string }>;
  }
  
  const Storyboard: React.FC<StoryboardProps> = ({ frames }) => {
    return (
      <div className="max-w-[910px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {frames.map((frame, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={frame.image}
                alt={`Storyboard frame ${index + 1}`}
                width={274}
                height={171}
                quality={100}
                unoptimized
                className="w-full h-auto"
              />
              <p className="mt-2 text-center text-p-bold">{frame.caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Storyboard;
  
  
  
  