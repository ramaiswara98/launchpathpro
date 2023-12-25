import React, { useEffect, useState } from 'react'

import './Project.css'
import Navbar from '../../component/NavBar/Navbar'
import MessageCard from './MessageCard/MessageCard'
import ProjectCard from './ProjectCard/ProjectCard'
import { useParams } from 'react-router-dom'
import { getProjectById } from '../../services/Firebase/FireStore/Project'
import AICard from './AICard/AICard'

function Project() {
  const {projectId} = useParams();
  const [project, setProject] = useState(null)

  const getProjectByIds = (projectId) => {
    getProjectById(projectId).then((result)=>{
      setProject(result);
    }).catch((err) => {
      setProject(err);
    })
  }

  useEffect(()=> {
    getProjectByIds(projectId)
    // eslint-disable-next-line
  },[])
  return (
    <div className='project-main'>
        <Navbar/>
        {project!==null&&(
          <div className='project-container'>
          <MessageCard project={project}/>
          <br/>
          <AICard projectId={projectId}/>
          <br/>
          <ProjectCard project={project} projectId={projectId}/>
        </div>
        )}
          
       
    </div>
  )
}

export default Project