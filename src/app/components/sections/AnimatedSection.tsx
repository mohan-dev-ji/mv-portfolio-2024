import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        Welcome to My Site
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8"
      >
        Scroll down to see the magic happen!
      </motion.p>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src="/images/coherent-banner.png"
          alt="Animated Image"
          width={910}
          height={200}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
