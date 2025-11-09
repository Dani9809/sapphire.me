
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rowena Morales. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
