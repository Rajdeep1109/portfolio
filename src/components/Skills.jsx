import React from 'react'

const Skills = () => {
    const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS", "Firebase", "Next.js", "MongoDB", "Python"];
    return (
      <section id="skills" className="text-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap border-2 rounded-2xl p-3 justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-md text-gray-300">{skill}</span>
          ))}
        </div>
      </section>
    );
  };

export default Skills