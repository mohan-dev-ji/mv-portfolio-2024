"use client"

import { motion } from 'framer-motion';
import TitleTextImageElement from "../ui/TitleTextImageElement";
import ImageTitleTextElement from "../ui/ImageTitleTextElement";
import { abouts } from "@/app/data/aboutData";
import SectionTitle from '../ui/SectionTitle';

const AboutPage = () => {
  return (
    <div>
      <SectionTitle title="About" />
       {abouts.map((about, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        
        return (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ x: 100 * direction, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
            
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutPage;