import Image from "next/image";

interface StoryboardProps {
  frames: Array<{ image: string; caption: string }>;
}

const Storyboard: React.FC<StoryboardProps> = ({ frames }) => {
  const totalFrames = frames.length;

  // Determine the number of columns based on total frames
  let gridCols = 'grid-cols-1'; // Default for small screens
  if (totalFrames === 2) {
    gridCols = 'grid-cols-1'; // 1 column for 1 or 2 frames

  } else if (totalFrames === 8) {
    gridCols = 'md:grid-cols-4'; // 4 columns for 5 to 8 frames
  } else {
    gridCols = 'md:grid-cols-3'; // Fallback for more than 8 frames
  }

  return (
    <div className="max-w-[910px] mx-auto">
      <div className={`grid grid-cols-1 ${gridCols} gap-12`}>
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
            <p className="mt-2 text-center text-p-bold text-light-secondary dark:text-dark-secondary">{frame.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storyboard;
