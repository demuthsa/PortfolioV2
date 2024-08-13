import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 flex flex-col items-center hidden px-4 pb-0 space-y-6 md:flex">
      <a href="mailto:demuths@oregonstate.edu" className="text-[#f67576] transition-colors hover:text-[#FF9E8A]">
        <FaEnvelope size={40} className="font-bold" />
      </a>
      <a href="https://www.linkedin.com/in/samdemuth-dev/" target="_blank" rel="noopener noreferrer" className="text-[#f67576] transition-colors hover:text-[#FF9E8A]">
        <FaLinkedin size={40} className="font-bold" />
      </a>
      <a href="https://github.com/demuthsa" target="_blank" rel="noopener noreferrer" className="text-[#f67576] transition-colors hover:text-[#FF9E8A]">
        <FaGithub size={40} className="font-bold" />
      </a>
      <div className="w-1 h-40 bg-[#f67576]"></div>
    </div>
  );
};

export default Sidebar;
