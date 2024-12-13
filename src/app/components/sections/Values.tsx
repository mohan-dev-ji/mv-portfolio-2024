"use client"

import SectionTitle from "../ui/SectionTitle";
import { values } from "@/app/data/valuesData";
import ValuesElement from "../ui/ValuesElement";
import { motion } from 'framer-motion';


const ValuesSection = () => {
  return (
    <div className="max-w-[910px] mx-auto">
      <SectionTitle title="Values" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.map((value, index) => (
            <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ValuesElement
              tag={value.tag}
              title={value.title}
              description={value.description}
            />
          </motion.div>
        ))}
        </div>
      
      {/* <div className="aspect-w-16 aspect-h-9 my-8 rounded-custom border-4 border-hover"> */}
      <motion.div
          initial={{ x: 100 * -1, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
        <video className="w-full object-cover p-4 my-8" autoPlay loop muted>
            <source src="/videos/Home-920-v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </motion.div>
      {/* </div> */}




      
    </div>
  );
};

export default ValuesSection;