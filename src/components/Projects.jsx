import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import TriviaForge from '../assets/images/TriviaForge.png';
import Tarpaulin from '../assets/images/Tarpaulin.png';
import EmployeeManagement from '../assets/images/EmployeeManagement.png';
import ReviewMate from '../assets/images/ReviewMate.png';

const projects = [
  {
    title: 'Trivia Forge',
    description: 'Trivia Forge is a dynamic web-based application designed to generate custom trivia games with ease. Powered by the ChatGPT API, it allows users to create personalized trivia questions, choices, hints, and answers based on their preferences. Users can create accounts, save their games, and access them later, making it easy to modify and reuse trivia games as often as desired. Additionally, Trivia Forge enables users to host trivia games, providing a seamless way to organize and manage engaging trivia events.',
    madeWith: ['Python', 'JavaScript', 'React', 'PostgreSQL', 'Flask', 'Axios'],
    liveLink: 'https://trivia-forge.onrender.com',
    codeLink: 'https://github.com/demuthsa/Trivia-Forge',
    imageUrl: TriviaForge 
  },
  {
    title: 'Tarpaulin Course Management Tool',
    description: 'Tarpaulins RESTful API enables user authentication, course management, and student enrollment. The API ensures secure access through JWT-based authentication managed by Auth0. The application supports various roles—admin, instructor, and student—each with specific access privileges. Users can manage courses, handle enrollments, and upload avatars. The API comprises 13 endpoints, covering essential features such as user login, course creation, and file management, ensuring a comprehensive course management experience.',
    madeWith: ['Python', 'Flask', 'Google App Engine', 'Google Datastore', 'Google Cloud Storage', 'Auth0'],
    liveLink: 'https://a6-course-management-tool.uc.r.appspot.com/',
    codeLink: 'https://github.com/demuthsa/TarpaulinCourseManagementTool',
    imageUrl: Tarpaulin
  },
  {
    title: 'Employee Management System',
    description: 'Tegridy Timetable is a hospital employee management application designed to streamline staffing and scheduling processes. The application uses an SQL database to manage employees, shifts, and time-off requests, ensuring efficient operations and optimal staff-to-patient ratios. The React-based frontend allows for easy interaction with the database, while the Node.js/Express backend handles the apps CRUD operations. The final design features five core tables—Positions, Employees, Shifts, Time off requests, and Employee shifts.',
    madeWith: ['JavaScript', 'React', 'SQL', 'Express', 'Node.js'],
    codeLink: 'https://github.com/demuthsa/EmployeeManagementSystem',
    imageUrl: EmployeeManagement
  },
  {
    title: 'ReviewMate REST API',
    description: 'A backend service that powers a business review platform, allowing users to create, read, update, and delete both businesses and their associated reviews. The API ensures that reviews are accurately linked to existing businesses and that users can only submit one review per business. Deployed using Docker containers on Google Cloud\'s Compute Engine, the API is built to handle requests efficiently and securely. It supports smooth interactions for users who want to manage their business profiles or leave reviews.',
    madeWith: ['Python', 'Flask', 'Docker', 'MySQL', 'Google Compute Engine'],
    codeLink: 'https://github.com/demuthsa/ReviewMate-REST-API',
    imageUrl: ReviewMate
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="flex flex-col items-center py-12 md:py-20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="mb-12 text-3xl font-extrabold tracking-wide text-center text-white uppercase md:mb-16 md:text-5xl drop-shadow-lg"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col w-full max-w-6xl gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center w-full p-4 md:p-6 bg-transparent border-2 border-[#1c3d5a] rounded-lg shadow-lg hover:shadow-2xl md:flex-row transition-shadow duration-300 ease-in-out"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full mb-4 rounded-lg md:w-1/3 md:mb-0" />
            <div className="flex-1 w-full md:ml-6">
              <h3 className="mb-2 text-lg md:text-xl font-semibold text-center text-[#d0e1f9] md:text-left">{project.title}</h3>
              <div className="mb-4 text-center md:text-left">
                <h4 className="text-md md:text-lg font-medium text-[#FF9E8A]">Made With</h4>
                <ul className="flex flex-wrap justify-center gap-2 mt-2 md:justify-start">
                  {project.madeWith.map((tech, techIndex) => (
                    <li key={techIndex} className="px-2 py-1 text-xs md:text-sm text-white bg-[#1c3d5a] rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mb-4 text-sm md:text-base text-center text-[#d0e1f9] md:text-left">{project.description}</p>
              <div className="flex justify-center gap-4 md:justify-start">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 text-sm text-[#365465] border border-[#365465] rounded hover:text-[#FF9E8A] hover:border-[#FF9E8A]"
                  >
                    Live
                  </a>
                )}
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center px-4 py-2 text-sm text-[#365465] border border-[#365465] rounded hover:text-[#FF9E8A] hover:border-[#FF9E8A]"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
