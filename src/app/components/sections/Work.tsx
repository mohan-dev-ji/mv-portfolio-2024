"use client"

import TextImageSection from "../ui/TextImageSection";
import { projects } from "@/app/data/projectData";
import { motion } from 'framer-motion';
import SectionTitle from "../ui/SectionTitle";

const WorkPage = () => {
  return (
    <div>
      <SectionTitle title="Work" />
     {projects.map((project, index) => {
        const direction = index % 2 === 0 ? -1 : 1; // Alternate between -1 (left) and 1 (right)
        
        return (
          <motion.div
            key={index}
            className="mb-16"
            initial={{ x: 100 * direction, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TextImageSection
              tag={project.tag}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              imageSrc={project.imageSrc}
              link={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkPage;