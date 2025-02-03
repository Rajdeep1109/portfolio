import React from 'react'
import Card from './Cards'
const Projects = () => {
  return (
    <>
    <p className='text-2xl text-white text-center font-bold'>Projects</p>
    <div id='projects' className='sm:flex border-2 rounded-2xl border-white p-4 gap-3 justify-evenly'>
    <Card
    image="src\assets\x.png"
  name="X trending scrapper"
  description="A selenium script that fetches the trending sections of Twitter/X."
  url="https://github.com/Rajdeep1109/x_scrapper.git"
/> 
<Card
    image="src\assets\logo.png"
  name="Pet COnnect"
  description="A social media to make post related to pets"
  url="pet-connect-ssr.netlify.app"
/>
 
<Card
    image="src\assets\todo.png"
  name="Advanced To do app"
  description="An advandced to do app with Holidays API and lets user to select priority of task"
  url="https://to-do-app-t7g4.onrender.com"
/>
    </div>
</>
  )
}

export default Projects