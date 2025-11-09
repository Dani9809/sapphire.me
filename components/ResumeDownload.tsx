
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumeDownload: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-4">Interested?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 mb-8">
          Download my full resume to learn more about my experience and qualifications.
        </p>
        <a
          href="/Rowena_Morales_Resume.pdf" // NOTE: This file needs to be placed in the public folder.
          download="Rowena_Morales_Resume.pdf"
          className="inline-flex items-center bg-accent text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-400 transition-transform duration-300 transform hover:scale-105 shadow-lg"
          aria-label="Download Rowena Morales's Resume"
        >
          <FaDownload className="mr-3" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;
