import React from 'react'

const About = () => {
  return (
    <section id="about" className="text-white p-7 text-center h-screen">
    <h2 className="text-3xl font-bold">About Me</h2>
    <div className="flex border-2 p-4 rounded-2xl flex-col md:flex-row items-center h-fit justify-between gap-6">
      <p className="max-w-md text-gray-300 sm:text-left text-center text-4xl">Hey, I'm Rajdeep,a passionate developer specialized in modern web technologies.</p>
      <img src="src\assets\IMG_4722.JPG" alt="Picture" className="sm:h-[500px] rounded-2xl bg-gray-700" />
      
    </div>
  </section>
  )
}

export default About