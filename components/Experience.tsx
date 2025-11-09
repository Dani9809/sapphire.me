
import React from 'react';
import { EXPERIENCE } from '../constants';
import { ExperienceItem } from '../types';
import { MdWork, MdSchool } from 'react-icons/md';

const TimelineItem: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 dark:before:bg-gray-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-accent after:border-4 after:box-content after:border-gray-50 dark:after:border-gray-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-accent bg-accent/20 rounded-full">
        {item.duration}
      </time>
      <div className="text-xl font-bold text-primary dark:text-blue-300">{item.role}</div>
    </div>
    <div className="flex items-center text-sm mb-2">
      {item.type === 'work' ? <MdWork className="mr-2 text-secondary dark:text-blue-400" /> : <MdSchool className="mr-2 text-secondary dark:text-blue-400" />}
      <span>{item.company}</span>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
      {item.description.map((desc, index) => <li key={index}>{desc}</li>)}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">Career & Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">My Professional Timeline</p>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={index} item={item} isLast={index === EXPERIENCE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
