import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Sidebar from './components/Sidebar';


function App() {

  
  return (
    <div className="w-full min-h-screen text-white bg-custom-gradient">
      <Navbar />
      <Sidebar />
      <main className="w-full">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          {/* Contact section goes here */}
        </section>
        <section id="connect">
          <Connect />
        </section>
      </main>
    </div>
  );
}

export default App;
