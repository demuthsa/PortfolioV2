import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import portfolioPic from '../assets/images/portfolioPic.jpeg';

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen text-white bg-custom-gradient">
      <div className="container flex flex-col items-center justify-between px-4 py-8 mx-auto md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <motion.h1
            className="mb-2 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello! I am
          </motion.h1>
          <motion.h2
            className="mb-2 text-2xl font-bold md:text-3xl text-[#f67576]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Sam DeMuth
          </motion.h2>
          <motion.div
            className="mb-4 text-xl font-bold text-white md:text-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            I am a{' '}
            <span className="text-[#1c3d5a]">
              <Typewriter
                words={['Full Stack Developer.', 'Former Navy Veteran.', '2024 Computer Science Graduate.', 'Continuous Learner.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.div>
          <motion.a
            href="../../documents/Sam_DeMuth_2024.pdf"
            className="inline-block px-6 py-3 mt-4 transition-colors border rounded border-[#f67576] text-[#f67576] hover:bg-[#f67576] hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Get my resume
          </motion.a>
        </div>
        <motion.div
          className="flex justify-center mt-8 md:w-1/2 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={portfolioPic}
            alt="Sam DeMuth"
            className="w-72 h-72 md:w-80 md:h-80 border-4 border-[#f67576]"
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 45, 45, 360, 360],
              borderRadius: ["0%", "0%", "0%", "50%", "50%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: 1,
              repeatDelay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
