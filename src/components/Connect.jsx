import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Connect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="wants"
      className="flex flex-col items-center py-12 md:py-20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="mb-16 text-3xl font-extrabold tracking-wide text-center text-white uppercase md:mb-32 md:text-5xl drop-shadow-lg"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Want To
      </motion.h1>
      <div className="flex flex-col w-full max-w-6xl">
        <div className="flex flex-col gap-8 mb-12 text-center md:gap-16 md:mb-16 md:flex-row">
          <motion.div
            className="flex-1"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 md:mb-8 text-2xl md:text-4xl font-bold text-[#FF9E8A]">
              Offer Job Opportunity?
            </h3>
            <p className="text-lg md:text-2xl text-gray-200 bg-[#1c3d5a99] p-4 md:p-6 rounded-md">
              I'm open to new opportunities in web development and software engineering. If you have a challenging project or role in mind, let's connect and explore how we can work together!
            </p>
          </motion.div>
          <motion.div
            className="flex-1"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-4 md:mb-8 text-2xl md:text-4xl font-bold text-[#FF9E8A]">
              Connect?
            </h3>
            <p className="text-lg md:text-2xl text-gray-200 bg-[#1c3d5a99] p-4 md:p-6 rounded-md">
              I'm always excited to connect with others in the tech industry. Whether you're a developer, designer, or entrepreneur, I'd love to hear about your work. Let's connect and explore potential collaborations!
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-12 text-center md:flex-row md:gap-20 md:mt-20">
        <motion.a 
          href="mailto:demuths@oregonstate.edu" 
          className="text-4xl md:text-6xl text-white hover:text-[#FF9E8A]"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Email
        </motion.a>
        <motion.a 
          href="https://github.com/demuthsa" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl md:text-6xl text-white hover:text-[#FF9E8A]"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1 }}
        >
          GitHub
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/samdemuth-dev/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl md:text-6xl text-white hover:text-[#FF9E8A]"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          LinkedIn
        </motion.a>
        <motion.a 
          href="../../documents/Sam_DeMuth_2024.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl md:text-6xl text-white hover:text-[#FF9E8A]"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Resume
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Connect;
