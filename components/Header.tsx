import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Achievements' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavLink: React.FC<{ id: string; title: string; }> = ({ id, title }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
        activeSection === id
          ? 'text-accent'
          : 'text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent'
      }`}
    >
      {title}
      {activeSection === id && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-accent rounded-full"></span>
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-primary dark:text-accent font-georgia tracking-wider"
          aria-label="Scroll to home"
        >
          RM
        </button>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.id} id={link.id} title={link.title} />
          ))}
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-primary" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2">
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-primary" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-light-bg dark:bg-dark-bg transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink key={link.id} id={link.id} title={link.title} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;