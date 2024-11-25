// data/projectsData.ts

export interface Project {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
  }
  
  export const projects: Project[] = [
    {
      tag: "Case Study",
      title: "Coherent",
      description: "A multi-channel inbox for communications on Gmail, Watsapp and Messenger for healthcare reception teams.",
      buttonText: "View Case Study",
      imageSrc: "/images/coherent-thumb.png"
    },
    {
      tag: "Case Study",
      title: "Elevate4",
      description: "A transformative web application designed to enhance team dynamics and foster organisational growth",
      buttonText: "View Case Study",
      imageSrc: "/images/elevate-thumb.png"
    },
    {
      tag: "Case Study",
      title: "AAC",
      description: "Augmentative and Alternative Communication (AAC) systems",
      buttonText: "View Case Study",
      imageSrc: "/images/aac-thumb.png"
    },
    // Add more projects as needed
  ];