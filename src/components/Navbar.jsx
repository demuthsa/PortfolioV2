import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#4b5563] bg-opacity-60 backdrop-blur-md shadow-lg"
    >
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-white cursor-pointer">
          Sam DeMuth
        </Link>
        <div className="hidden space-x-6 md:flex">
          <Link to="about" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#FF9E8A]">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#FF9E8A]">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#FF9E8A]">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#FF9E8A]">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4b5563] bg-opacity-90">
          <Link onClick={toggleMenu} to="about" smooth={true} duration={500} className="block px-4 py-2 text-white cursor-pointer hover:text-[#FF9E8A]">
            About
          </Link>
          <Link onClick={toggleMenu} to="skills" smooth={true} duration={500} className="block px-4 py-2 text-white cursor-pointer hover:text-[#FF9E8A]">
            Skills
          </Link>
          <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} className="block px-4 py-2 text-white cursor-pointer hover:text-[#FF9E8A]">
            Projects
          </Link>
          <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} className="block px-4 py-2 text-white cursor-pointer hover:text-[#FF9E8A]">
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
