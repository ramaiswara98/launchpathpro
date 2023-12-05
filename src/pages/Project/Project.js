import React from 'react'

import './Project.css'
import Navbar from '../../component/NavBar/Navbar'
import MessageCard from './MessageCard/MessageCard'
import ProjectCard from './ProjectCard/ProjectCard'

function Project() {
  return (
    <div className='project-main'>
        <Navbar/>
        {/* <div className='project-'> */}
          <div className='project-container'>
            <MessageCard/>
            <br/>
            <ProjectCard/>
          </div>
        {/* </div> */}
       
    </div>
  )
}

export default Project