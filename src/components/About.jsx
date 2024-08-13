import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-12 md:py-20 bg-custom-gradient"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="mb-16 text-3xl font-extrabold tracking-wide text-center text-white uppercase md:mb-32 md:text-5xl drop-shadow-lg"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <motion.div
            className="flex flex-col items-center max-w-lg mt-9 md:w-1/2"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold text-[#FF9E8A]">Past</h3>
            <p className="text-lg md:text-2xl text-gray-200 leading-snug bg-[#1c3d5a99] p-4 md:p-6 rounded-md w-full">
              I spent nine years in the U.S. Navy, building a strong foundation in discipline and leadership. Transitioning into tech, I earned a Computer Science degree from Oregon State University and gained hands-on experience through internships, where I developed practical applications and led technical projects.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center max-w-lg mt-1 md:w-1/2"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold text-[#FF9E8A]">Present</h3>
            <p className="text-lg md:text-2xl text-gray-200 leading-snug bg-[#1c3d5a99] p-4 md:p-6 rounded-md w-full">
              I’m currently building on my academic and internship experience by exploring new technologies and working on diverse projects. Whether it’s developing web applications or experimenting with the latest tools, I’m passionate about applying my knowledge to impactful scenarios and making a meaningful difference.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
          <motion.div
            className="flex flex-col items-center max-w-2xl"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-extrabold text-[#FF9E8A]">Future</h3>
            <p className="text-lg md:text-2xl text-gray-200 leading-snug bg-[#1c3d5a99] p-4 md:p-6 rounded-md w-full">
              Looking ahead, I’m excited to continue expanding my technical expertise and explore opportunities that allow me to innovate and collaborate with like-minded professionals. My goal is to contribute to projects that drive meaningful impact while continuing my journey of lifelong learning and professional growth.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
