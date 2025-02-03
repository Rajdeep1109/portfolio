import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center mt-10">
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/Rajdeep1109" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/rajdeep-majumder-7254bb29a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin/></a>
      </div>
      <p className="text-gray-400 mt-2">My Portfolio. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer