
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/hero-background.png')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white p-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Rowena Morales
        </h2>
        <p className="text-lg md:text-2xl text-accent mb-8">
          Passionate BPO Professional & Team Leader
        </p>
        <div className="space-x-4">
          <button
            onClick={scrollToProjects}
            className="bg-accent text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-400 transition-transform duration-300 transform hover:scale-105"
          >
            Explore My Journey
          </button>
          <button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
