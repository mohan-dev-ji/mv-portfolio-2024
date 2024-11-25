// data/projectsData.ts

export interface About {
    title: string;
    description: string;
    imageSrc: string;
  }
  
  export const abouts: About[] = [
    {
      title: "Background",
      description: "I'm a Product Designer with over a decade of experience in the media industry, focused on user-centered digital experiences. Growing up in London with hardworking immigrant parents, I developed a strong work ethic by helping in our family shop. My passion for visual arts led me to study fine art at Kingston University, where I honed my design skills and explored architecture and organic forms.",
      imageSrc: "/images/background-image.png"
    },
    {
    title: "Early Career",
    description: "My professional journey began in graphic design, followed by roles in the media industry, where I honed my skills in motion graphics, video editing, and media packaging for top streaming services like Netflix, Amazon, and Google. Through these experiences, I thrived in fast-paced, detail-oriented environments, delivering high-quality digital content under tight deadlines.",
    imageSrc: "/images/earlycareer-image.png"
    },
    {
    title: "Career Development",
    description: "The shifts during COVID prompted me to expand my skillset into Python and full-stack web development, revealing the potential for creating user-friendly apps. My interest in UX/UI design solidified after redesigning an AAC app for my non-verbal autistic son, demonstrating the significant impact of thoughtful design on usability.",
    imageSrc: "/images/careerddev-image.png"
    },
    {
    title: "Beyond the Surface",
    description: "Swimming is my escape, allowing me to disconnect and immerse myself in a weightless world. Each stroke brings clarity and calm, silencing the noise around me. It’s a meditative experience that balances strength and grace, with the unique sensory elements of water. The muted sounds and rhythmic pulse create moments of pure focus and tranquility.",
    imageSrc: "/images/swimming-image.png"
    },
    {
    title: "A Decade in Sound",
    description: "For over a decade, music production has been my creative sanctuary, allowing me to explore sounds across genres and build a rich library for my compositions. While I've paused to focus on designing accessible technology, music remains a core passion, and I plan to return to production to reconnect art and technology with a fresh approach in the future.",
    imageSrc: "/images/sound-image.png"
    },
    
  ];