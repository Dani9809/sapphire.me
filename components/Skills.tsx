
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
    <skill.icon className="text-4xl text-accent mb-4" />
    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  const categories = ['Leadership', 'Technical', 'Soft Skills'];

  return (
    <section id="skills" className="py-20 px-4 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">Core Competencies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">The Tools of My Trade</p>
        </div>
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-center text-secondary dark:text-blue-300">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {SKILLS.filter(skill => skill.category === category).map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
