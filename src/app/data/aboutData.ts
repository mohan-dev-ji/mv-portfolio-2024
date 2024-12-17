// data/projectsData.ts

export interface About {
    title: string;
    description: string;
    imageSrc: string;
  }
  
  export const abouts: About[] = [
    {
      title: "Background",
      description: "I'm a Product Designer with over a decade of experience in the media industry. Growing up in London with hardworking immigrant parents, I developed a strong work ethic from an early age. My passion for visual arts led me to study fine art at Kingston University, where I honed my design skills and explored architecture and organic forms.",
      imageSrc: "/images/background-image.png"
    },
    {
    title: "Early Career",
    description: "My professional journey began in graphic design, followed by roles in the media industry, where I learned the craft of graphic design, motion graphics and video editing. I have worked in the media industry providing a broad range of services for top streaming services like Netflix, Amazon, and Google. Through these experiences, I thrived in fast-paced, detail-oriented environments, delivering high-quality digital content under tight deadlines.",
    imageSrc: "/images/earlycareer-image.png"
    },
    {
    title: "Career Development",
    description: "The shifts during COVID prompted me to expand my skillset into Python and Full Stack Web Development. I used AI as an aid to help me reach a long term aspiration of creating my own applications. My interest in UX/UI design solidified after redesigning an AAC app for my non-verbal autistic son.",
    imageSrc: "/images/careerddev-image.png"
    },
    {
    title: "Beyond the Surface",
    description: "Swimming is my escape, allowing me to disconnect and immerse myself in a weightless world. It brings clarity and calm, by silencing the noise around me. It’s a meditative experience that balances strength and grace, with the unique sensory elements of water. The muted sounds and rhythmic pulse create moments of pure focus and tranquility.",
    imageSrc: "/images/swimming-image.png"
    },
    {
    title: "A Decade in Sound",
    description: "For over a decade, music production has been my creative sanctuary, allowing me to explore sounds across genres and build a rich library for my compositions. While I've paused to focus on designing accessible technology, music remains a core passion, and I plan to return to production to reconnect art and technology with a fresh approach in the future.",
    imageSrc: "/images/sound-image.png"
    },
    
  ];