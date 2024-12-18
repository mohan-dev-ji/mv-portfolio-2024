// data/projectsData.ts

export interface Project {
    tag: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageSrcCard: string;
  }
  
  export const projects: Project[] = [
    {
      tag: "Case Study",
      title: "ActionAid",
      description: "A collaborative donation platform that enables groups to easily contribute together while tracking their collective impact for charitable causes.",
      buttonText: "View Case Study",
      imageSrc: "/images/actionaid-thumb.png",
      imageSrcCard: "/images/actionaid-card-image.png"
    },
    {
      tag: "Case Study",
      title: "Coherent",
      description: "A multi-channel inbox for communications on Gmail, Watsapp and Messenger for healthcare reception teams.",
      buttonText: "View Case Study",
      imageSrc: "/images/coherent-thumb.png",
      imageSrcCard: "/images/coherent-card-image.png"
    },
    {
      tag: "Case Study",
      title: "Elevate4",
      description: "A transformative web application designed to enhance team dynamics and foster organisational growth",
      buttonText: "View Case Study",
      imageSrc: "/images/elevate-thumb.png",
      imageSrcCard: "/images/elevate-card-image.png"
    },
    {
      tag: "Case Study",
      title: "AAC",
      description: "Augmentative and Alternative Communication (AAC) systems",
      buttonText: "View Case Study",
      imageSrc: "/images/aac-thumb.png",
      imageSrcCard: "/images/aac-card-image.png"
    },
    // Add more projects as needed
  ];