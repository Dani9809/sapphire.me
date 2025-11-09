
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { FaCheckCircle } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-primary dark:text-blue-300 mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      <ul className="space-y-2 mb-4">
        {project.results.map((result, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 mt-auto">
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">Key Achievements</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Making an Impact</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
