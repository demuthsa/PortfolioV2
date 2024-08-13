import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import c from '../assets/images/c.png';
import css from '../assets/images/css.png';
import docker from '../assets/images/docker.png';
import flask from '../assets/images/flask.webp';
import git from '../assets/images/git.png';
import googlecloud from '../assets/images/googlecloud.png';
import html from '../assets/images/html.png';
import javascript from '../assets/images/javascript.png';
import mongodb from '../assets/images/mongodb.png';
import nodejs from '../assets/images/nodejs.png';
import python from '../assets/images/python.png';
import reactjs from '../assets/images/reactjs.png';
import sql from '../assets/images/sql.png';
import tailwind from '../assets/images/tailwind.png';
import typescript from '../assets/images/typescript.png';
import vite from '../assets/images/vite.png';

const skills = {
  technicalLanguages: [
    { name: 'C', logo: c },
    { name: 'CSS', logo: css },
    { name: 'HTML', logo: html },
    { name: 'JavaScript', logo: javascript },
    { name: 'Python', logo: python },
    { name: 'TypeScript', logo: typescript },
  ],
  technologiesFrameworks: [
    { name: 'Docker', logo: docker },
    { name: 'Flask', logo: flask },
    { name: 'Git', logo: git },
    { name: 'Google Cloud', logo: googlecloud },
    { name: 'MongoDB', logo: mongodb },
    { name: 'Node.js', logo: nodejs },
    { name: 'React.js', logo: reactjs },
    { name: 'SQL', logo: sql },
    { name: 'Tailwind CSS', logo: tailwind },
    { name: 'Vite', logo: vite },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-custom-gradient"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="mb-16 text-5xl font-extrabold tracking-wide text-center text-white uppercase drop-shadow-lg"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="mb-24"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="mb-20 text-4xl font-extrabold text-[#FF9E8A] drop-shadow-md text-center relative">
            Technical Languages
            <span className="absolute left-[35%] bottom-[-10px] w-[30%] h-[2px] bg-[#FF9E8A]"></span>
          </h3>
          <div className="flex justify-center">
            <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-10 lg:gap-y-24 lg:gap-x-20">
              {skills.technicalLanguages.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative w-24 h-24 mx-auto sphere lg:w-40 lg:h-40 md:w-32 md:h-32"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <img src={skill.logo} alt={skill.name} title={skill.name} className="rotating-image" />
                  <div className="text-white tooltip-text">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-20 text-4xl font-extrabold text-[#FF9E8A] drop-shadow-md text-center relative">
            Technologies and Frameworks
            <span className="absolute left-[35%] bottom-[-10px] w-[30%] h-[2px] bg-[#FF9E8A]"></span>
          </h3>
          <div className="flex justify-center">
            <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-10 lg:gap-y-24 lg:gap-x-20">
              {skills.technologiesFrameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative w-24 h-24 mx-auto sphere lg:w-40 lg:h-40 md:w-32 md:h-32"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <img src={skill.logo} alt={skill.name} title={skill.name} className="rotating-image" />
                  <div className="text-white tooltip-text">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
