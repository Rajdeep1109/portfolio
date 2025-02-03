import React, { useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('About');

  return (
    <header className="bg-gray-900 text-white p-4 sticky w-full shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
